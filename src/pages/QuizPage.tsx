import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, CheckCircle2, XCircle, ArrowRight, RotateCcw, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { subjects, saveQuizResult } from "@/data/quizData";
import { Brain } from "lucide-react";

const QuizPage = () => {
  const { subjectId, topicId } = useParams();
  const navigate = useNavigate();

  const subject = subjects.find((s) => s.id === subjectId);
  const topic = subject?.topics.find((t) => t.id === topicId);

  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>([]);

  if (!subject || !topic) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Quiz not found.</p>
      </div>
    );
  }

  const questions = topic.questions;
  const question = questions[currentQ];
  const progressPct = ((currentQ + (showResult ? 1 : 0)) / questions.length) * 100;

  const handleSelect = (idx: number) => {
    if (showResult) return;
    setSelected(idx);
  };

  const handleConfirm = () => {
    if (selected === null) return;
    const correct = selected === question.correctAnswer;
    if (correct) setScore((s) => s + 1);
    setAnswers((a) => [...a, selected]);
    setShowResult(true);
  };

  const handleNext = () => {
    if (currentQ + 1 >= questions.length) {
      const finalScore = score + (selected === question.correctAnswer ? 0 : 0);
      // score already updated in handleConfirm
      saveQuizResult({
        subjectId: subject.id,
        topicId: topic.id,
        score,
        total: questions.length,
        date: new Date().toISOString(),
      });
      setFinished(true);
    } else {
      setCurrentQ((c) => c + 1);
      setSelected(null);
      setShowResult(false);
    }
  };

  if (finished) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full"
        >
          <Card className="border bg-card text-center">
            <CardContent className="p-8">
              <div className={`w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center ${pct >= 70 ? "bg-accent" : "bg-destructive/10"}`}>
                {pct >= 70 ? (
                  <CheckCircle2 className="w-10 h-10 text-primary" />
                ) : (
                  <RotateCcw className="w-10 h-10 text-destructive" />
                )}
              </div>
              <h2 className="text-2xl font-bold font-display text-card-foreground mb-1">
                {pct >= 70 ? "Great Job! 🎉" : "Keep Practicing! 💪"}
              </h2>
              <p className="text-muted-foreground mb-4">{subject.name} — {topic.name}</p>
              <p className="text-4xl font-bold font-display text-primary mb-1">{score}/{questions.length}</p>
              <p className="text-sm text-muted-foreground mb-6">{pct}% accuracy</p>
              <div className="flex gap-3 justify-center">
                <Button variant="outline" onClick={() => navigate(`/subject/${subject.id}`)}>
                  <ArrowLeft className="w-4 h-4 mr-1" /> Topics
                </Button>
                <Button onClick={() => navigate("/dashboard")}>
                  <Home className="w-4 h-4 mr-1" /> Dashboard
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b">
        <div className="container mx-auto px-6 py-4 flex items-center gap-4">
          <button onClick={() => navigate(`/subject/${subject.id}`)} className="text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
              <Brain className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold font-display text-foreground">{topic.name}</span>
          </div>
          <span className="ml-auto text-sm text-muted-foreground">{currentQ + 1}/{questions.length}</span>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8 max-w-2xl">
        <Progress value={progressPct} className="h-2 mb-8" />

        <AnimatePresence mode="wait">
          <motion.div
            key={currentQ}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-xl font-bold font-display text-foreground mb-6">{question.question}</h2>

            <div className="space-y-3 mb-6">
              {question.options.map((option, idx) => {
                let borderClass = "border";
                if (showResult) {
                  if (idx === question.correctAnswer) borderClass = "border-2 border-primary bg-accent";
                  else if (idx === selected) borderClass = "border-2 border-destructive bg-destructive/5";
                } else if (idx === selected) {
                  borderClass = "border-2 border-primary";
                }

                return (
                  <Card
                    key={idx}
                    className={`${borderClass} bg-card cursor-pointer transition-all hover:shadow-sm`}
                    onClick={() => handleSelect(idx)}
                  >
                    <CardContent className="p-4 flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${
                        idx === selected && !showResult
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}>
                        {String.fromCharCode(65 + idx)}
                      </div>
                      <span className="text-card-foreground">{option}</span>
                      {showResult && idx === question.correctAnswer && (
                        <CheckCircle2 className="w-5 h-5 text-primary ml-auto" />
                      )}
                      {showResult && idx === selected && idx !== question.correctAnswer && (
                        <XCircle className="w-5 h-5 text-destructive ml-auto" />
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {showResult && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-xl bg-accent border mb-6"
              >
                <p className="text-sm text-accent-foreground font-medium">💡 {question.explanation}</p>
              </motion.div>
            )}

            <div className="flex justify-end">
              {!showResult ? (
                <Button onClick={handleConfirm} disabled={selected === null} className="px-6">
                  Confirm Answer
                </Button>
              ) : (
                <Button onClick={handleNext} className="px-6">
                  {currentQ + 1 >= questions.length ? "See Results" : "Next Question"}
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default QuizPage;

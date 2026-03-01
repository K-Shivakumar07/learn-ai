import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { subjects } from "@/data/quizData";
import { Brain } from "lucide-react";

const SubjectPage = () => {
  const { subjectId } = useParams();
  const navigate = useNavigate();
  const subject = subjects.find((s) => s.id === subjectId);

  if (!subject) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Subject not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b">
        <div className="container mx-auto px-6 py-4 flex items-center gap-4">
          <button onClick={() => navigate("/dashboard")} className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
              <Brain className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold font-display text-foreground">{subject.name}</span>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8 max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-2xl font-bold font-display text-foreground mb-2">Select a Topic</h1>
          <p className="text-muted-foreground mb-6">{subject.description}</p>

          <div className="space-y-4">
            {subject.topics.map((topic, i) => (
              <motion.div
                key={topic.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Card
                  className="border bg-card cursor-pointer hover:shadow-[var(--shadow-card)] transition-shadow group"
                  onClick={() => navigate(`/quiz/${subject.id}/${topic.id}`)}
                >
                  <CardContent className="p-5 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                        <BookOpen className="w-5 h-5 text-accent-foreground" />
                      </div>
                      <div>
                        <p className="font-semibold text-card-foreground">{topic.name}</p>
                        <p className="text-xs text-muted-foreground">{topic.questionCount} questions</p>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default SubjectPage;

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Brain, Flame, Trophy, Target, BookOpen, ArrowRight,
  TrendingUp, Clock, BarChart3,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { subjects, getProgress, getSubjectPerformance, type UserProgress } from "@/data/quizData";

const Dashboard = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState<UserProgress>(getProgress());

  useEffect(() => {
    setProgress(getProgress());
  }, []);

  const accuracy = progress.totalQuestions > 0
    ? Math.round((progress.totalCorrect / progress.totalQuestions) * 100)
    : 0;

  const subjectPerf = getSubjectPerformance(progress.results);

  const recentResults = [...progress.results].reverse().slice(0, 5);

  const subjectIcons: Record<string, typeof BookOpen> = {
    mathematics: Target,
    science: TrendingUp,
    english: BookOpen,
    "computer-science": BarChart3,
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <button onClick={() => navigate("/")} className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
              <Brain className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold font-display text-foreground">EduAI</span>
          </button>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8 max-w-6xl">
        {/* Welcome */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl lg:text-4xl font-bold font-display text-foreground">
            Welcome Back, <span className="text-primary">Learner</span> 👋
          </h1>
          <p className="text-muted-foreground mt-2">Continue your learning journey. Pick a subject and start a quiz!</p>
        </motion.div>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Day Streak", value: progress.streakDays, icon: Flame, accent: "text-secondary" },
            { label: "Quizzes Taken", value: progress.totalQuizzes, icon: Trophy, accent: "text-primary" },
            { label: "Accuracy", value: `${accuracy}%`, icon: Target, accent: "text-primary" },
            { label: "Questions Done", value: progress.totalQuestions, icon: Clock, accent: "text-secondary" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="border bg-card">
                <CardContent className="p-5 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shrink-0">
                    <stat.icon className={`w-6 h-6 ${stat.accent}`} />
                  </div>
                  <div>
                    <p className="text-2xl font-bold font-display text-card-foreground">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Subjects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <h2 className="text-xl font-bold font-display text-foreground mb-4">Choose a Subject</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {subjects.map((subject) => {
              const perf = subjectPerf[subject.id];
              const pct = perf ? Math.round((perf.correct / perf.total) * 100) : 0;
              const Icon = subjectIcons[subject.id] || BookOpen;

              return (
                <Card
                  key={subject.id}
                  className="border bg-card cursor-pointer hover:shadow-[var(--shadow-card)] transition-shadow group"
                  onClick={() => navigate(`/subject/${subject.id}`)}
                >
                  <CardHeader className="pb-2">
                    <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center mb-2">
                      <Icon className="w-5 h-5 text-accent-foreground" />
                    </div>
                    <CardTitle className="text-lg font-display">{subject.name}</CardTitle>
                    <p className="text-xs text-muted-foreground">{subject.description}</p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                      <span>{subject.topics.length} topics</span>
                      {perf && <span>{pct}% accuracy</span>}
                    </div>
                    <Progress value={pct} className="h-2" />
                    <div className="mt-3 flex items-center text-sm font-medium text-primary group-hover:gap-2 transition-all">
                      Start Learning <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </motion.div>

        {/* Performance / Recent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-xl font-bold font-display text-foreground mb-4">Recent Activity</h2>
          {recentResults.length === 0 ? (
            <Card className="border bg-card">
              <CardContent className="p-8 text-center">
                <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                <p className="text-muted-foreground">No quizzes taken yet. Pick a subject above to get started!</p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-3">
              {recentResults.map((r, i) => {
                const sub = subjects.find((s) => s.id === r.subjectId);
                const topic = sub?.topics.find((t) => t.id === r.topicId);
                const pct = Math.round((r.score / r.total) * 100);
                return (
                  <Card key={i} className="border bg-card">
                    <CardContent className="p-4 flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-card-foreground">{sub?.name} — {topic?.name}</p>
                        <p className="text-xs text-muted-foreground">{new Date(r.date).toLocaleDateString()}</p>
                      </div>
                      <div className="text-right">
                        <p className={`font-bold font-display text-lg ${pct >= 70 ? "text-primary" : "text-destructive"}`}>
                          {r.score}/{r.total}
                        </p>
                        <p className="text-xs text-muted-foreground">{pct}%</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </motion.div>
      </main>
    </div>
  );
};

export default Dashboard;

import { motion } from "framer-motion";
import { Rocket, Target, Users, Lightbulb, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const requirements = [
  "Personalize learning paths using AI-driven student profiling",
  "Provide explainable, rubric-based feedback with step-by-step guidance",
  "Support multilingual users with real-time translation",
  "Track progress with visual dashboards and mastery analytics",
  "Ensure academic integrity with AI plagiarism detection",
  "Boost student confidence through adaptive difficulty scaling",
];

const Challenge = () => {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Decorative bg */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-secondary/5 blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Hackathon</span>
          <h2 className="text-4xl lg:text-5xl font-bold font-display mt-3 text-card-foreground">
            The Challenge
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
            Create AI-powered educational tools that personalize learning, offer explainable feedback, 
            support multilingual users, and improve mastery and confidence.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Requirements */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold font-display mb-6 text-card-foreground flex items-center gap-2">
              <Target className="w-6 h-6 text-primary" />
              Requirements
            </h3>
            {requirements.map((req, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="flex items-start gap-3 p-4 rounded-xl bg-background border"
              >
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <p className="text-foreground">{req}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="p-8 rounded-2xl bg-[image:var(--gradient-hero)] text-primary-foreground shadow-[var(--shadow-elevated)]">
              <Rocket className="w-10 h-10 mb-4" />
              <h3 className="text-2xl font-bold font-display mb-3">Build the Future of Learning</h3>
              <p className="opacity-90 mb-6 leading-relaxed">
                Join the hackathon and create AI tools that transform how millions of students learn, 
                grow, and succeed across languages and learning styles.
              </p>
              <Button size="lg" variant="secondary" className="font-semibold text-lg px-8 py-6 rounded-xl">
                Join the Hackathon
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-xl border bg-background text-center">
                <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-2xl font-bold font-display text-foreground">500+</p>
                <p className="text-sm text-muted-foreground">Participants</p>
              </div>
              <div className="p-6 rounded-xl border bg-background text-center">
                <Lightbulb className="w-8 h-8 text-secondary mx-auto mb-3" />
                <p className="text-2xl font-bold font-display text-foreground">$50K</p>
                <p className="text-sm text-muted-foreground">In Prizes</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Challenge;

import { motion } from "framer-motion";
import { Brain, MessageSquareText, Globe2, TrendingUp, BookOpenCheck, Shield } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Adaptive Learning Paths",
    description: "AI analyzes each student's strengths, weaknesses, and pace to create personalized learning journeys.",
    color: "primary",
  },
  {
    icon: MessageSquareText,
    title: "Explainable Feedback",
    description: "Step-by-step, rubric-based explanations help students understand exactly where and how to improve.",
    color: "secondary",
  },
  {
    icon: Globe2,
    title: "Multilingual Support",
    description: "Break language barriers with real-time translation and culturally aware content delivery.",
    color: "primary",
  },
  {
    icon: TrendingUp,
    title: "Smart Progress Tracking",
    description: "Visual dashboards and AI-driven analytics show mastery levels and suggest optimal study plans.",
    color: "secondary",
  },
  {
    icon: BookOpenCheck,
    title: "Confidence Building",
    description: "Positive reinforcement loops and adaptive difficulty ensure students stay motivated and engaged.",
    color: "primary",
  },
  {
    icon: Shield,
    title: "Academic Integrity",
    description: "AI-powered plagiarism detection and originality checks maintain trust in assessments.",
    color: "secondary",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Features = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Solutions</span>
          <h2 className="text-4xl lg:text-5xl font-bold font-display mt-3 text-foreground">
            AI-Powered Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
            Tools that personalize learning, offer explainable feedback, and improve mastery and confidence.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={item}
              className="group relative p-8 rounded-2xl border bg-card hover:shadow-[var(--shadow-elevated)] transition-all duration-500"
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110 ${
                  feature.color === "primary"
                    ? "bg-primary/10"
                    : "bg-secondary/10"
                }`}
              >
                <feature.icon
                  className={`w-7 h-7 ${
                    feature.color === "primary" ? "text-primary" : "text-secondary"
                  }`}
                />
              </div>
              <h3 className="text-xl font-semibold font-display mb-3 text-card-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;

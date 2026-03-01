import { motion } from "framer-motion";
import { AlertTriangle, Globe, BarChart3, ShieldAlert, UserX } from "lucide-react";

const painPoints = [
  {
    icon: UserX,
    title: "No Personalization",
    description: "One-size-fits-all teaching ignores diverse learning styles, leaving students behind.",
  },
  {
    icon: AlertTriangle,
    title: "Limited Feedback",
    description: "Students lack stepwise, rubric-based feedback that explains where and why they went wrong.",
  },
  {
    icon: Globe,
    title: "Language Barriers",
    description: "Missing multilingual support excludes non-native speakers from quality education.",
  },
  {
    icon: BarChart3,
    title: "Poor Progress Tracking",
    description: "Inefficient study planning and no real-time progress insights hinder mastery.",
  },
  {
    icon: ShieldAlert,
    title: "Academic Integrity",
    description: "Plagiarism and cheating concerns undermine trust in assessments and outcomes.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const PainPoints = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-destructive uppercase tracking-wider">The Problem</span>
          <h2 className="text-4xl lg:text-5xl font-bold font-display mt-3 text-card-foreground">
            Why Students Struggle Today
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
            Current educational tools provide one-size-fits-all guidance, causing confusion, anxiety, and slower mastery.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {painPoints.map((point) => (
            <motion.div
              key={point.title}
              variants={item}
              className="group p-6 rounded-xl border bg-background hover:shadow-[var(--shadow-card)] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-4 group-hover:bg-destructive/20 transition-colors">
                <point.icon className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold font-display mb-2 text-foreground">{point.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PainPoints;

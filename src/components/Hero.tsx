import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Brain, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-education.jpg";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[image:var(--gradient-subtle)]" />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              AI-Powered Education & Skilling
            </div>
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold font-display leading-tight mb-6 text-foreground">
              Learn Smarter,{" "}
              <span className="text-primary">Not Harder</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
              Personalize learning with explainable, multilingual AI support that boosts confidence, 
              adapts to every learning style, and drives real outcomes.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="text-lg px-8 py-6 rounded-xl font-semibold shadow-[var(--shadow-elevated)]" onClick={() => navigate("/dashboard")}>
                <Brain className="w-5 h-5 mr-2" />
                Get Started
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 rounded-xl font-semibold">
                Learn More
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-elevated)]">
              <img
                src={heroImage}
                alt="Diverse students learning with AI assistance and holographic interfaces"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            {/* Floating card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-card rounded-xl p-4 shadow-[var(--shadow-card)] border"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Brain className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-card-foreground">Adaptive Learning</p>
                  <p className="text-xs text-muted-foreground">Personalized for you</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import Features from "@/components/Features";
import Challenge from "@/components/Challenge";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <div id="problem">
        <PainPoints />
      </div>
      <div id="features">
        <Features />
      </div>
      <div id="challenge">
        <Challenge />
      </div>
      <Footer />
    </div>
  );
};

export default Index;

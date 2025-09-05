import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Ingredients from "@/components/Ingredients";
import Usage from "@/components/Usage";
import Nutrition from "@/components/Nutrition";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Benefits />
      <Ingredients />
      <Usage />
      <Nutrition />
      <Contact />
    </div>
  );
};

export default Index;

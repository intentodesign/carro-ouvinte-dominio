import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Benefits from "@/components/Benefits";
import Product from "@/components/Product";
import Pricing from "@/components/Pricing";
import ForWhom from "@/components/ForWhom";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Problem />
      <Solution />
      <Benefits />
      <Product />
      <Pricing />
      <ForWhom />
      <CTA />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;

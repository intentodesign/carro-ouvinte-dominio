import { Button } from "@/components/ui/button";
import heroImage from "@/assets/giovana-hero.jpg";
import giovanaLogo from "@/assets/giovana-logo.png";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToOffer = () => {
    document.getElementById("offer")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center overflow-hidden border-b-2 border-accent">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--accent)/0.15),transparent_50%)]" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="mb-8">
              <img 
                src={giovanaLogo} 
                alt="Giovana Toso"
                className="w-64 h-auto"
              />
            </div>
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                Ouça Seu Carro
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed border-l-2 border-accent pl-6">
              Domine os sinais que economizam dinheiro — aprenda diagnóstico com a{" "}
              <span className="text-primary font-semibold">campeã nacional</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                variant="cta" 
                size="xl"
                onClick={scrollToOffer}
                className="shadow-elegant"
              >
                Garantir Meu Acesso
              </Button>
              <Button 
                variant="cta-outline" 
                size="xl"
                onClick={() => document.getElementById("benefits")?.scrollIntoView({ behavior: "smooth" })}
              >
                Saber Mais
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full" />
            <div className="relative border-2 border-accent rounded-2xl overflow-hidden shadow-glow">
              <img 
                src={heroImage} 
                alt="Giovana Toso - Campeã Nacional de Diagnóstico Automotivo"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToOffer}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-foreground/60 hover:text-primary transition-colors"
        aria-label="Rolar para baixo"
      >
        <ArrowDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;

import { Button } from "@/components/ui/button";
import heroImage from "@/assets/giovana-hero.jpg";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToOffer = () => {
    document.getElementById("offer")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,0,0,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
                Ouça Seu Carro
              </h1>
              <p className="text-2xl md:text-3xl text-primary-foreground/90 font-light">
                com <span className="text-primary font-bold">Giovana Toso</span>
              </p>
            </div>
            
            <p className="text-xl md:text-2xl text-primary-foreground/80 leading-relaxed">
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
            <div className="absolute inset-0 bg-gradient-primary blur-3xl opacity-20 rounded-full" />
            <img 
              src={heroImage} 
              alt="Giovana Toso - Campeã Nacional de Diagnóstico Automotivo"
              className="relative rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToOffer}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-primary-foreground/60 hover:text-primary transition-colors"
        aria-label="Rolar para baixo"
      >
        <ArrowDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;

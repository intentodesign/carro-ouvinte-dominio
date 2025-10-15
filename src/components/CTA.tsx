import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
            <AlertTriangle className="w-16 h-16 text-primary" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground leading-tight">
            Saia da zona de risco <span className="text-primary">agora</span>
          </h2>
          
          <div className="space-y-6 text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
            <p>
              Seu carro está dando sinais.
            </p>
            <p className="text-2xl md:text-3xl font-semibold text-primary-foreground">
              A questão é: você vai ouvir a tempo de economizar — <br />
              ou vai esperar o prejuízo aparecer?
            </p>
          </div>
          
          <div className="pt-8">
            <Button 
              variant="cta" 
              size="xl"
              className="shadow-glow text-xl"
              onClick={() => document.getElementById("offer")?.scrollIntoView({ behavior: "smooth" })}
            >
              QUERO DOMINAR OS SINAIS E PARAR DE PERDER DINHEIRO
            </Button>
          </div>
          
          <p className="text-sm text-primary-foreground/60 italic pt-4">
            Oferta válida apenas para os primeiros compradores. <br />
            Preço promocional pode encerrar a qualquer momento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;

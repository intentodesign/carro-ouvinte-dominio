import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Star } from "lucide-react";

const Pricing = () => {
  return (
    <section id="offer" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Investimento
            </h2>
          </div>
          
          <Card className="p-8 md:p-12 bg-card/95 backdrop-blur border-2 border-primary/20 shadow-glow">
            <div className="text-center mb-8">
              <p className="text-2xl text-muted-foreground line-through mb-2">
                De R$ 67
              </p>
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-5xl md:text-6xl font-bold text-primary">
                  R$ 37
                </span>
              </div>
              <p className="text-accent font-semibold text-lg">
                Oferta de lançamento — preço sobe em breve
              </p>
            </div>
            
            <div className="space-y-6 mb-8">
              <Button 
                variant="cta" 
                size="xl"
                className="w-full text-xl"
              >
                QUERO DOMINAR OS SINAIS E PARAR DE PERDER DINHEIRO
              </Button>
              
              <div className="bg-secondary/10 p-6 rounded-lg border border-primary/20">
                <div className="flex items-start gap-3 mb-4">
                  <Star className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      Adicione agora (+R$ 9,90):
                    </h3>
                  </div>
                </div>
                <div className="space-y-3 ml-9">
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-foreground">
                      Acesso ao <span className="font-bold">Grupo VIP de Dúvidas no Telegram</span> (30 dias)
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-foreground">
                      Planilha avançada de controle de gastos automotivos
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-primary/10 border-2 border-primary rounded-lg p-6 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Garantia Incondicional de 7 Dias
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Se você não se sentir mais seguro(a) para tomar decisões sobre seu carro, 
                ou se achar que o conteúdo não valeu cada centavo, devolvemos 100% do seu 
                investimento. Sem perguntas, sem burocracia.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

import { CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const Benefits = () => {
  const benefits = [
    {
      title: "Identifique os 7 sintomas críticos",
      description: "Que mais geram gastos desnecessários e saiba quando cada um é urgente de verdade",
    },
    {
      title: "Manutenção: preventiva, corretiva e preditiva",
      description: "A diferença entre cada uma e como usar para economizar centenas (ou milhares) de reais",
    },
    {
      title: "Método de 3 etapas",
      description: "Para descrever sintomas com precisão técnica e obrigar o mecânico a dar respostas claras",
    },
    {
      title: "Perguntas que eliminam achismo",
      description: "O que pedir para ver, quais dados exigir, como validar diagnósticos antes de aprovar",
    },
    {
      title: "Cronograma real de manutenção",
      description: "Por quilometragem e tempo — saiba exatamente quando agir e quando pode esperar",
    },
    {
      title: "Cases reais documentados",
      description: "Como R$ 450 em preventiva evitaram R$ 5.200 em corretiva (com dados de scanner)",
    },
  ];

  return (
    <section id="benefits" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            O que você vai <span className="text-foreground">dominar</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="p-6 border-l-4 border-l-primary hover:shadow-elegant transition-all"
            >
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;

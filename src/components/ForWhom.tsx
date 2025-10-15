import { Users, Car, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";

const ForWhom = () => {
  const audiences = [
    {
      icon: Shield,
      title: "Proprietários inteligentes",
      description: "Que querem controle real sobre custos de manutenção",
    },
    {
      icon: Car,
      title: "Motoristas de app",
      description: "Que dependem do carro para ganhar dinheiro e não podem errar",
    },
    {
      icon: Users,
      title: "Qualquer pessoa",
      description: "Cansada de diagnósticos vagos, orçamentos surpresa e falta de transparência",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Para quem é <span className="text-foreground">este guia?</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {audiences.map((audience, index) => (
            <Card 
              key={index}
              className="p-8 text-center hover:shadow-elegant transition-all border-2 hover:border-primary/50"
            >
              <div className="inline-block p-4 bg-primary/10 rounded-full mb-6">
                <audience.icon className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">
                {audience.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {audience.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForWhom;

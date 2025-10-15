import { AlertCircle, DollarSign, MessageSquareX } from "lucide-react";
import { Card } from "@/components/ui/card";

const Problem = () => {
  const problems = [
    {
      icon: AlertCircle,
      title: "Barulho estranho no motor",
      description: "Luz no painel acesa há dias. Você sabe o que significa?",
    },
    {
      icon: DollarSign,
      title: "Orçamento 3x maior",
      description: "Do que você esperava. E você não sabe se é real ou não.",
    },
    {
      icon: MessageSquareX,
      title: "\"Tem que trocar\"",
      description: "O mecânico só diz isso — sem explicar absolutamente nada.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Seu carro está falando. <br />
            <span className="text-primary">Você está ouvindo?</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <Card 
              key={index}
              className="p-8 border-2 hover:border-primary/50 transition-all hover:shadow-elegant"
            >
              <problem.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3 text-foreground">
                {problem.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center space-y-6">
          <p className="text-xl md:text-2xl text-foreground max-w-3xl mx-auto leading-relaxed">
            Você sai da oficina <span className="font-bold text-primary">sem entender</span> o que foi feito.
          </p>
          <p className="text-xl md:text-2xl text-foreground max-w-3xl mx-auto leading-relaxed">
            Você aprova o serviço <span className="font-bold text-primary">sem saber</span> se era realmente necessário.
          </p>
          <p className="text-2xl md:text-3xl text-foreground max-w-3xl mx-auto leading-relaxed font-semibold mt-8">
            Você paga. E torce para não ter sido enganado(a).
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;

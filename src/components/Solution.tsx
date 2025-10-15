import { Shield } from "lucide-react";

const Solution = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
            <Shield className="w-16 h-16 text-primary" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Chega de diagnóstico <br />
            <span className="text-accent">"caixa preta"</span>
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl text-foreground leading-relaxed">
            <p>
              Você não precisa virar mecânico(a) para não ser refém de achismo.
            </p>
            <p className="text-2xl font-semibold text-foreground">
              Você só precisa entender <span className="text-foreground font-bold">os sinais certos</span> — <br />
              e saber fazer <span className="text-foreground font-bold">as perguntas certas</span>.
            </p>
            <p className="pt-4">
              É exatamente isso que <span className="font-bold text-foreground">Giovana Toso</span>, 
              campeã nacional de diagnóstico automotivo, vai te ensinar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;

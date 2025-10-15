import { Book, Sheet, Video, Gift } from "lucide-react";
import { Card } from "@/components/ui/card";
import diagnosticImage from "@/assets/diagnostic-tool.jpg";

const Product = () => {
  const items = [
    {
      icon: Book,
      title: "Mini eBook \"Ouça Seu Carro\"",
      subtitle: "PDF - 40 páginas",
      description: "Guia prático, direto e baseado em 15 anos de bancada da campeã nacional. Sem enrolação, sem conteúdo raso.",
    },
    {
      icon: Sheet,
      title: "Checklist Interativo de Manutenção",
      subtitle: "Google Sheets + PDF",
      description: "Controle completo: sintomas, quilometragem, custos estimados, alertas de preventiva — tudo em um lugar só.",
    },
    {
      icon: Video,
      title: "2 Vídeos Exclusivos da Giovana",
      subtitle: "Análises técnicas reais",
      description: "Vídeo 1: Decodificando sintomas reais. Vídeo 2: Caso real de diagnóstico — do sintoma ao scanner, sem mistério.",
    },
    {
      icon: Gift,
      title: "Bônus: 10 Perguntas Técnicas",
      subtitle: "Exclusivo para compradores",
      description: "Que todo mecânico honesto responde. Use antes de aprovar qualquer orçamento.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            O que você recebe <span className="text-primary">hoje</span>
          </h2>
        </div>
        
        <div className="max-w-6xl mx-auto mb-12">
          <img 
            src={diagnosticImage} 
            alt="Equipamento de diagnóstico automotivo profissional"
            className="w-full max-w-3xl mx-auto rounded-2xl shadow-2xl"
          />
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {items.map((item, index) => (
            <Card 
              key={index}
              className="p-8 hover:shadow-elegant transition-all bg-card"
            >
              <div className="flex gap-4">
                <div className="p-3 bg-primary/10 rounded-lg h-fit">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm text-primary font-semibold mb-3">
                    {item.subtitle}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <div className="inline-block bg-secondary/10 px-8 py-6 rounded-2xl border-2 border-primary/20">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Isso <span className="text-primary">NÃO</span> é conteúdo básico.
            </h3>
            <div className="space-y-2 text-lg text-muted-foreground">
              <p>Não é "como calibrar pneu".</p>
              <p>Não é "empoderamento de Instagram".</p>
              <p>Não é teoria genérica copiada de manual.</p>
            </div>
            <p className="text-xl font-bold text-foreground mt-6">
              É <span className="text-primary">diagnóstico traduzido</span> por quem domina a técnica de verdade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;

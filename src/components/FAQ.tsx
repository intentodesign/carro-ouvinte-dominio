import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Preciso ter conhecimento técnico para usar?",
      answer: "Não. O material foi feito para quem nunca entendeu nada de mecânica. Giovana traduz tudo para linguagem clara, com exemplos práticos.",
    },
    {
      question: "Vou realmente economizar dinheiro?",
      answer: "Sim. Você vai aprender a identificar problemas antes que virem emergências caras, validar diagnósticos e questionar orçamentos com argumentos técnicos. Clientes da Giovana relatam economias de 40% a 70% em manutenções.",
    },
    {
      question: "Funciona para qualquer tipo de carro?",
      answer: "Sim. Os princípios de diagnóstico e manutenção são universais — você adapta ao seu veículo usando o checklist personalizado.",
    },
    {
      question: "Quando recebo o material?",
      answer: "Imediatamente após a confirmação do pagamento. Tudo é digital e vai direto para seu e-mail.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Perguntas <span className="text-primary">Frequentes</span>
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-2 border-border rounded-lg px-6 hover:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

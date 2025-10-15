import giovanaSymbol from "@/assets/giovana-symbol.png";

const Footer = () => {
  return (
    <footer className="py-12 bg-secondary border-t-2 border-accent">
      <div className="container mx-auto px-4">
        <div className="text-center text-secondary-foreground space-y-6">
          <img 
            src={giovanaSymbol} 
            alt="Giovana Toso - Símbolo"
            className="w-16 h-16 mx-auto opacity-80"
          />
          <p className="font-bold text-lg text-primary">
            Ouça Seu Carro com Giovana Toso
          </p>
          <p className="text-sm text-muted-foreground">
            Campeã Nacional de Diagnóstico Automotivo
          </p>
          <p className="text-sm">
            © {new Date().getFullYear()} Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground">
            Este produto não substitui a consulta com profissionais qualificados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

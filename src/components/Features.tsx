import { Truck, Shield, Star, Clock } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Entrega Rápida",
      description: "Entregamos em toda região metropolitana com rapidez e segurança"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Qualidade Garantida",
      description: "Produtos selecionados com garantia e qualidade premium"
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Atendimento 5 Estrelas",
      description: "Suporte personalizado via WhatsApp para melhor experiência"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Sempre Disponível",
      description: "Estoque sempre atualizado com os melhores modelos da temporada"
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Por que escolher a <span className="gradient-text">Bonés & Estilo</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Oferecemos a melhor experiência em compra de bonés com qualidade excepcional
          </p>
          <div className="h-1 w-24 bg-gradient-secondary mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card p-8 text-center hover:scale-105 transition-all duration-300 group"
              style={{
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'both'
              }}
            >
              <div className="text-primary mb-6 flex justify-center group-hover:text-secondary transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
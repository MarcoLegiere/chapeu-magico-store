import { Truck, Shield, Star, Recycle } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Envio Rápido",
      description: "Entrega em todo Brasil com rastreio para você acompanhar seu pedido"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "85% Algodão Premium",
      description: "Barbantes de alta qualidade com 85% algodão e 15% outras fibras"
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Cores Vibrantes",
      description: "Diversas cores e espessuras (nº 4, 6, 8) para todos os projetos"
    },
    {
      icon: <Recycle className="h-8 w-8" />,
      title: "Eco-Friendly",
      description: "Barbantes ecológicos e resistentes para um artesanato sustentável"
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Por que escolher a <span className="gradient-text">Flor de Barbante</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Oferecemos barbantes de qualidade premium para todos os tipos de artesanato
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
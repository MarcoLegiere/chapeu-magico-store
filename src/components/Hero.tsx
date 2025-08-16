import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-barbantes.jpg";

const Hero = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('produtos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      id="topo" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-8 h-8 bg-primary/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-secondary/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-6 h-6 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 w-10 h-10 bg-premium/20 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-accent/30 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-slide-in-up">
          {/* Logo */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold gradient-text mb-4 animate-pulse-glow">
              🌸 FLOR DE BARBANTE
            </h1>
            <div className="h-1 w-32 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          {/* Slogan */}
          <p className="text-xl md:text-2xl text-foreground font-medium mb-8 leading-relaxed">
            Barbantes ecológicos e resistentes para todos os tipos de artesanato!
          </p>

          {/* Promo Banner */}
          <div className="glass-card p-8 mb-12 max-w-2xl mx-auto hover-lift">
            <div className="flex items-center justify-center mb-4">
              <div className="h-1 flex-1 bg-gradient-primary rounded-full"></div>
              <span className="mx-4 text-sm font-bold text-primary uppercase tracking-wider">🎯 Promoção Especial</span>
              <div className="h-1 flex-1 bg-gradient-primary rounded-full"></div>
            </div>
            <h2 className="text-lg md:text-xl font-semibold gradient-text mb-2">
              Cones de 700g e 1KG com Envio Rápido!
            </h2>
            <p className="text-muted-foreground">
              Rastreamento gratuito em todos os pedidos
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              onClick={scrollToProducts}
              className="gradient-button px-10 py-4 text-lg font-semibold rounded-full shadow-elegant"
            >
              Ver Produtos ✨
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
              className="soft-button px-10 py-4 text-lg font-semibold rounded-full border-2 border-accent"
            >
              Falar no WhatsApp 💬
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
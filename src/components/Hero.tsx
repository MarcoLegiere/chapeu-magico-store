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
        backgroundImage: `linear-gradient(rgba(34, 47, 80, 0.7), rgba(34, 47, 80, 0.5)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 bg-accent rounded-full animate-float opacity-60"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-secondary rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-5 h-5 bg-premium rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-slide-in-up">
          {/* Logo */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold gradient-text mb-4 animate-pulse-glow">
              🌸 FLOR DE BARBANTE
            </h1>
            <div className="h-1 w-32 bg-gradient-secondary mx-auto rounded-full"></div>
          </div>

          {/* Slogan */}
          <p className="text-xl md:text-2xl text-white/90 font-light mb-8 leading-relaxed">
            Barbantes ecológicos e resistentes para todos os tipos de artesanato!
          </p>

          {/* Promo Banner */}
          <div className="glass-card p-6 mb-12 max-w-2xl mx-auto hover-lift">
            <p className="text-lg font-semibold text-foreground mb-2">
              🎯 <span className="gradient-text">Promoção Especial</span>
            </p>
            <p className="text-muted-foreground">
              Cones de 700g e 1KG com <span className="font-bold text-accent">envio rápido e rastreio!</span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="hero"
              size="hero"
              onClick={scrollToProducts}
              className="shadow-elegant"
            >
              Ver Produtos
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              Falar no WhatsApp
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
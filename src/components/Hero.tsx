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
          <div className="mb-12">
            <h1 className="text-7xl md:text-9xl font-black gradient-text mb-6 animate-pulse-glow tracking-tight leading-none text-shadow-elegant">
              🌸 FLOR DE BARBANTE
            </h1>
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-1 w-16 bg-gradient-primary rounded-full"></div>
              <div className="h-2 w-2 bg-primary rounded-full animate-pulse"></div>
              <div className="h-1 w-32 bg-gradient-primary rounded-full"></div>
              <div className="h-2 w-2 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="h-1 w-16 bg-gradient-primary rounded-full"></div>
            </div>
          </div>

          {/* Slogan */}
          <p className="text-2xl md:text-4xl text-foreground font-bold mb-4 leading-tight">
            Barbantes ecológicos e resistentes
          </p>
          <p className="text-lg md:text-xl text-muted-foreground font-medium mb-12 leading-relaxed max-w-3xl mx-auto">
            Para todos os tipos de artesanato com qualidade premium e sustentabilidade
          </p>

          {/* Promo Banner - Enhanced Design */}
          <div className="glass-card p-8 mb-16 max-w-3xl mx-auto hover-lift relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-4 left-4 text-6xl">🌸</div>
              <div className="absolute bottom-4 right-4 text-6xl">✨</div>
              <div className="absolute top-1/2 right-8 text-4xl transform -translate-y-1/2">🧶</div>
            </div>
            
            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                <div className="h-1 flex-1 bg-gradient-primary rounded-full"></div>
                <div className="mx-6 text-sm font-bold text-primary uppercase tracking-widest px-4 py-2 bg-primary/10 rounded-full">
                  🎯 Promoção Especial
                </div>
                <div className="h-1 flex-1 bg-gradient-primary rounded-full"></div>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-black gradient-text mb-4 leading-tight">
                Cones de 700g e 1KG com Envio Rápido!
              </h2>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="font-semibold">Rastreamento gratuito</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="font-semibold">Entrega em até 5 dias</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-premium rounded-full"></div>
                  <span className="font-semibold">Qualidade garantida</span>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <Button
              size="lg"
              onClick={scrollToProducts}
              className="group relative overflow-hidden gradient-button px-12 py-6 text-xl font-bold rounded-3xl shadow-elegant hover:shadow-glow transform hover:scale-105 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center">
                Ver Produtos
                <span className="ml-3 text-2xl group-hover:animate-bounce">✨</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
              className="group relative overflow-hidden px-12 py-6 text-xl font-bold rounded-3xl border-3 border-accent bg-accent/5 hover:bg-accent hover:text-accent-foreground hover:border-accent/50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-elegant"
            >
              <span className="flex items-center">
                Falar no WhatsApp
                <span className="ml-3 text-2xl group-hover:animate-pulse">💬</span>
              </span>
            </Button>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <div className="text-primary/60 text-sm font-medium">Role para baixo</div>
          <div className="w-8 h-12 border-2 border-primary/40 rounded-full flex justify-center relative">
            <div className="w-1 h-4 bg-primary/60 rounded-full mt-2 animate-pulse"></div>
            <div className="absolute -bottom-2 w-0 h-0 border-l-2 border-r-2 border-t-4 border-l-transparent border-r-transparent border-t-primary/40"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
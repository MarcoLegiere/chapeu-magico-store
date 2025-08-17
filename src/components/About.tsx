import { Button } from "@/components/ui/button";
import { Heart, Users, Award } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Nossa <span className="gradient-text">História</span>
              </h2>
              <div className="h-1 w-24 bg-gradient-secondary rounded-full mb-8"></div>
            </div>

            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              Bem-vindo à <strong>Flor de Barbante</strong>! Aqui você encontra 
              barbantes ecológicos, resistentes e com cores vibrantes para todos os 
              tipos de artesanato: crochê, macramê, tapeçaria e muito mais.
            </p>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Trabalhamos com barbantes de alta qualidade, compostos por 85% algodão 
              e 15% outras fibras, oferecendo cones de 700g e 1KG nas espessuras 
              nº 4, 6 e 8. Tudo com envio rápido e rastreio para sua comodidade.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
              <div className="text-center group">
                <div className="text-premium mb-4 flex justify-center p-4 bg-premium/10 rounded-full w-20 h-20 mx-auto items-center group-hover:scale-110 transition-transform duration-300">
                  <Heart className="h-10 w-10" />
                </div>
                <h4 className="font-bold text-foreground mb-3 text-lg">Paixão</h4>
                <p className="text-base text-muted-foreground">
                  Amor pelo artesanato
                </p>
              </div>

              <div className="text-center group">
                <div className="text-secondary mb-4 flex justify-center p-4 bg-secondary/10 rounded-full w-20 h-20 mx-auto items-center group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-10 w-10" />
                </div>
                <h4 className="font-bold text-foreground mb-3 text-lg">Comunidade</h4>
                <p className="text-base text-muted-foreground">
                  Artesãos satisfeitos
                </p>
              </div>

              <div className="text-center group">
                <div className="text-accent mb-4 flex justify-center p-4 bg-accent/10 rounded-full w-20 h-20 mx-auto items-center group-hover:scale-110 transition-transform duration-300">
                  <Award className="h-10 w-10" />
                </div>
                <h4 className="font-bold text-foreground mb-3 text-lg">Qualidade</h4>
                <p className="text-base text-muted-foreground">
                  Barbantes premium
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
                className="gradient-button"
              >
                Entre em Contato
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver Produtos
              </Button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="glass-card p-8 text-center">
              <div className="space-y-6">
                <div className="text-6xl mb-6">🌸</div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Mais de <span className="gradient-text">1000+</span>
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Artesãos satisfeitos com nossos barbantes de qualidade premium
                </p>
                <div className="flex justify-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-accent text-2xl">★</span>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  Avaliação média dos nossos artesãos
                </p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-primary rounded-full opacity-20 animate-float"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-secondary rounded-full opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
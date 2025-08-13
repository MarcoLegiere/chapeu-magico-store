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

            <p className="text-lg text-muted-foreground leading-relaxed">
              Fundada com a paixão por estilo e qualidade, a <strong>Bonés & Estilo</strong> 
              nasceu do desejo de oferecer acessórios que complementam a personalidade única 
              de cada pessoa.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Acreditamos que um boné não é apenas um acessório, mas uma forma de 
              expressão pessoal. Por isso, selecionamos cuidadosamente cada peça, 
              garantindo qualidade premium e designs únicos.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
              <div className="text-center">
                <div className="text-premium mb-3 flex justify-center">
                  <Heart className="h-8 w-8" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Paixão</h4>
                <p className="text-sm text-muted-foreground">
                  Amor pelo que fazemos
                </p>
              </div>

              <div className="text-center">
                <div className="text-premium mb-3 flex justify-center">
                  <Users className="h-8 w-8" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Comunidade</h4>
                <p className="text-sm text-muted-foreground">
                  Clientes satisfeitos
                </p>
              </div>

              <div className="text-center">
                <div className="text-premium mb-3 flex justify-center">
                  <Award className="h-8 w-8" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Qualidade</h4>
                <p className="text-sm text-muted-foreground">
                  Produtos premium
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
                <div className="text-6xl mb-6">🧢</div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Mais de <span className="gradient-text">1000+</span>
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Clientes satisfeitos com nossos produtos de qualidade
                </p>
                <div className="flex justify-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-accent text-2xl">★</span>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  Avaliação média dos nossos clientes
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
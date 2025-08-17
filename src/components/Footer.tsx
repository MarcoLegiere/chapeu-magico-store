import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold gradient-text mb-4">
                  🌸 Flor de Barbante
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Barbantes de qualidade premium para transformar sua criatividade em arte.
                </p>
              </div>
              
              <div className="flex space-x-3">
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => window.open('https://instagram.com', '_blank')}
                  className="hover:bg-premium hover:text-premium-foreground hover:scale-110 transition-all duration-200 rounded-full"
                >
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => window.open('https://facebook.com', '_blank')}
                  className="hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-200 rounded-full"
                >
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => window.open('https://twitter.com', '_blank')}
                  className="hover:bg-accent hover:text-accent-foreground hover:scale-110 transition-all duration-200 rounded-full"
                >
                  <Twitter className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Links Rápidos */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-6">
                Links Rápidos
              </h4>
              <div className="space-y-3">
                <button 
                  onClick={scrollToTop}
                  className="block text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  Início
                </button>
                <button 
                  onClick={() => scrollToSection('produtos')}
                  className="block text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  Produtos
                </button>
                <button 
                  onClick={() => window.location.href = '/admin'}
                  className="block text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  Área Administrativa
                </button>
              </div>
            </div>

            {/* Contato */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-6">
                Contato
              </h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">(11) 99999-9999</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">contato@flordebarbante.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">São Paulo, SP</span>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-6">
                Fique por Dentro
              </h4>
              <p className="text-muted-foreground mb-4 text-sm">
                Receba novidades e promoções exclusivas!
              </p>
              <div className="space-y-3">
                <Button 
                  className="w-full gradient-button"
                  onClick={() => window.open('https://wa.me/5511999999999?text=Olá! Gostaria de receber novidades sobre produtos e promoções.', '_blank')}
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Falar no WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © 2024 Flor de Barbante. Todos os direitos reservados.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <button className="text-muted-foreground hover:text-primary transition-colors">
                Política de Privacidade
              </button>
              <span className="text-muted-foreground/50">•</span>
              <button className="text-muted-foreground hover:text-primary transition-colors">
                Termos de Uso
              </button>
              <span className="text-muted-foreground/50">•</span>
              <button className="text-muted-foreground hover:text-primary transition-colors">
                Trocas e Devoluções
              </button>
              <span className="text-muted-foreground/50">•</span>
              <button 
                onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Contato
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
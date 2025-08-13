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
                <h3 className="text-2xl font-bold gradient-text mb-2">
                  🧢 Bonés & Estilo
                </h3>
                <p className="text-muted-foreground">
                  Qualidade e estilo para completar seu visual único.
                </p>
              </div>
              
              <div className="flex space-x-4">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => window.open('https://instagram.com', '_blank')}
                  className="hover:bg-premium hover:text-premium-foreground"
                >
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => window.open('https://facebook.com', '_blank')}
                  className="hover:bg-primary hover:text-primary-foreground"
                >
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => window.open('https://twitter.com', '_blank')}
                  className="hover:bg-accent hover:text-accent-foreground"
                >
                  <Twitter className="h-4 w-4" />
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
                  <span className="text-muted-foreground">contato@bonesestilo.com</span>
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
        <div className="border-t py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © 2024 Bonés & Estilo. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <button className="text-muted-foreground hover:text-primary transition-colors">
                Política de Privacidade
              </button>
              <button className="text-muted-foreground hover:text-primary transition-colors">
                Termos de Uso
              </button>
              <button className="text-muted-foreground hover:text-primary transition-colors">
                Trocas e Devoluções
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
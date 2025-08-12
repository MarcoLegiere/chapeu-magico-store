import { Button } from "@/components/ui/button";
import { ShoppingCart, Home, Package, Phone } from "lucide-react";
import { useStore } from "@/context/StoreContext";

const Navigation = () => {
  const { state, dispatch } = useStore();
  const totalItems = state.cart.reduce((sum, item) => sum + item.quantidade, 0);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/5511999999999', '_blank');
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass-card border-b">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection('topo')}
              className="text-foreground hover:text-secondary"
            >
              <Home className="mr-2 h-4 w-4" />
              Início
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection('produtos')}
              className="text-foreground hover:text-secondary"
            >
              <Package className="mr-2 h-4 w-4" />
              Produtos
            </Button>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="cart"
              size="sm"
              onClick={() => dispatch({ type: 'TOGGLE_CART' })}
              className="relative"
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              Carrinho
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-premium text-premium-foreground text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center animate-pulse-glow">
                  {totalItems}
                </span>
              )}
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={handleWhatsApp}
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
            >
              <Phone className="mr-2 h-4 w-4" />
              Contato
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
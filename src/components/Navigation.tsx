import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  ShoppingCart, 
  Search, 
  Menu, 
  X, 
  User, 
  Phone, 
  Shield,
  Package,
  Home,
  ChevronDown
} from "lucide-react";
import { useStore } from "@/context/StoreContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const { state, dispatch } = useStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const totalItems = state.cart.reduce((sum, item) => sum + item.quantidade, 0);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      scrollToSection('produtos');
      // Here you could add actual search functionality
      console.log('Searching for:', searchQuery);
    }
  };

  const categories = [
    { name: "Barbante Algodão", action: () => scrollToSection('produtos') },
    { name: "Barbante Grosso", action: () => scrollToSection('produtos') },
    { name: "Barbante Colorido", action: () => scrollToSection('produtos') },
    { name: "Todos os Produtos", action: () => scrollToSection('produtos') },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass-card border-b border-primary/10 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        {/* Main Navigation */}
        <div className="flex items-center justify-between h-16">
          {/* Logo - Prominent and Centered on Mobile */}
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection('topo')}
              className="text-2xl md:text-3xl font-bold gradient-text hover:scale-105 transition-transform duration-200"
            >
              🌸 Flor de Barbante
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Button
              variant="ghost"
              onClick={() => scrollToSection('topo')}
              className="text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200 font-medium"
            >
              <Home className="mr-2 h-4 w-4" />
              Início
            </Button>

            {/* Products Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200 font-medium"
                >
                  <Package className="mr-2 h-4 w-4" />
                  Produtos
                  <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-card border border-primary/20 shadow-elegant">
                {categories.map((category) => (
                  <DropdownMenuItem
                    key={category.name}
                    onClick={category.action}
                    className="cursor-pointer hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                  >
                    {category.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              variant="ghost"
              onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
              className="text-foreground hover:text-accent hover:bg-accent/10 transition-all duration-200 font-medium"
            >
              <Phone className="mr-2 h-4 w-4" />
              Contato
            </Button>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex items-center">
            <form onSubmit={handleSearch} className="relative">
              <Input
                type="text"
                placeholder="Buscar barbantes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 pl-10 pr-4 py-2 rounded-full border-primary/20 focus:border-primary bg-background/80 backdrop-blur-sm"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </form>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-2">
            {/* Search Button - Mobile */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden hover:bg-primary/10"
              onClick={() => scrollToSection('produtos')}
            >
              <Search className="h-5 w-5" />
            </Button>

            {/* User Account */}
            <Button
              variant="ghost"
              size="icon"
              className="hidden md:flex hover:bg-accent/10 hover:text-accent transition-all duration-200"
              onClick={() => window.location.href = '/admin'}
            >
              <User className="h-5 w-5" />
            </Button>

            {/* Shopping Cart */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => dispatch({ type: 'TOGGLE_CART' })}
              className="relative hover:bg-premium/10 hover:text-premium transition-all duration-200 hover:scale-105"
            >
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-premium text-premium-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-pulse-glow shadow-lg">
                  {totalItems}
                </span>
              )}
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover:bg-primary/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="lg:hidden pb-4">
          <form onSubmit={handleSearch} className="relative">
            <Input
              type="text"
              placeholder="Buscar barbantes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full border-primary/20 focus:border-primary bg-background/80 backdrop-blur-sm"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </form>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-card border-t border-primary/20 shadow-elegant backdrop-blur-lg">
            <div className="p-4 space-y-2">
              <Button
                variant="ghost"
                onClick={() => scrollToSection('topo')}
                className="w-full justify-start text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
              >
                <Home className="mr-3 h-4 w-4" />
                Início
              </Button>
              
              {categories.map((category) => (
                <Button
                  key={category.name}
                  variant="ghost"
                  onClick={category.action}
                  className="w-full justify-start text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
                >
                  <Package className="mr-3 h-4 w-4" />
                  {category.name}
                </Button>
              ))}

              <Button
                variant="ghost"
                onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
                className="w-full justify-start text-foreground hover:text-accent hover:bg-accent/10 transition-all duration-200"
              >
                <Phone className="mr-3 h-4 w-4" />
                Contato
              </Button>

              <Button
                variant="ghost"
                onClick={() => window.location.href = '/admin'}
                className="w-full justify-start text-foreground hover:text-premium hover:bg-premium/10 transition-all duration-200"
              >
                <Shield className="mr-3 h-4 w-4" />
                Admin
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
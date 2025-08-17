import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { useStore } from "@/context/StoreContext";
import { Product } from "@/context/StoreContext";
import { useToast } from "@/hooks/use-toast";
import barbante700g from "@/assets/barbante-algodao-700g.jpg";
import barbante1kg from "@/assets/barbante-1kg-grosso.jpg";
import barbanteFino from "@/assets/barbante-fino-colorido.jpg";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [quantity, setQuantity] = useState(1);
  const { dispatch } = useStore();
  const { toast } = useToast();

  // Map image paths to imported images
  const getImageSrc = (imagePath: string) => {
    switch (imagePath) {
      case "/src/assets/barbante-algodao-700g.jpg":
        return barbante700g;
      case "/src/assets/barbante-1kg-grosso.jpg":
        return barbante1kg;
      case "/src/assets/barbante-fino-colorido.jpg":
        return barbanteFino;
      default:
        return imagePath;
    }
  };

  const handleQuantityChange = (delta: number) => {
    setQuantity(prev => Math.max(1, prev + delta));
  };

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: { productId: product.id, quantity }
    });
    
    toast({
      title: "Produto adicionado!",
      description: `${product.nome} foi adicionado ao carrinho`,
    });

    // Open cart automatically
    dispatch({ type: 'TOGGLE_CART', payload: true });
    
    // Reset quantity
    setQuantity(1);
  };

  return (
    <Card className="glass-card hover-lift group animate-slide-in-up border border-primary/10">
      <CardContent className="p-0">
        {/* Product Image */}
        <div className="relative overflow-hidden rounded-t-xl mb-0 bg-gradient-to-br from-primary/5 to-secondary/5">
          <img
            src={getImageSrc(product.imagem)}
            alt={product.nome}
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.src = 'https://via.placeholder.com/400x300?text=Imagem+Indisponível';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Premium Badge */}
          <div className="absolute top-4 right-4">
            <Badge className="bg-premium text-premium-foreground font-semibold shadow-lg">
              Premium ✨
            </Badge>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-6 space-y-4">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:gradient-text transition-all duration-300">
              {product.nome}
            </h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              {product.descricao}
            </p>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between mb-4">
            <div className="text-2xl font-bold gradient-text">
              R$ {product.preco.toFixed(2).replace(".", ",")}
            </div>
            <Badge variant="outline" className="text-accent border-accent/50 bg-accent/10">
              Eco-friendly 🌱
            </Badge>
          </div>

          {/* Quantity Controls */}
          <div className="flex items-center justify-center space-x-4 py-3 bg-muted/30 rounded-xl">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleQuantityChange(-1)}
              disabled={quantity <= 1}
              className="h-10 w-10 rounded-full hover:bg-secondary hover:text-secondary-foreground disabled:opacity-30"
            >
              <Minus className="h-4 w-4" />
            </Button>
            
            <div className="text-xl font-bold min-w-[3rem] text-center px-4 py-2 bg-background rounded-lg border border-primary/20">
              {quantity}
            </div>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleQuantityChange(1)}
              className="h-10 w-10 rounded-full hover:bg-secondary hover:text-secondary-foreground"
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>

          {/* Add to Cart Button */}
          <Button
            onClick={handleAddToCart}
            className="w-full gradient-button py-4 text-base font-semibold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-elegant group"
            size="lg"
          >
            <ShoppingCart className="mr-3 h-5 w-5 group-hover:animate-bounce" />
            Adicionar ao Carrinho
            <span className="ml-2 group-hover:animate-pulse">🛒</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { useStore } from "@/context/StoreContext";
import { Product } from "@/context/StoreContext";
import { useToast } from "@/hooks/use-toast";
import snapbackImage from "@/assets/snapback-classic.jpg";
import truckerImage from "@/assets/trucker-vintage.jpg";
import dadHatImage from "@/assets/dad-hat-minimal.jpg";

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
      case "/src/assets/snapback-classic.jpg":
        return snapbackImage;
      case "/src/assets/trucker-vintage.jpg":
        return truckerImage;
      case "/src/assets/dad-hat-minimal.jpg":
        return dadHatImage;
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
    <Card className="glass-card hover-lift group animate-slide-in-up">
      <CardContent className="p-6">
        {/* Product Image */}
        <div className="relative overflow-hidden rounded-xl mb-6 bg-gradient-to-br from-muted to-muted/50">
          <img
            src={getImageSrc(product.imagem)}
            alt={product.nome}
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            onError={(e) => {
              e.currentTarget.src = 'https://via.placeholder.com/400x300?text=Imagem+Indisponível';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Product Info */}
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">
              {product.nome}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {product.descricao}
            </p>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between">
            <Badge variant="secondary" className="text-lg font-bold px-4 py-2">
              R$ {product.preco.toFixed(2).replace(".", ",")}
            </Badge>
            <Badge variant="outline" className="text-accent border-accent">
              Premium
            </Badge>
          </div>

          {/* Quantity Controls */}
          <div className="flex items-center justify-center space-x-4 py-4">
            <Button
              variant="quantity"
              size="icon"
              onClick={() => handleQuantityChange(-1)}
              disabled={quantity <= 1}
            >
              <Minus className="h-4 w-4" />
            </Button>
            
            <span className="text-xl font-semibold min-w-[3rem] text-center">
              {quantity}
            </span>
            
            <Button
              variant="quantity"
              size="icon"
              onClick={() => handleQuantityChange(1)}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>

          {/* Add to Cart Button */}
          <Button
            onClick={handleAddToCart}
            className="w-full"
            size="lg"
          >
            <ShoppingCart className="mr-2 h-5 w-5" />
            Adicionar ao Carrinho
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
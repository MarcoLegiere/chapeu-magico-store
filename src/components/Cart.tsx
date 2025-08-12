import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { X, Trash2, ShoppingCart, MessageCircle } from "lucide-react";
import { useStore } from "@/context/StoreContext";
import { useToast } from "@/hooks/use-toast";

const Cart = () => {
  const { state, dispatch } = useStore();
  const { toast } = useToast();

  if (!state.isCartOpen) return null;

  const total = state.cart.reduce((sum, item) => sum + (item.preco * item.quantidade), 0);
  const totalItems = state.cart.reduce((sum, item) => sum + item.quantidade, 0);

  const handleRemoveItem = (index: number) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: index });
    toast({
      title: "Item removido",
      description: "O item foi removido do carrinho",
    });
  };

  const handleClearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
    toast({
      title: "Carrinho limpo",
      description: "Todos os itens foram removidos",
    });
  };

  const handleCheckout = () => {
    if (state.cart.length === 0) {
      toast({
        title: "Carrinho vazio",
        description: "Adicione alguns produtos antes de finalizar",
        variant: "destructive",
      });
      return;
    }

    let message = "🧢 *PEDIDO - BONÉS & ESTILO*\n\n";
    
    state.cart.forEach(item => {
      const itemTotal = item.preco * item.quantidade;
      message += `• ${item.nome}\n`;
      message += `  Qtd: ${item.quantidade} x R$ ${item.preco.toFixed(2).replace(".", ",")}\n`;
      message += `  Subtotal: R$ ${itemTotal.toFixed(2).replace(".", ",")}\n\n`;
    });
    
    message += `💰 *Total: R$ ${total.toFixed(2).replace(".", ",")}*\n\n`;
    message += "📍 Por favor, confirme seu endereço para entrega!\n";
    message += "💳 Formas de pagamento: PIX, Cartão ou Dinheiro";
    
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    
    // Clear cart and close
    dispatch({ type: 'CLEAR_CART' });
    dispatch({ type: 'TOGGLE_CART', payload: false });
    
    toast({
      title: "Pedido enviado!",
      description: "Seu pedido foi enviado via WhatsApp",
    });
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-40 animate-fade-in"
        onClick={() => dispatch({ type: 'TOGGLE_CART', payload: false })}
      />
      
      {/* Cart Panel */}
      <div className="fixed right-4 top-4 bottom-4 w-96 max-w-[calc(100vw-2rem)] z-50 animate-slide-in-up">
        <Card className="glass-card h-full flex flex-col">
          <CardHeader className="flex-shrink-0">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <ShoppingCart className="h-5 w-5" />
                Seu Carrinho
              </CardTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => dispatch({ type: 'TOGGLE_CART', payload: false })}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            {totalItems > 0 && (
              <Badge variant="secondary" className="w-fit">
                {totalItems} {totalItems === 1 ? 'item' : 'itens'}
              </Badge>
            )}
          </CardHeader>

          <CardContent className="flex-1 overflow-hidden flex flex-col">
            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto space-y-4 mb-6">
              {state.cart.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingCart className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold text-muted-foreground mb-2">
                    Carrinho vazio
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Adicione alguns produtos para começar
                  </p>
                </div>
              ) : (
                state.cart.map((item, index) => (
                  <div key={`${item.id}-${index}`} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg hover-lift">
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm">{item.nome}</h4>
                      <p className="text-xs text-muted-foreground">
                        R$ {item.preco.toFixed(2).replace(".", ",")} × {item.quantidade}
                      </p>
                      <p className="font-bold text-sm text-secondary">
                        R$ {(item.preco * item.quantidade).toFixed(2).replace(".", ",")}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleRemoveItem(index)}
                      className="text-destructive hover:text-destructive hover:bg-destructive/10 ml-2"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))
              )}
            </div>

            {/* Cart Footer */}
            {state.cart.length > 0 && (
              <div className="space-y-4">
                <Separator />
                
                {/* Total */}
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">Total:</span>
                  <Badge variant="secondary" className="text-lg font-bold px-4 py-2">
                    R$ {total.toFixed(2).replace(".", ",")}
                  </Badge>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <Button
                    onClick={handleCheckout}
                    className="w-full"
                    size="lg"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Finalizar via WhatsApp
                  </Button>
                  
                  <Button
                    variant="outline"
                    onClick={handleClearCart}
                    className="w-full border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground"
                  >
                    <Trash2 className="mr-2 h-4 w-4" />
                    Limpar Carrinho
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Cart;
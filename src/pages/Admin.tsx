import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Plus, Trash2, Package, TrendingUp, DollarSign, ShoppingBag } from "lucide-react";
import { useStore } from "@/context/StoreContext";
import { useToast } from "@/hooks/use-toast";
import AdminNavigation from "@/components/AdminNavigation";

const Admin = () => {
  const { state, dispatch } = useStore();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    nome: '',
    descricao: '',
    preco: '',
    imagem: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.nome || !formData.descricao || !formData.preco || !formData.imagem) {
      toast({
        title: "Campos obrigatórios",
        description: "Preencha todos os campos",
        variant: "destructive",
      });
      return;
    }

    const newProduct = {
      id: Date.now(),
      nome: formData.nome,
      descricao: formData.descricao,
      preco: parseFloat(formData.preco),
      imagem: formData.imagem
    };

    dispatch({ type: 'ADD_PRODUCT', payload: newProduct });
    
    // Reset form
    setFormData({ nome: '', descricao: '', preco: '', imagem: '' });
    
    toast({
      title: "Produto adicionado!",
      description: `${newProduct.nome} foi adicionado com sucesso`,
    });
  };

  const handleRemoveProduct = (id: number) => {
    dispatch({ type: 'REMOVE_PRODUCT', payload: id });
    toast({
      title: "Produto removido",
      description: "O produto foi removido com sucesso",
    });
  };

  // Calculate stats
  const totalProducts = state.products.length;
  const avgPrice = state.products.length > 0 
    ? state.products.reduce((sum, p) => sum + p.preco, 0) / state.products.length 
    : 0;
  const totalValue = state.products.reduce((sum, p) => sum + p.preco, 0);

  return (
    <div className="min-h-screen bg-background">
      <AdminNavigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Dashboard Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="glass-card hover-lift">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total de Produtos</p>
                  <p className="text-2xl font-bold">{totalProducts}</p>
                </div>
                <Package className="h-8 w-8 text-secondary" />
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card hover-lift">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Preço Médio</p>
                  <p className="text-2xl font-bold">R$ {avgPrice.toFixed(2)}</p>
                </div>
                <TrendingUp className="h-8 w-8 text-accent" />
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card hover-lift">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Valor Total</p>
                  <p className="text-2xl font-bold">R$ {totalValue.toFixed(2)}</p>
                </div>
                <DollarSign className="h-8 w-8 text-premium" />
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card hover-lift">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Itens no Carrinho</p>
                  <p className="text-2xl font-bold">{state.cart.reduce((sum, item) => sum + item.quantidade, 0)}</p>
                </div>
                <ShoppingBag className="h-8 w-8 text-success" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Add Product Form */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plus className="h-5 w-5" />
                Adicionar Novo Produto
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="nome">Nome do Produto</Label>
                  <Input
                    id="nome"
                    value={formData.nome}
                    onChange={(e) => handleInputChange('nome', e.target.value)}
                    placeholder="Ex: Boné Snapback Classic"
                  />
                </div>

                <div>
                  <Label htmlFor="descricao">Descrição</Label>
                  <Textarea
                    id="descricao"
                    value={formData.descricao}
                    onChange={(e) => handleInputChange('descricao', e.target.value)}
                    placeholder="Descreva o produto..."
                    className="resize-none"
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="preco">Preço (R$)</Label>
                  <Input
                    id="preco"
                    type="number"
                    step="0.01"
                    value={formData.preco}
                    onChange={(e) => handleInputChange('preco', e.target.value)}
                    placeholder="0.00"
                  />
                </div>

                <div>
                  <Label htmlFor="imagem">URL da Imagem</Label>
                  <Input
                    id="imagem"
                    type="url"
                    value={formData.imagem}
                    onChange={(e) => handleInputChange('imagem', e.target.value)}
                    placeholder="https://..."
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  <Plus className="mr-2 h-4 w-4" />
                  Adicionar Produto
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Products Management */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5" />
                Gerenciar Produtos ({state.products.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {state.products.length === 0 ? (
                  <div className="text-center py-8">
                    <Package className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <p className="text-muted-foreground">Nenhum produto cadastrado</p>
                  </div>
                ) : (
                  state.products.map((product) => (
                    <div key={product.id} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg hover-lift">
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-sm truncate mb-1">
                          {product.nome}
                        </h4>
                        <p className="text-xs text-muted-foreground truncate mb-2">
                          {product.descricao}
                        </p>
                        <Badge variant="outline" className="text-xs">
                          R$ {product.preco.toFixed(2).replace(".", ",")}
                        </Badge>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleRemoveProduct(product.id)}
                        className="text-destructive hover:text-destructive hover:bg-destructive/10 ml-2 flex-shrink-0"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Current Cart Status */}
        {state.cart.length > 0 && (
          <Card className="glass-card mt-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShoppingBag className="h-5 w-5" />
                Carrinho Atual
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {state.cart.map((item, index) => (
                  <div key={`${item.id}-${index}`} className="flex justify-between items-center p-2 bg-muted/20 rounded">
                    <span className="text-sm">{item.nome}</span>
                    <div className="text-sm">
                      <span className="text-muted-foreground">{item.quantidade}x </span>
                      <span className="font-medium">R$ {(item.preco * item.quantidade).toFixed(2)}</span>
                    </div>
                  </div>
                ))}
                <Separator />
                <div className="flex justify-between items-center font-bold">
                  <span>Total:</span>
                  <span>R$ {state.cart.reduce((sum, item) => sum + (item.preco * item.quantidade), 0).toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Admin;
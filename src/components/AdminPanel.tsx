import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { X, Plus, Trash2, Settings, Package } from "lucide-react";
import { useStore } from "@/context/StoreContext";
import { useToast } from "@/hooks/use-toast";

const AdminPanel = () => {
  const { state, dispatch } = useStore();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    nome: '',
    descricao: '',
    preco: '',
    imagem: ''
  });

  if (!state.isAdminOpen) return null;

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
      id: Date.now(), // Simple ID generation
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

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-40 animate-fade-in"
        onClick={() => dispatch({ type: 'TOGGLE_ADMIN', payload: false })}
      />
      
      {/* Admin Panel */}
      <div className="fixed left-4 top-4 bottom-4 w-96 max-w-[calc(100vw-2rem)] z-50 animate-slide-in-up">
        <Card className="glass-card h-full flex flex-col">
          <CardHeader className="flex-shrink-0">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Painel Admin
              </CardTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => dispatch({ type: 'TOGGLE_ADMIN', payload: false })}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>

          <CardContent className="flex-1 overflow-hidden flex flex-col">
            <div className="flex-1 overflow-y-auto space-y-6">
              {/* Add Product Form */}
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  Adicionar Produto
                </h3>
                
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

                  <Button type="submit" className="w-full">
                    <Plus className="mr-2 h-4 w-4" />
                    Adicionar Produto
                  </Button>
                </form>
              </div>

              <Separator />

              {/* Products List */}
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Package className="h-4 w-4" />
                  Produtos Cadastrados ({state.products.length})
                </h3>
                
                <div className="space-y-3">
                  {state.products.length === 0 ? (
                    <p className="text-muted-foreground text-center py-4">
                      Nenhum produto cadastrado
                    </p>
                  ) : (
                    state.products.map((product) => (
                      <div key={product.id} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg hover-lift">
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-sm truncate">
                            {product.nome}
                          </h4>
                          <Badge variant="outline" className="text-xs mt-1">
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
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default AdminPanel;
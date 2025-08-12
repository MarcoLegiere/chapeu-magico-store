import { Button } from "@/components/ui/button";
import { LogOut, Home, User, Settings } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useToast } from "@/hooks/use-toast";

const AdminNavigation = () => {
  const { state, logout } = useAuth();
  const { toast } = useToast();

  const handleLogout = () => {
    logout();
    toast({
      title: "Logout realizado",
      description: "Você foi desconectado com sucesso",
    });
  };

  const goToStore = () => {
    window.location.href = '/';
  };

  return (
    <nav className="glass-card border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo/Title */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Settings className="h-6 w-6 text-secondary" />
              <h1 className="text-xl font-bold">
                Painel <span className="gradient-text">Admin</span>
              </h1>
            </div>
          </div>

          {/* User Info & Actions */}
          <div className="flex items-center space-x-4">
            {/* User Info */}
            <div className="flex items-center space-x-2 text-sm">
              <User className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium">{state.user?.username}</span>
              <span className="text-muted-foreground">({state.user?.role})</span>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={goToStore}
                className="text-muted-foreground hover:text-secondary"
              >
                <Home className="mr-2 h-4 w-4" />
                Ir para Loja
              </Button>

              <Button
                variant="outline"
                size="sm"
                onClick={handleLogout}
                className="border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground"
              >
                <LogOut className="mr-2 h-4 w-4" />
                Sair
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavigation;
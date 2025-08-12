import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";
import { useStore } from "@/context/StoreContext";

const AdminToggle = () => {
  const { dispatch } = useStore();

  return (
    <Button
      variant="premium"
      size="icon"
      className="fixed bottom-6 right-6 z-30 rounded-full shadow-elegant animate-pulse-glow"
      onClick={() => dispatch({ type: 'TOGGLE_ADMIN' })}
      title="Painel Administrativo"
    >
      <Settings className="h-5 w-5" />
    </Button>
  );
};

export default AdminToggle;
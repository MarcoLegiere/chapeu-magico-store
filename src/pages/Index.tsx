import { StoreProvider } from "@/context/StoreContext";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import Cart from "@/components/Cart";
import AdminPanel from "@/components/AdminPanel";
import AdminToggle from "@/components/AdminToggle";

const Index = () => {
  return (
    <StoreProvider>
      <div className="min-h-screen">
        <Navigation />
        <Hero />
        <ProductGrid />
        <Cart />
        <AdminPanel />
        <AdminToggle />
      </div>
    </StoreProvider>
  );
};

export default Index;

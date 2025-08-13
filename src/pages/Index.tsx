import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import Features from "@/components/Features";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Cart from "@/components/Cart";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ProductGrid />
      <Features />
      <About />
      <Footer />
      <Cart />
    </div>
  );
};

export default Index;

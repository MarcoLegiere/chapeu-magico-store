import { useStore } from "@/context/StoreContext";
import ProductCard from "./ProductCard";

const ProductGrid = () => {
  const { state } = useStore();

  return (
    <section id="produtos" className="py-20 px-4">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nossa <span className="gradient-text">Coleção</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubra nossa seleção premium de barbantes com qualidade excepcional e resistência superior
          </p>
          <div className="h-1 w-24 bg-gradient-secondary mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {state.products.map((product, index) => (
            <div
              key={product.id}
              className="animate-slide-in-up"
              style={{
                animationDelay: `${index * 0.2}s`,
                animationFillMode: 'both'
              }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {state.products.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🌸</div>
            <h3 className="text-2xl font-semibold text-muted-foreground mb-2">
              Nenhum produto encontrado
            </h3>
            <p className="text-muted-foreground">
              Os produtos serão carregados em breve!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
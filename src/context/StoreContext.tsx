import React, { createContext, useContext, useReducer, useEffect } from 'react';

export interface Product {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
}

export interface CartItem {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
}

interface StoreState {
  products: Product[];
  cart: CartItem[];
  isCartOpen: boolean;
}

type StoreAction =
  | { type: 'SET_PRODUCTS'; payload: Product[] }
  | { type: 'ADD_PRODUCT'; payload: Product }
  | { type: 'REMOVE_PRODUCT'; payload: number }
  | { type: 'ADD_TO_CART'; payload: { productId: number; quantity: number } }
  | { type: 'REMOVE_FROM_CART'; payload: number }
  | { type: 'CLEAR_CART' }
  | { type: 'TOGGLE_CART'; payload?: boolean };

const initialState: StoreState = {
  products: [],
  cart: [],
  isCartOpen: false,
};

function storeReducer(state: StoreState, action: StoreAction): StoreState {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return { ...state, products: action.payload };
    
    case 'ADD_PRODUCT':
      const newProducts = [...state.products, action.payload];
      localStorage.setItem('bones_produtos', JSON.stringify(newProducts));
      return { ...state, products: newProducts };
    
    case 'REMOVE_PRODUCT':
      const filteredProducts = state.products.filter(p => p.id !== action.payload);
      localStorage.setItem('bones_produtos', JSON.stringify(filteredProducts));
      return { ...state, products: filteredProducts };
    
    case 'ADD_TO_CART':
      const product = state.products.find(p => p.id === action.payload.productId);
      if (!product) return state;
      
      const existingItem = state.cart.find(item => item.id === action.payload.productId);
      let newCart;
      
      if (existingItem) {
        newCart = state.cart.map(item =>
          item.id === action.payload.productId
            ? { ...item, quantidade: item.quantidade + action.payload.quantity }
            : item
        );
      } else {
        newCart = [...state.cart, {
          id: product.id,
          nome: product.nome,
          preco: product.preco,
          quantidade: action.payload.quantity
        }];
      }
      
      return { ...state, cart: newCart };
    
    case 'REMOVE_FROM_CART':
      return { ...state, cart: state.cart.filter((_, index) => index !== action.payload) };
    
    case 'CLEAR_CART':
      return { ...state, cart: [] };
    
    case 'TOGGLE_CART':
      return { 
        ...state, 
        isCartOpen: action.payload !== undefined ? action.payload : !state.isCartOpen 
      };
    
    default:
      return state;
  }
}

const StoreContext = createContext<{
  state: StoreState;
  dispatch: React.Dispatch<StoreAction>;
} | null>(null);

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(storeReducer, initialState);

  // Load products from localStorage on mount
  useEffect(() => {
    const savedProducts = localStorage.getItem('bones_produtos');
    if (savedProducts) {
      dispatch({ type: 'SET_PRODUCTS', payload: JSON.parse(savedProducts) });
    } else {
      // Default products with our generated images
      const defaultProducts = [
        {
          id: 1,
          nome: "Boné Snapback Classic",
          descricao: "Boné snapback clássico com aba reta e design premium",
          preco: 45.90,
          imagem: "/src/assets/snapback-classic.jpg"
        },
        {
          id: 2,
          nome: "Boné Trucker Vintage",
          descricao: "Boné trucker com tela traseira e estilo vintage autêntico",
          preco: 39.90,
          imagem: "/src/assets/trucker-vintage.jpg"
        },
        {
          id: 3,
          nome: "Boné Dad Hat Minimalista",
          descricao: "Boné dad hat com design minimalista e máximo conforto",
          preco: 35.90,
          imagem: "/src/assets/dad-hat-minimal.jpg"
        }
      ];
      dispatch({ type: 'SET_PRODUCTS', payload: defaultProducts });
      localStorage.setItem('bones_produtos', JSON.stringify(defaultProducts));
    }
  }, []);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};
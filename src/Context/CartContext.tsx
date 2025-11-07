import React, { createContext, useState, useContext, ReactNode } from "react";

// 👇 This defines the shape of a product in your cart
interface Product {
  id: number;
  name: string;
  price: number;
  // You can add more fields if needed: image, quantity, etc.
}

// 👇 This defines what your context will hold
interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
}

// 👇 Create the context (starts empty)
const CartContext = createContext<CartContextType | undefined>(undefined);

// 👇 The provider that wraps your whole app
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// 👇 Custom hook for easy use in components
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

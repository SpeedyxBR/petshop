import React, { createContext, useContext, useState, ReactNode } from "react";
import { CartItem } from "../types";

// Define a interface para o contexto do carrinho, especificando os métodos e dados disponíveis.
interface CartContextType {
  cartItems: CartItem[]; // Lista de itens no carrinho.
  addToCart: (item: Omit<CartItem, "quantity">) => void; // Adiciona um item ao carrinho.
  removeFromCart: (id: number) => void; // Remove um item do carrinho pelo ID.
  clearCart: () => void; // Limpa todos os itens do carrinho.
  updateQuantity: (id: number, quantity: number) => void; // Atualiza a quantidade de um item no carrinho.
  getCartTotal: () => number; // Calcula o valor total do carrinho.
  getCartCount: () => number; // Calcula o número total de itens no carrinho.
}

// Cria o contexto do carrinho com um valor inicial indefinido.
const CartContext = createContext<CartContextType | undefined>(undefined);

// Provedor do contexto do carrinho que encapsula os componentes filhos.
export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]); // Estado para armazenar os itens do carrinho.

  // Adiciona um item ao carrinho. Se o item já existir, incrementa a quantidade.
  const addToCart = (item: Omit<CartItem, "quantity">) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (i) => i.id === item.id && i.type === item.type
      );

      if (existingItem) {
        // Atualiza a quantidade do item existente.
        return prevItems.map((i) =>
          i.id === item.id && i.type === item.type
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      } else {
        // Adiciona um novo item ao carrinho.
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  // Remove um item do carrinho pelo ID.
  const removeFromCart = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Limpa todos os itens do carrinho.
  const clearCart = () => {
    setCartItems([]);
  };

  // Atualiza a quantidade de um item no carrinho. Remove o item se a quantidade for menor que 1.
  const updateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(id);
      return;
    }

    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  // Calcula o valor total do carrinho com base nos preços e quantidades dos itens.
  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  // Calcula o número total de itens no carrinho.
  const getCartCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };

  // Retorna o provedor do contexto com os métodos e dados disponíveis.
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        updateQuantity,
        getCartTotal,
        getCartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Hook personalizado para acessar o contexto do carrinho.
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

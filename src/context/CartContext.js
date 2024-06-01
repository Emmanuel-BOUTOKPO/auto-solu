import React, { createContext, useState, useEffect } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [totalPrice, setTotalPrice] = useState(0);

  // useEffect(() => {
  //   localStorage.setItem('cart', JSON.stringify(cart));
  // }, [cart]);

  useEffect(() => {
    const total = cart.reduce((sum, product) => sum + product.prix * product.quantity, 0);
    setTotalPrice(total);
  }, [cart]);

  const addToCart = product => {
    setCart(prevCart => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const getCartItemCount = () => {
    return cart.length;
  };

  const incrementQuantity = productId => {
    console.log(productId);
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId.id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = productId => {
    setCart(prevCart =>
      prevCart
        .map(item =>
          item.id === productId ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  const removeFromCart = productId => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, incrementQuantity, decrementQuantity,getCartItemCount, removeFromCart, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };

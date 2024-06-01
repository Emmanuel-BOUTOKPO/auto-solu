import React, { createContext, useState, useEffect } from 'react';

const ProductContext = createContext();

const ProductProvider = ({ children }) => {

    const [products, setProducts] = useState(() => {
      const savedProducts = localStorage.getItem('products');
      return savedProducts ? JSON.parse(savedProducts) : [];
    });
    const [filterCategory, setFilterCategory] = useState('');
    const [filterModel, setFilterModel] = useState('');
    const [filterPrice, setFilterPrice] = useState({ min: 0, max: Infinity });
  
  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const addProduct = (product) => {
    setProducts([...products, { ...product, id: products.length + 1 }]);
  };

  const updateProduct = (id, updatedProduct) => {
    setProducts(
      products.map((product) =>
        product.id === id ? { ...product, ...updatedProduct } : product
      )
    );
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const getProduct = (id) => {
    return products.find((product) => product.id === id);
  };

  const getAllProducts = () => {
    return products.filter((product) => {
      return (
        (filterCategory === '' || product.categorie === filterCategory) &&
        (filterModel === '' || product.model === filterModel) &&
        product.prix >= filterPrice.min &&
        product.prix <= filterPrice.max
      );
    });
  };

    // Fonctions pour mettre à jour les filtres
  const updateFilterCategory = (category) => {
    setFilterCategory(category);
  };

  const updateFilterModel = (model) => {
    setFilterModel(model);
  };

  const updateFilterPrice = (min, max) => {
    setFilterPrice({ min, max });
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        addProduct,
        updateProduct,
        deleteProduct,
        getProduct,
        getAllProducts,
        updateFilterCategory,
        updateFilterModel,
        updateFilterPrice
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };

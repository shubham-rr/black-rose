import { useState, useEffect } from 'react';
import { products } from '../data/products';

export const useProducts = () => {
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 500));
        setProductData(products);
        setIsLoading(false);
      } catch (err) {
        setError('Failed to fetch products');
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const getProductById = (id) => {
    return productData.find(product => product.id === id);
  };

  return { products: productData, isLoading, error, getProductById };
};
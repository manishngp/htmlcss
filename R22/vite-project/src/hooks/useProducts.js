import { useState, useEffect, useMemo } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('none');
  const [favorites, setFavorites] = useLocalStorage('productFavs', []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/products.json');
        
        const data = await response.json();
        setProducts(data.products);
       
      } catch (err) {
        console.log(err.message);
        
      }
    };

    fetchProducts();
  }, []);

  const toggleFavorite = (productId) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(productId)) {
        return prevFavorites.filter((id) => id !== productId);
      } else {
        return [...prevFavorites, productId];
      }
    });
  };

  const isFavorite = (productId) => {
    return favorites.includes(productId);
  };

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...products];
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter((product) => 
        product.title.toLowerCase().includes(query)
      );
    }
    
    if (sortOption === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    }
    
    return result;
  }, [products, searchQuery, sortOption]);

  return {
    products: filteredAndSortedProducts,
  
    error,
    searchQuery,
    setSearchQuery,
    sortOption,
    setSortOption,
    favorites,
    toggleFavorite,
    isFavorite,
    favoritesCount: favorites.length
  };
};
import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ProductList from './components/ProductList';
import { useProducts } from './hooks/useProducts';

function App() {
  const {
    products,
   
    searchQuery,
    setSearchQuery,
    sortOption,
    setSortOption,
    toggleFavorite,
    isFavorite,
    favoritesCount,
  } = useProducts();


  return (
    <div>
      <Header favoritesCount={favoritesCount} />
      <main className="container">
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          sortOption={sortOption}
          setSortOption={setSortOption}
        />
        <ProductList
          products={products}
          isFavorite={isFavorite}
          onToggleFavorite={toggleFavorite}
          
        />
      </main>
     
    </div>
  );
}

export default App;
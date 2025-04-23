import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({
  products,
  isFavorite,
  onToggleFavorite,
  loading,
}) => {
 
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          isFavorite={isFavorite(product.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
};

export default ProductList;
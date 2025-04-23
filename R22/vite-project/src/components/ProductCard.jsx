import React from 'react';
import { Heart } from 'lucide-react';

const ProductCard = ({
  product,
  isFavorite,
  onToggleFavorite,
}) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />
        <button
          className="favorite-button"
          onClick={() => onToggleFavorite(product.id)}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart
            className={`favorite-icon ${isFavorite ? 'active' : ''}`}
          />
        </button>
      </div>
      <div className="product-info">
        <h2 className="product-title" title={product.title}>
          {product.title}
        </h2>
        <p className="product-description" title={product.description}>
          {product.description}
        </p>
        <div className="product-footer">
          <span >${product.price.toFixed(2)}</span>
         
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
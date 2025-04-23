import React from 'react';
import { Heart } from 'lucide-react';

const Header = ({ favoritesCount }) => {
  return (
    <header >
      
          <Heart />
          {favoritesCount > 0 && (
            <div className="favorites-badge">
              {favoritesCount}
            </div>
          )}
       
    </header>
  );
};

export default Header;
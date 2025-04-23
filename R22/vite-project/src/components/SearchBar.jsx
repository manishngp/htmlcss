import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({
  searchQuery,
  setSearchQuery,
  sortOption,
  setSortOption,
}) => {
  return (
    <div>
      <div >
        <div className="search-input-wrapper">
          <div className="search-icon">
            <Search />
          </div>
          <input
            type="text"
            className="search-input"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <select
          
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="none">Sort by</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default SearchBar;
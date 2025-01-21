import React from 'react';
import './ProductCategories.css'; // Import the updated CSS

const ProductCategories = ({ categories }) => {
  return (
    <div className="product-categories">
      {categories.newArrival && (
        <span className="category-badge category-new">New Arrival</span>
      )}
      {categories.hotDeal && (
        <span className="category-badge category-hot">Hot Deal</span>
      )}
      {categories.popularItem && (
        <span className="category-badge category-popular">Popular Item</span>
      )}
    </div>
  );
};

export default ProductCategories;
import React from "react";
import { Button } from 'react-bootstrap';
import defaultCamera from "../../assets/brand-logos/default.png";
import logos from "../../assets/brand-logos/brand-logos";
import { Link } from 'react-router-dom';

import "./ProductCard.css";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const getBrandLogo = (brand) => {
    return logos[brand.charAt(0).toUpperCase() + brand.slice(1).toLowerCase()] || null;
  };

  return (
    <Link to={`/products/${product.id}`}>
      <div className="product-card">
        <div className="product-content">
          <div className="product-image">
            <img
              src={product.image || defaultCamera}
              alt={product.name}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = defaultCamera;
              }}
            />
          </div>
          <div className="product-details">
            <div className="product-brand-logo">
              {getBrandLogo(product.brand) && (
                <img src={getBrandLogo(product.brand)} alt={product.brand} />
              )}
            </div>
            <p className="product-name">{product.name}</p>
          </div>
        </div>
        <div className="product-footer">
          <p className="product-price">${product.price.toFixed(2)}</p>
          <Button variant="dark" size="sm" className="action-button">
            Add to Cart
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
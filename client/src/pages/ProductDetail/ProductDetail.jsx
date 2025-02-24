import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProducts } from '../../hooks/useProducts';
import ProductCategories from './components/ProductCategories/ProductCategories';
import { Button } from 'react-bootstrap';
import defaultCamera from "../../assets/brand-logos/default.png";
import logos from "../../assets/brand-logos/brand-logos";
import { FiMinus, FiPlus } from 'react-icons/fi';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, isLoading, error, getProductById } = useProducts();
  const [quantity, setQuantity] = useState(1);

  const product = getProductById(id);

  const getBrandLogo = (brand) => {
    return logos[brand.charAt(0).toUpperCase() + brand.slice(1).toLowerCase()] || null;
  };

  if (isLoading) {
    return (
      <div className="product-detail-container">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="product-detail-container">
        <div className="text-center text-red-500">{error}</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="product-detail-container text-center">
        <h2 className="text-xl mb-4">Product not found</h2>
        <Button variant="dark" onClick={() => navigate('/products')}>
          Back to Products
        </Button>
      </div>
    );
  }

  return (
    <>
      <div className="product-detail-container">
        <div className="product-detail-grid">
          {/* Product Image Section */}
          <div className="product-detail-image">
            <img
              src={product.image || defaultCamera}
              alt={product.name}
              className="product-detail-image-img"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = defaultCamera;
              }}
            />
          </div>

          {/* Product Info Section */}
          <div className="product-detail-info">


            <h1 className="product-detail-name">{product.name}</h1>

            <div className="product-detail-brand">
              {getBrandLogo(product.brand) && (
                <img
                  src={getBrandLogo(product.brand)}
                  alt={product.brand}
                  className="product-detail-brand-img"
                />
              )}
            </div>

            <ProductCategories categories={product.categories} />
            <div className="product-detail-price">
              ${product.price.toFixed(2)}
            </div>

            <div className="product-detail-purchase-controls">
              <div className="product-detail-quantity-selector">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="product-detail-quantity-button"
                  aria-label="Decrease quantity"
                >
                  <FiMinus />
                </button>
                <span className="product-detail-quantity-display">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="product-detail-quantity-button"
                  aria-label="Increase quantity"
                >
                  <FiPlus />
                </button>
              </div>

              <Button
                variant="dark"
                size="lg"
                className="product-detail-add-to-cart-button"
              >
                Add to Cart
              </Button>
              <nav className="product-detail-nav">
                <Button
                  variant="link"
                  className="back-to-products-button"
                  size='lg'
                  onClick={() => navigate('/products')}
                >
                  View all products
                </Button>
              </nav>
            </div>
          </div>
        </div>


      </div>
    </>
  );
};

export default ProductDetail;
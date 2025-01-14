import React from "react";
import { Button } from 'react-bootstrap';
import defaultCamera from "../../assets/default_camera.jpeg";
import CanonLogo from "../../assets/brand-logos/Canon.svg";
import NikonLogo from "../../assets/brand-logos/Nikon.jpg";
import FujifilmLogo from "../../assets/brand-logos/Fujifilm.png";
import SonyLogo from "../../assets/brand-logos/Sony.svg";
import PanasonicLogo from "../../assets/brand-logos/Panasonic.svg";
import OlympusLogo from "../../assets/brand-logos/Olympus.svg";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const getBrandLogo = (brand) => {
    const logos = {
      Canon: CanonLogo,
      Nikon: NikonLogo,
      Fujifilm: FujifilmLogo,
      Sony: SonyLogo,
      Panasonic: PanasonicLogo,
      Olympus: OlympusLogo,
    };
    return logos[brand] || null;
  };

  return (
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
  );
};

export default ProductCard;
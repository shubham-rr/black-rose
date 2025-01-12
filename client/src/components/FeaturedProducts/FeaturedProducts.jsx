import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import defaultCamera from '../../assets/default_camera.jpeg';
import CanonLogo from '../../assets/brand-logos/Canon.svg';
import NikonLogo from '../../assets/brand-logos/Nikon.jpg';
import FujifilmLogo from '../../assets/brand-logos/Fujifilm.png';
import SonyLogo from '../../assets/brand-logos/Sony.svg';
import PanasonicLogo from '../../assets/brand-logos/Panasonic.svg';
import OlympusLogo from '../../assets/brand-logos/Olympus.svg';
import './FeaturedProducts.css';

const FeaturedProducts = ({ title, products, viewAllLink = '/products' }) => {
  const getBrandLogo = (brand) => {
    const logos = {
      'Canon': CanonLogo,
      'Nikon': NikonLogo,
      'Fujifilm': FujifilmLogo,
      'Sony': SonyLogo,
      'Panasonic': PanasonicLogo,
      'Olympus': OlympusLogo,
      // Add more brand logos as needed
    };
    
    return logos[brand] || null;
  };

  return (
    <section className="product-section">
      <Container>
        <h2 className="section-title">{title}</h2>
        <Row className="product-grid">
          {products.map((product) => (
            <Col key={product.id} xs={12} sm={6} md={4} lg={3} className="product-item">
              <div className="product-card">
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
                  <div className="brand-logo">
                    {getBrandLogo(product.brand) && (
                      <img 
                        src={getBrandLogo(product.brand)} 
                        alt={product.brand}
                      />
                    )}
                  </div>
                  <p className="product-name">{product.name}</p>
                  <p className="product-price">${product.price.toFixed(2)}</p>
                </div>
              </div>
            </Col>
          ))}
          <Col xs={12} sm={6} md={4} lg={3} className="product-item">
            <Link to={viewAllLink} className="browse-all-card">
              <div className="browse-all-content">
                <h3>Browse All</h3>
                <span className="arrow">→</span>
              </div>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FeaturedProducts; 
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProductCard from '../../../../components/ProductCard/ProductCard';
import './FeaturedProducts.css';

const FeaturedProducts = ({ title, products, viewAllLink = '/products' }) => {
  return (
    <section className="product-section">
      <Container>
        <h2 className="section-title">{title}</h2>
        <Row className="product-grid">
          {products.map((product) => (
            <Col key={product.id} xs={12} sm={6} md={4} lg={3} className="product-item">
              <ProductCard product={product} />
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
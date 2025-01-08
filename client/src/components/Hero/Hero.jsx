import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import './hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <Container className="position-relative">
        <Row className="align-items-center">
          <Col lg={8} className="hero-content text-white">
            <h1 className="hero-title">Capture Every Moment</h1>
            <p className="hero-subtitle">Professional Camera Equipment & Expert Advice</p>
            <p className="hero-description">
              Discover our extensive range of cameras, lenses, and accessories from leading brands.
              Whether you're a professional photographer or just starting out, we have the perfect gear for you.
            </p>
            <div className="hero-cta">
              <Button variant="light" size="lg" className="me-3">Shop Now</Button>
              <Button variant="outline-light" size="lg">View Brands</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;

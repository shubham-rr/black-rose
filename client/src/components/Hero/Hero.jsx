import React from 'react';
import './hero.css';

const Hero = (props) => {
  const handleScroll = () => {
    const heroSection = document.querySelector('.hero-image');
    const heroHeight = heroSection?.offsetHeight || 0;
    
    window.scrollTo({
      top: heroHeight - 80,
      behavior: 'smooth'
    });
  };

  return (
    <div className="hero-image">
      <div className="hero-text">
        <h1>{props.title}</h1>
        <p>{props.subtitle}</p>
        <button 
          className="scroll-btn"
          onClick={handleScroll}
          aria-label="Scroll to content"
        >
          <i className="material-icons">keyboard_arrow_down</i>
        </button>
      </div>
    </div>
  );
};

export default Hero;
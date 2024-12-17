import React from 'react';
import './hero.css';

const Hero = (props) => {
  return (
    <div class="hero-image">
            <div class="hero-text">
                <h1>{props.title}</h1>
                <p>{props.subtitle}</p>
                <button class="scroll-btn">
                    <i class="material-icons">keyboard_arrow_down</i>
                </button>
            </div>
    </div>
  );
};

export default Hero;

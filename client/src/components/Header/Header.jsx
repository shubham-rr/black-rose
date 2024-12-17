import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header>
      <div className="navbar">
        <h1>
          <a href="#">BLACK ROSE</a>
        </h1>
        <ul>
          <li>
            <a href="#">
              <i className="material-icons">account_circle</i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="material-icons">shopping_cart</i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="material-icons">search</i>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

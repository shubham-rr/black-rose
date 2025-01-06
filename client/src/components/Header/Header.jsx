import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="navbar">
        <h1>
          <Link to="/">BLACK ROSE</Link>
        </h1>
        <ul>
          <li>
            <a href="#">
              <i className="material-icons">account_circle</i>
            </a>
          </li>
          <li>
            {/* Link to the Shopping Cart page */}
            <Link to="/shopping-cart">
              <i className="material-icons">shopping_cart</i>
            </Link>
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

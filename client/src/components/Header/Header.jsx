import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Form, InputGroup } from 'react-bootstrap';
import { MdAccountCircle, MdShoppingCart, MdStore } from "react-icons/md";
import './Header.css';

function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  return (
    <Navbar bg="dark" expand="lg" data-bs-theme="dark">
      <div className="container">
        <Navbar.Brand as={Link} to="/">
          <img
            src="/logo.svg"
            alt="Black Rose"
            className="navbar-logo"
            width="auto"
            height="40"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form className="search-form" onSubmit={handleSearch}>
            <InputGroup>
              <Form.Control
                type="search"
                placeholder="Search entire store here..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              <InputGroup.Text 
                className="search-button"
                onClick={handleSearch}
              >
                <span className="material-icons">search</span>
              </InputGroup.Text>
            </InputGroup>
          </Form>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item me-3">
              <Link className="nav-link" to="/products">
                <MdStore />
                <span className="nav-text">Shop</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/shopping-cart" aria-label="Shopping Cart">
              <MdShoppingCart /> 
                <span className="nav-text">Cart</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login" aria-label="Login">
                <MdAccountCircle />
                <span className="nav-text">Account</span>
              </Link>
            </li>
          </ul>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Header;


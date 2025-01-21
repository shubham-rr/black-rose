import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

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
            

            <li className="nav-item">
            <a href="#" onClick={toggleDropdown}>
              <i className="material-icons">account_circle</i>
            </a>
            {showDropdown && (
              <div className="dropdown-menu">
                {/* <Link to="/account-dashboard">Account Dashboard</Link> */}
                <Link to="/account-info">Account Information</Link>
                <Link to="/address-book">Address Book</Link>
                <Link to="/orders">My Orders</Link>
                <Link to="/wishlist">My Wishlist</Link>
                {/* <Link to="/nikon-school">Nikon School Attendance</Link>
                <Link to="/newsletter">Newsletter Subscriptions</Link> */}
                <Link to="/logout">Logout</Link>
              </div>
            )}
          </li>
          </ul>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Header;

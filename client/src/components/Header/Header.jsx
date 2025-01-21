import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <header>
      <div className="navbar">
        <h1>
          <Link to="/">BLACK ROSE</Link>
        </h1>
        <ul>
          <li className="dropdown">
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
          <li>
            <Link to="/shopping-cart">
              <i className="material-icons">shopping_cart</i>
            </Link>
          </li>
          <li>
            <Link to="/search">
              <i className="material-icons">search</i>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;


// import React from "react";
// import { Link } from "react-router-dom";
// import "./header.css";

// const Header = () => {
//   return (
//     <header>
//       <div className="navbar">
//         <h1>
//           <Link to="/">BLACK ROSE</Link>
//         </h1>
//         <ul>
//           <li>
//             <a href="#">
//               <i className="material-icons">account_circle</i>
//             </a>
//           </li>
//           <li>
//             {/* Link to the Shopping Cart page */}
//             <Link to="/shopping-cart">
//               <i className="material-icons">shopping_cart</i>
//             </Link>
//           </li>
//           <li>
//             {/* Link to the Search page */}
//             <Link to="/search">
//               <i className="material-icons">search</i>
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </header>
//   );
// };

// export default Header;

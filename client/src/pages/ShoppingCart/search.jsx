import React, { useState } from "react";
import "./search.css";

const SearchPage = () => {
  // Sample product data
  const [products] = useState([
    {
      id: 1,
      name: "Canon EOS R5 Camera",
      price: 3899,
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Nikon Z6 II Camera",
      price: 1999,
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Sony Alpha a7 IV",
      price: 2499,
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Fujifilm X-T4",
      price: 1699,
      imageUrl: "https://via.placeholder.com/150",
    },
  ]);

  // State for search query
  const [searchQuery, setSearchQuery] = useState("");

  // Filter products based on search query
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="search-container">
      <h1>Product Search</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="search-results">
        {filteredProducts.length === 0 ? (
          <p>No products found.</p>
        ) : (
          <div className="product-list">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-item">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="product-image"
                />
                <div className="product-details">
                  <h2>{product.name}</h2>
                  <p>Price: ${product.price.toFixed(2)}</p>
                  <button className="add-to-cart-button">Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;

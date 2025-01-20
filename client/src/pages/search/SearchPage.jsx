import React, { useState, useEffect } from "react";
import "./SearchPage.css";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({
    brands: [],
    minPrice: "",
    maxPrice: "",
  });
  const [selectedProduct, setSelectedProduct] = useState(null); // For product description modal

  // Sample product data
  const allProducts = [
    { id: 1, name: "Sony Alpha 7 IV Camera", price: 2499, description: "A high-end full-frame mirrorless camera perfect for professionals.", imageUrl: "https://amateurphotographer.com/wp-content/uploads/sites/7/2021/10/Sony_A7_IV_in-hand-PA180998-acr.jpg?resize=1536,1024" },
    { id: 2, name: "Fujifilm X-T4 Camera", price: 1699, description: "Compact mirrorless camera with exceptional video quality.", imageUrl: "https://www.dpreview.com/files/p/articles/2403957348/DSC_0595.acr.jpeg" },
    { id: 3, name: "Canon EOS R6", price: 2799, description: "Fast autofocus, great image quality, and low-light performance.", imageUrl: "data:image/jpeg;base64,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" },
    { id: 4, name: "Nikon Z7 II", price: 2999, description: "A versatile mirrorless camera with excellent build quality.", imageUrl: "https://via.placeholder.com/150" },
    { id: 5, name: "Panasonic Lumix S5", price: 1999, description: "Hybrid mirrorless camera for both video and stills.", imageUrl: "https://via.placeholder.com/150" },
    { id: 6, name: "Leica Q2 Monochrom", price: 5999, description: "Luxury full-frame digital camera with a monochrome sensor.", imageUrl: "https://via.placeholder.com/150" },
    { id: 7, name: "Olympus OM-D E-M1", price: 1799, description: "Compact and lightweight mirrorless camera, great for travel.", imageUrl: "https://via.placeholder.com/150" },
    { id: 8, name: "GoPro HERO 10", price: 499, description: "Durable action camera for adventure and sports photography.", imageUrl: "https://via.placeholder.com/150" },
    { id: 9, name: "DJI Pocket 2", price: 349, description: "Small and portable camera with smooth stabilization for vlogs.", imageUrl: "https://via.placeholder.com/150" },
    { id: 10, name: "Canon PowerShot G7", price: 749, description: "Compact point-and-shoot camera with a 4K video recording feature.", imageUrl: "https://via.placeholder.com/150" },
    { id: 11, name: "Sony RX100 VII", price: 1299, description: "Premium compact camera with a 24-200mm zoom lens.", imageUrl: "https://via.placeholder.com/150" },
    { id: 12, name: "Panasonic Lumix GH5", price: 1399, description: "A top-tier mirrorless camera for high-quality video recording.", imageUrl: "https://via.placeholder.com/150" },
    { id: 13, name: "Fujifilm GFX 100S", price: 5999, description: "Medium format mirrorless camera for ultimate image quality.", imageUrl: "https://via.placeholder.com/150" },
    { id: 14, name: "Leica M10-P", price: 7999, description: "High-end rangefinder camera with manual controls.", imageUrl: "https://via.placeholder.com/150" },
    { id: 15, name: "Nikon D850", price: 2999, description: "Full-frame DSLR with 45.7MP and excellent low-light performance.", imageUrl: "https://via.placeholder.com/150" },
    { id: 16, name: "Sony Alpha 6400", price: 899, description: "Compact and versatile mirrorless camera with 4K video.", imageUrl: "https://via.placeholder.com/150" },
    { id: 17, name: "Canon EOS M50 Mark II", price: 699, description: "Affordable mirrorless camera with a flip-out screen.", imageUrl: "https://via.placeholder.com/150" },
    { id: 18, name: "DJI Osmo Action", price: 199, description: "Action camera with front screen for vlogging.", imageUrl: "https://via.placeholder.com/150" },
    { id: 19, name: "GoPro HERO 9 Black", price: 399, description: "Rugged action camera with 5K video and HyperSmooth stabilization.", imageUrl: "https://via.placeholder.com/150" },
    { id: 20, name: "Panasonic Lumix TZ200", price: 649, description: "Compact travel camera with a 15x zoom lens.", imageUrl: "https://via.placeholder.com/150" },
    { id: 21, name: "Olympus PEN E-PL10", price: 549, description: "Stylish mirrorless camera with great image quality and portability.", imageUrl: "https://via.placeholder.com/150" },
    { id: 22, name: "Kodak PIXPRO AZ401", price: 249, description: "Affordable bridge camera with a 40x optical zoom.", imageUrl: "https://via.placeholder.com/150" },
    { id: 23, name: "Sony A6100", price: 748, description: "Compact mirrorless camera with fast autofocus and 4K video.", imageUrl: "https://via.placeholder.com/150" },
    { id: 24, name: "Fujifilm X-T30", price: 999, description: "Compact mirrorless camera with superb image quality.", imageUrl: "https://via.placeholder.com/150" },
    { id: 25, name: "Leica SL2", price: 4999, description: "Professional mirrorless camera with 47MP full-frame sensor.", imageUrl: "https://via.placeholder.com/150" },
    { id: 26, name: "Canon EOS-1D X Mark III", price: 6499, description: "Flagship DSLR with fast performance and advanced features.", imageUrl: "https://via.placeholder.com/150" },
    { id: 27, name: "Nikon Z6 II", price: 1999, description: "Well-rounded mirrorless camera with 4K video recording.", imageUrl: "https://via.placeholder.com/150" },
    { id: 28, name: "Sony A7R IV", price: 2999, description: "High-resolution full-frame mirrorless camera for professionals.", imageUrl: "https://via.placeholder.com/150" },
    { id: 29, name: "Ricoh GR III", price: 899, description: "Compact and pocketable camera with a large APS-C sensor.", imageUrl: "https://via.placeholder.com/150" },
    { id: 30, name: "Canon EOS Rebel T7i", price: 749, description: "Entry-level DSLR with a 24.2MP sensor and intuitive controls.", imageUrl: "https://via.placeholder.com/150" },
    { id: 31, name: "Nikon D7500", price: 899, description: "Mid-range DSLR with 4K UHD video recording.", imageUrl: "https://via.placeholder.com/150" },
    { id: 32, name: "GoPro HERO 8 Black", price: 299, description: "Compact action camera with 4K video and advanced features.", imageUrl: "https://via.placeholder.com/150" },
    { id: 33, name: "Panasonic Lumix FZ1000", price: 697, description: "Bridge camera with a large sensor and 16x optical zoom.", imageUrl: "https://via.placeholder.com/150" },
    { id: 34, name: "Fujifilm X100V", price: 1399, description: "Compact, high-quality camera with a classic design.", imageUrl: "https://via.placeholder.com/150" },
    { id: 35, name: "DJI Mavic Air 2", price: 799, description: "Compact drone with 4K camera and 34-minute flight time.", imageUrl: "https://via.placeholder.com/150" },
    { id: 36, name: "Apple iPhone 13 Pro Max", price: 1099, description: "Smartphone with excellent camera system and 5G capabilities.", imageUrl: "https://via.placeholder.com/150" },
    { id: 37, name: "Samsung Galaxy S21 Ultra", price: 1199, description: "Flagship smartphone with a powerful camera system.", imageUrl: "https://via.placeholder.com/150" },
    { id: 38, name: "GoPro HERO 7 Black", price: 199, description: "Reliable action camera with 4K video and voice control.", imageUrl: "https://via.placeholder.com/150" },
    { id: 39, name: "Fujifilm X-T2", price: 899, description: "Compact, retro-styled mirrorless camera with 4K video.", imageUrl: "https://via.placeholder.com/150" },
    { id: 40, name: "Canon EOS 90D", price: 1199, description: "Versatile DSLR with 4K UHD video and fast autofocus.", imageUrl: "https://via.placeholder.com/150" },
    { id: 41, name: "Nikon Coolpix P1000", price: 999, description: "Bridge camera with an astonishing 125x optical zoom.", imageUrl: "https://via.placeholder.com/150" },
    { id: 42, name: "Sony FX3", price: 3799, description: "Cinema camera with 4K video and compact, lightweight design.", imageUrl: "https://via.placeholder.com/150" },
    { id: 43, name: "Panasonic Lumix S1", price: 2499, description: "Full-frame mirrorless camera with excellent video capabilities.", imageUrl: "https://via.placeholder.com/150" },
    { id: 44, name: "Olympus OM-D E-M5 Mark III", price: 1199, description: "Compact mirrorless camera with high image quality and in-body stabilization.", imageUrl: "https://via.placeholder.com/150" },
    { id: 45, name: "Leica D-Lux 7", price: 1199, description: "Compact camera with a large sensor and superb image quality.", imageUrl: "https://via.placeholder.com/150" },
    { id: 46, name: "Sony ZV-1", price: 748, description: "Vlogging camera with a flip-out screen and excellent video quality.", imageUrl: "https://via.placeholder.com/150" },
    { id: 47, name: "Canon EOS M6 Mark II", price: 849, description: "Compact and portable mirrorless camera with 4K video recording.", imageUrl: "https://via.placeholder.com/150" },
    { id: 48, name: "Ricoh Theta Z1", price: 999, description: "360-degree camera with 4K video recording and professional-grade quality.", imageUrl: "https://via.placeholder.com/150" },
    { id: 49, name: "Nikon P950", price: 799, description: "Bridge camera with 83x optical zoom and 4K UHD video.", imageUrl: "https://via.placeholder.com/150" },
    { id: 50, name: "DJI Air 2S", price: 999, description: "Drone with a 1-inch sensor and 5.4K video capture.", imageUrl: "https://via.placeholder.com/150" },
  ];
  
    // Add more products as needed

  // Extract unique brands from products
  const brands = Array.from(
    new Set(allProducts.map((product) => product.name.split(" ")[0]))
  );

  const filterProducts = () => {
    let filteredResults = allProducts.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Apply brand filters
    if (filters.brands.length > 0) {
      filteredResults = filteredResults.filter((product) =>
        filters.brands.includes(product.name.split(" ")[0])
      );
    }

    // Apply price filters
    if (filters.minPrice) {
      filteredResults = filteredResults.filter(
        (product) => product.price >= parseFloat(filters.minPrice)
      );
    }
    if (filters.maxPrice) {
      filteredResults = filteredResults.filter(
        (product) => product.price <= parseFloat(filters.maxPrice)
      );
    }

    return filteredResults;
  };

  const handleSearch = () => {
    const filteredResults = filterProducts();
    setSearchResults(filteredResults.slice(0, page * 5));
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
    const filteredResults = filterProducts();
    setSearchResults((prevResults) => [
      ...prevResults,
      ...filteredResults.slice(prevResults.length, prevResults.length + 5),
    ]);
  };

  const handleFilterChange = (e) => {
    const { name, value, checked, type } = e.target;
    if (name === "brands") {
      let updatedBrands = [...filters.brands];
      if (checked) {
        updatedBrands.push(value);
      } else {
        updatedBrands = updatedBrands.filter((brand) => brand !== value);
      }
      setFilters((prev) => ({ ...prev, brands: updatedBrands }));
    } else {
      setFilters((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product); // Show product description
  };

  const handleCloseModal = () => {
    setSelectedProduct(null); // Close product description modal
  };

  useEffect(() => {
    handleSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters, page]);

  return (
    <div className="cart-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>

      {/* Filter Section */}
      <div className="filters">
        <h3>Filters</h3>
        <div className="filter-group">
          <h4>Brand</h4>
          {brands.map((brand) => (
            <label key={brand}>
              <input
                type="checkbox"
                name="brands"
                value={brand}
                checked={filters.brands.includes(brand)}
                onChange={handleFilterChange}
              />
              {brand}
            </label>
          ))}
        </div>
        <div className="filter-group">
          <h4>Price Range</h4>
          <label>
            Min Price:
            <input
              type="number"
              name="minPrice"
              value={filters.minPrice}
              onChange={handleFilterChange}
              placeholder="0"
            />
          </label>
          <label>
            Max Price:
            <input
              type="number"
              name="maxPrice"
              value={filters.maxPrice}
              onChange={handleFilterChange}
              placeholder="10000"
            />
          </label>
        </div>
      </div>

      {searchResults.length > 0 ? (
        <div className="cart-items">
          {searchResults.map((item) => (
            <div key={item.id} className="cart-item" onClick={() => handleProductClick(item)}>
              <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h2>{item.name}</h2>
                <p>Price: ${item.price.toFixed(2)}</p>
                <button className="add-to-cart-button">Add to Cart</button>
              </div>
            </div>
          ))}
          {searchResults.length < allProducts.length && (
            <button className="load-more-button" onClick={handleLoadMore}>
              Load More
            </button>
          )}
        </div>
      ) : (
        <p>No results found. Try searching for something else.</p>
      )}

      {/* Product Description Modal */}
      {selectedProduct && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={handleCloseModal}>X</button>
            <img src={selectedProduct.imageUrl} alt={selectedProduct.name} className="modal-image" />
            <h2>{selectedProduct.name}</h2>
            <p>{selectedProduct.description}</p>
            <p>Price: ${selectedProduct.price.toFixed(2)}</p>
            <button className="add-to-cart-button">Add to Cart</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchPage;

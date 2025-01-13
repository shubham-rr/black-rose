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
    { id: 3, name: "Canon EOS R6", price: 2799, description: "Fast autofocus, great image quality, and low-light performance.", imageUrl: "https://amateurphotographer.com/wp-content/uploads/sites/7/2023/06/Canon_EOS_R6_Mark_II-01.jpg"},
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

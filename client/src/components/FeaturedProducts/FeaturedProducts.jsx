import { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './featured-products.css';

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1280 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 1280, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  // Mock data
  const featuredProducts = [
    {
      id: 1,
      name: "Product 1",
      price: 99.99,
      image: "https://picsum.photos/id/454/1080/720",
      description: "Description for product 1"
    },
    {
      id: 2,
      name: "Product 2",
      price: 149.99,
      image: "https://picsum.photos/id/823/1080/720",
      description: "Description for product 2"
    },
    {
      id: 3,
      name: "Product 3",
      price: 149.99,
      image: "https://picsum.photos/id/250/1080/720",
      description: "Description for product 3"
    },
    {
      id: 4,
      name: "Product 4",
      price: 149.99,
      image: "https://picsum.photos/id/435/1080/720",
      description: "Description for product 4"
    },
    {
      id: 5,
      name: "Product 5",
      price: 149.99,
      image: "https://picsum.photos/id/250/1080/720",
      description: "Description for product 5"
    },
    // Add more products as needed
  ];

  useEffect(() => {
    // Simulate API call
    const fetchFeaturedProducts = async () => {
      try {
        // Replace with actual API call
        setProducts(featuredProducts);
        setIsLoading(false);
      } catch (err) {
        setError('Failed to fetch featured products');
        setIsLoading(false);
      }
    };

    fetchFeaturedProducts();
  }, []);

  if (isLoading) return <div className="featured-products-loading">Loading...</div>;
  if (error) return <div className="featured-products-error">{error}</div>;

  return (
    <section className="featured-products">
      <h2 className="featured-products-title">Featured Products</h2>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={window.innerWidth < 768 ? true : false}  // Autoplay for mobile
        keyBoardControl={true}
        draggable={true}
        swipeable={true}
        customTransition="transform 300ms ease-in-out"
        transitionDuration={300}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding"
        centerMode={false}
        partialVisible={false}
      >

        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <p className="product-price">${product.price.toFixed(2)}</p>
              <button className="product-button">Add to Cart</button>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default FeaturedProducts;

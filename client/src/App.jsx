import { Routes, Route } from 'react-router-dom';
import ScrollToTop from "react-scroll-to-top";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Landing from "./pages/Landing/Landing";
import ProductsPage from './pages/ProductsPage/ProductsPage';
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import ContactUs from "./pages/contact/ContactUs";
import Login from './pages/login/Login';
import Product from './pages/Product';
import ProductDetail from './pages/ProductDetail/ProductDetail';

function App() {
  return (
    <>
      <ScrollToTop 
                smooth={true}
                style={{ backgroundColor: 'var(--accent)' }} 
            />
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:productId" element={<Product />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

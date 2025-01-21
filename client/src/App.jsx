import { Routes, Route } from 'react-router-dom';
import ScrollToTop from "react-scroll-to-top";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Landing from "./pages/Landing/Landing";
import ProductsPage from './pages/ProductsPage/ProductsPage';
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import ContactUs from "./pages/Contact/ContactUs";

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
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

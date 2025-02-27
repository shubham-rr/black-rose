import { Routes, Route } from 'react-router-dom';
import ScrollToTop from "react-scroll-to-top";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Landing from "./pages/Landing/Landing";
import ProductsPage from './pages/ProductsPage/ProductsPage';
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import SearchPage from "./pages/search/SearchPage";
import ContactUs from "./pages/search/contact/ContactUs";

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
        <Route path="/search" element={<SearchPage />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

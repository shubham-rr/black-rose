import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import FeaturedProducts from "./components/FeaturedProducts/FeaturedProducts";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import SearchPage from "./pages/search/SearchPage";
import ContactUs from "./pages/search/contact/ContactUs";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/"
          element={
            <>
            <Hero
                title="ALL THINGS CAMERAS"
                subtitle="Capture Life's Moments with Professional Grade Equipment"
            />
            <FeaturedProducts />
            </>} />
            
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/contact-us" element={<ContactUs />} />
         
      </Routes>
      <Footer />
    </>
  );
}

export default App;

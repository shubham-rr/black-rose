import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import FeaturedProducts from "./components/FeaturedProducts/FeaturedProducts";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";

function App() {
  return (
    <><Header />
    <Routes>
      <Route
        path="/"
        element={<>
          <Hero
            title="ALL THINGS CAMERAS"
            subtitle="Capture Life's Moments with Professional Grade Equipment" />
          <FeaturedProducts />
        </>} />
      <Route path="/shopping-cart" element={<ShoppingCart />} />
    </Routes>
    <Footer /></>
    
  );
}

export default App;

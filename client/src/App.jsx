import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import FeaturedProducts from "./components/FeaturedProducts/FeaturedProducts";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import SearchPage from "./pages/search/SearchPage";

function App() {
  return (
<<<<<<< HEAD
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
      </Routes>
      <Footer />
    </>
=======
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
    
>>>>>>> fdd464b67857ac8ddd7bb2cd84cb441d4ecedf0c
  );
}

export default App;

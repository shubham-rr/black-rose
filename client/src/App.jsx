import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Landing from "./pages/Landing/Landing";
// import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
// import SearchPage from "./pages/search/SearchPage";

function App() {
  return (
    <>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          {/* <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/search" element={<SearchPage />} /> */}
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;

import React from "react";
import Home from "./Components/Home";
import About from "./Pages/About";
import Footer from "./Components/Footer";
import SidebarNavbar from "./Components/SidebarNavbar";
import Franchises from "./Pages/Franchises";
import Menu from "./Pages/Menu";
import CartPage from "./Pages/CartPage";
import ProductDetails from "./Pages/ProductDetails";
import { Routes, Route } from "react-router-dom";
import Checkout from "./Pages/Checkout";
import Contactpage from "./Pages/Contactpage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/footer" element={<Footer />} />
      <Route path="/franchises" element={<Franchises />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/productdetails/:id" element={<ProductDetails />} />
      <Route path="/contact" element={<Contactpage />} />
      <Route path="/sidebar" element={<SidebarNavbar />} />
    </Routes>
  );
};

export default App;

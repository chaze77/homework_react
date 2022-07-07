import React from "react";
import { Route, Routes } from "react-router-dom";


import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contacts";
import Cart from "./pages/Cart";
// import NotFound from "./pages/NotFound";
import AddProduct from "./pages/AddProduct";
import ProductCard from "./components/ProductCard/ProductCard";
import ProductsList from "./pages/ProductList";
import EditProduct from "./pages/EditProduct";
import Details from "./pages/Details";


const Routing = () => {
  return (
    <Routes>
      <Route path="/add" element={<AddProduct />} />
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contacts" element={<Contact />} />
      <Route path="/cart" element={<Cart />} />
      {/* <Route path="/*" element={<NotFound />} /> */}
      <Route path="/products" element={<ProductCard/>} />
      <Route path="/list" element={<ProductsList />} />
      <Route path="/edit/:id" element={<EditProduct />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  );
};

export default Routing;

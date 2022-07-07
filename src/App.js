import React from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

//! Components
import Header from "./components/Header/Header";
import ProductsContextProvider from "./Context/ProductsContext";

//! Pages

import Routing from "./Rounting";

function App() {
  return (
    <ProductsContextProvider>
      <BrowserRouter>
        <Header />
        <Routing />
      </BrowserRouter>
    </ProductsContextProvider>
  );
}

export default App;

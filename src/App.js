import React from "react";
import { BrowserRouter } from "react-router-dom";

//! Components
import Header from "./components/Header/Header";
import CartContextProvider from "./cartContext";
import ProductsContextProvider from "./Context/ProductsContext";

//! Pages

import Routing from "./Rounting";

function App() {
  return (
    <CartContextProvider>
      <ProductsContextProvider>
        <BrowserRouter>
          <Header />
          <Routing />
        </BrowserRouter>
      </ProductsContextProvider>
    </CartContextProvider>
  );
}

export default App;

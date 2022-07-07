import React, { useContext, useEffect, useState } from "react";
import ProductCard from "../components/ProductCard/ProductCard";
import { productsContext } from "../Context/ProductsContext";
import { Link } from 'react-router-dom'

const ProductsList = () => {
     <Link className='nav__link' to="/list">ProductList</Link> 
  const { products, getProducts } = useContext(productsContext);

    useEffect(() => {
    getProducts();
  }, []);
  
  return (

    <section className="productlist"> 
    <div className="container"> <h1>Productlist</h1>     
    <div className="productlist_main">
        <div className="productlist_item">
        {products.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
     
    </div>
    </div>
    </section> 
  );
};

export default ProductsList;

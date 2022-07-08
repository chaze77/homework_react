import React, { useContext, useEffect, useState } from "react";
import ProductCard from "../components/ProductCard/ProductCard";
import { productsContext } from "../Context/ProductsContext";
import { Link, useSearchParams } from 'react-router-dom'
import { Box, Pagination, TextField } from "@mui/material";


const ProductsList = () => {
     <Link className='nav__link' to="/list">ProductList</Link> 

  const { products, getProducts,pages } = useContext(productsContext);

  const [searchParams,setSearchParams] = useSearchParams()

  const [search,setSearch]=useState(
    searchParams.get("q") ? searchParams.get("q") : ''
  )


 
const[currentPage,setCurrentPage]=useState(
  searchParams.get("_page") ? +searchParams.get("_page"):1
)

  useEffect(() => {
    setSearchParams({q: search,
      _page:currentPage,
      _limit:2})
  
}, [search,currentPage]);

useEffect(() => {
    
  getProducts();
}, [searchParams]);
  
  return (

    <section className="productlist"> 
    <div className="container"> <h1>Productlist</h1>     
    <div className="productlist_main">
      <Box>
        <TextField style={{backgroundColor:"white"}} value={search} onChange={(e)=>setSearch(e.target.value)} variant="outlined"/>
      </Box>
        <div className="productlist_item">
        {products.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
     
    </div>
    <div className="pagination">
    <Box sx={{
        width: 300,
        height: 40,
        backgroundColor: 'primary.light-1',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7]}}}>
      <Pagination  onChange={(event,page)=>{
       setCurrentPage(page)
      }}
      page={currentPage}
      count={pages}
      color="secondary"
      shape="rounded"
      size="large"
            />      
    </Box>
    </div>
    </div>
    </section> 
  );
};

export default ProductsList;

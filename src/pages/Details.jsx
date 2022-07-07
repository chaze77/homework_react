import React, { useContext, useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import { useParams } from "react-router-dom";


import Loader from "./Loader";
import { productsContext } from "../Context/ProductsContext";



const Details = () => {
  const { id } = useParams();
  const { oneProduct, getOneProduct } = useContext(productsContext);
  useEffect(() => {
    getOneProduct(id);
  }, []);
  return oneProduct ? (
    <Container className="details__page">
        <div className="invicible"></div>
      <Box>
      <img src={oneProduct.image} width="50%" alt="list" />
        <Typography variant="h4">{oneProduct.title}</Typography>        
        <Typography variant="h4">{oneProduct.price}</Typography>
        <Typography variant="h5">{oneProduct.description}</Typography>
        
      </Box>
    </Container>
  ) : (
    <Loader />
  );
};

export default Details;

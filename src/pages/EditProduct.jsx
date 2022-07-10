import { Container, Box, Typography, TextField, Button } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { productsContext } from "../Context/ProductsContext";
import Loader from "./Loader";

const EditProduct = () => {
  const { getOneProduct, oneProduct, updateProduct } =
    useContext(productsContext);
  const { id } = useParams();

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    getOneProduct(id);
  }, []);
  useEffect(() => {
    if (oneProduct) {
      setImage(oneProduct.image);
      setTitle(oneProduct.title);
      setPrice(oneProduct.price);
      setDescription(oneProduct.description);
    }
  }, [oneProduct]);

  function handleSave() {
    const editedProduct = {
      image,
      title,
      price,
      description,
    };
    updateProduct(id, editedProduct);
    navigate("/list");
  }
  return oneProduct ? (
    <Container maxWidth="sm" className="edit__page">
      <Box display={"flex"} flexDirection={"column"} marginTop={"150px"}>
        <Typography variant="h4">Edit product</Typography>

        <TextField
          label="Image"
          variant="outlined"
          value={image}
          onChange={e => setImage(e.target.value)}
        />
        <TextField
          label="Title"
          variant="outlined"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <TextField
          type="number"
          label="Price"
          variant="outlined"
          value={price}
          onChange={e => setPrice(+e.target.value)}
        />
        <TextField
          label="Description"
          variant="outlined"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />

        <Button onClick={handleSave} variant="contained">
          Save
        </Button>
      </Box>
    </Container>
  ) : (
    <Loader />
  );
};

export default EditProduct;

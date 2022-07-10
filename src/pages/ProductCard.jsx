import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import { productsContext } from "../Context/ProductsContext";
import { cartContext } from "../cartContext";

import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";

export default function ProductCard({ item }) {
  const { deleteProduct } = React.useContext(productsContext);

  const { addToCart, checkProductInCart } = React.useContext(cartContext);
  const navigate = useNavigate();
  const [productState, setProductState] = React.useState(
    checkProductInCart(item.id)
  );

  return (
    <section>
      <div className="productcard">
        {/* <div className="productcard__items"> */}
        <img
          style={{
            maxWidth: "200px",
            maxHeight: "250px",
            marginBottom: "25px",
          }}
          src={item.image}
          alt=""
        />
        <h4 className="productcard__items__list">{item.title}</h4>
        <h4 className="productcard__items__list">{item.price}</h4>
        <h5 className="productcard__items__list">{item.description}</h5>

        {/* </div> */}
      </div>
      <div className="productcard__btn">
        <button
          className="productcard__btn__style"
          onClick={() => deleteProduct(item.id)}>
          Delete
        </button>
        <button
          className="productcard__btn__style"
          onClick={() => navigate(`/edit/${item.id}`)}>
          Edit
        </button>
        <button
          className="productcard__btn__style"
          onClick={() => navigate(`/details/${item.id}`)}>
          Details
        </button>
        <IconButton
          onClick={() => {
            addToCart(item);
            setProductState(checkProductInCart(item.id));
          }}>
          <AddShoppingCartIcon color={productState ? "secondary" : "primary"} />
        </IconButton>
      </div>
    </section>
  );
}

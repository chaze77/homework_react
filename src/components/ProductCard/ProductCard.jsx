import * as React from "react";

import { useNavigate } from "react-router-dom";
import { productsContext } from "../../Context/ProductsContext";

export default function ProductCard({ item }) {
  const { deleteProduct } = React.useContext(productsContext);
  const navigate = useNavigate();

  return (
    <div className="productcard">
      <div>
        {" "}
        <img
          style={{ width: "200px", height: "150px" }}
          src={item.image}
          alt=""
        />
      </div>
      <div>
        <h4>{item.title}</h4>
      </div>
      <div>
        <h4>{item.price}</h4>
      </div>
      <div>
        <h4>{item.description}</h4>
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
      </div>
    </div>
  );
}

import React, { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";
import { productsContext } from "../Context/ProductsContext";

const AddProduct = () => {
  const { createProduct } = useContext(productsContext);
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  function handleSave() {
    const newProduct = {
      title,
      description,
      price,
      image,
    };
    if (!title.trim() || !description.trim() || !image.trim() || !price) {
      alert("Заполните поля!");
    } else {
      createProduct(newProduct);
      navigate("/list");
    }
  }

  return (
    <section>
      <div className="container">
        <div className="addproduct">
          <div className="form">
            <div className="subtitle">Let's create your product!</div>
            <div className="input-container ic1">
              <input
                id="firstname"
                className="input"
                type="text"
                placeholder="image"
                onChange={e => setImage(e.target.value)}
              />
              <div className="cut"></div>
              <label for="firstname" className="placeholder">
                Image
              </label>
            </div>
            <div className="input-container ic2">
              <input
                id="lastname"
                className="input"
                type="text"
                placeholder="title"
                onChange={e => setTitle(e.target.value)}
              />
              <div classNames="cut"></div>
              <label for="lastname" className="placeholder">
                Title
              </label>
            </div>
            <div className="input-container ic2">
              <input
                id="email"
                className="input"
                type="text"
                placeholder=" "
                onChange={e => setPrice(e.target.value)}
              />
              <div className="cut cut-short"></div>
              <label for="email" className="placeholder">
                Price
              </label>
            </div>
            <div className="input-container ic2">
              <input
                id="email"
                className="input"
                type="text"
                placeholder=" "
                onChange={e => setDescription(e.target.value)}
              />
              <div className="cut"></div>
              <label for="lastname" className="placeholder">
                Description
              </label>
            </div>
            <button type="text" className="submit" onClick={handleSave}>
              submit
            </button>
          </div>
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default AddProduct;

import React, { useEffect, useState } from "react";
import ProductContext from "./ProductContext";
import axios from "axios";

const ProductState = (props) => {
  const url = "http://localhost:1000/api";

  const [Products, setProducts] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      const api = await axios.get(`${url}/products/get`);
      console.log("products  = ", api.data.product);
      setProducts(api.data.product);
    };
    fetchDataFromAPI();
  }, [reload]);

  let data = 10;

  // user register

  // user login

  // add product
  const addProduct = async (title, description, price, qty, img) => {
    const api = await axios.post(
      `${url}/products/add`,
      {
        title,
        description,
        price,
        qty,
        img,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    setReload(!reload);
    // console.log("adding product ... ", api);
    return api.data;
  };

  // delete product by id
  const deleteProduct = async (id) => {
    const api = await axios.delete(`${url}/products/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    setReload(!reload);
    // console.log("adding product ... ", api);
    return api.data;
  };

  // edit product by id

  return (
    <ProductContext.Provider
      value={{ data, Products, addProduct, deleteProduct }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;

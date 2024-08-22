import React, { useEffect, useState } from "react";
import ProductContext from "./ProductContext";
import axios from "axios";

const ProductState = (props) => {
  const url = "http://localhost:1000/api";

  const [Products, setProducts] = useState([]);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      const api = await axios.get(`${url}/products/get`);
      console.log("products  = ", api.data.product);
      setProducts(api.data.product);
    };
    fetchDataFromAPI();
  }, []);

  let data = 10;

  // user register

  // user login

  // add product

  // delete product by id

  // edit product by id

  
  return (
    <ProductContext.Provider value={{ data, Products }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;

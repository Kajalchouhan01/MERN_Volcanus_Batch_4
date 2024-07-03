import React from "react";
import { Link } from "react-router-dom";
import { arr } from "../data";
const Product = () => {
  
  return (
    <div
      style={{
        textAlign: "center",
        width: "600px",
        margin: "auto",
      }}
    >
      {arr.map((data) => (
        <Link
          to={`/product/${data.id}`}
          key={data.id}
          style={{
            backgroundColor: "green",
            margin: "10px",
            padding: "10px",
            textDecoration: "none",
            color: "white",
          }}
        >
          <img
            src={data.img}
            alt="alt"
            style={{
              width: "250px",
              border: "2px solid yellow",
              borderRadius: "10px",
            }}
          />
          <h1>{data.title}</h1>
        </Link>
      ))}
    </div>
  );
};

export default Product;

// npm i

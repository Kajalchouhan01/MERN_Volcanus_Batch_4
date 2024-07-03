import React from "react";

const Product = () => {
  const arr = [
    {
      id: 1,
      title: "iphone - 15",
      description: "One of the best phone",
      img: "https://m.media-amazon.com/images/I/61l9ppRIiqL._SL1500_.jpg",
    },
    {
      id: 2,
      title: "Sony Xperia",
      description: "Sony is one of the best phone",
      img: "https://m.media-amazon.com/images/I/61pcxk9NXoL._SL1500_.jpg",
    },
    {
      id: 3,
      title: "Galaxy S23 Ultra",
      description: "One of the best Samsung phone",
      img: "https://m.media-amazon.com/images/I/51hqXIAVXAL._SL1500_.jpg",
    },
  ];
  return (
    <div
      style={{
        textAlign: "center",
        width: "600px",
        margin: "auto",
      }}
    >
      {arr.map((data) => (
        <div
          key={data.id}
          style={{ backgroundColor: "green", margin: "10px", padding: "10px" }}
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
        </div>
      ))}
    </div>
  );
};

export default Product;

// npm i

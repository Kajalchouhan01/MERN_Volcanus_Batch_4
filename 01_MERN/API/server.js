import express from "express";
import mongoose from "mongoose";
import bodyParse from "express";
import cors from 'cors'
import productRouter from "./routes/product.js";

const app = express();
app.use(bodyParse.json());

app.use(cors({
  origin:true,
  methods:["GET","POST","DELETE","PUT"],
  credentials:true
}))

// productRouter
app.use("/api/products", productRouter);

// MVC
// M = Models - (DB Schema)
// V = Views - Client (React App)
// C = Controllers - (functions)

mongoose
  .connect("mongodb://localhost:27017", {
    dbName: "Volcanus_Batch_4_4pm",
  })
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch(() => console.log("Internal server error"));

const port = 1000;

app.listen(port, () => console.log(`server is running on port ${port}`));

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import About from "./pages/About";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import Teams from "./pages/Teams";
import Navbar from "./components/Navbar";
import Product_Detail from "./pages/Product_Detail";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Teams />} />
          <Route path="/product/:id" element={<Product_Detail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

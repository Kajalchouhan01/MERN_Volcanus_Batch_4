import React from "react";

const AddProduct = () => {
  return (
    <div className="container" style={{ height: "100vh" }}>
      <div
        className="container my-3 p-4"
        style={{
          width: "600px",
          border: "1px solid blue",
          borderRadius: "10px",
        }}
      >
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input type="number" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">qty</label>
          <input type="number" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">img</label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Category</label>
          <select className="form-select bg-black text-light" >
            <option selected>Select Category</option>
            <option value="mobiles">Mobiles</option>
            <option value="tablets">Tablets</option>
            <option value="laptops">Laptops</option>
            <option value="cameras">Cameras</option>
          </select>
        </div>
        <div className="d-grid col-6 mx-auto">
          <button className="btn btn-outline-warning ">Add Product</button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;

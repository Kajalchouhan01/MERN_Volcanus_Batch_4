import React from "react";

const Register = () => {
  return (
    <div className="container" style={{ height: "100vh" }}>
      <div
        className="container my-5 p-4"
        style={{
          width: "600px",
          border: "1px solid blue",
          borderRadius: "10px",
        }}
      >
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input type="number" className="form-control" />
        </div>
        <div className="d-grid col-6 mx-auto">
          <button className="btn btn-outline-warning ">Register</button>
        </div>
      </div>
    </div>
  );
};

export default Register;

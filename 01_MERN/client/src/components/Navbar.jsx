import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  return (
    <div className="nav">
      <div className="nav_bar">
        <div className="left">
          <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
            <h3>Shopping Cart</h3>
          </Link>
        </div>
        <div className="right">
          <Link to={"/addproduct"} className="btn btn-primary mx-2">
            Add Product
          </Link>

          {location.pathname != "/admin" && (
            <>
              <Link to={"/login"} className="btn btn-secondary mx-2">
                Login
              </Link>
              <Link to={"/register"} className="btn btn-success mx-2">
                Register
              </Link>
              <div className="btn btn-danger mx-2">LogOut</div>
              <Link to={"/profile"} className="btn btn-info mx-2">
                Profile
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

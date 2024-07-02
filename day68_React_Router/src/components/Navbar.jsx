import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="nav_bar">
        <Link to={"/"} className="left">
          WDM
        </Link>
        <div className="right">
          <Link to={"/about"} className="items">
            About
          </Link>
          <Link to={"/contact"} className="items">
            Contact
          </Link>
          <Link to={"/team"} className="items">
            Team
          </Link>
          <Link to={"/career"} className="items">
            Career
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

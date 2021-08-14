import React from "react";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <h3>Online Shop</h3>
      </div>

      <div className="search">
        <input type="text" id="input1" placeholder="Search"></input>
        <FaSearch id="searchicon" />
      </div>

      <div className="services">
        <button className="btn">Orders</button>
        <button className="btn">Login</button>
      </div>
    </div>
  );
};

export default Navbar;

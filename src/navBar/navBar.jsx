import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="ui tabular menu">
      <div className="item">
        <Link to="/">Home Page</Link>
      </div>
      <div className="item">
        <Link to="/products">Products</Link>
      </div>
    </div>
  );
};

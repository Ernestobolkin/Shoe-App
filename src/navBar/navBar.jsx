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
      <div class="right menu">
        <div class="ui right aligned category search item">
          <div class="ui transparent icon input">
            <input class="prompt" type="text" placeholder="Search animals..." />
            <i class="search link icon"></i>
          </div>
          <div class="results"></div>
        </div>
      </div>
    </div>
  );
};

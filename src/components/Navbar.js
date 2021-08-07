import React from "react";
import "./css/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <section className="left-nav">
        <p>SUPERHERO LEAGUE</p>
      </section>
      <section className="right-nav">
        <ul>
          <li>
            <Link to="/" className="link">Home</Link>
          </li>
          <li>
            <Link to="/about" className="link">About</Link>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Navbar;

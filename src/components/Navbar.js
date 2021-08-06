import React from "react";
import "./css/navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <section className="left-nav">
      <p>SUPERHERO LEAGUE</p>
      </section>
      <section className="right-nav">
        <ul>
          <li>Home</li>
          <li>About</li>
        </ul>
      </section>
    </div>
  );
};

export default Navbar;

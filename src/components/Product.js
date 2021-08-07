import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { id, image, name, biography } = product;
  return (
    <div className="product-content" style={{ backgroundColor: "white" }}>
      <section className="img">
        {image.url && <img className="img" src={image.url} alt="superhero"></img>}
      </section>
      <section className="details">
        <h4>{name}</h4>
        <h5>{biography.publisher}</h5>
        <p></p>
        <Link to={`individual/${id}`}><button id="btn">Details</button></Link>
      </section>
    </div>
  );
};

export default Product;

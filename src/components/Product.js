import React from "react";

const Product = ({ product }) => {
  const { image, name, biography } = product;
  return (
    <div className="product-content" style={{ backgroundColor: "white" }}>
      <section className="img">
        {image.url && <img className="img" src={image.url} alt="superhero"></img>}
      </section>
      <section className="details">
        <h4>{name}</h4>
        <h5>{biography.publisher}</h5>
        <p></p>
        <button id="btn">Details</button>
      </section>
    </div>
  );
};

export default Product;

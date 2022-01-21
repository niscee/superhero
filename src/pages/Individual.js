import React, { useEffect, useContext } from "react";
import ProductContext from "../context/ProductContext";
import "./css/individual.css";
import { useParams, useRouteMatch } from "react-router-dom";

const Individual = () => {
  useEffect(() => {
    getSingleHero(targetId);
  }, []);

  const context = useContext(ProductContext);
  const { getSingleHero, product } = context;

  let { targetId } = useParams();

  const Showcase = () => {
    return (
      <div className="single-hero-container">
        <section className="hero-img">
          <img src={product.image.url} alt="hero snap" />
        </section>

        <section className="hero-details">
          <h1 style={{ textAlign: "center", fontWeight: "bold" }}>
            {product.name}
          </h1>

          <div className="fulldetails-container">
            <h1>BIOGRAPHY :</h1>
            <h4>FullName: {product.biography["full-name"]}</h4>
            <h4>First Appearance: {product.biography["first-appearance"]}</h4>
            <h4>Alignment: {product.biography.alignment}</h4>
            <h4>Publisher: {product.biography.publisher}</h4>
            <h4>
              Aliases: [{" "}
              {product.biography.aliases
                .map((name) => {
                  return name;
                })
                .join(", ")}{" "}
              ]
            </h4>
            <h4>Relatives: [ {product.connections.relatives} ]</h4>
            <h4>Group: [ {product.connections["group-affiliation"]} ]</h4>
          </div>

          <div className="fulldetails-container">
            <h1>POWERSTATS :</h1>
            <h4>Combat: {product.powerstats.combat}</h4>
            <h4>Durability: {product.powerstats.durability}</h4>
            <h4>Intelligence: {product.powerstats.intelligence}</h4>
            <h4>Power: {product.powerstats.power}</h4>
            <h4>Speed: {product.powerstats.speed}</h4>
            <h4>Strength: {product.powerstats.strength}</h4>
          </div>

          <div className="fulldetails-container">
            <h1>Work :</h1>
            <h4>Occupation: [ {product.work.occupation} ]</h4>
          </div>
        </section>
      </div>
    );
  };

  return <div>{product ? <Showcase /> : <p>Nothing to show</p>}</div>;
};

export default Individual;

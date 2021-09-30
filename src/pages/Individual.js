import React, { useEffect, useContext } from "react";
import ProductContext from "../context/ProductContext";
import "./css/individual.css";
import { useParams, useRouteMatch } from "react-router-dom";

const Individual = () => {
  const { getSingleHero, product, products } = useContext(ProductContext);

  let { targetId } = useParams();

  useEffect(() => {
    getSingleHero(targetId);
  }, []);

  if (!product) {
    return <h2>No Data Found</h2>;
  }

  const {
    id,
    name,
    appearance,
    className,
    biography,
    connections,
    image,
    powerstats,
    work,
  } = product;

  return (
    <div className="single-hero-container">
      <section className="hero-img">
        <img src={image.url} alt="hero snap" />
      </section>

      <section className="hero-details">
        <h1 style={{ textAlign: "center", fontWeight: "bold" }}>{name}</h1>

        <div className="fulldetails-container">
          <h1>BIOGRAPHY :</h1>
          <h4>FullName: {biography["full-name"]}</h4>
          <h4>First Appearance: {biography["first-appearance"]}</h4>
          <h4>Alignment: {biography.alignment}</h4>
          <h4>Publisher: {biography.publisher}</h4>
          <h4>
            Aliases: [{" "}
            {biography.aliases
              .map((name) => {
                return name;
              })
              .join(", ")}{" "}
            ]
          </h4>
          <h4>Relatives: [ {connections.relatives} ]</h4>
          <h4>Group: [ {connections["group-affiliation"]} ]</h4>
        </div>

        <div className="fulldetails-container">
          <h1>POWERSTATS :</h1>
          <h4>Combat: {powerstats.combat}</h4>
          <h4>Durability: {powerstats.durability}</h4>
          <h4>Intelligence: {powerstats.intelligence}</h4>
          <h4>Power: {powerstats.power}</h4>
          <h4>Speed: {powerstats.speed}</h4>
          <h4>Strength: {powerstats.strength}</h4>
        </div>

        <div className="fulldetails-container">
          <h1>Work :</h1>
          <h4>Occupation: [ {work.occupation} ]</h4>
        </div>
      </section>
    </div>
  );
};

export default Individual;

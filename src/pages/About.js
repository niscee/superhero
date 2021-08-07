import React from "react";

const About = () => {
  const divStyle = {
    margin: "80px auto",
    color: "white",
    width: "80%",
  };

  const pStyle = {
      fontSize: "1.22rem",
      lineHeight: "2",
  }

  const aStyle = {
      color: "red",
      textDecoration: "none"
  }

  return (
    <div style={divStyle}>
      <p style={pStyle}>
          <h1>Introduction: </h1>
        What is this? The superhero API, is a quantified and programatically
        accessible data source of all superheroes from both the comic universe.
        We've taken all the stuff and put it together in a form that is easier
        to consume with software. Then we made an API so you can consume it in a
        hassle free manner. How can I use it? The data is accessible through a
        REST API. Consult our documentation if you'd like to get started. Helper
        libraries are also provided so you can consume the API in the choice of
        your language. Getting your Access Token You need a facebook account to
        get your access token.<br></br>
        <a href="https://superheroapi.com/" style={aStyle} target="_blank">Go to site</a>
      </p>
    </div>
  );
};

export default About;

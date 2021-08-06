import React, { useState, useContext } from "react";
import "./css/searchbar.css";
import ProductContext from "../context/ProductContext";

const Searchbar = () => {
  const [word, setWord] = useState("");
  const { searchHero } = useContext(ProductContext);

  // get superhero name and returns to search function.
  const getName = (e) => {
    setWord(e.target.value);
  };

  // form submit.
  const onSubmit = (e) => {
    e.preventDefault();
    if (word === "") {
      alert("Enter some data.");
    } else {
      searchHero(word);
      setWord("");
    }
  };

  return (
    <div className="searchbar">
      <form onSubmit={onSubmit} className="form-inline">
        <input
          type="text"
          placeholder="Search Your Favourite Superhero....."
          name="superhero_name"
          onChange={getName}
          value={word}
        ></input>
        <button
          type="submit"
          className="btn btn-dark btn-block btn-sm"
          style={{ width: "20%", backgroundColor: "red", color: "white" }}
        >
          SEARCH
        </button>
      </form>
    </div>
  );
};

export default Searchbar;

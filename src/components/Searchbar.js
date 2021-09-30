import React, { useState, useContext } from "react";
import "./css/searchbar.css";
import ProductContext from "../context/ProductContext";

const Searchbar = () => {
  const [word, setWord] = useState("");
  const { searchHero } = useContext(ProductContext);
  const [msg, setMsg] = useState(false);

  // get superhero name and returns to search function.
  const getName = (e) => {
    setWord(e.target.value);
  };

  // form submit.
  const onSubmit = (e) => {
    e.preventDefault();
    if (word === "") {
      setMsg(true);
      setTimeout(() => {
        setMsg(false);
      }, 2000);
    } else {
      searchHero(word);
      setWord("");
    }
  };

  return (
    <>
      {msg && (
        <div style={{width: "60%", backgroundColor: "red", margin: "auto"}} id="msg">
          <p style={{ color: "white", textAlign: "center", fontWeight: "bold", padding: "15px" }}>
            Please enter something.
          </p>
        </div>
      )}
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
            id="form-btn"
            style={{ color: "white" }}
          >
            SEARCH
          </button>
        </form>
      </div>
    </>
  );
};

export default Searchbar;

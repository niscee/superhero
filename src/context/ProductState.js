import React, { useReducer, useEffect } from "react";
import ProductContext from "./ProductContext";
import ProductReducer from "./ProductReducer";

// fetching all cocktails.
const TOKEN = 4231845973529584;
const LETTER = "d";
const GET_ITEMS_URL = `https://www.superheroapi.com/api.php/${TOKEN}/search/`;

const ProductState = (props) => {
  const initalState = {
    products: [],
    loading: false,
  };

  // initializing reducer.
  const [state, dispatch] = useReducer(ProductReducer, initalState);

  // set loading.
  const setLoading = () => dispatch({ type: "SET_LOADING" });

  // search based on character name.
  const searchHero = async (name) => {
    try {
      setLoading();
      const resp = await fetch(`${GET_ITEMS_URL}${name}`);
      const filterRes = await resp.json();

      if (filterRes.response === "error") {
        getHeroes();
      } else {
        dispatch({
          type: "SEARCH_USERS",
          payload: filterRes.results,
        });
      }
    } catch (err) {
      getHeroes();
      console.log(err);
    }
  };

  // get superhero.
  const getHeroes = async () => {
    try {
      setLoading();
      const resp = await fetch(`${GET_ITEMS_URL}${LETTER}`);
      const filterRes = await resp.json();

      dispatch({
        type: "GET_USERS",
        payload: filterRes.results,
      });
    } catch (err) {
      console.log(err);
    }
  };

  // useEffect hooks.
  useEffect(() => {
    getHeroes();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        loading: state.loading,
        getHeroes,
        setLoading,
        searchHero,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;

import React, { useReducer, useEffect } from "react";
import ProductContext from "./ProductContext";
import ProductReducer from "./ProductReducer";

// fetching all cocktails.
const TOKEN = 4231845973529584;
const LETTER = "ba";
const GET_ITEMS_URL = `https://www.superheroapi.com/api.php/${TOKEN}/search/`;
const GET_SINGLE_ITEM_URL = `https://www.superheroapi.com/api.php/${TOKEN}/`;


const ProductState = (props) => {
  const initalState = {
    products: [],
    loading: false,
    product: []
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


  // get single superhero.
  const getSingleHero = async (id) => {
    try {
      setLoading();
      console.log(`${GET_SINGLE_ITEM_URL}${id}`)
      const resp = await fetch(`${GET_SINGLE_ITEM_URL}${id}`);
      const filterRes = await resp.json();
     
      dispatch({
        type: "GET_SINGLE_USER",
        payload: filterRes,
      });

    } catch (err) {
      console.log(err);
    }
  };

  // useEffect hooks.
  useEffect(() => {
    console.log("done.")
    getHeroes();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        product: state.product,
        loading: state.loading,
        getHeroes,
        setLoading,
        searchHero,
        getSingleHero
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;

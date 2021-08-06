import React, { useContext } from "react";
import "./css/products.css";
import Product from "./Product";
import ProductContext from "../context/ProductContext";
import Loading from "./Loading";

const Products = () => {
  const { products, loading } = useContext(ProductContext);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="products">
          {products.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
        </div>
      )}
    </>
  );
};

export default Products;

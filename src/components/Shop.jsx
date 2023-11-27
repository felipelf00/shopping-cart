import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function Shop({ products }) {
  console.log("clicked Shop");
  return (
    <>
      <h1>Hi, this is Shop</h1>
      <ProductCard product={products[0]} />
      <Link to="/">Home?</Link>
    </>
  );
}

export default Shop;

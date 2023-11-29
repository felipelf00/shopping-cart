import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { ShopContext } from "./App";

function Shop() {
  const { products } = useContext(ShopContext);

  if (!products) return <p>Loading...</p>;

  return (
    <>
      <h1>Hi, this is Shop</h1>
      <div className="products-container">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </>
  );
}

export default Shop;

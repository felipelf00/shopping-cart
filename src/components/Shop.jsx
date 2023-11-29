import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function Shop({ products }) {
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

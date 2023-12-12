import { useContext } from "react";
import ProductCard from "./ProductCard";
import { ShopContext } from "./App";

function Shop() {
  const { products } = useContext(ShopContext);

  if (!products) return <p>Loading...</p>;

  return (
    <>
      <h2>Elevate your style!</h2>
      <p>
        Browse through a variety of our high-quality products and find the
        perfect item for every occasion.
      </p>
      <div className="products-container">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </>
  );
}

export default Shop;

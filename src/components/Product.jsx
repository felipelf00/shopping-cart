import { useCallback, useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "./App";

//function Product({ products }) {
function Product() {
  const { id } = useParams();
  const { products } = useContext(ShopContext);

  if (!products) return <p>loading...</p>;

  const index = products.findIndex((product) => product.id === Number(id));
  console.log("index ");
  console.log(index);
  return (
    <>
      <h4>This is the page for the product {products[index].title}</h4>
      {/* <h4>This is the page for the product of id {id}</h4> */}
    </>
  );
}

export default Product;

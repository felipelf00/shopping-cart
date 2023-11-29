import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "./App";
import { Link } from "react-router-dom";

//function Product({ products }) {
function Product() {
  const { id } = useParams();
  const { products, addToCart } = useContext(ShopContext);
  const [quantity, setQuantity] = useState(1);

  if (!products) return <p>loading...</p>;

  const index = products.findIndex((product) => product.id === Number(id));
  const thisProduct = products[index];

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    setQuantity(newQuantity);
  };

  return (
    <>
      <h4>This is the page for the product {products[index].title}</h4>

      <label>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={handleQuantityChange}
        />
      </label>

      <button onClick={() => addToCart(thisProduct, quantity)}>
        Add to cart
      </button>

      <Link to="../checkout">Checkout</Link>
    </>
  );
}

export default Product;

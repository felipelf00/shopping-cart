import { useContext } from "react";
import { ShopContext } from "./App";

function Checkout() {
  const { cartItems } = useContext(ShopContext);

  return (
    <>
      <h3>Checkout</h3>
      {cartItems &&
        cartItems.map((item) => (
          <div key={item.product.id}>
            <span>
              {item.product.title} - quantity: {item.quantity}
            </span>
          </div>
        ))}
    </>
  );
}

export default Checkout;

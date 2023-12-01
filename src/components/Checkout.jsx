import { useContext, useState } from "react";
import { ShopContext } from "./App";
import { Link } from "react-router-dom";
import Popup from "./Popup";

function Checkout() {
  const { cartItems } = useContext(ShopContext);
  const [showPopup, setShowPopup] = useState(false);
  const [itemToRemove, setItemToRemove] = useState(null);

  const handleRemoveItem = (item) => {
    setShowPopup(true);
    setItemToRemove(item);
  };

  return (
    <>
      <h3>Checkout</h3>
      {showPopup && (
        <Popup
          type="remove"
          itemToRemove={itemToRemove}
          onClose={() => setShowPopup(false)}
        />
      )}
      {cartItems && (
        <div className="cart">
          {cartItems.map((item) => (
            <div key={item.product.id}>
              <Link to={`../shop/${item.product.id}`}>
                {item.product.title} - quantity: {item.quantity}
              </Link>
              <span
                className="material-symbols-outlined trash"
                onClick={() => handleRemoveItem(item)}
              >
                delete
              </span>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Checkout;

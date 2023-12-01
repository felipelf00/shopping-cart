import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "./App";

function Popup({ onClose, type, itemToRemove }) {
  const { removeFromCart } = useContext(ShopContext);

  const handleRemove = () => {
    removeFromCart(itemToRemove);
    onClose();
  };

  return (
    <div className="popup">
      <div className="popup-shadow" onClick={onClose}></div>
      <div className="message-box">
        <button className="close btn-black" onClick={onClose}>
          x
        </button>
        {type === "add" && <p>Item added to cart!</p>}
        {type === "remove" && (
          <p>Are you sure you want to remove this item from your cart?</p>
        )}

        {type === "add" && (
          <div className="popup-nav-wrapper">
            <Link className="btn-red" to="../shop">
              Continue shopping
            </Link>
            <Link className="btn-black" to="../checkout">
              Checkout
            </Link>
          </div>
        )}

        {type === "remove" && (
          <div className="popup-nav-wrapper">
            <button className="btn-red" onClick={onClose}>
              No
            </button>
            <button className="btn-black" onClick={handleRemove}>
              Yes
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Popup;

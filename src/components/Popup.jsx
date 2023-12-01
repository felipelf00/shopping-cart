import { Link } from "react-router-dom";

function Popup({ onClose }) {
  return (
    <div className="popup">
      <div className="popup-shadow" onClick={onClose}></div>
      <div className="message-box">
        <button className="close btn-black" onClick={onClose}>
          x
        </button>
        <p>Item added to cart!</p>
        <div className="popup-nav-wrapper">
          <Link className="btn-red" to="../shop">
            Continue shopping
          </Link>
          <Link className="btn-black" to="../checkout">
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Popup;

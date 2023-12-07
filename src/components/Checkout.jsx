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

  let total = 0;

  for (let i = 0; i < cartItems.length; i++) {
    total = total + cartItems[i].product.price * cartItems[i].quantity;
  }

  return (
    <>
      <h2>Checkout</h2>
      <p>
        Please take your time to review the items on your cart before
        proceeding:
      </p>
      {showPopup && (
        <Popup
          type="remove"
          itemToRemove={itemToRemove}
          onClose={() => setShowPopup(false)}
        />
      )}
      {cartItems && cartItems.length === 0 ? (
        <div className="cart" style={{ fontWeight: "700" }}>
          No items in your cart
        </div>
      ) : (
        <div className="cart">
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th> </th>
              </tr>
            </thead>

            <tbody>
              {cartItems.map((item) => (
                <tr key={item.product.id}>
                  <td>
                    <Link to={`../shop/${item.product.id}`}>
                      {item.product.title}
                    </Link>
                  </td>
                  <td>{item.quantity}</td>
                  <td>$ {item.quantity * item.product.price}</td>
                  <td
                    className="material-symbols-outlined trash"
                    onClick={() => handleRemoveItem(item)}
                  >
                    delete
                  </td>
                </tr>
              ))}
              <tr style={{ fontWeight: "700" }}>
                <td> </td>
                <td>Total:</td>
                <td>${total}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      <Link className="btn-red" to="../shop">
        Continue shopping
      </Link>
      <Link to={"../thanks"} className="btn-black">
        Payment
      </Link>
    </>
  );
}

export default Checkout;

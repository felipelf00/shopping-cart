import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "./App";

function Header() {
  const { cartItems } = useContext(ShopContext);

  const countItems = () => {
    let count = 0;
    cartItems.forEach((item) => {
      count += item.quantity;
    });

    return count;
  };

  return (
    <header>
      <span className="header-title">Fake Store!</span>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="checkout">
              <span className="material-symbols-outlined cart-icons">
                shopping_cart
                {countItems() > 0 && (
                  <span className="cart-counter">{countItems()}</span>
                )}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

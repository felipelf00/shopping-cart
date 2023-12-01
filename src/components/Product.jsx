import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "./App";
import { Link } from "react-router-dom";
import Popup from "./Popup";

//function Product({ products }) {
function Product() {
  const { id } = useParams();
  const { products, addToCart } = useContext(ShopContext);
  const [quantity, setQuantity] = useState(1);
  const [showPopup, setShowPopup] = useState(false);

  if (!products) return <p>loading...</p>;

  const index = products.findIndex((product) => product.id === Number(id));
  if (index === -1) {
    return <p>Loading product...</p>;
  }
  console.log("index: " + index);
  const thisProduct = products[index];

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    setQuantity(newQuantity);
  };

  const handleAddToCart = (thisProduct, quantity) => {
    setShowPopup(true);
    addToCart(thisProduct, quantity);
  };

  return (
    <div className="product-page">
      <h3>{thisProduct.title}</h3>

      {showPopup && <Popup type="add" onClose={() => setShowPopup(false)} />}

      <div className="product-wrapper">
        <img src={thisProduct.image} className="product-image" />
        <div className="text">
          <p className="product-description">{thisProduct.description}</p>
          <div className="add-to-cart-wrapper">
            <label>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={handleQuantityChange}
              />
            </label>
            <button
              className="btn-red"
              onClick={() => handleAddToCart(thisProduct, quantity)}
            >
              Add to cart
            </button>
          </div>
          <br />
          <Link className="btn-black" to="../checkout">
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Product;

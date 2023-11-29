import "./App.css";
import { Link, Routes, Route, Outlet } from "react-router-dom";
import { useEffect, useState, createContext } from "react";
import Header from "./Header";
import Router from "../Router";
import Home from "./Home";
import Shop from "./Shop";
import Product from "./Product";
import Checkout from "./Checkout";

export const ShopContext = createContext({
  products: [],
  cartItems: [],
  addToCart: () => {},
});

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity) => {
    const newArray = [...cartItems, { product: product, quantity: quantity }];
    setCartItems(newArray);
    console.log("cartItems");
    console.log(cartItems);
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=5")
      .then((response) => response.json())
      .then((json) => setProducts(json));

    console.log("fetched data");
  }, []);

  return (
    <>
      <ShopContext.Provider value={{ products, cartItems, addToCart }}>
        <Header />
        <h1>Hi, this is App</h1>
        <Link to="/shop">Shop</Link>
        <Link to="/">Home</Link>
        <Link to="checkout">Checkout</Link>
        {/* <Router /> */}
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="shop/:id" element={<Product />} />
          <Route path="checkout" element={<Checkout />} />
        </Routes>
        {/* <Outlet /> */}
      </ShopContext.Provider>
    </>
  );
}

export default App;

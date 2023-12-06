import "./App.css";
import { Link, Routes, Route, Outlet } from "react-router-dom";
import { useEffect, useState, createContext } from "react";
import Header from "./Header";
import Router from "../Router";
import Home from "./Home";
import Shop from "./Shop";
import Product from "./Product";
import Checkout from "./Checkout";
import Thanks from "./Thanks";
import Footer from "./Footer";

export const ShopContext = createContext({
  products: [],
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity) => {
    const existingProduct = cartItems.find(
      (item) => item.product.id === product.id
    );

    if (existingProduct) {
      const updatedCart = cartItems.map((item) =>
        item.product.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
      setCartItems(updatedCart);
    } else {
      const newArray = [...cartItems, { product: product, quantity: quantity }];
      setCartItems(newArray);
    }
  };

  const removeFromCart = (item) => {
    const updatedCart = cartItems.filter(
      (cartItem) => cartItem.product.id !== item.product.id
    );
    setCartItems(updatedCart);
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=8")
      .then((response) => response.json())
      .then((json) => setProducts(json));

    console.log("fetched data");
  }, []);

  return (
    <>
      <ShopContext.Provider
        value={{ products, cartItems, addToCart, removeFromCart }}
      >
        <Header />
        <main>
          <Routes>
            <Route path="*" element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="shop/:id" element={<Product />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="thanks" element={<Thanks />} />
          </Routes>
        </main>
        {/* <Outlet /> */}
        <Footer />
      </ShopContext.Provider>
    </>
  );
}

export default App;

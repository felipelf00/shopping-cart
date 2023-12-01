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

    console.log("cartItems");
    console.log(cartItems);
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=8")
      .then((response) => response.json())
      .then((json) => setProducts(json));

    console.log("fetched data");
  }, []);

  return (
    <>
      <ShopContext.Provider value={{ products, cartItems, addToCart }}>
        <Header />
        <main>
          <Routes>
            <Route path="*" element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="shop/:id" element={<Product />} />
            <Route path="checkout" element={<Checkout />} />
          </Routes>
        </main>
        {/* <Outlet /> */}
      </ShopContext.Provider>
    </>
  );
}

export default App;

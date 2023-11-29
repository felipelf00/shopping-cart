import "./App.css";
import { Link, Routes, Route, Outlet } from "react-router-dom";
import { useEffect, useState, createContext } from "react";
import Header from "./Header";
import Router from "../Router";
import Home from "./Home";
import Shop from "./Shop";
import Product from "./Product";

export const ShopContext = createContext({
  products: [],
  // cartItems: [],
  // addToCart: () => {},
});

function App() {
  const [products, setProducts] = useState();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=5")
      .then((response) => response.json())
      .then((json) => setProducts(json));

    console.log("fetched data");
  }, []);

  return (
    <>
      <ShopContext.Provider value={{ products }}>
        <Header />
        <h1>Hi, this is App</h1>
        <Link to="/shop">Shop</Link>
        <Link to="/">Home</Link>
        {/* <Router /> */}
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="shop/:id" element={<Product />} />
        </Routes>
        {/* <Outlet /> */}
      </ShopContext.Provider>
    </>
  );
}

export default App;

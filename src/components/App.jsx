import "./App.css";
import { Link, Routes, Route, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./Header";
import Router from "../Router";
import Home from "./Home";
import Shop from "./Shop";
import Product from "./Product";

function App() {
  const [products, setProducts] = useState();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=5")
      .then((response) => response.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <>
      <Header />
      <h1>Hi, this is App</h1>
      <Link to="/shop">Shop</Link>
      <Link to="/">Home</Link>
      {/* <Router /> */}
      <Routes>
        <Route path="*" element={<Home products={products} />} />
        <Route path="shop" element={<Shop products={products} />} />
        <Route path="shop/:id" element={<Product products={products} />} />
      </Routes>
      <Outlet />
    </>
  );
}

export default App;

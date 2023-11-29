import { useContext } from "react";
import { ShopContext } from "./App";

function Home() {
  const { products } = useContext(ShopContext); //not used yet

  return <h3>this is Home</h3>;
}

export default Home;

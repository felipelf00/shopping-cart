import { useContext } from "react";
import { ShopContext } from "./App";
import ImageSlider from "./ImageSlider";
import { Link } from "react-router-dom";

const images = [
  "../public/hr1.jpg",
  "../public/hr2.jpg",
  "../public/hr3.jpg",
  "../public/hr4.jpg",
  "../public/hr5.jpg",
];

function Home() {
  const { products } = useContext(ShopContext); //not used yet

  return (
    <>
      <div className="hero">
        <ImageSlider images={images} />
      </div>
      <div className="home-text">
        <h1>Fake Store!</h1>
        <p>
          This is where you find fake products for none of your needs.
          Don&apos;t worry about price, shipping, not even about quality,
          because none of these are actually for sale!
        </p>
      </div>
      <Link to="/shop" className="shop-now btn-red">
        Shop now!
      </Link>
      <br />
    </>
  );
}

export default Home;

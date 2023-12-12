import { useState, useEffect } from "react";
import PropTypes from 'prop-types'

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 6000);

    return () => clearInterval(intervalId);
    // eslint-disable-next-line
  }, [currentIndex]);

  return (
    <div
      className="slider"
      style={{ width: "100%", height: "100%", position: "relative" }}
    >
      <button onClick={prevSlide} className="prev">
        &lt;
      </button>

      <div
        className="slider-img-wrap"
        style={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
          display: "flex",
        }}
      >
        {images.map((image) => (
          <img
            key={image}
            src={image}
            alt={"fashion picture"}
            className="slider-img"
            style={{ translate: `${-100 * currentIndex}%` }}
          />
        ))}
      </div>
      <button onClick={nextSlide} className="next">
        &gt;
      </button>
    </div>
  );
};

ImageSlider.propTypes = {
  images: PropTypes.array,
}

export default ImageSlider;

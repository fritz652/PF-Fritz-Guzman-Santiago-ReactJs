import { useState, useEffect, useRef } from "react";
import { IconButton, Typography } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

const images = [
  "https://res.cloudinary.com/dphjwkeox/image/upload/v1698335383/samples/ecommerce/Banners/1_xjso1j.png",
  "https://res.cloudinary.com/dphjwkeox/image/upload/v1698335383/samples/ecommerce/Banners/2_iy4eyy.png",
  "https://res.cloudinary.com/dphjwkeox/image/upload/v1698335383/samples/ecommerce/Banners/3_al0buh.png",
  "https://res.cloudinary.com/dphjwkeox/image/upload/v1698335383/samples/ecommerce/Banners/4_woto8t.png",
];

const useStyles = {
  carousel: {
    width: "100%",
    position: "relative",
    textAlign: "center",
    marginTop: 20,
  },
  image: {
    width: "100%",
    maxHeight: 500,
    objectFit: "cover",
  },
  arrow: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    cursor: "pointer",
  },
};

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const timerRef = useRef(null);

  useEffect(() => {
    if (autoplay) {
      timerRef.current = setTimeout(() => {
        setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }, 5000);
    }
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [currentImage, autoplay]);

  const nextSlide = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleAutoplayToggle = () => {
    setAutoplay((prev) => !prev);
  };

  return (
    <div style={useStyles.carousel}>
      <IconButton style={{ ...useStyles.arrow, left: 0 }} onClick={prevSlide}>
        <KeyboardArrowLeft />
      </IconButton>
      <img
        src={images[currentImage]}
        alt={` ${currentImage + 1}`}
        style={useStyles.image}
      />
      <IconButton style={{ ...useStyles.arrow, right: 0 }} onClick={nextSlide}>
        <KeyboardArrowRight />
      </IconButton>
      <Typography variant="h6" style={{ marginTop: 10 }}>
        {`${currentImage + 1}`}
      </Typography>
      <div>
        <button onClick={handleAutoplayToggle}>{autoplay ? "||" : ">"}</button>
      </div>
    </div>
  );
};

export default Carousel;

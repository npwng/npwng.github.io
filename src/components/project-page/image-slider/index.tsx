import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ImageSliderProps {
  slides: string[];
}

const slideStyles: React.CSSProperties = {
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const flexStyle: React.CSSProperties = {
  alignItems: "center",
  alignContent: "center",
  justifyContent: "space-between",
};

const dotsContainerStyles: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
};

const ImageSlider: React.FC<ImageSliderProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const preloadImages = (imageArray: string[]) => {
    imageArray.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  };

  useEffect(() => {
    preloadImages(slides);
  }, [slides]);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="w-full">
      <div style={{ opacity: 0 }}>●</div>
      <div className="flex w-full" style={flexStyle}>
        <div
          className="py-2 px-2 cursor-pointer transform transition-transform duration-800 hover:scale-105"
          onClick={goToPrevious}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40px"
            viewBox="0 0 24 24"
            width="40px"
            fill="currentColor"
          >
            <path d="M17.77 3.77 16 2 6 12l10 10 1.77-1.77L9.54 12z" />
          </svg>
        </div>
        <div
          style={{ ...slideStyles, display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <AnimatePresence mode='wait'>
            <motion.img
              key={currentIndex}
              src={slides[currentIndex]}
              alt={`Slide ${currentIndex}`}
              style={{ borderRadius: "10px", maxWidth: "100%", maxHeight: "35rem" }}
              initial={{ opacity: 0}}
              animate={{ opacity: 1}}
              exit={{ opacity: 0}}
              transition={{ duration: 0.125 }}
            />
          </AnimatePresence>
        </div>
        <div
          className="py-2 px-2 cursor-pointer transform transition-transform duration-800 hover:scale-105"
          onClick={goToNext}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40px"
            viewBox="0 0 24 24"
            width="40px"
            fill="currentColor"
          >
            <path d="M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z" />
          </svg>
        </div>
      </div>

      <div style={dotsContainerStyles}>
        {slides.map((_, slideIndex) => (
          <div
            className={`${
              slideIndex === currentIndex ? "text-primary" : "text-base-content"
            } text-opacity-60 transform transition-transform duration-800 hover:scale-110 cursor-pointer`}
            key={slideIndex}
            style={{ marginTop: "0.75rem" }}
            onClick={() => goToSlide(slideIndex)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 24 24"
              width="1.75em"
              fill="currentColor"
            >
              <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"></path>
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;

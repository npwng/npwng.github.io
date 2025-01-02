import React, { useState } from "react";
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

const dotStyle: React.CSSProperties = {
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "20px",
};

const ImageSlider: React.FC<ImageSliderProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
      <div style={{opacity:0}}>
          ●
      </div>
      <div className="flex w-full" style={flexStyle}>
        <div onClick={goToPrevious}>
          <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="currentColor">
            <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
          </svg>
        </div>
        <div style={{ ...slideStyles, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src={slides[currentIndex]} alt={`Slide ${currentIndex}`} style={{ borderRadius: '10px', maxWidth: '100%', maxHeight: '25rem' }} />
        </div>
        <div onClick={goToNext}>
          <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="currentColor" transform="rotate(180)">
            <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
          </svg>
        </div>
      </div>

      <div style={dotsContainerStyles}>
        {slides.map((_, slideIndex) => (
          <div
            style={dotStyle}
            className={`${dotStyle.cursor} ${dotStyle.fontSize} ${slideIndex === currentIndex ? 'text-primary' : 'text-base-content'} text-opacity-60`}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;

import React, { useState, useCallback } from "react";
import { ImageMagnifier } from "../../../tools/ImageMagnifier";

export default function ImageSlider({ product }) {
  const images = product?.images || [];
  const [mainImage, setMainImage] = useState(images[0] ?? "");
  const [activeIndex, setActiveIndex] = useState(0);

  const handleThumbnailClick = useCallback((thumb, index) => {
    setMainImage(thumb);
    setActiveIndex(index);
  }, []);

  return (
    <div className="image-slider">
      <div className="main-image-container">
        <ImageMagnifier src={mainImage || images[0]} />
      </div>
      <div className="thumbnail-container">
        {images.map((thumb, index) => (
          <button
            key={index}
            onClick={() => handleThumbnailClick(thumb, index)}
            className={`thumbnail-button ${
              index === activeIndex ? "active" : ""
            }`}
            aria-label={`View image ${index + 1}`}
          >
            <img
              src={thumb}
              alt={`Thumbnail ${index + 1}`}
              className="thumbnail-image"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

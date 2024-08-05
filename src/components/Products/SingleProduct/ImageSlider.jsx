import React, { useState, useCallback } from "react";
// import { GlassMagnifier } from "react-image-magnifiers"; // We'll define our styles in this file

export default function ImageSlider({ product }) {
  const images = product?.images || [];
  const [mainImage, setMainImage] = useState(images[0] ?? "");
  const [activeIndex, setActiveIndex] = useState(0);

  const handleThumbnailClick = useCallback((thumb, index) => {
    setMainImage(thumb);
    setActiveIndex(index);
  }, []);

  if (images.length === 0) {
    return <div className="no-images">No images available</div>;
  }

  return (
    <div className="image-slider">
      <div className="main-image-container">
        {/* <GlassMagnifier
          imageSrc={mainImage || images[0]}
          imageAlt={`${product?.name || "Product"} - Image ${activeIndex + 1}`}
          largeImageSrc={mainImage || images[0]}
          magnifierBorderSize={1}
          magnifierSize="50%"
          className="main-image"
        /> */}
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

// upcoming implementation follows this medium article of @ilonacodes
// https://medium.com/@ilonacodes/simple-image-carousel-with-react-5e20933001bf
// only main difference of this implementation: uses React hooks

import React, { useState } from "react";
import "./styles.css";

const HookedCarousel = () => {
  const [images, setImages] = useState([
    "https://via.placeholder.com/600x600?text=1",
    "https://via.placeholder.com/600x600?text=2",
    "https://via.placeholder.com/600x600?text=3",
    "https://via.placeholder.com/600x600?text=4",
    "https://via.placeholder.com/600x600?text=5",
    "https://via.placeholder.com/600x600?text=6",
    "https://via.placeholder.com/600x600?text=7",
    "https://via.placeholder.com/600x600?text=8",
    "https://via.placeholder.com/600x600?text=9",
    "https://via.placeholder.com/600x600?text=10",
    "https://via.placeholder.com/600x600?text=11",
    "https://via.placeholder.com/600x600?text=12",
    "https://via.placeholder.com/600x600?text=13",
    "https://via.placeholder.com/600x600?text=14",
    "https://via.placeholder.com/600x600?text=15",
    "https://via.placeholder.com/600x600?text=16",
    "https://via.placeholder.com/600x600?text=17",
    "https://via.placeholder.com/600x600?text=18"
  ]);

  const [currentImageIdx, setCurrentImagIdx] = useState(0);

  const prevSlide = () => {
    // find out whether currentImageIdx eqals 0 and thus user reached beginning of carousel
    const resetToVeryBack = currentImageIdx === 0;

    const index = resetToVeryBack ? images.length - 1 : currentImageIdx - 1;

    // assign the logical index to current image index that will be used in render method
    setCurrentImagIdx(index);
  };

  const nextSlide = () => {
    // check if we need to start over from the first index
    const resetIndex = currentImageIdx === images.length - 1;

    const index = resetIndex ? 0 : currentImageIdx + 1;

    // assign the logical index to current image index that will be used in render method
    setCurrentImagIdx(index);
  };

  // create a new array with 3 elements from the source images
  const activeImageSourcesFromState = images.slice(
    currentImageIdx,
    currentImageIdx + 3
  );

  // check the length of the new array (it’s less than 5 when index is at the end of the imagge sources array)
  const imageSourcesToDisplay =
    activeImageSourcesFromState.length < 3
      ? // if the imageSourcesToDisplay's length is lower than 3 images than append missing images from the beginning of the original array
        [
          ...activeImageSourcesFromState,
          ...images.slice(0, 3 - activeImageSourcesFromState.length)
        ]
      : activeImageSourcesFromState;

  return (
    <div
      style={{
        display: "flex",
        alignContent: "center",
        justifyContent: "center"
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <button onClick={prevSlide}>Prev</button>
      </div>
      {/* render images */}
      {imageSourcesToDisplay.map((image, index) => (
        <img key={index} src={image} alt="" style={{ maxWidth: "20%" }} />
      ))}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <button onClick={nextSlide}>Next</button>
      </div>
    </div>
  );
};

export default HookedCarousel;

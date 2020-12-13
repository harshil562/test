import React, { useState } from "react";
import { ITEMS_TO_SHOW } from '../../product-utils/utils';

import "./styles.css";

const ProductItemsCarousel = ({ items }) => {
  const [currentProductIdx, setCurrentProductIdx] = useState(0);
  const activeProductItems = items.slice(currentProductIdx, currentProductIdx + ITEMS_TO_SHOW);

  const carouselProductItems = activeProductItems.length < ITEMS_TO_SHOW
    ? [...activeProductItems, ...items.slice(0, ITEMS_TO_SHOW - activeProductItems.length)]
    : activeProductItems;

  const handlePreviousClick = () => {
    // find out whether currentProductIdx eqals 0 and thus user reached beginning of carousel
    const resetToVeryBack = currentProductIdx === 0;
    const index = resetToVeryBack ? items.length - 1 : currentProductIdx - 1;
    setCurrentProductIdx(index);
  };

  const handleNextClick = () => {
    // check if we need to start over from the first index
    const resetIndex = currentProductIdx === items.length - 1;
    const index = resetIndex ? 0 : currentProductIdx + 1;
    setCurrentProductIdx(index);
  };

  return (
    <div className="carousel-container">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div className="carousel-arrows">
          <span onClick={handlePreviousClick}>{'<'}</span>
        </div>
        {carouselProductItems.map((item, index) => (
          <div key={item.id} className={index === 1 ? 'highlighted-product product-item' : 'product-item'}>
            <img src={item.imageUri} alt="product-item" />
            <div className="product-details">
              <p>{item.name}</p>
              <p>{`Price: ${item.price}`}</p>
            </div>
            <p>{`Category: ${item.category}`}</p>
          </div>
        ))}
        <div className="carousel-arrows">
          <span onClick={handleNextClick}> {'>'} </span>
        </div>
      </div>
    </div>
  );
};

export default ProductItemsCarousel;

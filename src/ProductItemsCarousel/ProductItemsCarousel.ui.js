import React, { useState } from "react";
import styled from 'styled-components'

import { ITEMS_TO_SHOW } from '../product-utils/utils';

const CarouselArrows = styled.div`
  &:hover {
    cursor: pointer;
    border-radius: 50%;
    background-color: #bbb;
    color: white;
  }
  height: 25px;
  width: 25px;
  justify-content: center;
  display: flex;
  margin: 10px;
  padding-top: 4px;
`

const ProductDetailsDiv = styled.div`
  display: flex;
  justify-content: space-between;
`

const CarouselContainerWrapper = styled.div`
  display: flex;
  align-items: center;;
`

const StyledProductItem = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 25%;
  border: 1px solid gray;
  padding: 6px;

  ${({ highlighted }) => highlighted && `
    height: 110%;
    width: 110%;
    border: 2px solid black;
    transition: all 300ms linear;
  `}
`


const ProductItemsCarousel = ({ items }) => {
  const [currentProductIdx, setCurrentProductIdx] = useState(0);
  const activeProductItems = items.slice(currentProductIdx, currentProductIdx + ITEMS_TO_SHOW);

  const carouselProductItems = activeProductItems.length < ITEMS_TO_SHOW
    ? [...activeProductItems, ...items.slice(0, ITEMS_TO_SHOW - activeProductItems.length)]
    : activeProductItems;

  const handlePreviousClick = () => {
    // find out whether currentProductIdx eqals 0 and thus user reached beginning of carousel
    const resetToVeryBack = (currentProductIdx === 0 || currentProductIdx > items.length);
    const index = resetToVeryBack ? items.length - 1 : currentProductIdx - 1;
    setCurrentProductIdx(index);
  };

  const handleNextClick = () => {
    // check if we need to start over from the first index
    const resetIndex = (currentProductIdx >= items.length - 1);
    const index = resetIndex ? 0 : currentProductIdx + 1;
    setCurrentProductIdx(index);
  };

  return (
    <CarouselContainerWrapper>
      <CarouselArrows onClick={handlePreviousClick}>{'<'}</CarouselArrows>
      {carouselProductItems.map((item, index) => (
        <StyledProductItem
          key={item.id}
          highlighted={index === 1}
        >
          <img src={item.imageUri} alt="product-item" />
          <ProductDetailsDiv>
            <p>{item.name}</p>
            <p>{`Price: ${item.price}`}</p>
          </ProductDetailsDiv>
          <p>{`Category: ${item.category}`}</p>
        </StyledProductItem>
      ))}
      <CarouselArrows onClick={handleNextClick}> {'>'} </CarouselArrows>
    </CarouselContainerWrapper>
  );
};

export default ProductItemsCarousel;

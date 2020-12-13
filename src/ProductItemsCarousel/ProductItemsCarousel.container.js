import React, { useState } from "react";
import styled from 'styled-components'

import ProductItemsCarousel from '../ProductItemsCarousel/ProductItemsCarousel.ui';
import { productItems, categories } from '../product-utils/utils';

const CategoriesWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0px 10px 30px;
`

const StyledCategoryButton = styled.button`
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  margin-right: 10px;
`

const ProductItemsContainer = () => {
  const [items, setItems] = useState(productItems);

  const handleCategoryClick = (category) => {
    const filteredItems = productItems.filter(el => el.category === category);
    setItems(filteredItems);
  }

  const handleResetCategory = () => {
    setItems(productItems);
  }

  return (
    <>
      <CategoriesWrapper>
        {
          categories.map(category => {
            return (
              <div key={category.id}>
                <StyledCategoryButton
                  className="category"
                  onClick={() => handleCategoryClick(category.name)}>
                  {category.name}
                </StyledCategoryButton>
              </div>
            )
          })
        }
        <StyledCategoryButton
          onClick={handleResetCategory}
          className="category">
          Reset
        </StyledCategoryButton>
      </CategoriesWrapper>
      <ProductItemsCarousel items={items} />
    </>
  );
};

export default ProductItemsContainer;

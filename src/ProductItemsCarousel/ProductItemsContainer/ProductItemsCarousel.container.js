import React, { useState } from "react";
import ProductItemsCarousel from '../ProductItemsCarousel/ProductItemsCarousel.ui';
import { productItems, categories } from '../../product-utils/utils';

import "./styles.css";

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
    <div>
      <div className="categories-container">
        {
          categories.map(category => {
            return (
              <div key={category.id}>
                <button
                  className="category"
                  onClick={() => handleCategoryClick(category.name)}>
                  {category.name}
                </button>
              </div>
            )
          })
        }
        <button onClick={handleResetCategory} className="category">Reset</button>
      </div>
      <ProductItemsCarousel items={items} />
    </div>
  );
};

export default ProductItemsContainer;

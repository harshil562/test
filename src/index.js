import React from "react";
import ReactDOM from "react-dom";
import ProductItemsContainer from "./ProductItemsCarousel/ProductItemsContainer/ProductItemsCarousel.container";

const App = () => <ProductItemsContainer />;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

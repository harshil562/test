import React from "react";
import ReactDOM from "react-dom";
import ProductItemsContainer from "./ProductItemsCarousel/ProductItemsCarousel.container";

const App = () => <ProductItemsContainer />;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

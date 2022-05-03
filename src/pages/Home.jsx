import React, { useState } from "react";
import MainModal from "../components/main-modal/MainModal";
import ProductList from "../components/product-list/ProductList";
import Slider from "../components/slider/Slider";

const Home = () => {
    const [products, setproducts] = useState([])
  return (
    <>
      <div className="container">
        <ProductList />
      </div>
    </>
  );
};

export default Home;

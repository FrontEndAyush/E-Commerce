import React, { PureComponent, useEffect, useState } from "react";
import Banner from "./Banner";
import Category from "./Category";
import Products from "./Products";
import Collection from "./Collection";
import BestSellers from "./BestSellers";
import Newsletter from "./Newsletter";

const Home = () => {
  let [products, setProducts] = useState([]);
  let [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    try {
      fetch("product.json")
        .then((response) => response.json())
        .then((data) => {
          setProducts(data), setFilteredItems(data);
        });
    } catch (err) {
      console.log("Error", err);
    }
  }, []);
  return (
    <>
      <div>
        <Banner></Banner>
        <Category></Category>
        <Products
          products={products}
          filteredItems={filteredItems}
          setFilteredItems={setFilteredItems}
        ></Products>
        <Collection></Collection>
        <BestSellers></BestSellers>
        <Newsletter></Newsletter>
      </div>
    </>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import Card from "../../components/Card";

const Products = ({ products, filteredItems , setFilteredItems}) => {
  let [option, setOptions] = useState("default");

  // filtering products by their category
  const FilterData = (category) => {
    const filter =
      category === "all"
        ? products
        : products.filter((item) => item.category === category);

    setFilteredItems(filter);
  };

  // showing all items on the click of the all products
  const showAll = () => {
    setFilteredItems(products);
  };

  // sorting functionality

  const sortItems = (optionByClick) => {
    setOptions(optionByClick);

    const sorted = [...filteredItems];

    switch (option) {
      case "Z-A":
        sorted.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "A-Z":
        sorted.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "low-to-high":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "high-to-low":
        sorted.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    setFilteredItems(sorted);
  };

  return (
    <div className="container mx-auto py-5">
      <h1 className="title">Or subscribe to the newsletter</h1>

      {/* all products */}
      <div>
        <div className="flex justify-between mt-3 flex-wrap flex-col md:flex-row">
          <div className="flex gap-4 my-3 justify-center md:justify-start">
            {/* all button */}
            <button onClick={() => showAll()}>All Products</button>
            <button onClick={(e) => FilterData("Dress")}>Clothing</button>
            <button onClick={(e) => FilterData(e.target.innerText)}>
              Hoodies
            </button>
            <button onClick={(e) => FilterData(e.target.innerText)}>Bag</button>
          </div>

          {/* all options */}

          <div
            className="flex justify-center
        "
          >
            <div>
              <FaFilter className="bg-black text-white rounded w-5 p-1 h-6" />
            </div>
            <div>
              <select
                name=""
                id=""
                className="bg-black text-white rounded w-20 h-6"
                onChange={(e) => sortItems(e.target.value)}
                value={option}
              >
                <option value="default">Default</option>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
                <option value="low-to-high">Low to High</option>
                <option value="high-to-low">High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* for cards */}
      <Card data={filteredItems}></Card>
    </div>
  );
};

export default Products;

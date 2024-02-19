import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { IoStarSharp } from "react-icons/io5";

const SinglePageProduct = () => {
  let [products, setProducts] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    fetch("/product2.json")
      .then((response) => response.json())
      .then((data) => {
        let product = data.filter((product) => product.id == id);
        setProducts(product[0]);
      });
  }, []);
  let { image, title, price } = products;

  return (
    <div className="container mx-auto  lg:py-28 py-4 ">
      <div className="flex justify-center gap-4 flex-wrap ">
        <div>
          <img src={image} alt="" />
        </div>
        <div className="lg:w-1/2 px-4  mt-5">
          <h1 className="text-xl  md:text-4xl font-semibold mb-3">{title}</h1>
          <p className=" lg:w-[400px] text-left ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
            esse. Culpa, eveniet iste corporis in minima ratione nisi atque
            recusandae possimus placeat ullam minus rerum! Aliquam, voluptas
            error? Optio, expedita? Lorem ipsum dolor sit, amet consectetur
            adipisicing elit.
          </p>
          <span className="flex mt-3 text-xl text-yellow-400 gap-1">
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
          </span>

          <p className="text-red-500 font-semibold mt-2">${price}</p>
          <div className="mt-2">
            <input
              className="border-2 "
              type="number"
              name=""
              min={1}
              max={4}
              defaultValue={1}
              id=""
            />
            <label htmlFor="" className="mx-2">
              : Quality
            </label>
          </div>
          <button className="w-1/2 bg-red-600 text-white font-semibold py-3 hover:bg-red-800 mt-5 rounded ">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default SinglePageProduct;

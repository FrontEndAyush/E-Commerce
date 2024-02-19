import React from "react";
import { Link } from "react-router-dom";

const Category = () => {
  let brands = [
    { id: 1, brand: "/brand/01.png" },
    { id: 2, brand: "/brand/02.png" },
    { id: 3, brand: "/brand/03.png" },
    { id: 4, brand: "/brand/04.png" },
    { id: 5, brand: "/brand/01.png" },
    { id: 6, brand: "/brand/01.png" },
  ];
  return (
    <div className="container mx-auto xl:py-28 ">
      {/* for brands logo?   */}
      <div className="flex  justify-around flex-wrap">
        {brands.map((br) => (
          <img key={br.id} src={br.brand} className="p-3 mx-auto" alt="" />
        ))}
      </div>

      {/* second div for category */}

      <div className="mt-24 flex p-3 flex-col md:flex-row text-center gap-3 justify-between container">
        <div className="my-auto">
          <p className="uppercase font-semibold text-3xl  md:-rotate-90  text-center ">
            Explore new and popular styles
          </p>
        </div>

        <div>
          <Link to={"/"}>
            <img
              src="/imagescategory/card.png"
              alt=""
              className="hover:scale-110 transition-all duration-150"
            />
          </Link>
        </div>
        <div className="  flex gap-4">
          <div>
            <Link to={"/"}>
              <img
                src="/imagescategory/1.png"
                alt=""
                className="hover:scale-110 transition-all duration-150"
              />
            </Link>
            <Link to={"/"}>
              <img
                src="/imagescategory/2.png"
                alt=""
                className="hover:scale-110 transition-all duration-150 mt-5"
              />
            </Link>
          </div>

          <div className="">
            <Link to={"/"}>
              <img src="/imagescategory/3.png" alt=""  className="hover:scale-110 transition-all duration-150"/>
            </Link>
            <Link to={"/"}>
              <img src="/imagescategory/4.png" alt="" className="hover:scale-110 transition-all duration-150 mt-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;

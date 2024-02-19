import React from "react";
import { FaShoppingBag } from "react-icons/fa";

function Banner() {
  return (
    <div className="py-3 p-10 bg-[#F4F4F5] mx-auto flex flex-wrap-reverse justify-around">
      <div className="mt-20 ml-3">
        <h1 className="text-5xl mt-5">Collections</h1>
        <p className="text-xl mt-7">
          you can explore ans shop many differnt collection
        </p>
        <p className="text-xl mt-5">from various barands here.</p>
        <button className="py-2 px-4 flex gap-2 bg-black my-8 text-white">
          {" "}
          <FaShoppingBag className="mt-1"/>
          Shop Now
        </button>
      </div>

      <div className="">
        <img src="/images/bannerimg.png" className="p-3 mr-[10px] " alt="" />
      </div>
    </div>
  );3
}

export default Banner;

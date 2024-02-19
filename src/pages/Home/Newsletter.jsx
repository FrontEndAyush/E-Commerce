import React from "react";
import { Link } from "react-router-dom";

const Newsletter = () => {
  return (
    <div className="bg-gray-100 xl:py-20 py-4 mt-10">
      <h1 className="title mb-8 px-4">
        Follow products and discounts on Instagram
      </h1>

      {/* for newsletter images */}
      <div className="container mx-auto flex gap-3 flex-wrap justify-center">
        <Link>
          <img src="/Card/1.png" alt="" />
        </Link>
        <Link>
          <img src="/Card/2.png" alt="" />
        </Link>
        <Link>
          <img src="/Card/3.png" alt="" />
        </Link>
        <Link>
          <img src="/Card/4.png" alt="" />
        </Link>
        <Link>
          <img src="/Card/5.png" alt="" />
        </Link>
        <Link>
          <img src="/Card/6.png" alt="" />
        </Link>
      </div>

      {/* for emails */}

      <div className="container m-auto  mt-8 flex h-7  align-middle text-center justify-center ">
        <form>
          <input
            type="email"
            name=""
            id=""
            placeholder="Email address..."
            className="bg-transparent text-black md:w-[500px] outline-none border-b-2  border-black"
          />
          <input
            type="submit"
        
            className="bg-transparent text-black  outline-none border-b-2 cursor-pointer border-black ml-2 text-center"
            value={"SUBMIT"}
          />
        </form>
      </div>
    </div>
  );
};

export default Newsletter;

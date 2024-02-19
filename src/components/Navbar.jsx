import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  let [isCross, setIsCross] = useState(false);
  let NavItems = [
    { title: "Jewelry & Accessories", path: "/" },
    { title: "Clothing & Shoes", path: "/" },
    { title: "Home & Living", path: "/" },
    { title: "Wedding & Party", path: "/" },
    { title: "Toys & Entertainment", path: "/" },
    { title: "Art & Collectibles", path: "/" },
  ];
  const handleIsCross = () => {
    setIsCross((previousValue) => !previousValue);
  };
  return (
    <header className=" mx-auto bg-[#F4F4F5] ] ">
      <nav className="flex justify-between gap-3 w-[80vw] items-center mx-auto py-5  bg-[#F4F4F5] ">
        <FaSearch className="hidden md:block" />

        <a href="" className=" lg:ml-[100px]">
          <img src="/logo.png" alt="" />
        </a>

        <div className="text-lg gap-5 sm:flex hidden ">
          <a href="" className="flex text-center ">
            <MdAccountCircle className="mt-1 mr-1" /> Account
          </a>
          <a href="" className="flex text-center">
            <FaShoppingBag className="mt-1 mr-1" /> Shopping
          </a>
        </div>
        {/* {menu bar} */}
        <div className="sm:hidden">
          <button onClick={() => handleIsCross()}>
            {isCross === false ? (
              <IoMdMenu className="md:hidden text-2xl" />
            ) : (
              <RxCross1 className="md:hidden text-2xl" />
            )}
          </button>
        </div>
      </nav>
      <hr />

      {/* navitems? */}

      <div className=" hidden  lg:flex justify-between py-5 w-[80vw] m-auto ">
        {NavItems.map((item) => (
          <Link to={item.path} className="hover:text-orange-500"key={Math.random()}>
            {item.title}
          </Link>
        ))}
      </div>

      {/* for mobile menu bar only */}
      {isCross === true ? (
        <>
          <div className=" absolute  left-0 right-0 lg:hidden">
            {NavItems.map((item) => (
              <li className="list-none mx-auto bg-black text-white py-4 px-5">
                <Link to={item.path} className="hover:text-orange-500">
                  {item.title}
                </Link>
              </li>
            ))}
          </div>{" "}
        </>
      ) : (
        ""
      )}
    </header>
  );
};

export default Navbar;

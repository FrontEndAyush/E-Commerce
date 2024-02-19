import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <>
      <div className="container mx-auto md:py-28 py-4 px-5 flex justify-between flex-wrap">
        <div>
          <img src="/logo.png" alt="" className="mb-8" />
          <p className="md:w-[500px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            dicta earum, aliquid ipsum quae ad quam. Modi deleniti dicta
            corporis. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Ab labore velit culpa incidunt inventore quos vero ipsa
            reprehenderit laudantium quidem.
          </p>
          <div className="flex gap-4 text-2xl mt-5 mb-4 ">
            <FaFacebookF />
            <FaTwitter />
            <FaYoutube />
            <FaLinkedinIn />
          </div>
        </div>

        {/* cataglog section */}
        <div className="flex flex-col">
          <h1 className="font-semibold mb-2">CATALOG</h1>
          <Link className="mt-3">
            <a href="">Necklaces</a>
          </Link>
          <Link className="mt-3">
            <a href="">Hoodies</a>
          </Link>
          <Link className="mt-3">
            <a href="">Jewelry Box</a>
          </Link>
          <Link className="mt-3">
            <a href="">T-shirt</a>
          </Link>
          <Link className="mt-3">
            <a href="">Jacket</a>
          </Link>
        </div>

        {/* about section */}
        <div className="flex flex-col">
          <h1 className="font-semibold mb-2">ABOUT</h1>
          <Link className="mt-3">
            <a href="">Necklaces</a>
          </Link>
          <Link className="mt-3">
            <a href="">Our Producers</a>
          </Link>
          <Link className="mt-3">
            <a href="">Sitemap</a>
          </Link>
          <Link className="mt-3">
            <a href="">FAQ</a>
          </Link>
          <Link className="mt-3">
            <a href="">Terms & Conditions</a>
          </Link>
        </div>

        {/* customer Services */}
        <div className="flex flex-col">
          <h1 className="font-semibold mb-2">CATALOG</h1>
          <Link className="mt-3">
            <a href="">Necklaces</a>
          </Link>
          <Link className="mt-3">
            <a href="">Hoodies</a>
          </Link>
          <Link className="mt-3">
            <a href="">Jewelry Box</a>
          </Link>
          <Link className="mt-3">
            <a href="">T-shirt</a>
          </Link>
          <Link className="mt-3">
            <a href="">Jacket</a>
          </Link>
        </div>
      </div>

      <div className=" md:h-10 bg-black flex justify-between  text-center px-10 mt-3 pt-2 flex-wrap">
        <p className="text-white">© 2022 Coral , Inc.</p>

        <div>
          <img src="/payment.png" alt="" />
        </div>

        <button onClick={topFunction} className="text-white">Scroll To Top</button>
      </div>
    </>
  );
};

export default Footer;

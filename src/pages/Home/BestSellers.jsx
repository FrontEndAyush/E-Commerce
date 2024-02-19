import React from "react";
import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const BestSellers = () => {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    try {
      fetch("product.json")
        .then((response) => response.json())
        .then((data) => {
          setProducts(data);
        });
    } catch (err) {
      console.log("Error", err);
    }
  }, []);

  let bestSellers = products.filter((data) => data.status === "Best Selers");
  
  return (
    <div className="container mx-auto mt-14 xl:px-28 px-4">
      <div>
        <h2 className="font-semibold text-5xl mb-5 text-center ">
          Best sellers
        </h2>
        <p className="text-black text-xl text-center mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus arcu
          nunc, fermentum quis sapien in, placerat scelerisque risus. Class
          aptent taciti sociosqu ad litora torquent per{" "}
        </p>
      </div>

      {/* best seller products */}
      <div>
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {bestSellers.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="container flex gap-8 mt-8 justify-center flex-wrap   mx-auto ">
                <Link to={"/"}>
                  <img
                    src={product.image}
                    alt=""
                    className="hover:scale-105 transition-all w-[240px]  duration-300"
                  />
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BestSellers;

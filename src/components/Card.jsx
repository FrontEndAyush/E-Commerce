import React from "react";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  return (
    <div className="container flex gap-8 mt-8 justify-center flex-wrap   mx-auto ">
      {data.slice(0, 8).map((cardData) => (
        <Link to={`/shop/${cardData.id}`} key={cardData.id}>
          <img
            src={cardData.image}
            alt=""
            className="hover:scale-105 transition-all w-[240px]  duration-300"
          />
        </Link>
      ))}
    </div>
  );
};

export default Card;

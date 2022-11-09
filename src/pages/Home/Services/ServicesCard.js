import React from "react";
import { Link } from "react-router-dom";

const ServicesCard = ({ service }) => {
  const { title, img, price } = service;
  return (
    <div className="card card-compact bg-base-100 rounded shadow-sm hover:shadow-xl">
      <figure>
        <img className="h-[350px] w-full" src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-black">{title}</h2>
        <p className="text-black font-semibold">$ {price}</p>
        <div className="card-actions justify-end">
          <button className="px-4 py-2 uppercase bg-green-600 font-semibold text-white rounded">
            <Link to="/services">See All</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;

import React from "react";
import { Link } from "react-router-dom";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";

const ServicesCard = ({ service }) => {
  const { title, img, price } = service;
  return (
    <div className="card card-compact bg-base-100 rounded shadow-sm hover:shadow-xl">
      <PhotoProvider>
        <PhotoView src={img}>
          <img
            className="w-full md:h-[400px]"
            src={img}
            style={{ objectFit: "cover" }}
            alt=""
          />
        </PhotoView>
      </PhotoProvider>
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

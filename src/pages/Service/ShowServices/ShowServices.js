import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";

const ShowServices = ({ service }) => {
  const { title, img, price, ratings, _id, description } = service;
  return (
    <div className="card card-compact bg-base-100 shadow-sm hover:shadow-xl rounded">
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
      <div className="card-body w-full">
        <h2 className="card-title text-black">{title}</h2>
        <div className="flex justify-between text-black">
          <span className="font-semibold">$ {price}</span>
          <span className="flex justify-center items-center ">
            <FaStar className="text-yellow-500"></FaStar>
            <FaStar className="text-yellow-500"></FaStar>
            <FaStar className="text-yellow-500"></FaStar>
            <FaStar className="text-yellow-500"></FaStar>
            <FaStarHalfAlt className="mr-2 text-yellow-500"></FaStarHalfAlt>
            {ratings}
          </span>
        </div>
        <p>{`${description.slice(0, 100)}...`}</p>
        <div className="card-actions justify-end">
          <button className="bg-green-600 text-white font-semibold uppercase rounded px-4 py-2">
            <Link to={`/services/${_id}`}>View Detailes</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowServices;

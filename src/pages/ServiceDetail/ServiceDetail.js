import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const ServiceDetail = () => {
  const service = useLoaderData();
  const { img, title, description, price, ratings } = service;
  return (
    <div className="card card-compact bg-base-100 shadow-sm my-10 hover:shadow-xl rounded">
      <figure>
        <img className="w-full" src={img} alt="Shoes" />
      </figure>
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
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceDetail;

import React from "react";
import { useLoaderData } from "react-router-dom";
import ShowServices from "./ShowServices/ShowServices";

const ServiceAll = () => {
  const services = useLoaderData();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-10">
      {services.map((service) => (
        <ShowServices key={service._id} service={service}></ShowServices>
      ))}
    </div>
  );
};

export default ServiceAll;

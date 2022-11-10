import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const NewServices = () => {
  const { user } = useContext(AuthContext);
  const [newService, setNewService] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/newServices?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setNewService(data));
  }, [user?.email]);
  return (
    <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-4">
      {newService.map((service) => (
        <div key={service._id}>
          <div className="card card-compact bg-base-100 shadow-sm hover:shadow-xl">
            <figure>
              <img className="w-full" src={service.img} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{service.serviceName}</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="px-4 py-2 bg-green-600 text-white rounded">
                  <Link to="/services">See All</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewServices;

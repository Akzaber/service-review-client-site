import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const Reviews = ({ service }) => {
  const { user } = useContext(AuthContext);
  const { _id, title, price } = service;

  const handleReview = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const email = form.email?.value || "Unregistered";
    const text = form.text.value;
    console.log(name, email, text);

    const serviceReview = {
      service: _id,
      serviceName: title,
      price,
      customerName: name,
      email,
      message: text,
    };

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(serviceReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged === true) {
          alert("Review placed Successfully");
          form.reset();
        }
        console.log(data);
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="my-10">
      <h2 className="text-2xl font-semibold text-green-600 uppercase">
        Add your Review here..!
      </h2>
      <h4>
        {user?.email ? (
          <></>
        ) : (
          <>
            <h3 className="text-2xl font-semibold text-red-600">
              Please Log in to add the Review{" "}
              <Link className="underline text-black" to="/login">
                Login now
              </Link>
            </h3>
          </>
        )}
      </h4>
      <form onSubmit={handleReview}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          <input
            type="text"
            required
            name="name"
            placeholder="Your Name"
            className="input input-bordered input-success w-full"
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            defaultValue={user?.email}
            readOnly
            className="input input-bordered input-success w-full"
          />
        </div>
        <textarea
          className="textarea textarea-info w-full"
          placeholder="Your Message"
          name="text"
          required
        ></textarea>
        <div className="flex justify-end">
          <input
            className="px-4 py-2 bg-green-600 text-white rounded"
            type="submit"
            value="Add Review"
          />
        </div>
      </form>
    </div>
  );
};

export default Reviews;

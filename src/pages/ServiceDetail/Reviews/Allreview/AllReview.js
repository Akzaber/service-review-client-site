import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Contexts/AuthProvider/AuthProvider";
import { FaUser } from "react-icons/fa";

const AllReview = () => {
  const { user } = useContext(AuthContext);
  const [allReview, setAllReview] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setAllReview(data));
  }, []);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete review");
    if (proceed) {
      fetch(`http://localhost:5000/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount === 1) {
            alert("Deleted Confirm");
            const remaining = allReview.filter((review) => review._id !== id);
            setAllReview(remaining);
          }
          console.log(data);
        })
        .catch((err) => console.error(err));
    }
  };
  return (
    <div>
      {allReview?.length === 0 && (
        <>
          <h1 className="text-2xl text-red-600 fornt-semibold">
            No Review Found
          </h1>
        </>
      )}
      {allReview.map((review) => (
        <div className="overflow-x-auto w-full my-10" key={review._id}>
          <table className="table w-full">
            <thead>
              <tr>
                <th className="mx-0">
                  <button
                    onClick={() => handleDelete(review._id)}
                    className="btn btn-ghost"
                  >
                    X
                  </button>
                </th>
                <th>ServiceName</th>
                <th>Price</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        {user?.photoURL ? (
                          <>
                            <img
                              src={user?.photoURL}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </>
                        ) : (
                          <>
                            <FaUser></FaUser>
                          </>
                        )}
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{review.customerName}</div>
                      <div className="text-sm opacity-50">{review.email}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {review.serviceName}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    $ {review.price}
                  </span>
                </td>
                <td>{review.price}</td>
                <td>
                  {/* The button to open modal */}
                  <label
                    htmlFor="my-modal-3"
                    className="px-3 py-1 bg-green-600 rounded cursor-pointer text-white font-normal"
                  >
                    message
                  </label>
                  <input
                    type="checkbox"
                    id="my-modal-3"
                    className="modal-toggle"
                  />
                  <div className="modal">
                    <div className="modal-box relative">
                      <label
                        htmlFor="my-modal-3"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                      >
                        ✕
                      </label>
                      <h3 className="text-lg font-bold">
                        {review.serviceName}
                      </h3>
                      <p className="py-4 font-normal">{review.message}</p>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default AllReview;

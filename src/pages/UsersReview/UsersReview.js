import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import { FaEdit, FaUser } from "react-icons/fa";

const UsersReview = () => {
  const { user } = useContext(AuthContext);
  const [userReview, setUserReview] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUserReview(data));
  }, [user?.email]);

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
            const remaining = userReview.filter((review) => review._id !== id);
            setUserReview(remaining);
          }
          console.log(data);
        })
        .catch((err) => console.error(err));
    }
  };
  return (
    <div>
      {userReview?.length === 0 && (
        <>
          <div className="hero min-h-screen text-2xl text-red-600 fornt-semibold">
            <div className="hero-content text-center">
              <div className="max-w-md">
                <h1 className="text-5xl font-bold">No Review Found</h1>
              </div>
            </div>
          </div>
        </>
      )}
      {userReview.map((review) => (
        <div className="overflow-x-auto w-full my-10" key={review._id}>
          <table className="table w-full">
            <thead>
              <tr>
                <th>
                  <button
                    onClick={() => handleDelete(review._id)}
                    className="btn btn-ghost"
                  >
                    X
                  </button>
                  <button className="btn btn-ghost">
                    <FaEdit></FaEdit>
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
                      <div className="font-bold">{review?.customerName}</div>
                      <div className="text-sm opacity-50">{user?.email}</div>
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
                <th>
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
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default UsersReview;

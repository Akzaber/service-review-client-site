import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const UsersReview = () => {
  const { user } = useContext(AuthContext);
  const [userReview, setUserReview] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUserReview(data));
  }, [user?.email]);
  return (
    <div>
      {userReview.map((review) => (
        <div className="overflow-x-auto w-full my-10" key={review._id}>
          <table className="table w-full">
            <thead>
              <tr>
                <th className="mx-0">
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
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
                        <img
                          src={user?.photoURL}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user?.displayName}</div>
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

                  {/* Put this part before </body> tag */}
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

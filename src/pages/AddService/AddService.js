import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddService = () => {
  const { user } = useContext(AuthContext);

  const showToastMessage = () => {
    toast.success("SuccessFully Added", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const handleAddService = (event) => {
    event.preventDefault();
    const form = event.target;

    const serviceName = form.serviceName.value;
    const price = form.price.value;
    const picture = form.photoURL.value;
    const email = form.email.value;
    const description = form.text.value;
    console.log(serviceName, price, picture, email, description);

    const newService = {
      serviceName: serviceName,
      price: price,
      img: picture,
      email: email,
      description: description,
    };

    fetch("http://localhost:5000/newServices", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newService),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged === true) {
          showToastMessage();
        }
        console.log(data);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="min-h-screen">
      <form onSubmit={handleAddService}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          <input
            type="text"
            required
            name="serviceName"
            placeholder="Service Name"
            className="input input-bordered input-success w-full"
          />
          <input
            type="text"
            required
            name="price"
            placeholder="Service Price"
            className="input input-bordered input-success w-full"
          />
          <input
            type="text"
            required
            name="photoURL"
            placeholder="Service Picture"
            className="input input-bordered input-success w-full"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            defaultValue={user?.email}
            readOnly
            className="input input-bordered input-success w-full"
          />
        </div>
        <textarea
          className="textarea textarea-info w-full"
          placeholder="Description"
          name="text"
          required
        ></textarea>
        <div className="flex justify-end">
          <input
            className="px-4 py-2 bg-green-600 text-white rounded"
            type="submit"
            value="Add Service"
          />
          <ToastContainer></ToastContainer>
        </div>
      </form>
    </div>
  );
};

export default AddService;

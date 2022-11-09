import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photoURL = form.photoURL.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        handleUpdateUserProfile(name, photoURL);
      })
      .catch((error) => console.error(error));
  };

  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <div className="hero">
      <div className="hero-content flex-col md:flex-row">
        <div className="w-1/2">
          <img
            src="https://i.ibb.co/9nCdvZx/12291223-Wavy-Tech-28-Single-10.jpg"
            alt=""
          />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-sm hover:shadow-xl bg-base-100">
          <h1 className="text-5xl font-bold text-center text-green-600">
            Register now!
          </h1>
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">PhotoURL</span>
              </label>
              <input
                type="text"
                placeholder="photoURL"
                name="photoURL"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <p>
                  <small>
                    Already have an account?{" "}
                    <Link className="underline" to="/login">
                      Login
                    </Link>
                  </small>
                </p>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                className="px-4 py-2 bg-green-600 rounded text-white font-semibold"
                type="submit"
                value="signup"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

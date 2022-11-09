import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
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
            Login now!
          </h1>
          <form onSubmit={handleSubmit} className="card-body">
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
                  First Time Here <Link to="/register">Register Now</Link>
                </p>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="px-4 py-2 bg-green-600 rounded text-white font-semibold">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

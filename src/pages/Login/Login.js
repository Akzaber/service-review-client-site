import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const Login = () => {
  const { logInUser, signInWithGoogle } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmitForm = (event) => {
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    logInUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
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
            Login now!
          </h1>
          <form onSubmit={handleSubmitForm} className="card-body">
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
                    New in sports photograper?
                    <Link className="underline" to="/register">
                      register now
                    </Link>
                  </small>
                </p>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                className="px-4 py-2 bg-green-600 rounded text-white font-semibold"
                type="submit"
                value="Login"
              />
            </div>
            <button
              type="submit"
              onClick={handleGoogleSignIn}
              className="px-4 py-2 bg-green-600 rounded text-white font-semibold flex justify-center items-center"
            >
              <FaGoogle className="mr-2"></FaGoogle>Continue With Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

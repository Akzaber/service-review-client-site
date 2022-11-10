import { useContext } from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <div className="navbar bg-green-600 text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact font-semibold dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl uppercase font-bold">
          Sports Photograper
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 font-semibold">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          {user?.email && (
            <li>
              <Link to="/userReview">My Review</Link>
            </li>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        <div>
          {user?.photoURL && (
            <>
              <div className="avatar mr-3 hidden lg:block">
                <div className="w-10 rounded-full">
                  {user?.photoURL ? (
                    <>
                      <img src={user?.photoURL} alt="" />
                    </>
                  ) : (
                    <>
                      <FaUser></FaUser>
                    </>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
        {user?.email ? (
          <>
            <button
              onClick={handleLogOut}
              className="bg-white font-semibold text-green-600 px-1 py-1 rounded"
            >
              Log Out
            </button>
          </>
        ) : (
          <>
            <button className="bg-white font-semibold text-green-600 px-1 py-1 rounded">
              <Link to="/login">Login</Link>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;

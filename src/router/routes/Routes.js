import { createBrowserRouter, Link } from "react-router-dom";
import Main from "../../layouts/Main";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Login/Register/Register";
import ServiceAll from "../../pages/Service/ServiceAll";
import ServiceDetail from "../../pages/ServiceDetail/ServiceDetail";
import UsersReview from "../../pages/UsersReview/UsersReview";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <ServiceAll></ServiceAll>,
        loader: () => fetch("http://localhost:5000/services"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/userReview",
        element: <UsersReview></UsersReview>,
      },
      {
        path: "/services/:id",
        element: <ServiceDetail></ServiceDetail>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
    ],
  },
  {
    path: "*",
    element: (
      <div className="hero min-h-screen text-white bg-green-600">
        <div className="hero-content text-center">
          <div className="max-w-1/2">
            <h1 className="text-5xl font-bold">
              404 <br /> You Are Looking A Little Lost !
            </h1>
            <p className="py-6">
              Unfortunately the page you are looking for cannot be found..
            </p>
            <button className="px-4 font-semibold py-2 bg-white rounded text-green-600">
              <Link to="/">Back Home</Link>
            </button>
          </div>
        </div>
      </div>
    ),
  },
]);

export default router;

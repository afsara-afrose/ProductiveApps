import React from "react";
import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Shared/Footer";
import error from "../assets/resorces/error-404.png";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <img src={error} alt="" className="mx-auto mb-4" />

          <h1 className="text-3xl font-semibold mb-2">Oops, page not found!</h1>

          <p className="opacity-80 mb-4">
            The page you are looking for is not available.
          </p>

          <Link to="/" className="common-btn inline-block">
            Go Back!
          </Link>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;

import React from "react";
import appnotFound from "../assets/resorces/App-Error.png";
import { Link } from "react-router";

const AppNotFound = () => {
  return (
    <div className="">
      <img src={appnotFound} alt="" className="mx-auto" />
      <p className="opacity-80 text-center mt-10">
        The App you are requesting is not found on our system. please try
        another apps
      </p>
      <div className="flex justify-center mt-5">
        <Link to="/apps" className="common-btn inline-flex items-center">
          Go Back !
        </Link>
      </div>
    </div>
  );
};

export default AppNotFound;

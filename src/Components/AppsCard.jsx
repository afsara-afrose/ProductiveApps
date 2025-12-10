import React from "react";
import { FaDownload, FaStar } from "react-icons/fa";

const AppsCard = ({app}) => {

  return (
     <div className="w-11/12 bg-white rounded-xl shadow p-4 hover:scale-105">
      {/* Image */}
      <div className="h-40  bg-gray-300 rounded-lg ">
        <img
          src={app.image}
          alt={app.title}
          className="h-full w-full rounded-xl p-4 bg-amber-50"
        />
      </div>

      {/* Title & Description */}
      <h3 className="mt-3 font-semibold text-gray-800">{app.title}</h3>
      <p className="text-sm text-gray-500">{app.description}</p>

      {/* Stats Section */}
      <div className="flex justify-between items-center mt-4">
        {/* Downloads */}
        <div className="flex items-center gap-1 text-green-600 font-medium">
          <FaDownload size={14} />
          <span>{(app.downloads / 1000000).toFixed(0)}M</span>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 text-orange-500 font-medium">
          <FaStar size={14} />
          <span>{app.ratingAvg}</span>
        </div>
      </div>
    </div>
  );
};

export default AppsCard;

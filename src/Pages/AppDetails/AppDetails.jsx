import React, { useState } from "react";
import { toast } from "react-toastify";
import { useParams } from "react-router";
import UseApps from "../../hook/UseApps";
import { ScaleLoader } from "react-spinners";
import download from "../../assets/resorces/icon-downloads.png";
import ratings from "../../assets/resorces/icon-ratings.png";
import reviewsicon from "../../assets/resorces/icon-review.png";
import RatingsBarChart from "../../Components/RatingsBarChart";

const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading } = UseApps();
  const [installed, setInstalled] = useState(false);

  if (loading) return <ScaleLoader className="items-center " />;

  const app = apps.find((a) => a.id === Number(id));

  if (!app) return <p>App not found</p>;

  const {
    title,
    image,
    companyName,
    description,
    size,
    downloads,
    ratingAvg,
    reviews,
  } = app;

  const handleInstall = () => {
    setInstalled(true);
    toast.success("App installed successfully!");
  };

  return (
    <>
      <div className="w-full h-full max-w-3xl   mx-auto mt-20 flex gap-6  rounded-xl p-6 object-cover ">
        {/* LEFT SIDE IMAGE */}
        <div className="w-36 h-36 flex-shrink-0">
          <img src={image} alt={title} className="w-full h-full  rounded-xl" />
        </div>

        {/* RIGHT SIDE DETAILS */}
        <div className="flex-1  ">
          <h2 className="text-3xl font-semibold">
            {title}:{description}
          </h2>
          <p className="text-gray-500 mb-3 mt-3">
            Developed by <span className="text-primary">{companyName}</span>
          </p>

          <div className="w-full border-b border-gray-300 mb-4"></div>

          {/* Stats Section */}
          <div className="grid grid-cols-3 gap-4 text-center my-4">
            <div>
              <img src={download} alt="" className="item-center mx-auto mb-3" />
              <p className="text-l text-gray-500 mb-2">Downloads</p>
              <p className="text-3xl font-bold">
                {(downloads / 1000000).toFixed(0)}M
              </p>
            </div>

            <div>
              <img src={ratings} alt="" className="mx-auto mb-3" />
              <p className="text-l text-gray-500 mb-2">Rating</p>
              <p className="text-3xl font-bold">{ratingAvg}</p>
            </div>

            <div>
              <img src={reviewsicon} alt="" className="mx-auto mb-3" />
              <p className="text-l text-gray-500 mb-2">Reviews</p>
              <p className="text-3xl font-bold">
                {(reviews / 1000).toFixed(1)}K
              </p>
            </div>
          </div>

          {/* Install Button */}
          <button
            disabled={installed}
            onClick={handleInstall}
            className={`mt-2  py-2 px-3 rounded-full text-white 
          ${installed ? "common-btn" : " green-btn"}`}
          >
            {installed ? "Installed" : `Install (${size} MB)`}
          </button>
        </div>
      </div>
      <div className="w-full max-w-3xl mx-auto border-b border-gray-300 mb-4"></div>

      {/* bar chart */}
      <div className='max-w-3xl   mx-auto mt-20'>
      <RatingsBarChart app={app} />
    </div>
    <div className="w-full max-w-3xl mx-auto mt-20 border-b border-gray-300 mb-4"></div>

    <div className="max-w-3xl   mx-auto mt-20">
      <h3 className='text-lg mt-7 font-bold'>Description</h3>
      <p className='text-sm mt-5 text-secondary opacity-80'>{app.appDescription}</p>
    </div>
    </>

  );
};

export default AppDetails;

import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import download from "../assets/resorces/icon-downloads.png";
import rating from "../assets/resorces/icon-ratings.png";
import UseApps from "../hook/UseApps";
import { ScaleLoader } from "react-spinners";


const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");
  const {loading} =UseApps();

  // load installed apps
  useEffect(() => {
    try {
      const data = JSON.parse(localStorage.getItem("installedApps"));
      setInstalledApps(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Invalid localStorage data:", error);
      setInstalledApps([]);
    }
  }, []);

  // uninstall app
  const handleUninstall = (id) => {
    const updatedApps = installedApps.filter((app) => app.id !== id);

    setInstalledApps(updatedApps);
    localStorage.setItem("installedApps", JSON.stringify(updatedApps));

    toast.info("App uninstalled successfully!");
  };

  // sorted App by download 
  const sortedApps = (() => {
    if (sortOrder === "downloads-asc") {
      return [...installedApps].sort((a, b) => a.downloads - b.downloads);
    } else if (sortOrder === "downloads-desc") {
      return [...installedApps].sort((a, b) => b.downloads - a.downloads);
    } else {
      return installedApps;
    }
  })();

  return (
   
    <div className="max-w-5xl mx-auto mt-10 ">
      <h1 className="text-3xl font-bold text-center mb-3">
        Your Installed Apps
      </h1>
      <p className="text-sm opacity-80 text-center mb-10">
        Explore All Trending Apps on the Market developed by us
      </p>

      <div className="flex justify-between items-center mb-5">
        <span className="text-l font-bold">
          ({sortedApps.length}) Apps Found
        </span>

        <select
          className="select select-bordered w-full max-w-xs"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="none">Sort by size</option>
          <option value="downloads-desc">High → Low</option>
          <option value="downloads-asc">Low → High</option>
        </select>
      </div>
   {loading ? (
  <div className="flex justify-center mt-10">
    <ScaleLoader count={16} />
  </div>
) : sortedApps.length === 0 ? (
  <p className="text-center text-2xl text-gray-500">
    No apps installed yet
  </p>
) : (
  <div className="space-y-3">
    {sortedApps.map((app) => (
      <div
        key={app.id}
        className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm"
      >
        {/* Left side */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <img
              src={app.image}
              alt={app.title}
              className="w-14 h-14 rounded-lg"
            />

            <div>
              <div className="flex gap-2">
                <h3 className="font-semibold opacity-80">
                  {app.title} :
                </h3>
                <p className="text-sm opacity-60">
                  {app.description}
                </p>
              </div>

              <div className="flex items-center gap-4 mt-4">
                <div className="flex items-center gap-1">
                  <img src={download} className="h-5" alt="" />
                  <p className="text-xs opacity-60">
                    {(app.downloads / 1_000_000)
                      .toFixed(1)
                      .replace(".0", "")}
                    M
                  </p>
                </div>

                <div className="flex items-center gap-1">
                  <img src={rating} className="h-5" alt="" />
                  <span>{app.ratingAvg}</span>
                </div>

                <span className="opacity-80">
                  {app.size}MB
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right side */}
        <button
          onClick={() => handleUninstall(app.id)}
          className="bg-green-500 text-white px-4 py-1 rounded"
        >
          Uninstall
        </button>
      </div>
    ))}
  </div>
)}
    </div>
  );
};

export default Installation;

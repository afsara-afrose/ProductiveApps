import React, { useState } from "react";
import UseApps from "../hook/UseApps";
import AppsCard from "../Components/AppsCard";
import { ScaleLoader } from "react-spinners";
import { CiSearch } from "react-icons/ci";

const Apps = () => {
  const { apps, loading } = UseApps();
  const [search, setSearch] = useState("");
  const term = search.trim().toLocaleLowerCase();
  const searchedApps = term
    ? apps.filter((app) => app.title.toLocaleLowerCase().includes(term))
    : apps;
  return (
    <>
      <div className="text-center mt-10">
        <h1 className="text-4xl font-bold">Our All Applications</h1>
        <p className="m-5 text-gray-600  md:text-lg opacity-80">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex justify-between py-5 items-center max-w-11/12  mx-auto">
        <span className=" text-gray-500 font-bold">
          ({searchedApps.length}) Apps Found.
        </span>

        <label className="input">
          <CiSearch />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search Apps"
          />
        </label>
      </div>
      {loading ? (
        <ScaleLoader count={16} />
      ) : term && searchedApps.length === 0 ? (
        <div className="text-center text-4xl font-semibold text-red-500 mt-10">
          No App Found for “{search}”
        </div>
      ) : (
        <div className=" max-w-11/12  mx-auto bg-purple-200  rounded-xl p-10 my-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {searchedApps.map((app) => (
            <AppsCard key={app.id} app={app} />
          ))}
        </div>
      )}
    </>
  );
};

export default Apps;

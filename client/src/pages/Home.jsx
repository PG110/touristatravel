import React, { useCallback, useEffect, useState } from "react";
import { FaCalendar, FaSearch, FaStar } from "react-icons/fa";
import { FaRankingStar } from "react-icons/fa6";
import { LuBadgePercent } from "react-icons/lu";
import PackageCard from "./PackageCard";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  const [topPackages, setTopPackages] = useState([]);
  const [latestPackages, setLatestPackages] = useState([]);
  const [offerPackages, setOfferPackages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const getTopPackages = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetch(
        "/api/package/get-packages?sort=packageRating&limit=8"
      );
      const data = await res.json();
      if (data?.success) {
        setTopPackages(data?.packages);
        setLoading(false);
      } else {
        setLoading(false);
        alert(data?.message || "Something went wrong!");
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getLatestPackages = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetch(
        "/api/package/get-packages?sort=createdAt&limit=8"
      );
      const data = await res.json();
      if (data?.success) {
        setLatestPackages(data?.packages);
        setLoading(false);
      } else {
        setLoading(false);
        alert(data?.message || "Something went wrong!");
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getOfferPackages = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetch(
        "/api/package/get-packages?sort=createdAt&offer=true&limit=6"
      );
      const data = await res.json();
      if (data?.success) {
        setOfferPackages(data?.packages);
        setLoading(false);
      } else {
        setLoading(false);
        alert(data?.message || "Something went wrong!");
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getTopPackages();
    getLatestPackages();
    getOfferPackages();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="main w-full min-h-screen bg-gradient-to-br from-blue-100 via-yellow-50 to-pink-100 relative overflow-x-hidden">
      {/* Light overlay for subtle background */}
      <div className="absolute inset-0 bg-white/40 pointer-events-none z-0"></div>
      {/* Hero Section */}
      <div className="relative w-full h-[350px] flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="http://st2.depositphotos.com/1008648/5975/i/450/depositphotos_59755589-Travel-the-world-monuments-concept.jpg"
            alt="Travel background"
            className="w-full h-full object-cover object-center brightness-75"
          />
        </div>
        {/* Main gradient overlay */}
        {/* Extra blurred pastel shapes for depth */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-300/20 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-32 right-0 w-[32rem] h-[32rem] bg-pink-200/30 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-yellow-100/40 rounded-full blur-[90px] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-10 right-1/4 w-40 h-40 bg-blue-200/30 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 left-1/4 w-44 h-44 bg-pink-100/40 rounded-full blur-2xl"></div>
        {/* Subtle white overlay for extra softness */}
        <div className="absolute inset-0 bg-white/30"></div>
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full">
          <h1 className="text-indigo-700 text-5xl md:text-6xl font-extrabold drop-shadow-lg tracking-wide mb-4">
  Tourista Track
</h1>
          <h2 className="text-blue-700 text-lg md:text-2xl font-semibold mb-6 drop-shadow">
            Make Your Travel Dream Come True With Our Amazing Packages
          </h2>
          <div className="flex gap-2 w-full justify-center">
            <input
              type="text"
              className="rounded-lg outline-none w-[230px] sm:w-2/5 p-2 border border-white bg-white/30 text-blue-800 placeholder:text-blue-600 font-semibold backdrop-blur-md shadow"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              onClick={() => navigate(`/search?searchTerm=${search}`)}
              className="bg-blue-600 w-12 h-12 flex justify-center items-center text-xl font-bold rounded-full hover:bg-blue-700 transition-all shadow-lg text-white"
            >
              <FaSearch />
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <button
              onClick={() => navigate("/search?offer=true")}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition-all"
            >
              <LuBadgePercent className="text-xl" /> Best Offers
            </button>
            <button
              onClick={() => navigate("/search?sort=packageRating")}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition-all"
            >
              <FaStar className="text-xl" /> Top Rated
            </button>
            <button
              onClick={() => navigate("/search?sort=createdAt")}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition-all"
            >
              <FaCalendar className="text-xl" /> Latest
            </button>
            <button
              onClick={() => navigate("/search?sort=packageTotalRatings")}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition-all"
            >
              <FaRankingStar className="text-xl" /> Most Rated
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full flex flex-col items-center py-10 px-2">
        <div className="w-full max-w-7xl flex flex-col gap-10">
          {loading && <h1 className="text-center text-2xl text-blue-700">Loading...</h1>}
          {!loading &&
            topPackages.length === 0 &&
            latestPackages.length === 0 &&
            offerPackages.length === 0 && (
              <h1 className="text-center text-2xl text-blue-700">No Packages Yet!</h1>
            )}

          {/* Top Rated */}
          {!loading && topPackages.length > 0 && (
            <>
              <h2 className="text-3xl font-bold text-blue-800 mb-2 flex items-center gap-2">
                <FaStar className="text-yellow-400" /> Top Packages
              </h2>
              <div className="grid 2xl:grid-cols-5 xlplus:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-6">
                {topPackages.map((packageData, i) => (
                  <PackageCard key={i} packageData={packageData} />
                ))}
              </div>
            </>
          )}

          {/* Latest */}
          {!loading && latestPackages.length > 0 && (
            <>
              <h2 className="text-3xl font-bold text-pink-700 mb-2 flex items-center gap-2">
                <FaCalendar className="text-blue-400" /> Latest Packages
              </h2>
              <div className="grid 2xl:grid-cols-5 xlplus:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-6">
                {latestPackages.map((packageData, i) => (
                  <PackageCard key={i} packageData={packageData} />
                ))}
              </div>
            </>
          )}

          {/* Offers */}
          {!loading && offerPackages.length > 0 && (
            <>
              <h2 className="text-3xl font-bold text-yellow-600 mb-2 flex items-center gap-2">
                <LuBadgePercent className="text-pink-400" /> Best Offers
              </h2>
              <div className="grid 2xl:grid-cols-5 xlplus:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-6">
                {offerPackages.map((packageData, i) => (
                  <PackageCard key={i} packageData={packageData} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;

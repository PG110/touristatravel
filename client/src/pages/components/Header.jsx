import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaGlobeAsia } from "react-icons/fa";
import defaultProfileImg from "../../assets/images/profile.png";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <header className="backdrop-blur-xl bg-gradient-to-r from-blue-100 via-pink-50 to-yellow-100 shadow-xl px-8 py-4 flex justify-between items-center sticky top-0 z-50 border-b border-blue-200">
      {/* Logo with Icon */}
      <Link to="/" className="flex items-center gap-3 group hover:scale-105 transition-transform">
        <span className="bg-blue-600 text-white rounded-full p-2 shadow-lg group-hover:bg-blue-700 transition">
          <FaGlobeAsia size={28} />
        </span>
        <span className="text-3xl font-extrabold text-blue-700 tracking-tight drop-shadow">
          Tourista
        </span>
        <span className="text-3xl font-bold text-pink-500 tracking-wide drop-shadow">
          Track
        </span>
      </Link>
      {/* Navigation */}
      <nav>
        <ul className="flex flex-wrap items-center gap-6 text-blue-900 font-semibold text-lg bg-gradient-to-r from-blue-100 via-pink-100 to-yellow-100 rounded-full px-6 py-2 shadow border-2 border-blue-200 backdrop-blur-md">
          <li>
            <Link
              to="/"
              className="px-3 py-1 rounded-full hover:bg-blue-200 hover:text-blue-800 transition font-bold"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/search"
              className="px-3 py-1 rounded-full hover:bg-pink-200 hover:text-pink-700 transition font-bold"
            >
              Packages
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="px-3 py-1 rounded-full hover:bg-yellow-200 hover:text-yellow-700 transition font-bold"
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
      {/* Profile/Login */}
      <div>
        {currentUser ? (
          <Link
            to={`/profile/${currentUser.user_role === 1 ? "admin" : "user"}`}
            className="flex items-center"
          >
            <img
              src={currentUser.avatar || defaultProfileImg}
              alt={currentUser.username}
              className="w-11 h-11 rounded-full border-2 border-blue-400 shadow-lg hover:scale-105 transition-transform"
            />
          </Link>
        ) : (
          <Link
            to="/login"
            className="px-6 py-2 rounded-full bg-blue-600 text-white font-bold shadow-lg hover:bg-blue-700 transition text-lg"
          >
            Login
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import { FaGithub, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar mb-12 shadow-md shadow-secondary-focus bg-info-content text-white">
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
          <FaGithub className="inline pr-2 text-5xl" />
          <Link to="/" className="text-md font-bold">
            GitHubFinder
          </Link>
        </div>
        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
              <FaHome className="inline pr-2 text-3xl"/>
              Home
            </Link>
            <Link to="/about" className="btn btn-ghost btn-sm rounded-btn">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

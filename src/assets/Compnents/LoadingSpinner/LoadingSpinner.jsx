import React from "react";
import { FaFacebook, FaTwitter, FaGlobe } from "react-icons/fa";
import iconsImage from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#02152B] text-gray-300 h-[180px] w-full flex flex-col justify-center items-center px-6 rounded-3xl mt-6">
      <div className="w-full max-w-6xl flex justify-between items-center border-b border-gray-700 pb-4">
        {/* Left side - Logo */}
        <div className="flex items-center gap-2 ml-5">
          <img
            src={iconsImage}
            alt="HERO.IO Logo"
            className="w-8 h-8"
          />
          <h2 className="text-lg font-semibold text-white">HERO.IO</h2>
        </div>

        {/* Right side - Social Links */}
        <div className="flex flex-col items-end mr-5">
          <h3 className="text-sm font-medium mb-1 text-white">Social Links</h3>
          <div className="flex gap-4 text-lg">
            <FaGlobe className="hover:text-blue-400 cursor-pointer transition" />
            <FaTwitter className="hover:text-blue-400 cursor-pointer transition" />
            <FaFacebook className="hover:text-blue-400 cursor-pointer transition" />
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <p className="text-sm text-gray-400 mt-4">
        Copyright © 2025 - All rights reserved
      </p>
    </footer>
  );
};

export default Footer;


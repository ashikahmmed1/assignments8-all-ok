import React from 'react';
import { FaGooglePlay, FaAppStoreIos } from "react-icons/fa";
import heroImage from '../../assets/hero.png'

const ProductiveApps = () => {
    return (
       <section className="text-center bg-white py-16">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-3">
        We Build <br /> <span className="text-purple-600">Productive</span> Apps
      </h2>
      <p className="text-gray-600 max-w-xl mx-auto mb-6">
        At HERO.IO, we craft innovative apps designed to make everyday life simpler,
        smarter, and more exciting. Our goal is to turn your ideas into digital
        experiences that truly make an impact.
      </p>

      {/* Buttons */}
      <div className="flex justify-center gap-4 mb-10">
        <button className="flex items-center gap-2 bg-[#d2d2d2] 
        text-black px-5 py-2 rounded-lg hover:bg-cyan-600-800 transition"
        onClick={() => window.open("https://play.google.com/store/apps?hl=en", "_blank")}>
          <FaGooglePlay /> Google Play
        </button>
        <button className="flex items-center gap-2 bg-blue-600 
        text-white px-5 py-2 rounded-lg hover:bg-blue-500 transition"
        onClick={() => window.open("https://www.apple.com/app-store/", "_blank")}
        >
          <FaAppStoreIos /> App Store
        </button>
      </div>

      {/* Mobile Image */}
      <div className="flex justify-center mt-16">
        <img
          src={heroImage}
          alt="App Preview"
          className="w-[260px] md:w-[320px] drop-shadow-2xl"
        />
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 py-10 
      text-white w-full">
        <h3 className="text-2xl font-semibold mb-8">
          Trusted By Millions, Built For You
        </h3>

        <div className="flex flex-col md:flex-row justify-center gap-10 text-center">
          <div>
            <p>Total Downloads</p>
            <h4 className="text-4xl font-bold my-3">29.6M</h4>
            <p className="text-sm text-gray-200 mt-7">21% More Than Last Month</p>
          </div>
          <div>
            <p>Total Reviews</p>
            <h4 className="text-4xl font-bold my-3">906K</h4>
            <p className="text-sm text-gray-200 mt-7">46% More Than Last Month</p>
          </div>
          <div>
            <p>Active Apps</p>
            <h4 className="text-4xl font-bold my-3">132+</h4>
            <p className="text-sm text-gray-200 mt-7">31 More Will Launch</p>
          </div>
        </div>
      </div>
    </section>
    );
};

export default ProductiveApps;
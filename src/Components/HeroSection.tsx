import React from 'react'
import { FaCar } from 'react-icons/fa';
import img4 from "../assets/background_images/phone.jpg";


const HeroSection: React.FC = () => {
  return (
    <section className="w-full h-screen bg-gradient-to-br  from-white to-blue-50 rounded-xl shadow-lg p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-2 px-8">
      {/* Left Content */}
      <div className="flex-1 space-y-6 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Motor{" "}
          <span className="inline-flex items-center bg-blue-500 text-white px-3 py-2 rounded-full mx-2">
            <FaCar className="text-white w-6 h-6" />
          </span>{" "}
          Insurance
        </h1>
        <p className="text-gray-600 text-lg max-w-md mx-auto md:mx-0">
          Ensures worry-free journeys with essential coverage
        </p>

        <div className="flex justify-center md:justify-start gap-4 ">
          <button className="bg-blue-600 cursor-pointer text-white px-6 py-3 rounded-md hover:bg-blue-700 transition shadow-md">
            Get Quote Now
          </button>
          <button className="bg-white border cursor-pointer border-gray-300 px-6 py-3 rounded-md hover:shadow-md transition">
            View Coverage
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-1 flex justify-center relative">
        <div className="pulse absolute -top-2 -left-2 w-[90%] h-[90%] bg-gradient-to-br from-blue-100 to-transparent rounded-lg transform rotate-3"></div>
        <img
          src={img4}
          alt="Motor Insurance"
          className="relative z-10 rounded-lg shadow-lg w-80 md:w-[400px] object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection
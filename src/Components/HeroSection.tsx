import React from "react";
import { motion } from "framer-motion";
import img4 from "../assets/background_images/car_crash.png";
import Button from "./buttons/Button";

interface HeroSectionProps {
  onGetQuoteClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onGetQuoteClick }) => {
  return (
    <section className="w-full h-screen bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg p-8 md:p-18 flex flex-col md:flex-row items-center justify-between gap-2 px-12">
      {/* Left Content */}
      <motion.div
        className="flex-1 space-y-6 text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.1 }}
      >
        <motion.h1
          className="text-3xl font-semibold md:text-5xl md:font-bold text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Drive with Confidence. Insure with MotA Insurance
        </motion.h1>

        <motion.p
          className="text-gray-600 text-lg max-w-md mx-auto md:mx-0"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 1 }}
        >
          Ensures worry-free journeys with essential coverage
        </motion.p>

        <motion.div
          className="flex justify-center md:justify-start gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 1 }}
        >
          
          <Button text={"Get Quote Now"} 
          onClick={onGetQuoteClick}         
          />
          <button className="bg-white border cursor-pointer border-gray-300 px-6 py-3 rounded-md hover:shadow-md transition">
            View Coverage
          </button>
        </motion.div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="flex-1 flex justify-center relative"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className="pulse absolute -top-2 -left-2 w-[90%] h-[90%] bg-gradient-to-br from-blue-100 to-transparent rounded-lg transform rotate-3"></div>
        <img
          src={img4}
          alt="Motor Insurance"
          className="relative z-10 rounded-lg shadow-lg w-80 md:w-[400px] object-cover"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;

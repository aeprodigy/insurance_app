import { useEffect, useRef, useState } from "react";
import img1 from "../assets/background_images/gauge.jpg";
import img2 from "../assets/background_images/couple.jpg";
import img3 from "../assets/background_images/house.jpg";
import img4 from "../assets/background_images/phone.jpg";

// Image array
const images = [img1, img2, img3, img4];

// Slide duration (10 seconds)
const SLIDE_DURATION = 10000;

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef<number | null>(null);

  useEffect(() => {
    let start = Date.now();

    progressRef.current = window.setInterval(() => {
      const elapsed = Date.now() - start;
      const percent = Math.min((elapsed / SLIDE_DURATION) * 100, 100);
      setProgress(percent);

      if (percent >= 100) {
        setCurrent((prev) => (prev + 1) % images.length);
        start = Date.now();
        setProgress(0);
      }
    }, 100);

    return () => {
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [current]);

  return (
    <div className="relative w-full h-screen overflow-hidden shadow-lg">
      {/* Background Image */}
      <img
        src={images[current]}
        alt={`slide ${current}`}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 z-0"
      />

      
      {/* Top Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gray-300 z-20">
        <div
          className="h-full bg-[#567C8D] transition-all"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Example content */}
      <div className="absolute z-30 inset-0 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold drop-shadow-lg">
          Welcome to Our Hero Section
        </h1>
      </div>
    </div>
  );
};

export default Hero;

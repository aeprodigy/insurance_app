import { useEffect, useRef, useState } from "react";
import img1 from "../assets/background_images/gauge.jpg";
import img2 from "../assets/background_images/couple.jpg";
import img3 from "../assets/background_images/house.jpg"; 
import img4 from "../assets/background_images/phone.jpg"; 
//images
const images = [
  img1,
  img2,
 img3,
 img4
];

//slide duration for the slider on the background
const SLIDE_DURATION = 10000;// 10 seconds in millisecs


const Hero = () => {
  //states
  const [ current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const progresRef = useRef<number | null>(null);

  //loop to update progress
  useEffect(()=>{
    let start = Date.now();
    progresRef.current = window.setInterval(()=>{
      const elapsed = Date.now() - start;
      const percent = Math.min((elapsed / SLIDE_DURATION) * 100, 100);
      setProgress(percent);

      //if percentage is more than 100 ms
      if(percent >= 100){
        setCurrent((previous)=> (previous + 1) % images.length);
        start = Date.now();
        setProgress(0);
      }
    }, 100); //update every 100 ms

    return ()=>{
      if(progresRef.current) clearInterval(progresRef.current);
    };
  }, [current]);


  return (
    <div className="relative w-full h-screen overflow-hidden  shadow-lg">
      <img
        src={images[current]}
        alt={`slide ${current}`}
        className="w-full h-full object-cover transition-opacity duration-1000"
      />
      <div className="absolute top-0 left-0 w-full h-2 bg-gray-300">
        <div
          className="h-full bg-[#567C8D] transition-all"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}

export default Hero
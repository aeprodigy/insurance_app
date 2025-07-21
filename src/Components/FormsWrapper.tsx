import { useState } from "react";
import PersonalInfo from "./steps/PersonalInfo";
import VehicleInfoStep from "./steps/VehicleInfoStep";
import CoverInfo from "./steps/CoverInfo";
import SummaryStep from "./steps/SummaryStep";

//the steps and labels list
const steps = [
  { label: "Personal Info", component: <PersonalInfo /> },
  { label: "Vehicle information", component: <VehicleInfoStep /> },
  { label: "Cover Info", component: <CoverInfo /> },
  { label: "hshhshs", component: <SummaryStep /> },
];

const FormsWrapper = () => {
  //state hook
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div
      className="
    bg-[#F5EFEB] 
    h-screen
    max-w-xl
    mx-auto
    mt-10
    p-6border
    rounded
    shadow

    "
    >
      <h1 className="text-2xl font-bold mb-4">Motor Insurance</h1>
      <h3
        className="
      text-xl
      font-semibold
      mb-4
     "
      >
        {steps[currentStep].label}
      </h3>
      <div>{steps[currentStep].component}</div>

      {/** Buttons logic */}
      <div className="flex  justify-between mt-6 ">
        {/** Button back */}
        <button
          disabled={currentStep === 0}
          className="
          
      cursor-pointer
      px-4 
      py-2
      bg-[#2F4156]
      rounded
      disabled:opacity-50
      text-white
      mb-4
      "
          onClick={() => setCurrentStep((prev) => prev - 1)}
        >
          Back
        </button>
      </div>
      {/** Next button logic */}


        <div>
          {/** The buttons start here
           * 
           */}
           {currentStep < steps.length - 1 ? (
        <button
          className="
        cursor-pointer
        px-4
        py-2
        bg-[#2F4156]
        text-white
        rounded
        "
          onClick={() => setCurrentStep((next) => next + 1)}
        >
          Next
        </button>
      ) : (
        <button
          className="
         px-4
        py-2
        bg-[#2F4156]
        text-white
        rounded
        cursor-pointer
        "
          onClick={() => alert("Submitted successfully!")}
        >
          Submit
        </button>
      )}

          </div>      
          </div>
  );
};

export default FormsWrapper;

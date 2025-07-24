import { useState } from "react";
import PersonalInfo from "./steps/PersonalInfo";
import VehicleInfoStep from "./steps/VehicleInfoStep";
import CoverInfo from "./steps/CoverInfo";
import SummaryStep from "./steps/SummaryStep";

const steps = [
  { label: "Personal Info", component: <PersonalInfo /> },
  { label: "Vehicle Information", component: <VehicleInfoStep /> },
  { label: "Cover Info", component: <CoverInfo /> },
  { label: "Summary", component: <SummaryStep /> },
];

const FormsWrapper = () => {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="bg-[#F5EFEB] max-w-xl mx-auto p-6 border rounded shadow max-h-[80vh] overflow-y-auto">
      <h1 className="text-2xl font-bold mb-4">Motor Insurance</h1>
      <h3 className="text-xl font-semibold mb-4">{steps[currentStep].label}</h3>

      {/* Step content */}
      <div>{steps[currentStep].component}</div>

      {/* Navigation buttons */}
      <div className="flex justify-between mt-6">
        <button
          disabled={currentStep === 0}
          className="px-4 py-2 bg-[#2F4156] text-white rounded disabled:opacity-50"
          onClick={() => setCurrentStep((prev) => prev - 1)}
        >
          Back
        </button>

        {currentStep < steps.length - 1 ? (
          <button
            className="px-4 py-2 bg-[#2F4156] text-white rounded"
            onClick={() => setCurrentStep((next) => next + 1)}
          >
            Next
          </button>
        ) : (
          <button
            className="px-4 py-2 bg-[#2F4156] text-white rounded"
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

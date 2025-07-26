import { useFormStore } from "../../store/formStore";

const SummaryStep = () => {
  const { data } = useFormStore();
//
  return (
    <div className=" mx-auto bg-white shadow-md rounded-lg p-6 border border-gray-200">
     
      <div className="mb-1">
        <h3 className="text-lg font-semibold text-gray-600 mb-2">
          Client Details
        </h3>
        <div className="text-sm text-gray-700 space-y-1">
          <p>
            <span className="font-medium">Full Name:</span> {data.fullName}
          </p>
          <p>
            <span className="font-medium">Email:</span> {data.email}
          </p>
          <p>
            <span className="font-medium">Phone:</span> {data.phone}
          </p>
        </div>
      </div>

      <div className="mb-1">
        <h3 className="text-lg font-semibold text-gray-600 mb-2">
          Vehicle Details
        </h3>
        <div className="text-sm text-gray-700 space-y-1">
          <p>
            <span className="font-medium">Make & Model:</span>{" "}
            {data.vehicleMake} {data.vehicleModel} {data.year}
          </p>
          <p>
            <span className="font-medium">Registration No.:</span>{" "}
            {data.registrationNumber}
          </p>
          <p>
            <span className="font-medium">Location:</span> {data.location}
          </p>
        </div>
      </div>

      <div className="mb-1">
        <h3 className="text-lg font-semibold text-gray-600 mb-2">
          Insurance Details
        </h3>
        <div className="text-sm text-gray-700 space-y-1">
          <p>
            <span className="font-medium">Cover Type:</span> {data.coverType}
          </p>
          <p>
            <span className="font-medium">Start Date:</span> {data.startDate}
          </p>
          <p>
            <span className="font-medium">Duration:</span> {data.duration}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SummaryStep;

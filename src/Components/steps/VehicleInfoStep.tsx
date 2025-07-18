
import { useFormStore } from "../../store/formStore";

const VehicleInfoStep = () => {
  const { data, updateField } = useFormStore();
  return (
    <div className="space-y-4">
      <input
        className="w-full p-2 border rounded"
        placeholder="Vehicle Make"
        value={data.vehicleMake}
        onChange={(e) => updateField("vehicleMake", e.target.value)}
      />

      <input
        className="w-full p-2 border rounded"
        placeholder="Model"
        value={data.vehicleModel}
        onChange={(e) => updateField("vehicleModel", e.target.value)}
      />

      <input
        className="w-full p-2 border rounded"
        placeholder="Year"
        value={data.year}
        onChange={(e) => updateField("year", e.target.value)}
      />

      <input
        className="w-full p-2 border rounded"
        placeholder="registration Number"
        value={data.registrationNumber}
        onChange={(e) => updateField("registrationNumber", e.target.value)}
      />

      <input
        className="w-full p-2 border rounded"
        placeholder="Location"
        value={data.location}
        onChange={(e) => updateField("location", e.target.value)}
      />
    </div>
  );
};

export default VehicleInfoStep;

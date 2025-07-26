import { useFormStore } from "../../store/formStore";

const CoverInfo = () => {
  const {data, updateField} = useFormStore();

  return (
    <div
      className="
    space-y-4
    
    "
    >
      {/**Optionsn */}
      <select
        className="
        w-full 
        p-2
        border 
        rounded
        "
        value={data.coverType}
        onChange={(e) => updateField("coverType", e.target.value)}
      >
        <option>Select Cover</option>
        <option value="Third Party">Third Party</option>
        <option value="Comprehensive">Comprehensive</option>
      </select>
      {/**inout start date */}
      <input
        type="date"
        className="w-full p-2 border rounded"
        placeholder="Model"
        value={data.startDate}
        onChange={(e) => updateField("startDate", e.target.value)}
      />

      {/**Duration Selection */}
      <select
        className="w-full p-2 border rounded"
        value={data.duration}
        onChange={(e) => updateField("duration", e.target.value)}
      >
        <option value="">select Duration</option>
        <option value="1 Month">1 Month</option>
        <option value="3 Months">3 Months</option>
        <option value="1 Year">1 year</option>
      </select>
    </div>
  );
}

export default CoverInfo
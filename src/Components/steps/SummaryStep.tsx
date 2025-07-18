import { useFormStore } from "../../store/formStore"

const SummaryStep = () => {

  //the zustand form
  const {data} = useFormStore();
  return (
    <div className="space-y-2">
      <h2 className="text-lg font-bold">Summary</h2>
      <div className="text-sm">
        <p>Name:{data.fullName}</p>
        <p>Email:{data.email}</p>
        <p>Phone:{data.phone}</p>
        <p>
          Vehicle:{data.vehicleMake} {data.vehicleModel}
          {data.year}
        </p>
        <p>Registration Number:{data.registrationNumber}</p>
        <p>Location:{data.location}</p>
        <p>Cover Type:{data.coverType}</p>
        <p>Start Date:{data.startDate}</p>
        <p>Duration:{data.duration}</p>
      </div>
    </div>
  );
}

export default SummaryStep
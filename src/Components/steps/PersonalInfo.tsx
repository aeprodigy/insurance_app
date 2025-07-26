import { useFormStore } from "../../store/formStore"

const PersonalInfo = () => {
    const {data, updateField} = useFormStore();

  return (
    <div >
        {/** name input */}
        <input 
        className="w-full p-2 border rounded mb-4"
        placeholder="full name"
        value={data.fullName}
        onChange={(e)=> updateField('fullName', e.target.value)}
         />

        {/** email input */}
        <input 
        className="w-full p-2 border rounded mb-4"
        placeholder="Email"
        value={data.email}
        onChange={(e)=> updateField('email', e.target.value)}
         />

        {/** phone input */}
        <input 
        className="w-full p-2 border rounded"
        placeholder="Phone"
        value={data.phone}
        onChange={(e)=> updateField('phone', e.target.value)}
         />

    </div>
  )
}

export default PersonalInfo
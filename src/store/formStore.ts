import { create } from "zustand"
//interfaces
  interface FormData {
    //types for the entire project
    fullName: string,
    email:string,
    phone: string,
    vehicleMake:string,
    vehicleModel:string,
    year: string,
    registrationNumber:string,
    location: string | number,
    coverType:'Third Party' | 'Comprehensive'|''
    startDate:string
    duration:string
    
}

//form store
interface FormStore  {
    data : FormData
    updateField: (field: keyof FormData, value: string) => void
    resetForm: ()=> void
}

//Zustand state management
export const useFormStore = create<FormStore>((set)=>({

    data : {
        fullName:'',
        email:'',
        phone:'',
        vehicleMake:'',
        vehicleModel:'',
        year:'',
        registrationNumber:'',
        location:'',
        coverType:'',
        startDate:'',
        duration:''
    },
    //update data
    updateField: (field, value)=> set((state)=>({
        data:{
            ...state.data,
            [field]: value,
        },
    })),

    //reset form
    resetForm:() => set(()=>({
         data : {
        fullName:'',
        email:'',
        phone:'',
        vehicleMake:'',
        vehicleModel:'',
        year:'',
        registrationNumber:'',
        location:'',
        coverType:'',
        startDate:'',
        duration:''
    },
    })),

}));
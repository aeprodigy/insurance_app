 export type FormData ={
    //types for the entire project
    fullName: string,
    email:string,
    phone: number,
    vehicleMake:string,
    vehicleModel:string,
    year: string,
    registrationNumber:string,
    location: string | number,
    coverType:'Third Party' | 'Comprehensive'|''
    startDate:string
    duration:string
    
}
// data : {
//         fullName:'',
//         email:'',
//         phone:'',
//         vehicleMake:'',
//         vehicleModel:'',
//         year:'',
//         registrationNumber:'',
//         location:'',
//         coverType:'',
//         startDate:'',
//         duration:''
//     },

//form store
 export type FormStore = {
    data : FormData
    updateField: (field: keyof FormData, value: string) => void
    resetForm: ()=> void
}

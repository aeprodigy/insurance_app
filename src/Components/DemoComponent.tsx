import React, { useState } from 'react'
import type { user } from '../types/GlobalTypes';
//the type object

// type userData = {
//     name: string,
//     age: number,
//     isAdmin?: boolean
   
// };


let initialName:string = "Michael";


const DemoComponent = ({fullName , age}: user) => {
     const [initname, setInitname] = useState("");
     
     //name changer
const nameChanger= ()=>{
    setInitname(initialName = "Prodigy");
  

}

  return (
    <div className='px-4'>
       <h1 className='text-[#567C8D] text-4xl py-8 font-extrabold'>TypeScript</h1>
        <h3 className='text-2xl font-semibold text-gray-800 mb-4'>The User type in TypeScript</h3>
        <h3 className='mb-4 '>{fullName}</h3>
        <h4 className='mb-4'>{age}</h4>
        <h1 className='mb-4 text-[#2F4156]'>{initialName || initname}</h1>
        <button  onClick={nameChanger} className='bg-[#2F4156] cursor-pointer font-semibold px-4  py-2 rounded-xl text-white'>Name change</button>
    </div>
  )
}

export default DemoComponent
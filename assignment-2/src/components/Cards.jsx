import React, { useState } from 'react'
import { toast } from 'react-toastify';






const Cards = ({img , name , price}) => {

  // const startText ="Add";
  const [buttontext, setbuttonText] = useState("Add");
    const handleButton = () =>{
      if(buttontext === "Add") { setbuttonText("Added");
        toast(`${name} added`);
      }
      else if(buttontext === "Added") setbuttonText("Add");
      else ("Add");
           //  setbuttonText(true)
          
    }
  return (
  
    <div className='shadow-md shadow-slate-500 p-8 '>
      
      <div className='relative'>
        <img src={img} alt="" className='h-80 w-80 object-cover rounded ' />
        <button onClick={ handleButton} className={`absolute rounded-2xl px-4 shadow-2xl p-2 bottom-2 right-2 ${ buttontext ==="Add" ? 'bg-slate-50 text-black' :  'bg-green-600 text-white' }`} >{buttontext}</button>
      </div>
      <div className='flex flex-col gap-3' >
        <h2 className='text-2xl'>{name}</h2>
        <h5 className='text-xl'>${price}</h5>
      </div>
    </div>
  )
}

export default Cards
import React, { useState } from 'react'
import { toast } from 'react-toastify';






const Card = ({img, name, content}) => {
  

  // const startText ="Add";
    const [buttontext, setbuttonText] = useState("Add");
    const handleButton = () =>{
      if(buttontext === "Add") {

      setbuttonText("Added");
      toast(`${name} added`);
      }
      else if(buttontext === "Added") setbuttonText("Add");
      else ("Add");
           //  setbuttonText(true)
           
    }
    
  return (
    
    <div>
        <div className='bg-white shadow-xl p-4 '>
            <div className='flex'>
              <div className=' flex flex-col gap-5  '>
                <h2 className='text-4xl'>{name}</h2>
                <p>{content}</p>
              </div>
              <div className='relative'>
                <img src={img} alt="" className='h-60 w-60 text-wrap object-cover rounded' />
                <button onClick={ handleButton} className={`absolute rounded-2xl px-4 shadow-2xl p-2 bottom-2 right-2 ${ buttontext ==="Add" ? 'bg-slate-50 text-black' :  'bg-green-600 text-white'}`} >{buttontext}</button>
              </div>
            </div>
            
        </div>
    </div>
  )
}

export default Card
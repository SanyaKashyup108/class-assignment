import React from 'react'
import {FaUser ,FaEye,  FaPencilAlt,  } from "react-icons/fa";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi"



    
const Card = ({img, name, lastInvoice}) => {
  return (

    <div >
        <div className="flex w-full justify-between shadow items-center hover:bg-slate-300 ">
        <div className='flex gap-12 items-center p-6'>
            <div>
        <img className='rounded-full h-11 w-11  ' src={img} alt="" />
        </div>
             <h5>{name}</h5>
             
        </div>
        <div className='flex gap-16 px-14'>
            <div className=''>
        <p>{lastInvoice}</p>
        </div>
        <div className='flex gap-4 text-gray-600 '>
        <FaPencilAlt />
        <FaEye />
        <PiDotsThreeOutlineVerticalFill />
        </div>
        </div>
        </div>
      
    </div>
  )
}

export default Card
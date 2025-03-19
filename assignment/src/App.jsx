import React from 'react'
import Card from './components/Card'
import data from './assets/data'
import { LuUserRound } from "react-icons/lu";
import { FaArrowsUpDown,FaPlus } from "react-icons/fa6";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { BiExport } from "react-icons/bi";
import { RiLayoutGridLine } from "react-icons/ri";


const App = () => {
  return (
    <div className='px-36  '>
      
      <div className='flex  item justify-end gap-16 text-xl border-r-2 '>
        <button className='flex items-center shadow-md shadow-slate-700  border-gray-700 p-2 gap-1 rounded-md text-white bg-orange-500 hover:bg-orange-400'>
        <FaPlus />
          <h2>Register</h2>
        </button>
        <button className='flex items-center shadow-md shadow-slate-700 border-gray-700 p-2 gap-1 rounded-md hover:bg-slate-300'>
          
          <BiExport />
          <h2>
            Export
          </h2>
        </button>
        <button className='flex items-center shadow-md  shadow-slate-700  border-gray-700 p-2 gap-1 rounded-md  hover:bg-slate-300'>
        <RiLayoutGridLine />
          <h2>Layout</h2>
        </button>
      </div>
    
      <div className='flex justify-between shadow items-center p-1  text-gray-600 text-xl'>
        <div className='flex  items-center p-6 '>
        <LuUserRound className='text-2xl' />
          <h3>Customer</h3>
          <FaArrowsUpDown className='text-2xl ' />
        </div>
        <div className='flex gap-16 px-14 '>
        <div className='flex items-center '>
        <LiaFileInvoiceSolid className='text-2xl' />
          <p>Last invoice</p>
        </div>
        <div>
          <p>Action</p>
        </div>
        </div>
      </div>
      {data.map(data => (
        <Card key={data.id} img={data.img} name={data.name}  lastInvoice={data.lastInvoice} />
      ))}
    </div>
  )
}

export default App
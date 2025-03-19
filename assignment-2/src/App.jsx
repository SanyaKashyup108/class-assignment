import React from 'react'
import Card from './components/Card'
import Cards from './components/Cards'
import data from './assets/data'
import data2 from './assets/data2'
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
      <h3 className='text-5xl font-bold ml-12'>Based on your search</h3>
      <div className='grid-cols-2 grid gap-20 p-10'>
       {data2.map(data2 => (
        <Card img={data2.img} name={data2.name} content={data2.content}/>
       ))}

       <h3 className='text-5xl font-bold ml-12'>Featured Items</h3>
       </div>
       <div className='flex justify-around'>
    
       {data.map(data => (
        <Cards img={data.img} name={data.name} price={data.price}/>
       ))}
       </div>
       <ToastContainer position="top-right" autoClose={3000} />
    </div>
  )
}

export default App
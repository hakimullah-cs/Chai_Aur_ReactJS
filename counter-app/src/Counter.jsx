import React, { useState } from 'react'

const Counter = () => {
    const [count,setcount]=useState(0);
    const handleIncrement=()=>{
        setcount(count+1);
    }
     const handleDecrement=()=>{
        if(count>0){
            setcount(count-1)
        }
    }
  return (
    <>
    <div className="card w-[18rem] p-2 bg-white  rounded shadow-xl">
         <h3 className='text-center font-semibold mb-3'>Counter App</h3>
         <div className='flex justify-center gap-4'>
            <button className='bg-black px-3 py-2 rounded font-bold text-white' onClick={handleDecrement}>-</button>
            <p className='mt-2 font-bold'>{count}</p>
            <button className='bg-black px-3 py-2 rounded font-bold text-white' onClick={handleIncrement}>+</button>
         </div>
    </div>
    </>
  )
}

export default Counter
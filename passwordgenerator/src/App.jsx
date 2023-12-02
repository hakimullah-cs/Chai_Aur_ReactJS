import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useCallback } from 'react'

const App = () => {
  //state for length
  const [len,setlen]=useState(8);
  //state for Numbers
  const [Num,setNum]=useState(false);
// state for characters
const  [Char,setChar]=useState(false);
//state for input
const [Password,setPassword]=useState('');

//define method for password generator
const passwordGenerator=useCallback(()=>{
  let pass='';
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  if(Num) str+='0123456789';
  if(Char) str+='!@#$%^&*(){}[]~`';
  for(let i=0; i<=len; i++){
    let char=Math.floor(Math.random()*str.length+1);
    pass+=str.charAt(char);
  }
  setPassword(pass); 
},[len,Num,Char,setPassword]);
useEffect(()=>{passwordGenerator()},[len,Num,Char,passwordGenerator])
  return (
    <main className='w-full h-screen grid place-items-center bg-black'>
     <div className='max-w-[600px] w-full bg-gray-700 text-white py-3 text-white rounded'>
      <h2 className='text-2xl text-center mb-3'>Password Generator</h2>
      <div className='border border-red-900 flex justify-center mb-5 p-2'>
       <input 
       type="text"
       value={Password}
       placeholder="Password"
       className='w-[94%] py-2 rounded px-4 text-black'
       readOnly
       
       
       />
       <button className='bg-[orange] px-3 py-1 rounded'>COPY</button>
      </div>
      <div className='flex justify-between items-center text-[orange] p-2'>
        <div className='p-2 flex items-center gap-3'>
          <input
           type="range"
           min={8}
           max={50}
           value={len}
           className='cursor-pointer'
           onChange={(e)=>{setlen(e.target.value)}}
           />
           <p>Length:{len}</p>
        </div>
        <div>
          <input 
          type="checkbox"
          defaultChecked={Num}
          onChange={()=>{setNum((prev)=>!prev)}}
          />Numbers
        </div>
        <div>
          <input 
          type="checkbox"
          defaultChecked={Num}
          onChange={()=>{setChar((prev)=>!prev)}}/>Character
        </div>
      </div>
     </div>
    </main>
  )
}

export default App
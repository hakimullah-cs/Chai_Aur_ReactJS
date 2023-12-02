import React from 'react'
import { useState } from 'react'

const App = () => {
  const [color,setColor]=useState('#000');
  return (
    <div className='w-full h-screen duration-200 flex justify-center' style={{backgroundColor:color}}>
      



      <div className='fixed bottom-5  flex bg-[purple] w-[80%] py-3 px-2 rounded gap-4 justify-center'>
        <button className='bg-[white] py-2 px-3 rounded font-bold' onClick={()=>setColor('white')}>White</button>
        <button className='bg-[orange] text-white py-2 px-3 rounded font-bold' onClick={()=>setColor('orange')}>Orange</button>
        <button className='bg-[green] text-white py-2 px-3 rounded font-bold' onClick={()=>setColor('green')}>Green</button>
        <button className='bg-[grey] text-white py-2 px-3 rounded font-bold' onClick={()=>setColor('grey')}>Grey</button>
        <button className='bg-[crimson] text-white py-2 px-3 rounded font-bold' onClick={()=>setColor('crimson')}>Crimson</button>
        <button className='bg-[cyan] text-white py-2 px-3 rounded font-bold' onClick={()=>setColor('cyan')}>Cyan</button>
      </div>
    </div>
  )
}

export default App
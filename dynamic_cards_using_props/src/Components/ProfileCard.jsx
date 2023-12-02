import React from 'react';
import img from '../../public/hakim.jpg';

const ProfileCard = ({prop}) => {
  return (
    <div className='card w-[18rem] bg-white rounded shadow-xl py-2 px-3'>
      <div className="image shadow-2xl w-[4rem] h-[4rem] rounded-full overflow-hidden mb-3">
       <img src={prop.img} alt="profile-image" className='w-full h-full' />
      </div>
      <div className="text">
        <h3 className='font-bold mb-2'>{prop.name}</h3>
        <p className='font-semibold mb-3'>{prop.field}</p>
        <button className='w-full bg-black text-white py-2 rounded font-bold'>Contact US</button>
      </div>
    </div>
  )
}

export default ProfileCard
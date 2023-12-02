import React from 'react'
import ProfileCard from './ProfileCard'
import { data } from '../Data/data'

const ProfileCards = () => {
  return (
   <div className='flex gap-3 flex-wrap justify-center p-3'>
     {data.map((ele)=>{
        return (
          <ProfileCard id={ele.id} prop={ele}/>
        )
     })}
   </div>
  )
}

export default ProfileCards
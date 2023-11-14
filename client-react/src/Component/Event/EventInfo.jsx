import React from 'react'
import format1 from '../../assets/format1.png'
import { Link } from 'react-router-dom'

export default function EventDetaisls() {
  return (
    <div className='w-full bg-[#FFFFFF] shadow-md my-7 py-3 px-10 rounded-[20px]'>
    <h1 className='text-center font-semibold text-[44px]'>OUR EVENTS</h1>
    <div>

    <Link to='/events/Details' className='flex  items-center gap-5 my-3'>
      <img src={format1} alt="" className='w-[140px]' />
      <div className='w-full bg-[#FFFFFF] shadow-md py-10 px-4 rounded-3xl'>
      Event:Microsoft Tech Talks "25 November 2023 at 9:00 - 17:00 on ENSA Khouribga"
      </div>
    </Link>
    <Link to='/events/Details' className='flex  items-center gap-5 my-3'>
      <img src={format1} alt="" className='w-[140px]' />
      <div className='w-full bg-[#FFFFFF] shadow-md py-10 px-4 rounded-3xl'>
      Event:Microsoft Tech Talks "25 November 2023 at 9:00 - 17:00 on ENSA Khouribga"
      </div>
    </Link>
    <Link to='/events/Details' className='flex  items-center gap-5 my-3'>
      <img src={format1} alt="" className='w-[140px]' />
      <div className='w-full bg-[#FFFFFF] shadow-md py-10 px-4 rounded-3xl'>
      Event:Microsoft Tech Talks "25 November 2023 at 9:00 - 17:00 on ENSA Khouribga"
      </div>
    </Link>
    <Link to='/events/Details' className='flex  items-center gap-5 my-3'>
      <img src={format1} alt="" className='w-[140px]' />
      <div className='w-full bg-[#FFFFFF] shadow-md py-10 px-4 rounded-3xl'>
      Event:Microsoft Tech Talks "25 November 2023 at 9:00 - 17:00 on ENSA Khouribga"
      </div>
    </Link>
 



    </div>
  </div>
  )
}

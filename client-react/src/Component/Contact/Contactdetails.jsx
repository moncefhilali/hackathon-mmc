import React from 'react'

export default function Contactdetails() {
  return (
    <div className='flex flex-col justify-center items-center gap-10 my-10 '>
      <h1 className='font-bold text-[40px]'>Can we help you?</h1>
      <form className='flex flex-col gap-4'>
        <input type="email" placeholder='Youre Email' className='bg-[#FFFFFF] w-[600px] outline-none shadow-lg px-4 py-4 rounded-[20px]' />
        <textarea name="message" placeholder='Write a message' cols="30" rows="10" className='bg-[#FFFFFF] w-[600px] outline-none shadow-lg px-4 py-4 rounded-[20px]'></textarea>
        <button className='bg-[#24756E] px-4 py-2 rounded-lg text-white'>Submit</button>
      </form>
    </div>
  )
}

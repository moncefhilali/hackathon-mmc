import facbook from '../assets/fb.png'
import youtube from '../assets/youtube.png'
import logo2 from '../assets/logo2.png'

export default function Footer() {
  return (
    <div className="bg-[#24756E] w-full mt-3 flex flex-col justify-center items-center py-4 gap-9 rounded-2xl text-white my-3">
        <div className='flex  gap-24'>
            <a href="" className='font-semibold text-[17px]'>Home</a>
            <a href="" className='font-semibold text-[17px]'>Events</a>
            <a href="" className='font-semibold text-[17px]'>Speakers</a>
        </div>
        <div className='flex gap-20 items-center justify-center'>
            <img src={facbook} alt="" />
            <img src={youtube} alt="" />
        </div>
        <div className='flex items-center gap-2'>
            <img src={logo2} alt="" />
            <p className='font-semibold text-[17px]'>Morocco Microsoft Community</p>
        </div>
        <div>
            <p className='font-semibold text-[17px]'>© Copyrights Morocco Microsoft Community. All rights reserved. Develop ed by FiveDigits</p>
        </div>
    </div>
  )
}

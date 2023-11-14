import image1 from '../assets/logo.png'
import Trans from '../assets/translation 1.png'
import notif from '../assets/notif.png'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
    <div className='flex w-full gap-3 my-4'>
        <div className='bg-[#FFFFFF] shadow-md py-1  px-2 rounded-2xl flex justify-center items-center '>
            <img src={notif} alt="" />
        </div>
        <div className='bg-[#FFFFFF] shadow-md py-4  px-2 w-[95%] rounded-[20px] text-center'>Latest Event : Microsoft Tech Talks "25 November 2023 at 9:00 - 17:00 on ENSA Khouribga"</div>
    </div>
        <div className='w-full flex items-center justify-between bg-[#FFFFFF] shadow-md px-7 py-3 rounded-[20px] mt-4 '>
            <div className='w-1/2'>
              <img src={image1} alt="" />
            </div>
              <div className='flex order-last gap-9 '>
                <div className='flex justify-between gap-6 items-center'>
                <Link to="/" className='font-semibold text-[17px]'>Home</Link>
                <Link to="/events" className='font-semibold text-[17px]'>Events</Link>
                <Link to="/aboutus" className='font-semibold text-[17px]'>Community</Link>
                <Link to="/speakers" className='font-semibold text-[17px]'>Speakers</Link>
                <Link to="/contact" className='font-semibold text-[17px]'>Contact</Link>
                </div>
              <div className='flex gap-3  border-black border-[1px] rounded-full px-2 py-1'>
                <p className='font-semibold text-[17px]'>En</p>
                <img src={Trans} alt="" />
              </div>
              </div>
        </div>

    </>
  )
}

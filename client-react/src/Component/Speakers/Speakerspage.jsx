import React from 'react'
import man from '../../assets/img1.png'
import man6 from '../../assets/man 1.png'
import man1 from '../../assets/img2.png'
import man2 from '../../assets/img3.png'
import man3 from '../../assets/img4.png'
import man4 from '../../assets/img5.png'


export default function Speakers() {
  return (
    <div className='w-full bg-[#FFFFFF] shadow-md my-7 py-3 px-10 rounded-[20px]'>
      <h1 className='text-center font-semibold text-[44px]'>Speakers</h1>

      <div className='my-24'>
        <div className='flex justify-between my-24'>
            <div className='w-1/5 h-[250px] rounded-[20px] shadow-md my-4 bg-[#FAF7F7] relative flex justify-center items-center'>
              <h3 className='font-semibold text-[22px]'>Yousszf Chigane</h3>
              <div className=' '>
                    <div className='w-[150px] h-[150px] absolute top-[-85px] left-[45px] bg-white rounded-full'>

                    </div>
                  <img src={man4} alt="" className='absolute top-[-60px] left-[66px] w-[110px]' />
              </div>
            </div>
            <div className='w-1/5 h-[250px] rounded-[20px] shadow-md my-4 bg-[#FAF7F7] relative flex justify-center items-center'>
              <h3 className='font-semibold text-[22px]'>Hassan Fadili</h3>
              <div className=' '>
                    <div className='w-[150px] h-[150px] absolute top-[-85px] left-[45px] bg-white rounded-full'>

                    </div>
                  <img src={man3} alt="" className='absolute top-[-60px] left-[66px] w-[110px]' />
              </div>
            </div>
            <div className='w-1/5 h-[250px] rounded-[20px] shadow-md my-4 bg-[#FAF7F7] relative flex justify-center items-center'>
              <h3 className='font-semibold text-[22px]'>Anas Belabbes</h3>
              <div className=' '>
                    <div className='w-[150px] h-[150px] absolute top-[-85px] left-[45px] bg-white rounded-full'>

                    </div>
                  <img src={man2} alt="" className='absolute top-[-60px] left-[66px] w-[110px]' />
              </div>
            </div>
  

        </div>
        <div className='flex justify-between my-24'>
            <div className='w-1/5 h-[250px] rounded-[20px] shadow-md my-4 bg-[#FAF7F7] relative flex justify-center items-center'>
              <h3 className='font-semibold text-[22px]'>Mohssine Massaf</h3>
              <div className=' '>
                    <div className='w-[150px] h-[150px] absolute top-[-85px] left-[45px] bg-white rounded-full'>

                    </div>
                  <img src={man1} alt="" className='absolute top-[-60px] left-[66px] w-[110px]' />
              </div>
            </div>
            <div className='w-1/5 h-[250px] rounded-[20px] shadow-md my-4 bg-[#FAF7F7] relative flex justify-center items-center'>
              <h3 className='font-semibold text-[22px]'>Said Wahid</h3>
              <div className=' '>
                    <div className='w-[150px] h-[150px] absolute top-[-85px] left-[45px] bg-white rounded-full'>

                    </div>
                  <img src={man} alt="" className='absolute top-[-60px] left-[66px] w-[110px]' />
              </div>
            </div>
            <div className='w-1/5 h-[250px] rounded-[20px] shadow-md my-4 bg-[#FAF7F7] relative flex justify-center items-center'>
              <h3 className='font-semibold text-[22px]'>Outman Bazzaz</h3>
              <div className=' '>
                    <div className='w-[150px] h-[150px] absolute top-[-85px] left-[45px] bg-white rounded-full'>

                    </div>
                  <img src={man6} alt="" className='absolute top-[-60px] left-[66px] w-[110px]' />
              </div>
            </div>
  

        </div>



      </div>
    </div>
  )
}

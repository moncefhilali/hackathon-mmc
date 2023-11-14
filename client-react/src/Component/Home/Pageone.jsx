// import bg1 from '../../assets/bg1.jpeg'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios'
import { useEffect,useState } from "react";


export default function page1() {

  const [data,setdata] = useState('')

  useEffect(() => {
      axios.get("")
        .then(function (response) {
          setdata(response.data)
        })
        .catch(function (res) {
          console.log(res);
        })
    }, [])










  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  
  return (
    <Slider {...settings}>
      <div className="bg1 w-full h-[600px] rounded-3xl my-6 cursor-grab">
      </div>
      <div className="relative cursor-grab my-6">
        <div className="bg1 w-full h-[600px] rounded-3xl relative z-20 text-white flex justify-center items-center flex-col gap-5 ">
          <div className='absolute bg-black opacity-60 left-0 right-0 w-full h-full rounded-3xl text-white flex  z-10'>
          </div>
            <h1 className='font-extrabold text-[50px] z-30 relative'>Microsoft Tech Talkss</h1>
            <h3 className='font-extrabold text-[36px] z-30 relative'>25 November 2023 at 09:17</h3>
            <h5 className='font-extrabold text-[20px] z-30 relative' >Ensa Khouribga</h5>
            <button className='bg-[#FF6A52] px-4 py-2 rounded-lg z-30 relative'>Register</button>
            <a href="" className='relative z-30'>View Details</a>
        </div>
      </div>
    </Slider>
  );
}

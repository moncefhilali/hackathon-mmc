import format1 from '../../assets/format1.png'
import image1 from '../../assets/logo.png'
import Man from '../../assets/man 1.png'
import localisation from '../../assets/location.png'
import time from '../../assets/time.png'
import calendria from '../../assets/calendar.png'
import axios from 'axios'
import { useEffect ,useState } from 'react';

export default function EventDetails() {
    const [id, setId] = useState();
    const [data1,setdata] =  useState({})

    useEffect(() => {
      const id = localStorage.getItem("id");
      if (id) {
            setId(id)
            console.log(id)
            axios.get(`https://localhost:7096/api/Events/${id}`)
            .then(function (response) {
              setdata(response.data);
              console.log(response.data); // Log the data to see what you're getting
            })
            .catch(function (error) {
              console.log(error);
            });
      }
    }, [id]);
    useEffect(() => {
        console.log(data1);
        console.log(data1.address);
        // console.log(data1.date);
      }, [data1]);

      const startDate = new Date(data1.date);
      const startTime = startDate.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
    
      // const endDate = new Date(event.endDate);
    
      const formattedDate = startDate.toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
      const formattedTime = `${startTime}`;


  return (
    <div className='w-full bg-[#FFFFFF] shadow-md my-7 py-3 px-10 rounded-[20px]'>
      <div className='flex  justify-between items-center'>
        <img src={format1} alt="" />
        <h1 className='font-extrabold text-xl w-[620px] text-center'>Morocco  Microsoft Community & Ensa Khouribga orginezed an event in microsoft tech talks</h1>
        <img src={image1} alt="" />
      </div>

    <div  className='flex gap-2 w-full'>

    <div className='w-1/2 rounded-[20px] bg-[#FFFFFF] shadow-md py-3 px-4 my-7'>
    <h1 className='mb-4 text-center font-extrabold text-[22px]'>Our Speakers</h1>
    <div className='flex flex-wrap justify-center items-center '>
        <div className=''>
            <img src={Man} alt="" />
            <h3>lorem ipsim fdufhu</h3>
        </div>
        <div className=''>
            <img src={Man} alt="" />
            <h3>lorem ipsim fdufhu</h3>
        </div>
        <div className=''>
            <img src={Man} alt="" />
            <h3>lorem ipsim fdufhu</h3>
        </div>
        <div className=''>
            <img src={Man} alt="" />
            <h3>lorem ipsim fdufhu</h3>
        </div>
        <div className=''>
            <img src={Man} alt="" />
            <h3>lorem ipsim fdufhu</h3>
        </div>
        <div className=''>
            <img src={Man} alt="" />
            <h3>lorem ipsim fdufhu</h3>
        </div>
        </div>
    </div>
    <div className='flex  w-1/2 flex-col'>
        <div className='rounded-[20px] bg-[#FFFFFF] shadow-md py-3 px-4 my-7 w-full'>
            <div className='flex justify-between my-3'>
                <h3 className='font-bold text-[20px]'>{formattedDate}</h3>
                <img src={calendria} alt="" />
            </div>
            <div className='flex justify-between my-3'>
                <h3 className='font-bold text-[20px]'>{formattedTime} am</h3>
                <img src={time} alt="" />
            </div>
            <div className='flex justify-between my-3'>
                <h3 className='font-bold text-[20px]'>{data1.address}</h3>
                <img src={localisation} alt="" />
            </div>
        <h2 className='text-center text-[#24756E] font-bold text-[20px]'>About the Event </h2>
        </div>
        <div className='flex gap-8 justify-center items-center'>
        <button className='bg-[#FF6A52] px-4 py-2 rounded-lg z-30 relative text-white'>Register Now</button>
        <button className='bg-[#FF6A52] px-4 py-2 rounded-lg z-30 relative text-white'>Watch Now</button>
        </div>
    </div>
    </div>

    </div>
  )
}

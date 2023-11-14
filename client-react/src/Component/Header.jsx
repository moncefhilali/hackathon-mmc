import image1 from "../assets/logo.png";
import Trans from "../assets/translation 1.png";
import notif from "../assets/notif.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Header() {
  const [data, setdata] = useState([]);
  const [event, setevent] = useState([]);

  useEffect(() => {
    axios
      .get("https://localhost:7096/api/Events")
      .then(function (response) {
        const data1 = response.data;
        setdata(response.data);

        // Access the last element of the array
        setevent(data1[data1.length - 1]);
        console.log(data1[data1.length - 1]);
      })
      .catch(function (res) {
        console.log(res);
      });
  }, []);

  const startDate = new Date(event.date);
  const startTime = startDate.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const formattedDate = startDate.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedTime = `${startTime}`;

  return (
    <>
      <div className="flex w-full gap-3 my-4">
        <div className="bg-[#FFFFFF] shadow-md py-1  px-2 rounded-2xl flex justify-center items-center ">
          <img src={notif} alt="" />
        </div>
        <div className="bg-[#FFFFFF] shadow-md py-4  px-2 w-[95%] rounded-[20px] text-center">
          Latest Event :
          {`${event.title} "${formattedDate} at ${formattedTime}
          on ${event.address}"`}
        </div>
      </div>
      <div className="w-full flex items-center justify-between bg-[#FFFFFF] shadow-md px-7 py-3 rounded-[20px] mt-4 ">
        <div className="w-1/2">
          <img src={image1} alt="" />
        </div>
        <div className="flex order-last gap-9 ">
          <div className="flex justify-between gap-6 items-center">
            <Link to="/" className="font-semibold text-[17px]">
              Home
            </Link>
            <Link to="/events" className="font-semibold text-[17px]">
              Events
            </Link>
            <Link to="/aboutus" className="font-semibold text-[17px]">
              Community
            </Link>
            <Link to="/speakers" className="font-semibold text-[17px]">
              Speakers
            </Link>
            <Link to="/contact" className="font-semibold text-[17px]">
              Contact
            </Link>
          </div>
          <div className="flex gap-3  border-black border-[1px] rounded-full px-2 py-1">
            <p className="font-semibold text-[17px]">En</p>
            <img src={Trans} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

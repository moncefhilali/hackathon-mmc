import React from "react";
import format1 from "../../assets/format1.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function EventDetaisls() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios
      .get("https://localhost:7096/api/Events")
      .then(function (response) {
        setdata(response.data);
      })
      .catch(function (res) {
        console.log(res);
      });
  }, []);

  // Use useEffect to log the updated event after it has been set
  useEffect(() => {
    console.log(data);
  }, [data]);

  const startDate = new Date(data.date);
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
    <div className="w-full bg-[#FFFFFF] shadow-md my-7 py-3 px-10 rounded-[20px]">
      <h1 className="text-center font-semibold text-[44px]">OUR EVENTS</h1>
      <div>
        {/* Map over the data array to render details for each event */}
        {data.map((event) => {
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

          return (
            <Link
              to={`/events/Details/${event.eventID}`} // Assuming you have a details route with eventID parameter
              key={event.eventID}
              className="flex items-center gap-5 my-3"
            >
              <img src={format1} alt="" className="w-[140px]" />
              <div className="w-full bg-[#FFFFFF] shadow-md py-10 px-4 rounded-3xl">
                {`Event: ${event.title} "${formattedDate} at ${startTime} on ${event.city}"`}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

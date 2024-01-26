import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Notices() {
  const [CalData, setCal] = useState();

  useEffect(() => {
    const fetchCalender = async () => {
      try {
        const res = await axios.get("http://localhost:3000/academicCalender");
        const dataResult = res.data;
        setCal(dataResult);
        console.log(dataResult);
      } catch (error) {
        console.error("Error fetching calender info:", error);
      }
    };

    fetchCalender();
  }, []);

  return (
    <>
    <div className="bg-slate-200 w-9/12 border-2 m-5 h-full ml-24">

<h1 className="text-center text-2xl bg-sky-500 text-white">Academic Calender</h1>
<div className="ml-14 grid grid-cols-4 grid-rows-2 items-center text-center gap-x-0 gap-y-0">


      {CalData && (
CalData.map(item => {
  return (
    <div className="text-black bg-green-400 w-48 h-44 text-center mt-3" key={item.id}>

    <h1 className="bg-red-400">Title: {item.TitleOfCalender}</h1>
    <p>Total Days: {item.totalWeek}</p>
    <p>Month: {item.Month}</p>
    <p>Days: {item.Day}</p>
    <p>Descriptions: {item.Description}</p>

    

  </div>
  )
})
        
      )}
      </div>

      </div>
    </>
  );
}






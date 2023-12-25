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
      {CalData && (
CalData.map(item => {
  return (
    <div className="text-black" key={item.id}>

    <p>Title: {item.TitleOfCalender}</p>
    <p>Total Days: {item.totalWeek}</p>
    <p>Month: {item.Month}</p>
    <p>Days: {item.Day}</p>
    <p>Descriptions: {item.Description}</p>

    

  </div>
  )
})
        
      )}
    </>
  );
}






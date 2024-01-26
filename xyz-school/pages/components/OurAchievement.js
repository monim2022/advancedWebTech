import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AchievmentInfo() {
  const [AchievData, setAchievement] = useState();

  useEffect(() => {
    const fetchAchievement = async () => {
      try {
        const res = await axios.get("http://localhost:3000/award");
        const dataResult = res.data;
        setAchievement(dataResult);
        console.log(dataResult);
      } catch (error) {
        console.error("Error fetching achievment info:", error);
      }
    };

    fetchAchievement();
  }, []);

  return (
    <>
    <div className="bg-slate-200 border-2 m-5 h-80">

<h1 className="text-center text-2xl bg-sky-500 text-white">Our Achievment</h1>
<div className="ml-2 mr-2 grid grid-cols-4 grid-rows-2 items-center text-center gap-x-2 gap-y-0 mt-2">


      {AchievData && (

AchievData.map(item => {
  return (
    <div className="text-black bg-green-400" key={item.id}>

    <p className="bg-red-400">Total Award and Achievment: {item.TotalAward}</p>
    <p>Award list number:{item.AwardListNumber}</p>
    <p>Award Name: {item.AwardName}</p>
    <p>Award Descriptions:{item.Description}</p>
    <p>Awarded Date: {item.AwardDate}</p>
    

  </div>
  )
})
        
      )}
      </div>
      </div>
    </>
  );
}


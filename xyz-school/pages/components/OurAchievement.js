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
      {AchievData && (

AchievData.map(item => {
  return (
    <div className="text-black" key={item.id}>

    <p>Total Award and Achievment: {item.TotalAward}</p>
    <p>Award list number:{item.AwardListNumber}</p>
    <p>Award Name: {item.AwardName}</p>
    <p>Award Descriptions:{item.Description}</p>
    <p>Awarded Date: {item.AwardDate}</p>
    

  </div>
  )
})
        
      )}
    </>
  );
}


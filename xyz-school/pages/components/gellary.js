import React, { useEffect, useState } from "react";
import axios from "axios";

export default function GellaryInfo() {
  const [GellData, setGellary] = useState();

  useEffect(() => {
    const fetchGellary = async () => {
      try {
        const res = await axios.get("http://localhost:3000/uploadImage");
        const dataResult = res.data;
        setGellary(dataResult);
        console.log(dataResult);
      } catch (error) {
        console.error("Error fetching gellary info:", error);
      }
    };

    fetchGellary();
  }, []);

  return (
    <>
    <div className="bg-slate-200 border-2 m-5 h-80">

<h1 className="text-center text-2xl bg-sky-500 text-white">Events && Gellary</h1>
<div className="ml-2 mr-2 grid grid-cols-4 grid-rows-2 items-center text-center gap-x-2 gap-y-0 mt-2">


      {GellData && (

GellData.map(item => {
  return (
    <div className="text-black bg-green-400" key={item.id}>

    <div>{item.image}</div>
    <p>Title: {item.imageTitle}</p>
    <p>Image Descriptions:{item.imageDescription}</p>
    <p>Date: {item.imageDate}</p>
    

  </div>
  )
})
        
      )}
      </div>
      </div>
    </>
  );
}


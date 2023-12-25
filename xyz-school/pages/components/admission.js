import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AdmissionFun() {
  const [quote, setQuote] = useState();

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const res = await axios.get("http://localhost:3000/admissionInfo");
        const dataResult = res.data;
        setQuote(dataResult);
        console.log(dataResult);
      } catch (error) {
        console.error("Error fetching admission info:", error);
      }
    };

    fetchQuote();
  }, []);

  return (
    <>
      {quote && (

quote.map(item => {
  return (
    <div className="text-black" key={item.id}>

    <p>Admission Start: {item.AdmissionStart}</p>
    <p>Admission End: {item.AdmissionEnd}</p>
    <p>Program: {item.Programm}</p>
    {/* Add more properties as needed */}
  </div>
  )
})
        
      )}
    </>
  );
}

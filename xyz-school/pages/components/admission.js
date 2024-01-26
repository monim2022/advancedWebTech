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
    
    <div className="bg-slate-200 border-2 m-10 h-96">
      <h1 className="text-center text-white text-2xl bg-sky-500">Admission Information</h1>
      {quote && (

quote.map(item => {
  return (
    <div>
    <div className="text-black text-center mt-5" key={item.id}>
    <p>Admission Start: {item.AdmissionStart}</p>
    <p>Admission End: {item.AdmissionEnd}</p>
    <p>Program: {item.Programm}</p>
  </div>
  </div>

  )
})
        
      )}
      </div>
    </>
  );
}

import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AdministratorInfo() {
  const [AdminiData, setAdmini] = useState();

  useEffect(() => {
    const fetchAdministrator = async () => {
      try {
        const res = await axios.get("http://localhost:3000/administration");
        const dataResult = res.data;
        setAdmini(dataResult);
        console.log(dataResult);
      } catch (error) {
        console.error("Error fetching teachers info:", error);
      }
    };

    fetchAdministrator();
  }, []);

  return (
    <>
    <div className="bg-slate-200 border-2 m-10 h-full">
      <h1 className="text-center text-white text-2xl bg-sky-500">Students Facilities</h1>
      {AdminiData && (

AdminiData.map(item => {
  return (
    <div className="bg-slate-100 mt-4 border-green-100">
  <div className="text-black text-center" key={item.id}>

    <p>Administrator Name: {item.Name}</p>
    <p>Administrator Email: {item.Email}</p>
    <p>Administrator Contact: {item.Contact}</p>
    <p>Administrator Address: {item.Address}</p>
    <p>Administrator Position: {item.Position}</p>
    <p>Administrator Degree: {item.Degree}</p>
    <p>Administrator Award: {item.Award}</p>


  </div>
  </div>
  )
})
        
      )}
      </div>
    </>
  );
}


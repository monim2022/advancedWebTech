import React, { useEffect, useState } from "react";
import axios from "axios";

export default function TeachersInfo() {
  const [TeacherData, setTeachers] = useState();

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const res = await axios.get("http://localhost:3000/teacherInfo");
        const dataResult = res.data;
        setTeachers(dataResult);
        console.log(dataResult);
      } catch (error) {
        console.error("Error fetching teachers info:", error);
      }
    };

    fetchTeachers();
  }, []);

  return (
    <>
    <div className="bg-slate-200 border-2 m-5 h-80">

<h1 className="text-center text-2xl bg-sky-500 text-white">Teachers Information</h1>

      {TeacherData && (

TeacherData.map(item => {
  return (
    <div className="bg-slate-100 mt-4 border-green-100">

    <div className="text-black text-center" key={item.id}>

    <p>Teacher Name: {item.name}</p>
    <p>Teacher Email: {item.email}</p>
    <p>Teacher Contact: {item.contact}</p>
    <p>Teacher Address: {item.address}</p>
    <p>Teacher Position: {item.position}</p>

  </div>
  </div>
  )
})
        
      )}
      </div>
    </>
  );
}

import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Notices() {
  const [NoticeData, setNotice] = useState();

  useEffect(() => {
    const fetchNotice = async () => {

      try {
        const res = await axios.get("http://localhost:3000/notice");
        const dataResult = res.data;
        setNotice(dataResult.slice(0,3));
        console.log(dataResult);
      } catch (error) {
        console.error("Error fetching teachers info:", error);
      }
    };

    fetchNotice();
  }, []);

  return (
    <>
        <div className="bg-slate-200 border-2 m-5 h-80">

          <h1 className="text-center text-2xl bg-sky-500 text-white"> Recent Notices</h1>

      {NoticeData && (

NoticeData.map(item => {
  return (
    <div className="bg-slate-300 border border-cyan-600 m-4">
    <div className="text-white bg-teal-400 mt-2 text-center" key={item.id}>
    <p className="bg-sky-700">Title:{item.noticeTitle}</p>
    <span>Notices: {item.notice}</span>
    <span>Date: {item.noticeDate}</span>
    

  </div>
  </div>
  )
})
        
      )}
      </div>
    </>
  );
}



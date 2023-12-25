import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Notices() {
  const [NoticeData, setNotice] = useState();

  useEffect(() => {
    const fetchNotice = async () => {
      try {
        const res = await axios.get("http://localhost:3000/notice");
        const dataResult = res.data;
        setNotice(dataResult);
        console.log(dataResult);
      } catch (error) {
        console.error("Error fetching teachers info:", error);
      }
    };

    fetchNotice();
  }, []);

  return (
    <>
      {NoticeData && (

NoticeData.map(item => {
  return (
    <div className="text-black" key={item.id}>

    <p>Title: {item.noticeTitle}</p>
    <p>Notices: {item.notice}</p>
    <p>Date: {item.noticeDate}</p>
    

  </div>
  )
})
        
      )}
    </>
  );
}



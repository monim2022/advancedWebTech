
// components/VideoSlider.js
import { useState } from 'react';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] })


export default function VideoSlider () {
    const title = "Events && Videos";

    const videos = [
        '/videos01.mp4',
        '/videos02.mp4',
        '/videos03.mp4',
      ];

  const [currentVideo, setCurrentVideo] = useState(0);

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length);
  };

  return (
    <>
    <h1 className='text-center text-wrap text-white mt-2'>{title}</h1>

    <div className="relative">
      <video
        autoPlay
        loop
        muted
        className="relative w-full h-64"
        src={videos[currentVideo]}
      ></video>
      <div className="absolute inset-0 flex items-center justify-between">
        <button
          className="text-white hover:text-red-600 ml-5"
          onClick={prevVideo}
        >
          Previous
        </button>
        <button
          className="text-white hover:text-red-600 mr-5"
          onClick={nextVideo}
        >
          Next
        </button>
      </div>
    </div>

    </>

  )

}




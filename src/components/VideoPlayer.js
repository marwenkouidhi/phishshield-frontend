import React, { useRef, useState } from "react";
import { HiOutlinePlayCircle } from "react-icons/hi2";

const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handleOverlayClick = () => {
    setIsPlaying(false);
    videoRef.current.pause();
  };

  return (
    <div className="">
      {isPlaying ? (
        <div
          className="absolute inset-0 z-50 bg-black/50 flex justify-center items-center"
          onClick={handleOverlayClick}
        >
          <video
            className="w-[70%] h-[70%] rounded-md shadow-lg"
            ref={videoRef}
            controls
            autoPlay
          >
            <source src="/demo.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : (
        <button
          onClick={handlePlay}
          className="flex space-x-3 items-center rounded-full bg-blue-primary/10 hover:bg-blue-primary/30 transition ease-linear pr-10"
        >
          <HiOutlinePlayCircle className="text-blue-primary" size={45} />
          <span>Play Demo</span>
        </button>
      )}
    </div>
  );
};

export default VideoPlayer;

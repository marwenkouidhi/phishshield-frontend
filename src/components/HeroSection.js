import React from "react";
import { HiOutlinePlayCircle } from "react-icons/hi2";
import "./heroSection.css";
import VideoPlayer from "./VideoPlayer";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <div className="z-20 min-h-full h-[59vh] max-w-screen-xl mx-auto flex space-x-7 items-center">
      <div className="flex flex-col space-y-6">
        <h1 className="text-5xl font-extrabold text-red-800 ">
          Empower Your Inbox: Defend, Detect,{" "}
          <span className="text-6xl text-green-300 underline">Protect! </span>
        </h1>
        <p className="text-gray-500 text-lg">
          Take Control of Your Email Security and Shield Your Digital
          Communication from Phishing Attacks with Our Cutting-Edge
          Anti-Phishing Solution{" "}
        </p>

        <div className="flex space-x-3 items-center">
          <Link to="/register">
            <button className="text-white px-10 p-1 flex space-x-2 items-center rounded-full bg-slate-600 text-lg font-semibold">
              <span className="text-2xl animate-wiggle">👉</span>
              <span>Secure My Inbox Now! </span>
            </button>
          </Link>
          <VideoPlayer />
        </div>
      </div>
      <img src="/image1.png" alt="hero img" />
    </div>
  );
};

export default HeroSection;

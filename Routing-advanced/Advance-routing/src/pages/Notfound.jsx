import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const NotFound = () => {
  const [dark, setDark] = useState(false);

const navigate = useNavigate()

  return (
    <div
      className={`mt-2 flex flex-col justify-center items-center transition-all duration-500 {
        dark ? "bg-black text-white" : "bg-cyan-200 text-black"
      }`}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setDark(!dark)}
        className="absolute top-5 right-5 text-2xl"
      >
        {dark ? "day" : "night"}
      </button>

      {/* Eyes */}
      <div className="flex gap-6 mb-6">
        <div className="w-16 h-16 bg-yellow-400 rounded-full flex justify-center items-center">
          <div className="w-6 h-6 bg-black rounded-full"></div>
        </div>
        <div className="w-16 h-16 bg-yellow-400 rounded-full flex justify-center items-center">
          <div className="w-6 h-6 bg-black rounded-full"></div>
        </div>
      </div>

      {/* Text */}
      <h1 className="text-4xl font-bold text-yellow-500 mb-2">
        Looks Like You're Lost
      </h1>
      <p className="mb-6">404 error</p>

      {/* Button */}
      <button onClick={()=>{
        navigate('/')
      }} className="px-6 py-3 border border-yellow-500 rounded-full hover:bg-yellow-500 hover:text-black transition-all duration-300">
        Back To Home
      </button>
    </div>
  );
};

export default NotFound;
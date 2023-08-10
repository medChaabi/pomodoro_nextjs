"use client";
import React, { useEffect, useState } from "react";
import { PiCubeFocusBold } from "react-icons/pi";
import { BiTime, BiTimeFive } from "react-icons/bi";

export default function Home() {
  const Pomo: number = 25;
  const ShortBreak: number = 5;
  const LongBreak: number = 15;
  const [minutes, setMinutes] = useState(Pomo);
  const [seconds, setSeconds] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (start) {
      const interval = setInterval(() => {
        if (seconds === 0) {
          setMinutes((minutes) => minutes - 1);
          setSeconds(60);
        }
        setSeconds((seconds) => seconds - 1);
        if (minutes === 0 && seconds === 0) {
          setMinutes(0);
          setSeconds(0);
          console.log("done!");
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  });
  return (
    <div className="text-center min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
      <button
        onClick={() => {
          setMinutes(Pomo), setSeconds(0);
        }}
        className="middle  none center mr-4 rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        data-ripple-light="true"
      >
        <div className="flex items-center px-2">
        <PiCubeFocusBold size={40} />
        Pomodoro</div>
        
        
      </button>

      <button
        onClick={() => {
          setMinutes(ShortBreak), setSeconds(0);
        }}
        className="middle none center mr-4 rounded-lg bg-red-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        data-ripple-light="true"
      >
        <div className="flex items-center px-2">
        <BiTime size={40} />
        Short Break
        </div>
        
      </button>
      <button
        onClick={() => {
          setMinutes(LongBreak), setSeconds(0);
        }}
        className="middle none center mr-4 rounded-lg bg-green-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        data-ripple-light="true"
      >
        <div className="flex items-center px-2">
        <BiTimeFive size={40}/>
        Long Break
        </div>
        
      </button>
      <div className="text-bord text-3xl text-white m-5 py-10">
        {minutes < 10 ? "0" + minutes : minutes}:
        {seconds < 10 ? "0" + seconds : seconds}
      </div>
      <button
        className="middle none center mr-4 rounded-lg bg-blue-500 py-3 px-12 font-sans text-2xl font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"

        onClick={() => setStart(!start)}
      >
        {start ? "Pause" : "Start"}
      </button>
      <br />
    </div>
  );
}

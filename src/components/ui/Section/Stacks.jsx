import React, { useRef  ,useEffect, useState } from "react";

import { motion } from 'framer-motion'
import AnimatedCPU from "@/components/ui/Animated/AnimatedCPU";
import Cpu from "@/components/ui/Animated/CPU";
import Tech from "@/components/ui/core/Stack/Tech";
import "./Stack.css";
export default function index() {
 

  return (
    <section  className="min-h-screen px-1   py-52  content-center "
    
    style={{
      background: "radial-gradient(50% 50% at 50% 50%,#121212 0,#000000 100%)"
    }}
    >
      <h1 
      style={{

        background: "linear-gradient(180deg,#ffffff,#adadad)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: 'transparent'
      }}
      className="text-center  text-[linear-gradient(180deg,#ffffff,#adadad)] lg:text-[32px] text-[24px] leading-[1.25]  tracking-[-0.04em] text-[#fafafa] font-bold ">
     Committed to Staying Updated with <span className="md:block">the Latest Design Trends & Techniques</span> </h1>


      <div
       
        className="flex relative  justify-center  h-[200px] md:h-[264px] overflow-hidden w-full  content-center  max-w-7xl m-auto"
      >
        <AnimatedCPU />
      <Cpu/>
      </div>
      <div className="px-3">
<div className="max-w-[74rem] justify-center flex flex-col m-auto gap-[16px] lg:gap-[32px] lg:grid lg:grid-cols-3">

        <Tech/>
        <Tech/>
        <Tech/>
</div>
      </div>
    </section>
  );
}

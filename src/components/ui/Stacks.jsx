import React, { useRef } from "react";

import AnimatedCPU from "../combine/AnimatedCPU";
import Cpu from "../combine/CPU";
import Tech from "../core/Stack/Tech";
import "./Stack.css";
export default function index() {
 

  return (
    <section className="min-h-screen bg-zinc-950 content-center ">
      <h1></h1>


      <div
       
        className="flex relative  justify-center  h-[200px] md:h-[264px] overflow-hidden w-full  content-center  max-w-7xl m-auto"
      >
        <AnimatedCPU />
      {/* <Cpu/> */}
      </div>
      <div className="px-3">

        <Tech/>
      </div>
    </section>
  );
}

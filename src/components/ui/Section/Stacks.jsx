import React, { useRef } from "react";

import AnimatedCPU from "@/components/ui/combine/AnimatedCPU";
import Cpu from "@/components/ui/combine/CPU";
import Tech from "@/components/ui/core/Stack/Tech";
import "../Stack.css";
export default function index() {
 

  return (
    <section className="min-h-screen py-20 bg-zinc-950 content-center ">
      <h1></h1>


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

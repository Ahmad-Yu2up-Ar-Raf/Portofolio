


"use client";
import React, { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  useInView
} from "framer-motion";
import { cn } from "@/lib/utils";

import { DockDemo } from "../Header/Magnifier";



const TimeDisplay = ({ timeZone, locale = "en-GB" }) => {
  const [currentTime, setCurrentTime] = useState("")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const options = {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
      }
      const timeString = new Intl.DateTimeFormat(locale, options).format(now)
      setCurrentTime(timeString)
    }

    updateTime()
    const intervalId = setInterval(updateTime, 1000)

    return () => clearInterval(intervalId)
  }, [timeZone, locale])

  return <>{currentTime}</>
}

export default TimeDisplay


export const FloatingNav = ({


}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious();
 

        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
    
    }
  });



  
  return (
    (<AnimatePresence mode="wait">
      <motion.header
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
            "fixed hidden md:px-6 h-fit md:items-center md:flex  bottom-7 md:justify-between  z-[5000]    md:top-7 w-full    ",
      
          )}
     >
    
      <div className="hidden md:inline-flex md:text-sm">
        <h1>Asia/Bogor</h1>
      </div>
      <DockDemo />
      <div className="hidden md:inline-flex md:text-sm">
        <h1><TimeDisplay/></h1>
      </div>
  
      </motion.header>
    </AnimatePresence>)
  );
};



export const Float = ({

}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious();
 

        if (direction >= 0) {
         setVisible(false);
        } else {
          setVisible(true);
        }
    
    }
  });



  
  return (
    (<AnimatePresence mode="wait">
      <motion.nav
        initial={{
          opacity: 1,
          y: 100,
        }}
        animate={{
          y: visible ? 0 : 100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
            "fixed z-[5000]  md:hidden bottom-7 w-full  ",
      
          )}
     >
    
    <DockDemo/>
  
      </motion.nav>
    </AnimatePresence>)
  );
}

"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { blur } from "./anim";
import Nav from "./nav";
import TimeDisplay from "@/hooks/GetTimes";


export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target) 
      
      ) {
        setIsActive(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef, buttonRef]);

  return (
    <header>
      <nav
        aria-label="Primary navigation"
        className="flex mix-blend-difference w-full justify-center z-50 top-5 md:items-center h-fit fixed px-10 lg:justify-between"
      >
        <div className="lg:inline-flex md:text-sm hidden">
          <h5>Asia/Bekasi</h5>
        </div>

        <button
          ref={buttonRef}
          id="Toggle"
          aria-expanded={isActive}
          aria-controls="main-menu"
          aria-label={isActive ? "Close menu" : "Open menu"}
          onClick={() => {
            setIsActive(!isActive);
          }}
          className="cursor-pointer lg:left-1/2 lg:-translate-x-1/2 lg:absolute group flex gap-1 flex-col"
        >
          <div
            style={{
              transitionDuration: ".8s",
              transitionTimingFunction: "cubic-bezier(0.19,1,0.22,1)",
            }}
            className="w-[140px] group-hover:w-[175px] h-[10px] md:h-[4px] transition-[width] rounded-full bg-[#f8f8f8]"
          ></div>
          <h4 className="text-[.8rem] relative flex font-thin justify-center h-full items-center w-full font-ppbook uppercase tracking-[.07rem]">
            <motion.span
              variants={blur}
              animate={!isActive ? "open" : "closed"}
              className="absolute top-1.5"
            >
              Close
            </motion.span>
            <motion.span
              variants={blur}
              animate={isActive ? "open" : "closed"}
              className="absolute top-1.5"
            >
              Menu
            </motion.span>
          </h4>
        </button>
        <div className="lg:inline-flex relative hidden md:text-sm">
          <h5 className="">
            <TimeDisplay />
          </h5>
        </div>
      </nav>

      <AnimatePresence mode="wait">
        {isActive && (
          <div
            ref={menuRef}
            id="main-menu"
            role="navigation"
            aria-label="Main menu"
            className="relative z-40"
          >
            <Nav setIsActive={setIsActive} />
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}

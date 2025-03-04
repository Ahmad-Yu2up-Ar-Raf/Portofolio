"use client";

import React, { useEffect, useRef,useState } from "react";
import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";
const Cursors = () => {
  const cursorRef = useRef(null);
  const cursorTextRef = useRef(null);
  const linksRef = useRef([]);
  const [cursorText, setCursorText] = useState("Visit Website");
  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorText = cursorTextRef.current;

    // Fungsi untuk update links
    const updateLinks = () => {
      linksRef.current = [...document.querySelectorAll('a')];
      attachLinkListeners();
    };

    // Observer untuk mendeteksi perubahan DOM
    const observer = new MutationObserver(updateLinks);
    observer.observe(document.body, { subtree: true, childList: true });

    const onMouseMove = (event) => {
      const { clientX, clientY } = event;
      // Menggunakan gsap.to dengan delay untuk menciptakan efek lambat
      gsap.to(cursor, {
        x: clientX,
        y: clientY,
        duration: 1.5, // Durasi lebih lama untuk efek lambat
        ease: "power2.out"
      });
    };

    const onMouseEnterLink = (event) => {
      const link = event.target;
      
      gsap.to(cursor, {
        scale: 4,
        opacity: 1,
        duration: 0.3
      });
      gsap.to(cursorText, {
        opacity: 1,
        duration: 0.3
      });
      if (link.classList.contains('view')) {
      
     
        if (link.getAttribute('href') && !link.getAttribute('href').startsWith('/')) {
          setCursorText("Visit Website")
        }else{
          setCursorText(
            <div className="flex h-full px-[3.5px] py-[1.4px] overflow-hidden  gap-x-[3px] content-center ">
          

              <span className="size-[1.6px] mt-[1.3px]   rounded-full bg-white" />
       
              <span className="">Coming Soon</span>
            </div>
          )
        }
      }else{
    
        setCursorText(
        <ArrowUpRight className=" size-[6px]"/>
      
      )
      }
    };

    const onMouseLeaveLink = () => {
      gsap.to(cursor, {
        scale: 0,
        opacity: 0,
        duration: 0.3
      });
      gsap.to(cursorText, {
        opacity: 0,
        duration: 0.3
      });
    };

    // Pasang event listeners ke links
    const attachLinkListeners = () => {
      linksRef.current.forEach(link => {
        link.addEventListener('mouseenter', onMouseEnterLink);
        link.addEventListener('mouseleave', onMouseLeaveLink);
      });
    };

    // Hapus event listeners dari links
    const removeLinkListeners = () => {
      linksRef.current.forEach(link => {
        link.removeEventListener('mouseenter', onMouseEnterLink);
        link.removeEventListener('mouseleave', onMouseLeaveLink);
      });
    };

    
    updateLinks();
    document.addEventListener('mousemove', onMouseMove);

   
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      removeLinkListeners();
      observer.disconnect();
      gsap.killTweensOf(cursor);
      gsap.killTweensOf(cursorText);
    };
  }, []);
  return (
    
    <div
    ref={cursorRef}
    className={`${
      cursorText != 'Visit Website' 
        ? 'size-fit top-0 px-[1px] py-[0.1px]' 
        : 'size-2 p-[13.5px] -top-4'
    } fixed left-0 hidden   md:flex justify-center overflow-hidden  text-[3.5px] font-medium text-white items-center opacity-0 pointer-events-none z-[9999] rounded-full bg-white/10 backdrop-blur-[2px] shadow-[0_0_0_0.25px_rgba(255,255,255,0.3)]`}
  >
    <h1
      ref={cursorTextRef}
      className={`${
        cursorText != 'Visit Website' 
          ? '' 
          : 'absolute     opacity-0'
      } `}
    >
      {cursorText}
    </h1>
  </div>
  );
};

export default Cursors;
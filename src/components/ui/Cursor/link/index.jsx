"use client";

import React, { useEffect, useRef,useState } from "react";
import gsap from "gsap";
import { ArrowUpRight,Dot  } from "lucide-react";
const Cursors = () => {
  const cursorRef = useRef(null);
  const cursorTextRef = useRef(null);
  const linksRef = useRef([]);
  const [cursorText, setCursorText] = useState("Visit Website");
  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorText = cursorTextRef.current;

    const updateLinks = () => {
      linksRef.current = [...document.querySelectorAll('a')];
      attachLinkListeners();
    };

 
    const observer = new MutationObserver(updateLinks);
    observer.observe(document.body, { subtree: true, childList: true });

    const onMouseMove = (event) => {
      const { clientX, clientY } = event;
      
      gsap.to(cursor, {
        x: clientX,
        y: clientY,
        duration: 1.5, 
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
      if (link.classList.contains('project-card-link')) {
      
     
        if (link.getAttribute('href') && !link.getAttribute('href').startsWith('/')) {
          setCursorText("Visit Website")
        }else{
          setCursorText(
            <>
          

          <Dot className="size-2  ml-[3px]  " />
       
            <h6 className="  mr-[3px]  my-[1px] pt-[0.2px] ">Coming Soon</h6>
            </>
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
    } fixed left-0 hidden   md:flex justify-center  text-[3.5px] font-medium text-white items-center opacity-0 pointer-events-none z-[999] rounded-full bg-white/10 backdrop-blur-[2px] shadow-[0_0_0_0.25px_rgba(255,255,255,0.3)]`}
  >
    <div
      ref={cursorTextRef}
      className={`${
        cursorText != 'Visit Website' 
          ? 'flex   items-center  gap-x-[2px] content-center' 
          : 'absolute     opacity-0'
      } `}
    >
      {cursorText}
    </div>
  </div>
  );
};

export default Cursors;
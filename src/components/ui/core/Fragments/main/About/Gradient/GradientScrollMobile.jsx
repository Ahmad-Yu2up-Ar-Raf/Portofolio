'use client'
import { useRef, useEffect } from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";


export default function GradientScrollMobile({ text}) {
    let Gradient = useRef(null);
   

    useEffect(() => {
     
    
   gsap.registerPlugin(ScrollTrigger);
    
      
      
      if(Gradient?.current && text?.current){
        const reveal = gsap.timeline({
            scrollTrigger: {
                   id: 'gradient-mobile-animation',
              trigger: text?.current,
              pin: true,
              start: 'top top',
              end: '+=1500',
              scrub: 1,
              markers: false // Ubah ke true untuk debugging
            }
          });
          
      
          reveal.fromTo(Gradient?.current, 
            { x: 0 }, 
            { x: -2100, ease: "power1.inOut" }
          );
       }
       return () => {
        // Kill ScrollTrigger instances
        ScrollTrigger.getAll().forEach(trigger => {
          if (trigger.vars.id && trigger.vars.id.includes('gradient-mobile-animation')) {
            trigger.kill();
          }
        });
      };
    }, [text]);
    return (
        < >
        <p  className="text-center relative  m-auto  md:text-3xl text-2xl w-[85%]  font-semibold">I am Ahmad Yusuf Ar-Rafi, a student who loves to dig into programming science.</p>
        <div ref={Gradient} className="absolute top-0 left-0 w-[2800px] md:w-[2900px] h-full bg-[linear-gradient(to_right,rgba(0,0,0,1)_0%,rgba(0,0,0,1)_25%,rgba(0,0,0,0)_50%,rgba(0,0,0,1)_75%,rgba(0,0,0,1)_100%)]" />
        </>
    )
}

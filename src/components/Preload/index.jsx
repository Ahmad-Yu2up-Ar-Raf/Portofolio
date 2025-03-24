'use client'

import Image from "next/image"
import gsap from "gsap"
import { useRef, useEffect } from "react"
import MaskText from "@/components/ui/Animation/Text/Mask"

const phrases = [
  "AN INDEPENDENT CREATIVE DESIGNER & ",
  "DEVELOPER BASED IN INDONESIA",
]

export default function Preloader2() {
    const containerRef = useRef(null);
    const loadeRef = useRef(null);
    const imgRef = useRef([])
  
    useEffect(() => {
      // Save the current scroll position
      const scrollPosition = window.pageYOffset;
      
      // More robust scroll locking
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollPosition}px`;
      document.body.style.width = '100%';

      const ctx = gsap.context(() => {
        const loader = loadeRef?.current;
        const container = containerRef?.current;
        const imgRe = imgRef?.current;
        
        if (container && imgRe) {
          setTimeout(() => {
            gsap.to(container, {
              clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
              ease: "power4.inOut",
              duration: 2,
            });
            
            gsap.to(imgRe, {
              duration: 2,
              clipPath: "polygon(0 100%, 100% 100%, 100% 0%, 0% 0%)",
              ease: "power4.inOut",
              stagger: {
                amount: 1.5
              }
            });
            
            gsap.to(loader, {
              duration: 2,
              clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0% )",
              ease: "power4.inOut",
              delay: 2,
              onComplete: () => {
               
                document.documentElement.style.overflow = '';
                document.body.style.overflow = '';
                document.body.style.position = '';
                document.body.style.top = '';
                document.body.style.width = '';
                window.scrollTo(0, 0);
              }
            });
          }, 3000);
        }
      });
      
      return () => {
        ctx.revert(); 
        ctx.kill(); 
        ctx.clear();
      
        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
      };
    }, []);
    

    useEffect(() => {
      const preventDefault = (e) => {
        e.preventDefault();
      };
      
      window.addEventListener('wheel', preventDefault, { passive: false });
      window.addEventListener('touchmove', preventDefault, { passive: false });
      
      return () => {
        window.removeEventListener('wheel', preventDefault);
        window.removeEventListener('touchmove', preventDefault);
      };
    }, []);
    
    return(
        <>
        <div ref={loadeRef} className="fixed hidden md:inline   z-[999] [clip-path:polygon(0_100%,100%_100%,100%_0,0_0)] w-screen h-screen " id="loader">
                {Array.from({ length: parseInt(7) }, (_, i) => (
                <div 
                ref={(el) => {
                    imgRef.current[i] = el;
                  }}
                key={i}

                className="absolute w-screen h-screen img [clip-path:polygon(0_100%,100%_100%,100%_100%,0_100%)]"  id={`imgload-${i}`}>
                   
                   <Image 
                    quality={90}
                    
                    priority
                    width={500}
                    height={500}
                    src={`/Assets/Preload/${i}.jpg`}
                    alt={`preload-image-${i}`}
                    className="w-full h-full object-cover "
                    
                    />
                    </div>  
                ))}
        </div>
       
               <div ref={containerRef} id="overlay"  className="fixed select-none p-5 hidden md:inline  w-screen h-screen  content-end    z-[999] [clip-path:polygon(0_100%,100%_100%,100%_0,0_0)] bg-[#0f0f0f] text-white " >
 
   <MaskText 
   phrases={phrases}
   contaierclassname={'text-4xl font-ppmedium'}
   reverseAfter={3000} 

   />
  
 
  </div>
        </>
    )
}
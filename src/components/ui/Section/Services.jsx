'use client'

import Container from "../Shared";
import Card from "../core/Fragments/main/Services";
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import {  useRef } from "react";



const Text = [
   "web design",
   "AI Merge ",
   "SEO Boost",
   "web develop"
]




gsap.registerPlugin(ScrollTrigger)






  export default function Service() {
    const sectionRef = useRef(null);
    const cardRefs = useRef([]);
    
    useGSAP(() => {
      
      if (!sectionRef.current) return;
      let mm = gsap.matchMedia();

      mm.add( {
     
        isDesktop: "(min-width: 1024px)",
        isMobile: "(max-width: 1023px)"

      }, (context) => {

        const { isDesktop, isMobile } = context.conditions ?? {};





    const cards = cardRefs.current.filter(Boolean);

      const totalScrollHeight = window.innerHeight * 3;
    const positions = [14, 38, 62, 86];
    const rotations = [-15, -7.5, 7.5, 15 ]
    if (isDesktop) {
  
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${totalScrollHeight}`,
        pin: true,
        pinSpacing: true,
      });
      
    cards.forEach((Card, index) => {
      gsap.to(Card, {
         left: `${positions[index]}%`,
         rotation: `${rotations[index]}`,
         ease: "none",
         scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${window.innerHeight}`,
          scrub: 0.5,
          id: `spread-${index}`,
         }
      })
    })


   
    
    }

 






cards.forEach((card, i) => {
  const frontEl = card?.querySelector("#flip-card-front")
  const backEl = card?.querySelector("#flip-card-back")


    const staggerOffset = i * 0.05
    const startOffset = 1 / 3 + staggerOffset
    const endOffset = 2 / 3 + staggerOffset

    ScrollTrigger.create({
      trigger: isDesktop ? sectionRef.current : card,
      start: isDesktop ? "top top" : "top 80%",
      end: isDesktop ? () => `+=${totalScrollHeight}` : "top 10%",
      scrub: isDesktop ? 1 : true,
      id: `rotate-flip-${i}`,
      onUpdate: (self) => {
        const progress = self.progress


        
        let animationProgress 
       let frontRotation 
       let backRotation  
       let cardRotation 
        if(progress >= startOffset && progress <= endOffset && isDesktop ){
         animationProgress = (progress - startOffset) / (1 / 3)
          frontRotation = -180 * animationProgress;
         backRotation = 180 - 180 * animationProgress;
         cardRotation = rotations[i] *  ( 1 - animationProgress);

       
       
        } else if(isMobile){
           frontRotation = -180 * progress;
           backRotation = 180 - 180 * progress;
        }

        gsap.to(frontEl, { rotateY:  frontRotation, ease: "power1.out"})
        gsap.to(backEl, { rotateY: backRotation, ease: "power1.out"})
        if(isDesktop){
          gsap.to(card, {
         
                 rotate: cardRotation,
                 ease: "power1.out"
                })
        } 


      }
    })
})


return () => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
}
});
    }, { scope: sectionRef });
  





    return (
      <Container
        ref={sectionRef}
        id="Service"
        sectionName="Service Section"
        ariaLabel="Portfolio Service Section"
        role="banner"
 className=" relative  max-w-[82em]   h-full  " 
   maxW
      >
     
  <ul className="w-full ">
        {Text.map((text, i) => (
          <Card
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
            key={i}
            id={`card-${i + 1}`} 
          
            frontAlt={"Card Image"} 
            backText={text}
          />
        ))}

</ul>

      </Container>
    );
  }
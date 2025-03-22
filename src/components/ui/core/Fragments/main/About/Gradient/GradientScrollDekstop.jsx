'use client'

import { useRef, useEffect } from 'react';
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from 'gsap';


export default function GradientScroll({phrase}) {
    let refs = useRef([]);
    const body = useRef(null);
    const container = useRef(null);

    useEffect( () => {
     
      gsap.registerPlugin(ScrollTrigger);
      createAnimation();
      return () => {
    
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }, [])
  
    const createAnimation = () => {
    

        


      
          gsap.to(refs.current, {
            scrollTrigger: {
                trigger: container.current,
                scrub: true,
                start: `top`,
                end: `+=${window.innerHeight / 1.5}`,
            },
            opacity: 0.9,
            ease: "none",
            stagger: 0.1
        })
   
    




  }

  const splitWords = (phrase) => {
    let body = [];
    phrase.split(" ").forEach( (word, i) => {
      const letters = splitLetters(word);
      body.push(<p  key={word + "_" + i}>{letters}</p>)
    })
    return body
  }

  const splitLetters = (word) => {
    let letters = []
    word.split("").forEach( (letter, i) => {
      letters.push(<span  key={letter + "_" + i} ref={el => {refs.current.push(el)}}>{letter}</span>)
    })
    return letters;
  }


    return (
        <article ref={container} role="content" id="section-content" className={`   md: max-w-7xl m-auto md:right-1/2 md:left-1/2   md:items-end md:transform md:-translate-x-1/2   md:absolute text-[rgb(211,211,211)]    content-center  bg-none w-full h-full  `}>
  <div ref={body} className={`[&_p]:md:text-[4.5vw]  [&_p]:lg:text-[4vw] md:uppercase [&_p]:text-[6vw]  [&_span]:opacity-[0.07] [&_p]:m-auto  [&_p]:md:m-0 [&_p]:font-semibold [&_p]:md:font-bold w-full flex flex-wrap gap-x-[4.1px]  md:gap-x-4 line-clamp-4`}> 
  {
        splitWords(phrase)
      }

  </div>


 </article>
    )
}





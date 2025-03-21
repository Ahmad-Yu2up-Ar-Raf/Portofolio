'use client'
import Container from "../../Shared"
import { useEffect, useRef, useState } from 'react';
import styles from './style.module.css'
import Image from "next/image"
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useTransform, useScroll, motion } from 'framer-motion';
import useMobile from "@/hooks/use-mobile";

const phrase = "I am Ahmad Yusuf Ar-Rafi, a programmer who loves to dig into programming science. comes from the Pesat Informatics Vocational School in Bogor, Indonesia.";



export function isMobile() {

  const isMobile = useMobile(768)
  if (typeof window === 'undefined') return false;
  return  !isMobile;
}



const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
]



export default function About() {
    const gallery = useRef(null);
    const [dimension, setDimension] = useState({width:0, height:0});
    
 
    const { scrollYProgress } = useScroll({
      target: gallery,
      offset: ['start end', 'end start']
    })
    const { height } = dimension;
    const y = useTransform(scrollYProgress, [0, 1], [0, height * 2])
    const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3])
    const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25])
    const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3])
  
    useEffect( () => {
   
  
     
      const resize = () => {
        setDimension({width: window.innerWidth, height: window.innerHeight})
      }
  
      window.addEventListener("resize", resize)
      
      resize();
  
      return () => {
        window.removeEventListener("resize", resize);
      }
    }, [])

    
    let refs = useRef([]);
    const body = useRef(null);
    const container = useRef(null);

    useEffect( () => {
     
      gsap.registerPlugin(ScrollTrigger);
      createAnimation();
    }, [])
  
    const createAnimation = () => {
      let mm = gsap.matchMedia()

      
      mm.add( "(min-width: 1024px)", () => {

        


      
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
   




    return () => {
      
    }
    });
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

    return(
      <Container
      id="About"
      sectionName="About Section"
       ariaLabel="Portfolio About Section"
       role="banner"
  
       maxW
         bg 
        className="h-[175vh] w-full   overflow-hidden content-start  px-[5vw] md:px-0 md:h-full relative  "
      >


 
    
    {isMobile() ? ( 
      <>
      
      <div className="min-h-[10vh]" id="spacer" role="spacer"/>
    <section className="relative  md:content-center px-[2vw]  w-full  h-[175vh]   
 bg-[radial-gradient(50%_50%_at_50%_50%,#121212_0,#000000_100%)] ">

 <article ref={container} role="content" id="section-content" className={`   md: max-w-7xl m-auto md:right-1/2 md:left-1/2   md:items-end md:transform md:-translate-x-1/2   md:absolute text-[rgb(211,211,211)]    content-center  bg-none w-full h-full  `}>
  <div ref={body} className={`[&_p]:md:text-[4.5vw]  [&_p]:lg:text-[4vw] md:uppercase [&_p]:text-[6vw]  [&_span]:opacity-[0.07] [&_p]:m-auto  [&_p]:md:m-0 [&_p]:font-semibold [&_p]:md:font-bold w-full flex flex-wrap gap-x-[4.1px]  md:gap-x-4 line-clamp-4`}> 
  {
        splitWords(phrase)
      }

  </div>


 </article>

    <div ref={gallery} role="background" id="Paralax-Background" className={`${styles.gallery} [mask-image:linear-gradient(0deg,transparent,#000)]  h-full  w-full `}>
      
      <Column images={[images[0], images[1], images[2]]} y={y}/>
      <Column images={[images[3], images[4], images[5]]} y={y2}/>
      <Column images={[images[6], images[7], images[8]]} y={y3}/>
      <Column images={[images[9], images[10], images[11]]} y={y4}/>
    </div>
 
    </section>
       
    <div className="min-h-[50vh]" id="spacer" role="spacer"/>
      </>
 ) : 
 
null

  
  
 
 
 }
 

      
   
      </Container>
    )
}



const Column = ({images, y}) => {
  return (
    <motion.div 
      className={styles.column}
      style={{y}}
      >
      {
        images.map( (src, i) => {
          return <div key={i} className={styles.imageContainer}>
            <Image 
              src={`Assets/About/${src}`}
              alt='image'
              fill
            />
          </div>
        })
      }
    </motion.div>
  )
}




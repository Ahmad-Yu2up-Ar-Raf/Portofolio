'use client'
import Container from "../Shared"
import { useRef } from "react";
import GradientScroll from "@/components/ui/core/Fragments/main/About/Gradient/GradientScrollDekstop"
import { useMediaQuery } from "@/hooks/lib/use-media-query";
import Gallery from "@/components/ui/core/Fragments/main/About/Gallery"
import GradientScrollMobile from "@/components/ui/core/Fragments/main/About/Gradient/GradientScrollMobile"
const phrase = "I am Ahmad Yusuf Ar-Rafi, a student who loves to dig into programming science. comes from the Pesat Informatics Vocational School in Bogor, Indonesia.";

export default function About() {
  let text = useRef(null);
    const isMobile = useMediaQuery("(max-width: 1024px)");


  





    return(
      <Container
      id="About"
      sectionName="About Section"
       ariaLabel="Portfolio About Section"
       role="banner"
  ref={text}
       maxW
         bg 
        className=" w-full  relative  content-center    overflow-hidden  h-full  "
      >


 
    
    {isMobile ? ( 

      <GradientScrollMobile text={text}/>


 ) : <>
  
 <div className="min-h-[9vh]" id="spacer" role="spacer"/>
    <section className="relative  md:content-center px-[2vw]  w-full   h-[175vh]   
 bg-[radial-gradient(50%_50%_at_50%_50%,#121212_0,#000000_100%)] ">

 <GradientScroll phrase={phrase}/> 
 <Gallery/>

  
 
    </section>
    {/* <div className="min-h-[50vh]" id="spacer" role="spacer"/> */}
    
      </>
 
 
 }
 


 
      </Container>
    )
}






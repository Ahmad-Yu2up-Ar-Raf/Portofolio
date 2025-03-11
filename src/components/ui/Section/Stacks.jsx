import React from "react";

import CPu from "@/components/ui/core/Fragments/Stack/CPu";
import Tech from "@/components/ui/core/Fragments/Stack/Tech";
import FadeContent from "../Animation/Content";

import Container from "../Shared";


const Stacks = [
    {
        Name: "Tailwind CSS",
        Description: "A utility-first CSS framework packed with classes that can be composed to build any design, directly in your markup. Rapidly build modern websites without ever leaving your HTML.",
        Imaged: "Tailwind Css.svg",
        Url: "https://tailwindcss.com/",
        colore: "#06B6D4"
    },
    {
        Name: "WordPress",
        Description: "WordPress is a free and open-source content management system that powers over 40% of all websites on the internet. It offers a flexible platform for building websites, blogs and applications.",
        Imaged: "wordpress.svg",
        Url: "https://wordpress.org/",
        colore: "#8A63E8"
    },
    {
        Name: "AI Integration", 
        Description: "Leveraging artificial intelligence and machine learning capabilities through modern APIs and tools to create smarter, more dynamic web experiences and automated solutions.",
        Imaged: "claude-ai-icon.svg",
        Url: "https://claude.ai/",
        colore: "#FF7432"
    }
];



export default function index() {
 

  return (
 <Container
 id="Tech Stack "
 sectionName="Tech Stack  Section"
 ariaLabel="Tech Stack Powered Section"
 role="banner"   
 maxW
 >

      <header 
      style={{

        background: "linear-gradient(180deg,#ffffff,#adadad)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: 'transparent'
      }}
      className="text-center  text-[linear-gradient(180deg,#ffffff,#adadad)] lg:text-[32px] text-[24px] leading-[1.25]  tracking-[-0.04em] text-[#fafafa] font-bold ">
        <h1>
        <span className="md:hidden">Built on a foundation of fast,<span className="block">production-grade tooling</span>
        </span><span className="hidden md:inline">Committed to Staying Updated with <span className="md:block">the Latest Design Trends & Techniques</span></span>
        </h1>
     </header>

    <CPu/>

      <div className="px-3">
<FadeContent



      


blur={true} delay={2000} duration={1000} easing="ease-out" initialOpacity={0}
className="max-w-[74rem] justify-center  flex flex-col m-auto gap-[16px] lg:gap-[32px] lg:grid lg:grid-cols-3">
    {Stacks.map((stack, index) => ( 
        <Tech key={index} {...stack} 
        i={index}
        Name={stack?.Name}
        Description={stack?.Description}
        Imagex={stack?.Imaged}
        Url={stack?.Url}
        Colors={stack?.colore}
        />
    ))}
   
</FadeContent>
      </div>
 </Container>

  );
}

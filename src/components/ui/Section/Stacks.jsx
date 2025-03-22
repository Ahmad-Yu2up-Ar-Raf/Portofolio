
'use client'
import React from "react";

import CPu from "@/components/ui/core/Fragments/main/Stack/CPu";
import Tech from "@/components/ui/core/Fragments/main/Stack/Tech";
import FadeContent from "../Animation/Content";

import Container from "../Shared";





const Stacks = [
    {
        Name: "React",
        Description: "React is a JavaScript library developed by Facebook that, among other things, was used to build Instagram.com. It aims to allow developers to easily create user interfaces for websites, desktop apps and mobile applications. A React application usually works fast and efficiently",
        Imaged: "react.svg",
        Url: "https://react.dev/",
        Colors: "#61dafb"
    },
    {
        Name: "Figma",
        Description: "Figma is a cloud-based design tool that helps users create, share, and test designs for websites, apps, and other digital products. It's a popular choice for designers, product managers, writers, and developers. ",
        Imaged: "Figma.svg",
        Url: "https://figma.com/",
        Colors: "#df2e6c"
    },
    {
        Name: "AI Integration", 
        Description: "Leveraging artificial intelligence and machine learning capabilities through modern APIs and tools to create smarter, more dynamic web experiences and automated solutions.",
        Imaged: "claude-ai-icon.svg",
        Url: "https://claude.ai/",
        Colors: "#ffbc31"
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

   
<FadeContent



      


blur={true} delay={2000} duration={1000} easing="ease-out" initialOpacity={0}
className="max-w-[74rem] px-3 justify-center  flex flex-col m-auto gap-[16px] lg:gap-[32px] lg:grid lg:grid-cols-3">
    {Stacks.map((stack, index) => ( 
        <Tech key={index} {...stack} 
        i={index}
        Name={stack?.Name}
        Description={stack?.Description}
        Imagex={stack?.Imaged}
        Url={stack?.Url}
        Colors={stack?.Colors}
        />
    ))}
   
</FadeContent>



     

 </Container>

  );
}



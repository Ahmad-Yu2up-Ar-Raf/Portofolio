'use client'

import { useRef} from 'react';

import Link from 'next/link'; 
import Container from '../Shared';
import { StickyScroll } from '../core/Fragments/main/Project';

import { ChevronRight } from 'lucide-react';
import FadeContent from '../Animation/Content';
import { AnimatedShinyText } from '../Animation/Text/ShinyText';



const content = [
  {
    hex : ["#082e39", "#056396", "#3499d3", "#F9D793"],
    stackx: ["Html","Css","Php","Javascript"],
    title: "Expro Travel",
    imag: "expro.jpeg",
    colore: "sky",
    Code: "https://github.com/Ahmad-Yu2up-Ar-Raf/Travel-Website",
    listx: [
      "Built responsive frontend layouts using HTML5 and CSS3, ensuring optimal display across all devices and screen sizes",
      "Implemented dynamic client-side features with JavaScript for real-time form validation and interactive UI elements",
      "Developed backend booking system using PHP to handle user authentication, database operations, and payment processing",
      "Created RESTful API endpoints to enable seamless communication between frontend and backend components"
    ],
    deskripcion:
      "Expro Travel is a comprehensive fullstack travel booking platform that revolutionizes how people plan and book their adventures. Our website offers an extensive collection of curated travel packages, complete with detailed itineraries, pricing, and real-time availability. Users can easily browse through various destinations, compare packages, and make secure online bookings. With an intuitive interface and robust backend system, we provide a seamless experience from initial search to final booking confirmation.",
  },
  { 
    hex : ["#083926", "#059669", "#34D399", "#F9D793"],
    
    stackx: ["Tailwind Css", "Alpine.Js","Javascript"],
    title: "LiveUp",
    imag: "liveup.jpeg",
    colore: "teal", 
    web: "https://liveup-host.vercel.app/",
    Code: "https://github.com/Ahmad-Yu2up-Ar-Raf/Liveup",
    listx: [
      "Developed responsive UI components using Tailwind CSS utility classes for rapid styling and consistent design across breakpoints",
      "Implemented interactive features and form handling with Alpine.js for smooth client-side functionality without heavy frameworks",
      "Created custom JavaScript modules to handle job search filtering, application submissions and real-time updates",
      "Built an accessible interface following WCAG guidelines to ensure the platform is usable by people with different abilities"
    ],
    deskripcion:
      "LiveUp is an innovative platform dedicated to connecting people with disabilities to meaningful job opportunities. We understand the unique challenges faced by disabled individuals in the job market and have created a specialized space where talent meets opportunity. Our platform bridges the gap between qualified candidates and inclusive employers, making the job search process more accessible and equitable for everyone.",
  },

];



export default function index() {
  const container = useRef(null);

  return (


 <Container
 id="Projects"
 sectionName="Projects Section"
 ariaLabel="Portfolio Pojects Section"
 role="Projects"   
  className="mt-0  "
 ref={container}
 
 >

<header style={{
        textShadow: "text-shadow:0px 4px 8px rgba(255,255,255,.05),0px 8px 30px rgba(255,255,255,.25)"
      }} className='z-2 relative  mb-20 md:mb-32 text-4xl md:text-5xl text-center'>

<h3 className='mb-4 text-xs block uppercase tracking-widest text-white/70 md:text-sm'>FEATURED CASE STUDIES</h3>
 
 <h1 
 

className="text-center   text-[40px] md:text-[52px]  leading-[1.25]  tracking-[-0.04em] font-bold ">
 <span
 
 style={{

  background: "linear-gradient(180deg,#ffffff,#adadad)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: 'transparent'
}}
 
 className=' text-[linear-gradient(180deg,#ffffff,#adadad)] text-[#fafafa] '
 >Curated</span> <AnimatedShinyText>Work</AnimatedShinyText> 
 </h1>
      </header>
          <StickyScroll content={content} />

  <FadeContent
  blur={true} duration={1000} easing="ease-out" initialOpacity={0}

  >
          <Link className="flex group m-auto relative justify-center gap-2 w-fit items-center  cursor-pointer text-neutral-300 transition-colors hover:text-neutral-100 mt-10 md:mt-16" href="https://github.com/Ahmad-Yu2up-Ar-Raf?tab=repositories" target='_blank'>
         <h6 className="relative w-fit inline-flex ">
          <span className='translate-y-0 skew-y-0 transition duration-500'>See more projects</span>
      
         </h6>
          <div className="rounded-full bg-white/5 p-0.5 backdrop-blur-sm">
          <ChevronRight size={18} className='group-hover:translate-x-1  group-hover:transform transition-all ease-out duration-300' />
         
           </div>
</Link>
  </FadeContent>
 </Container>

  
  );
}

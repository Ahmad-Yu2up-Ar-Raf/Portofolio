import { useRef} from 'react';

import Link from 'next/link'; 

import { StickyScroll } from '../core/Project/sticky-scroll-reveal';

  





const content = [
  {
    stackx: ["Html","Css","Php","Javascript"],
    title: "Expro Travel",
    imag: "/Project/fluxLura.avif",
    colore: "sky",
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
    stackx: ["Tailwind Css", "Alpine.Js","Javascript"],
    title: "LiveUp",
    imag: "/Project/fluxLura.avif",
    colore: "emerald", 
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


      <section className="relative fill mx-auto w-full max-w-7xl mt-0 px-4 py-36 "  
      style={{opacity:1, transform: "none"}} ref={container}>


      <div style={{
        textShadow: "text-shadow:0px 4px 8px rgba(255,255,255,.05),0px 8px 30px rgba(255,255,255,.25)"
      }} className='z-2 relative mb-28 md:mb-36 text-4xl md:text-5xl text-center'>

<h2 className='mb-4 text-xs block uppercase tracking-widest text-white/70 md:text-sm'>FEATURED CASE STUDIES</h2>
 
 <h1>
 <span className='font-Outfit'>Curated </span>
 <span

 >Work</span>
 </h1>
      </div>
          <StickyScroll content={content} />

  
          <Link className="flex justify-center gap-2 text-neutral-300 transition-colors hover:text-neutral-100 md:mt-16" href="https://github.com/Ahmad-Yu2up-Ar-Raf?tab=repositories" target='_blank'>See more projects
          <div className="rounded-full bg-white/5 p-0.5 backdrop-blur-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"></path></svg></div></Link>
      </section>
  
  );
}

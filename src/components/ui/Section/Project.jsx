'use client';

import { useTransform, motion } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { ArrowRight} from "lucide-react";
import Link from 'next/link'; 
// import { Card } from '../core/Project/Card';
import { StickyScroll } from '../core/Project/sticky-scroll-reveal';
import Detail from '../core/Project/Detail';
  


//   {
//     title: 'LiveUp',
//     description:
//       'Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.',
//     src: 'rock.jpg',
//     image: 'Project/LiveUp',
//     link: 'https://liveup-host.vercel.app/',
//     Code: 'https://github.com/Ahmad-Yu2up-Ar-Raf/Liveup',
//     color: 'emerald-',
//     Tech: [
//       "Html","Tailwind", "AlpineJS","Javascript","PrelineUI"
//     ]
//   },
//   {
//     title: 'To Do App',
//     description:
//       'This is a story on the border between reality and imaginary, about the contradictory feelings that the insularity of a rocky, arid, and wild territory provokes”—so French photographer Clément.',
//     src: 'tree.jpg',
//     image: 'Project/LiveUp',
//     link: 'https://liveup-host.vercel.app/',
//     Code: 'https://github.com/Ahmad-Yu2up-Ar-Raf/Liveup',
//     color: 'purple-',
//     Tech: [
//       "Html","Css", "Php","Javascript"
//     ]
//   },

// ];


const content = [

  {
    stackx: ["Tailwindcss", "Alpine.Js","Javascript"],
    title: "LiveUp",
    imag: "/Project/fluxLura.avif",
    colore: "emerald",
    listx: ["Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo minus obcaecati voluptates. Amet.","Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo minus obcaecati voluptates. Amet.", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo minus obcaecati voluptates. Amet.","Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo minus obcaecati voluptates. Amet."],
    deskripcion:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
  },
  {
    stackx: ["Tailwindcss", "Alpine.Js","Javascript"],
    title: "LiveUp",
    imag: "/Project/fluxLura.avif",
    colore: "pink",
    listx: ["Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo minus obcaecati voluptates. Amet.","Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo minus obcaecati voluptates. Amet.", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo minus obcaecati voluptates. Amet.","Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo minus obcaecati voluptates. Amet."],
    deskripcion:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
  },

];



export default function index() {
  const container = useRef(null);

  return (


      <section className="relative fill mx-auto w-full max-w-7xl mt-0 px-4 py-36 "  
      style={{opacity:1, transform: "none"}} ref={container}>


      <div style={{
        textShadow: "text-shadow:0px 4px 8px rgba(255,255,255,.05),0px 8px 30px rgba(255,255,255,.25)"
      }} className='z-2 relative mb-36 text-4xl md:text-5xl text-center'>

<h2 className='mb-4 text-xs block uppercase tracking-widest text-white/70 md:text-sm'>FEATURED CASE STUDIES</h2>
 
 <h1>
 <span className='font-Outfit'>Curated </span>
 <span

 >Work</span>

 </h1>
      </div>
          <StickyScroll content={content} />

  
          <Link
          
          className="flex justify-center gap-2 text-neutral-300 transition-colors hover:text-neutral-100 md:mt-16" href="/">See more projects
          <div className="rounded-full bg-white/5 p-0.5 backdrop-blur-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"></path></svg></div></Link>
      </section>
  
  );
}

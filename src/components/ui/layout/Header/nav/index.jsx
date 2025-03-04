'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { height } from '../anim';
import Body from './Body';


const links = [
  {
    title: "Home",
    href: "/",
    src: "home.png"
  },
  {
    title: "Blogs",
    href: "/Blogs",
    src: "shop.png"
  },
  {
    title: "About",
    href: "/About",
    src: "home.png"
  },
]

export default function Index() {

  const [selectedLink, setSelectedLink] = useState({isActive: false, index: 0});

  return (
    <motion.nav 
      variants={height} 
      initial="initial" 
      animate="enter" 
   
aria-label='Main Navigation'
      exit="exit"
   style={{
    clipPath: "inset(0%)",
    visibility: "inherit",
   }}
      className="overflow-hidden top-[10px] left-[10px]     fixed   text-center  w-[calc(100%-20px)] rounded-[8px]   bg-[rgba(45,45,45,0.35)] backdrop-blur-xl   z-40" 
    >
  
   
          <Body 
            links={links} 
            selectedLink={selectedLink} 
            setSelectedLink={setSelectedLink}
          />
      
        
   
      
    </motion.nav>
  )
}
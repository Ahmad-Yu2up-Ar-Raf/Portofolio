'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { height } from '../anim';
import Body from './Body';


const links = [
  {
    title: "Home",
    href: "/",

  },
  {
    title: "Blogs",
    href: "/Blogs",

  },
  {
    title: "About",
    href: "/About",
    
  },
]

export default function Index({ setIsActive }) {

  const [selectedLink, setSelectedLink] = useState({isActive: false, index: 0});


  const closeMenu = () => {
    setIsActive(false);
  };


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
      className="overflow-hidden top-[10px] left-[10px]   right-[10px]   fixed   text-center  m-auto w-[90vw] rounded-[8px]   bg-[rgba(45,45,45,0.35)] backdrop-blur-xl   z-40" 
    >
  
   
          <Body 
            links={links} 
            selectedLink={selectedLink} 
            setSelectedLink={setSelectedLink}
            closeMenu={closeMenu}
          />
      
        
   
      
    </motion.nav>
  )
}
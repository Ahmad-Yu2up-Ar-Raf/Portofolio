
'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { createAnimationVariants } from './anim';

import { useSessionState } from '@/hooks/StateContext';


const routes = {
  '/': 'Home',
  '/About': 'About',
  '/Blogs': 'Blogs',
  '/Contact': 'Contact',
  '/project/[id]': 'Project',
};

const anim = (variants) => {
  return {
    variants,
    initial: 'initial',
    animate: 'enter',
    exit: 'exit',
  };
};





export function useFirstVisitHome() {
  const { isFirstVisit } = useSessionState();
 
  if (typeof window === 'undefined') return false;
  return isFirstVisit;
}



const words = ["Hello", "Bonjour", "Ciao", "Olà", "やあ", "Hallå", "Guten tag", "Hallo"]


export default function Curve({ children, backgroundColor }) {
  const [index, setIndex] = useState(0);
  const router = useRouter();
 

  useEffect( () => {
    if(index == words.length - 1) return;
    setTimeout( () => {
        setIndex(index + 1)
    }, index == 0 ? 1000 : 150)
}, [index])


  const [dimensions, setDimensions] = useState({
    width: null,
    height: null,
  });

  useEffect(() => {
    function resize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    resize();
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);



  const textVariants = createAnimationVariants('text', null, null,     useFirstVisitHome());
  const opacityVariants = createAnimationVariants('opacity', null, null,     useFirstVisitHome());

  return (
   
    <motion.div className="relative w-full" style={{ backgroundColor }}>
      <motion.div
        style={{ opacity: dimensions.width == null ? 1 : 0 }}
    
        className="fixed inset-0 bg-[#131313] transition-opacity duration-0 delay-100 pointer-events-none z-[9999]"
      />

      <motion.p 
        // Changed from 'route' to Tailwind classes
        className="fixed left-1/2 top-[40%] -translate-x-1/2 text-white text-[46px] text-center z-[99999]" 
        {...anim(textVariants)}
      >
        {useFirstVisitHome() ? (
      <motion.p   {...anim(opacityVariants)} initial="initial" animate="enter"><span></span>{words[index]}</motion.p>
        ) : (
          routes[router.route]
        )}
      </motion.p>

      {dimensions.width != null && (
        <SVG
          width={dimensions.width}
          height={dimensions.height}
      
        />
      )}
      <main>
      {children}
      </main>
    </motion.div>
  );
}

const SVG = ({ height, width }) => {
  const initialPath = `
    M0 300 
    Q${width / 2} 0 ${width} 300
    L${width} ${height + 300}
    Q${width / 2} ${height + 600} 0 ${height + 300}
    L0 0
  `;

  const targetPath = `
    M0 300
    Q${width / 2} 0 ${width} 300
    L${width} ${height}
    Q${width / 2} ${height} 0 ${height}
    L0 0
  `;

  // Mendapatkan varian animasi untuk curve dan translate
  const curveVariants = createAnimationVariants(
    'curve',
    initialPath,
    targetPath,
    useFirstVisitHome()
  );
  const translateVariants = createAnimationVariants(
    'translate',
    null,
    null,
    useFirstVisitHome()
  );

  return (
    <motion.svg 
      // Changed from 'preloard' to Tailwind classes
      className="fixed inset-0 w-screen h-[calc(100vh+600px)] pointer-events-none z-[9999] fill-[#131313]" 
      {...anim(translateVariants)}
    >
      <motion.path

        {...anim(curveVariants)}
      />
    </motion.svg>
  );
};

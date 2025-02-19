// SomeComponent.js
'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { createAnimationVariants } from './anim';
import SplitText from '../Animation/BlurAnimation';
import { useSessionState } from '@/context/StateContext';
import { usePathname } from 'next/navigation';

const routes = {
  '/': 'Home',
  '/about': 'About',
  '/contact': 'Contact',
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
    const pathname = usePathname();
    const { isFirstVisit } = useSessionState();
    return pathname === '/' && isFirstVisit ;
  }


export default function Curve({ children, backgroundColor }) {
  const pathname = usePathname();
  const router = useRouter();
 
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

  const handleAnimationComplete = () => {
    // console.log(pathname);
  };

  // Mendapatkan varian animasi untuk teks
  const textVariants = createAnimationVariants('text', null, null, useFirstVisitHome());

  return (
    <motion.div className='page curve' style={{ backgroundColor }}>
      <motion.div
        style={{ opacity: dimensions.width == null ? 1 : 0 }}
        className='background'
      />

      <motion.p className='route' {...anim(textVariants)}>
        {useFirstVisitHome() ? (
          <SplitText
            text='Hello!'
            className='text-2xl font-semibold text-center'
            delay={150}
            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
            easing='easeOutCubic'
            threshold={0.2}
            rootMargin='-50px'
            onLetterAnimationComplete={handleAnimationComplete}
          />
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
      {children}
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
    <motion.svg className={'preloard'} {...anim(translateVariants)}>
      <motion.path

        {...anim(curveVariants)}
      />
    </motion.svg>
  );
};

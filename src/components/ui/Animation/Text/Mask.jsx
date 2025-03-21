'use client'
import { motion, useInView } from 'framer-motion';
import React, { useEffect, useState } from 'react';

export default function MaskText({ 
  phrases, 
  contaierclassname, 
  reverseAfter = null
}) {
  const ref = React.useRef(null);
  const inView = useInView(ref, {
    amount: 0.75,
    once: !reverseAfter
  });
  

  const [animationState, setAnimationState] = useState('initial');
  
 
  const animation = {
    initial: { y: "100%" },
    visible: i => ({ 
      y: "0", 
      transition: { 
        duration: 0.75, 
        ease: [0.33, 1, 0.68, 1], 
        delay: 0.075 * i 
      } 
    }),
    exited: i => ({ 
      y: "-100%", 
      transition: { 
        duration: 0.75, 
        ease: [0.33, 1, 0.68, 1], 
        delay: 0.075 * i 
      } 
    })
  }
  
  useEffect(() => {
    let timer;
    
  
    if (!inView) {
      setAnimationState('initial');
      return () => clearTimeout(timer);
    }
    
   
    if (inView && animationState === 'initial') {
      setAnimationState('visible');
    }
    

    if (reverseAfter && animationState === 'visible') {
      timer = setTimeout(() => {
        setAnimationState('exited');
      }, reverseAfter);
    }
    
    return () => clearTimeout(timer);
  }, [inView, animationState, reverseAfter]);
  
  
  const getVariant = () => {
    switch (animationState) {
      case 'visible': return 'visible';
      case 'exited': return 'exited';
      default: return 'initial';
    }
  };
  
 
  const shouldRender = animationState !== 'exited' || inView;

  return (
    <div ref={ref} className={contaierclassname}>
      {phrases.map((phrase, index) => (
        <div key={index} className="overflow-hidden">
          {shouldRender && (
            <motion.p
              custom={index}
              className="m-0 font-bold"
              variants={animation}
              initial="initial"
              animate={getVariant()}
            
              onAnimationComplete={(definition) => {
        
              }}
            >
              {phrase}
            </motion.p>
          )}
        </div>
      ))}
    </div>
  );
}
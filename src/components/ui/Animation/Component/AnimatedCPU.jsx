"use client"

import React, { useRef, useState,useEffect } from 'react';
import { motion,useInView } from 'framer-motion';

const AnimatedCPU = () => {
  const svgRef = useRef(null);
  const svgRefContainer = useRef(null);
  const isInViewRaw = useInView(svgRefContainer, { once: true });
  const [isInView, setIsInView] = useState(isInViewRaw);

  useEffect(() => {

    const timer = setTimeout(() => {
      setIsInView(isInViewRaw);
    }, 500);
    return () => clearTimeout(timer);
  }, [isInViewRaw]);

   


  
  const pathAnimation = {
    animate: { 
      pathLength: isInView ? 1 : 0,
      transition: { duration: 2 } 
    }
  };

  const circleAnimation = {
    animate: {
      opacity: isInView ? 1 : 0,
      transition: { delay: 1, duration: 1 }
    }
  };

  return (
<>

<div className="relative" ref={svgRefContainer}></div>

  {/* svg 1 */}
 
<svg 
      className="absolute top-[29px] block w-full h-[312px] md:hidden " 
     ref={svgRef}
       fill="none"
      viewBox="0 0 400 312"
      
      >
 
   
    <motion.path
                       {...pathAnimation} 
                       transition={{ delay: 0.4 }}
    
    
    
    
    
    d="M140 36L140 23C140 20.7909 138.209 19 136 19L62.0001 19" stroke="currentColor" strokeOpacity="0.1"/>
    <motion.path
                       {...pathAnimation} 
                       transition={{ delay: 0.4 }}
    
    d="M116 62L16.0001 62" stroke="currentColor" strokeOpacity="0.1"/>
    <g>
    <motion.path
     d="M284 62.0076L559 62.0076C561.209 62.0076 563 63.7985 563 66.0076L563 195.5"
     stroke="currentColor" 
     {...pathAnimation}
     transition={{ delay: 0.4 }}
     strokeOpacity="0.1"/>
     
    <motion.path
                       {...pathAnimation} 
                       transition={{ delay: 0.4 }}
     d="M284 62.0076L559 62.0076C561.209 62.0076 563 63.7985 563 66.0076L563 195.5"
     stroke="url(#orange-pulse-22)"
     strokeLinecap="round" 
     strokeWidth="2"
     />
    </g>
    <g>
    <motion.path 
         {...pathAnimation}
         transition={{ delay: 0.4 }}

    d="M116 81.9318L-160 81.9318C-162.209 81.9318 -164 83.7226 -164 85.9317L-164 105.841"
     stroke="currentColor" 
     strokeOpacity="0.1"/>
    <motion.path
                       {...pathAnimation} 
                       transition={{ delay: 0.4 }}
    d="M116 81.9318L-160 81.9318C-162.209 81.9318 -164 83.7226 -164 85.9317L-164 105.841"
               stroke="url(#orange-pulse-11)"
                   strokeLinecap="round" 
                   strokeWidth="2"
                   
                   />
                   
   </g> 
   <g>
    <motion.path
     d="M284.5 82L370 82C372.209 82 374 83.7909 374 86L374 301.883C374 304.092 372.209 305.883 370 305.883L240 305.883C237.791 305.883 236 307.674 236 309.883L236 312" 
    stroke="currentColor" 
    {...pathAnimation}
    transition={{ delay: 0.4 }}
    strokeOpacity="0.1"/>
    {/* <motion.path
                       {...pathAnimation} 
                       transition={{ delay: 0.9 }}
     d="M284.5 82L370 82C372.209 82 374 83.7909 374 86L374 301.883C374 304.092 372.209 305.883 370 305.883L240 305.883C237.791 305.883 236 307.674 236 309.883L236 312"
     
       
       stroke="url(#blue-pulse-12)" 
       strokeLinecap="round" 
    
       strokeWidth="2"

       /> */}

   </g>
    <motion.path
                       {...pathAnimation} 
                       transition={{ delay: 0.4 }} d="M140 108L140 117.825C140 120.034 138.209 121.825 136 121.825L67.0001 121.825" stroke="currentColor" strokeOpacity="0.1"/>
    <motion.path
                       {...pathAnimation} 
                       transition={{ delay: 0.4 }} d="M164 36L164 4" stroke="url(#paint0_linear_114_9407)" strokeOpacity="0.1"/>
    <g>

    <motion.path
     d="M164 172.5L164 108"
      stroke="currentColor" strokeOpacity="0.1"     {...pathAnimation}
     transition={{ delay: 0.4 }}/>
         <motion.path
                       {...pathAnimation} 
                       transition={{ delay: 0.4 }}
     d="M164 172.5L164 108" 
     stroke="url(#blue-pulse-11)" 
   strokeLinecap="round" 

   strokeWidth="2"
    
     />
    </g>
    <motion.path
                       {...pathAnimation} 
                       transition={{ delay: 0.4 }} d="M188 36L188 4" stroke="url(#paint1_linear_114_9407)" strokeOpacity="0.1"/>
    <motion.path
                       {...pathAnimation} 
                       transition={{ delay: 0.4 }} d="M188 137.689L188 107.803" stroke="currentColor" strokeOpacity="0.1"/>
    <motion.path
                       {...pathAnimation} 
                       transition={{ delay: 0.4 }} d="M212 36.1364L212 4.25757" stroke="currentColor" strokeOpacity="0.1"/>
    <motion.path
                       {...pathAnimation} 
                       transition={{ delay: 0.4 }} d="M212 138L212 108" stroke="currentColor" strokeOpacity="0.1"/>
    <motion.path
                       {...pathAnimation} 
                       transition={{ delay: 0.4 }} d="M236 36L236 8C236 5.79086 237.791 4 240 4L306 4" stroke="url(#paint2_linear_114_9407)" strokeOpacity="0.1"/>
    <motion.path
                       {...pathAnimation} 
                       transition={{ delay: 0.4 }} d="M236 107.803L236 133.689C236 135.898 237.791 137.689 240 137.689L312 137.689" stroke="currentColor" strokeOpacity="0.1"/>
    <g transform="translate(2, 0)">

    <motion.path
                       {...pathAnimation} 
                       transition={{ delay: 0.4 }} d="M260 36.1364L260 28.1819C260 25.9727 261.791 24.1819 264 24.1819L638 24.1819C640.209 24.1819 642 25.9727 642 28.1819L642 203.5" stroke="currentColor" strokeOpacity="0.1"/>
    <motion.path
                       {...pathAnimation} 
                       transition={{ delay: 0.4 }}
    d="M260 36.1364L260 28.1819C260 25.9727 261.791 24.1819 264 24.1819L638 24.1819C640.209 24.1819 642 25.9727 642 28.1819L642 203.5"
    
     stroke="url(#orange-pulse-21)" 
     strokeLinecap="round" 
  
     strokeWidth="2"/>
    </g>
    <motion.path
                       {...pathAnimation} 
                       transition={{ delay: 0.4 }} d="M260 107.803L260 116.754C260 118.963 261.791 120.754 264 120.754L312 120.754" stroke="currentColor" strokeOpacity="0.1"/>
    <ellipse cx="212" cy="4.25755" fill="var(--geist-background)" rx="4" ry="3.98485"/>
    <motion.path
                       {...pathAnimation} 
                       transition={{ delay: 0.4 }} d="M215.5 4.25755C215.5 6.18039 213.935 7.7424 212 7.7424C210.065 7.7424 208.5 6.18039 208.5 4.25755C208.5 2.33471 210.065 0.772705 212 0.772705C213.935 0.772705 215.5 2.33471 215.5 4.25755Z" stroke="currentColor" strokeOpacity="0.1"/>
    <ellipse cx="60.0001" cy="18.9848" fill="var(--geist-background)" rx="4" ry="3.98485"/>
    <motion.path
                       {...pathAnimation} 
                       transition={{ delay: 0.4 }} d="M63.5001 18.9848C63.5001 20.9077 61.9349 22.4697 60.0001 22.4697C58.0653 22.4697 56.5001 20.9077 56.5001 18.9848C56.5001 17.062 58.0653 15.5 60.0001 15.5C61.9349 15.5 63.5001 17.062 63.5001 18.9848Z" stroke="currentColor" strokeOpacity="0.1"/>
    <ellipse cx="20.0001" cy="61.9848" fill="var(--geist-background)" rx="4" ry="3.98485"/>
    <motion.path
                       {...pathAnimation} 
                       transition={{ delay: 0.4 }} d="M23.5001 61.9848C23.5001 63.9077 21.9349 65.4697 20.0001 65.4697C18.0653 65.4697 16.5001 63.9077 16.5001 61.9848C16.5001 60.062 18.0653 58.5 20.0001 58.5C21.9349 58.5 23.5001 60.062 23.5001 61.9848Z" stroke="currentColor" strokeOpacity="0.1"/>
    <ellipse cx="188" cy="137.985" fill="var(--geist-background)" rx="4" ry="3.98485"/>
    <motion.path
                       {...pathAnimation} 
                       transition={{ delay: 0.4 }} d="M191.5 137.985C191.5 139.908 189.935 141.47 188 141.47C186.065 141.47 184.5 139.908 184.5 137.985C184.5 136.062 186.065 134.5 188 134.5C189.935 134.5 191.5 136.062 191.5 137.985Z" stroke="currentColor" strokeOpacity="0.1"/>
    <ellipse cx="66.0001" cy="121.985" fill="var(--geist-background)" rx="4" ry="3.98485"/>
    <motion.path
                       {...pathAnimation} 
                       transition={{ delay: 0.4 }} d="M69.5001 121.985C69.5001 123.908 67.9349 125.47 66.0001 125.47C64.0653 125.47 62.5001 123.908 62.5001 121.985C62.5001 120.062 64.0653 118.5 66.0001 118.5C67.9349 118.5 69.5001 120.062 69.5001 121.985Z" stroke="currentColor" strokeOpacity="0.1"/>
    <ellipse cx="212" cy="137.985" fill="var(--geist-background)" rx="4" ry="3.98485"/>
    <motion.path
                       {...pathAnimation} 
                       transition={{ delay: 0.4 }} d="M215.5 137.985C215.5 139.908 213.935 141.47 212 141.47C210.065 141.47 208.5 139.908 208.5 137.985C208.5 136.062 210.065 134.5 212 134.5C213.935 134.5 215.5 136.062 215.5 137.985Z" stroke="currentColor" strokeOpacity="0.1"/>
    <ellipse cx="312" cy="137.689" fill="var(--geist-background)" rx="4" ry="3.98485"/>
    <motion.path
                       {...pathAnimation} 
                       transition={{ delay: 0.4 }} d="M315.5 137.689C315.5 139.612 313.935 141.174 312 141.174C310.065 141.174 308.5 139.612 308.5 137.689C308.5 135.767 310.065 134.205 312 134.205C313.935 134.205 315.5 135.767 315.5 137.689Z" stroke="currentColor" strokeOpacity="0.1"/>
    <ellipse cx="312" cy="120.754" fill="var(--geist-background)" rx="4" ry="3.98485"/>
    <motion.path
                       {...pathAnimation} 
                       transition={{ delay: 0.4 }}  d="M315.5 120.754C315.5 122.677 313.935 124.239 312 124.239C310.065 124.239 308.5 122.677 308.5 120.754C308.5 118.831 310.065 117.269 312 117.269C313.935 117.269 315.5 118.831 315.5 120.754Z" stroke="currentColor" strokeOpacity="0.1"/>
  
    <defs>
    <motion.linearGradient
          id="orange-pulse-11"
          gradientUnits="userSpaceOnUse"
          initial={{
            x1: 83,
            x2: 83,
            y1: 320,
            y2: 415
          }}
          animate={{
            x1: [83, 400],
            x2: [83, 350],
            y1: [320, 83],
            y2: [415, 133.75]
          }}
          transition={{
            duration: 3.2,
            repeat: Infinity,
            repeatDelay: 1.4,
            delay: 0.5
          }}
        >
          <stop stopColor="#FF7432" stopOpacity="0" />
          <stop offset="0.0550784" stopColor="#FF7432" />
          <stop offset="0.373284" stopColor="#F7CC4B" />
          <stop offset="1" stopColor="#F7CC4B" stopOpacity="0" />
        </motion.linearGradient>



    <motion.linearGradient
          id="blue-pulse-11"
          gradientUnits="userSpaceOnUse"
          initial={{
            x1: 83,
            x2: 83,
            y1: 320,
            y2: 415
          }}
          animate={{
            x1: [83, 400],
            x2: [83, 350],
            y1: [320, 83],
            y2: [415, 133.75]
          }}
          transition={{
            duration: 3.2,
            repeat: Infinity,
            repeatDelay: 1.4,
            delay: 0.5
          }}
        >
  <stop stopColor="#2EB9DF" stopOpacity="0" />
          <stop offset="0.05" stopColor="#2EB9DF" />
          <stop offset="1" stopColor="#2EB9DF" stopOpacity="0" />
        </motion.linearGradient>

        {/* <motion.linearGradient
  id="blue-pulse-12"
  gradientUnits="userSpaceOnUse"
  initial={{
    x1: 236,
    x2: 312,
    y1: 246,
    y2: 322
  }}
  animate={{
    // Smoothed coordinates with better continuity
    x1: [236, 284.5, ],     // Create a complete loop
    y1: [312, 70, ],        // Create a complete loop
    x2: [246, 294.5, ],     // Matching offset loop
    y2: [322, 72, ]        // Matching offset loop
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
    repeatDelay: 1.4,
    delay: 2
  }}
>
  <stop offset="0" stopColor="#2EB9DF" stopOpacity="0" />
  <stop offset="0.2" stopColor="#2EB9DF" />
  <stop offset="0.8" stopColor="#2EB9DF" />
  <stop offset="1" stopColor="#2EB9DF" stopOpacity="0" />
</motion.linearGradient> */}

  

        <motion.linearGradient
          id="orange-pulse-22"
          gradientUnits="userSpaceOnUse"
          initial={{
            x1: 563,
            x2: 520,
            y1: 105,
            y2: 32
          }}
          animate={{
            x1: [563, 284],   
            x2: [520, 284],  
            y1: [105, 72],  
            y2: [32, 162]  
          }}
          transition={{
            duration: 3.2,
            repeat: Infinity,
            repeatDelay: 1.4,
            delay: 0.5
          }}
        >
   <stop stopColor="#FF4A81" stopOpacity="0" />
          <stop offset="0.0564843" stopColor="#FF4A81" />
          <stop offset="0.4616" stopColor="#DF6CF6" />
          <stop offset="1" stopColor="#0196FF" stopOpacity="0" />
        </motion.linearGradient>



<motion.linearGradient
    id="orange-pulse-21"
    gradientUnits="userSpaceOnUse"
    initial={{
      x1: 642,
      x2: 590,
      y1: 204,
      y2: 250
    }}
    animate={{
      x1: [642  ,260 ],
      x2: [590  , 260],
      y1: [204  , 36],
      y2: [250   , 90]
    }}
    transition={{
      duration: 3.2,
      repeat: Infinity,
      repeatDelay: 1.4,
      delay: 1.3
    }}
  >
    <stop stopColor="#FF4A81" stopOpacity="0" />
    <stop offset="0.05" stopColor="#FF4A81" />
    <stop offset="1" stopColor="#FF4A81" stopOpacity="0" />
  </motion.linearGradient>

  </defs>
  </svg>


  {/* svg 2 */}
    <svg
      ref={svgRef}
      viewBox="0 0 891 264"
      fill="none"
      role="img"
      className="  hidden md:inline h-full  absolute top-0 translate-x-[-2.5px] "
      aria-label="A bunch of connecting lines that form into the CPU, with the text Powered By on top of the CPU. Gradient lines are animating along the drawn lines, dissolving into the CPU in the center."
    >
      {/* Top left connection */}
      <motion.path
        d="M388 96L388 68C388 65.7909 386.209 64 384 64L310 64"
        stroke="currentColor"
        strokeOpacity="0.1"
        {...pathAnimation}
        transition={{ delay: 0.1 }}
      />
<motion.path d="M436 96L436 0" 
   {...pathAnimation}
        transition={{ delay: 0.1 }}  stroke="currentColor"  strokeOpacity="0.1"/>
  

  <motion.path d="M436 214L436 184" 
   {...pathAnimation}
        transition={{ delay: 0.1 }}  stroke="currentColor"  strokeOpacity="0.1" />

  <motion.path d="M460 239L460 184"
   {...pathAnimation}
        transition={{ delay: 0.1 }}  
        stroke="currentColor"
        strokeOpacity="0.1"  />




{/*  */}
<motion.path 
d="M484 184L484 210C484 212.209 485.791 214 488 214L560 214"
{...pathAnimation}
transition={{ delay: 0.1 }} 
 stroke="currentColor"
  strokeOpacity="0.1" />

<motion.path 
d="M412 96L412 0" 
 {...pathAnimation}
transition={{ delay: 0.1 }}  
stroke="currentColor" 
strokeOpacity="0.1" />


<motion.path d="M508 184L508 193C508 195.209 509.791 197 512 197L560 197"  {...pathAnimation}
transition={{ delay: 0.1 }}  
stroke="currentColor" strokeOpacity="0.1"/>

<motion.path d="M460 96L460 64" 
 {...pathAnimation}
 transition={{ delay: 0.1 }}  
stroke="currentColor" strokeOpacity="0.1"/>

<motion.path  {...pathAnimation}
 transition={{ delay: 0.1 }}  
 
 d="M484 96L484 24C484 21.7909 485.791 20 488 20L554 20" 
stroke="currentColor" 
strokeOpacity="0.1" />


<motion.path  {...pathAnimation}
 transition={{ delay: 0.1 }}   d="M349 150L73 150C70.7909 150 69 151.791 69 154L69 174" stroke="currentColor"  strokeOpacity="0.1" />

      {/* Left side blue connection */}
      <g>
        <motion.path
          d="M349 130L5.00002 130C2.79088 130 1.00001 131.791 1.00001 134L1.00001 264"
          stroke="currentColor"
          strokeOpacity="0.1"
          {...pathAnimation}
          transition={{ delay: 0.4 }}
        />
        <motion.path
                          {...pathAnimation} 
                          transition={{ delay: 0.4 }}
          d="M349 130L5.00002 130C2.79088 130 1.00001 131.791 1.00001 134L1.00001 264"
          stroke="url(#blue-pulse-1)"
          strokeLinecap="round"
          strokeWidth="2"
        />
      </g>

      {/* Right side orange connection */}
      <g>
        <motion.path
          d="M547 130L822 130C824.209 130 826 131.791 826 134L826 264"
          stroke="currentColor"
          strokeOpacity="0.1"
          {...pathAnimation}
          transition={{ delay: 0.3 }}
        />
        <motion.path
                          {...pathAnimation} 
                          transition={{ delay: 0.4 }}
          d="M547 130L822 130C824.209 130 826 131.791 826 134L826 264"
          stroke="url(#orange-pulse-1)"
          strokeWidth="2"
        />
      </g>

      {/* Bottom pink connection */}
      <g>
        <motion.path
          d="M547 150L633 150C635.209 150 637 151.791 637 154L637 236C637 238.209 635.209 240 633 240L488 240C485.791 240 484 241.791 484 244L484 264"
          stroke="currentColor"
          strokeOpacity="0.1"
          {...pathAnimation}
          transition={{ delay: 0.5 }}
        />
        <motion.path
                          {...pathAnimation} 
                          transition={{ delay: 0.4 }}
          d="M547 150L633 150C635.209 150 637 151.791 637 154L637 236C637 238.209 635.209 240 633 240L488 240C485.791 240 484 241.791 484 244L484 264"
          stroke="url(#pink-pulse-2)"
          strokeLinecap="round"
          strokeWidth="2"
        />
      </g>
      {/*  */}
      <g>
        <motion.path d="M412 263.5L412 184"
         stroke="currentColor"
         strokeOpacity="0.1"
          {...pathAnimation} 
          transition={{ delay: 0.4 }}
          
          
          />
          <motion.path
                          {...pathAnimation} 
                          transition={{ delay: 0.4 }}
          
          
          
          d="M412 263.5L412 184" stroke="url(#pink-pulse-1)" strokeLinecap="round" strokeWidth="2"/>
          </g>

          {/*  */}
          <g>
            <motion.path d="M388 184L388 194C388 196.209 386.209 198 384 198L77 198C74.7909 198 73 199.791 73 202L73 264"
             stroke="currentColor"
             {...pathAnimation} 
             transition={{ delay: 0.4 }}
             
             strokeOpacity="0.1"/>
                  <motion.path
                       {...pathAnimation} 
                       transition={{ delay: 0.4 }}
                  
                  
                  d="M388 184L388 194C388 196.209 386.209 198 384 198L77 198C74.7909 198 73 199.791 73 202L73 264"
                   stroke="url(#blue-pulse-2)" strokeLinecap="round" strokeWidth="2"/>
                    </g>


                    {/*  */}
                    <g>
                      <motion.path 
                      d="M508 96L508 88C508 85.7909 509.791 84 512 84L886 84C888.209 84 890 85.7909 890 88L890 264"
                       stroke="currentColor"
                       strokeOpacity="0.1" 
                       {...pathAnimation} 
                       transition={{ delay: 0.4 }}
                       
                     />
                     <motion.path
                          {...pathAnimation} 
                          transition={{ delay: 0.4 }}
                     d="M508 96L508 88C508 85.7909 509.791 84 512 84L886 84C888.209 84 890 85.7909 890 88L890 264"
                       stroke="url(#orange-pulse-2)" strokeWidth="2"/>
                       </g>
      {/* Connection points */}
      {[
        { cx: "460", cy: "64" },
        { cx: "308", cy: "64" },
        { cx: "69", cy: "173" }, 
        { cx: "436", cy: "214" },
        { cx: "460", cy: "240" },
        { cx: "560", cy: "214" },
        { cx: "560", cy: "197" }
      ].map((point, index) => (
        <React.Fragment key={index}>
          <motion.circle
            {...point}
            r="4"
            fill="var(--background, white)"
            {...circleAnimation}
          />
          <motion.circle
            {...point}
            r="3.5"
            stroke="currentColor"
            strokeOpacity="0.1"
            {...circleAnimation}
          />
        </React.Fragment>
      ))}

      {/* Gradient definitions */}
      <defs>
        {/* Blue pulse gradients */}
        <motion.linearGradient
          id="blue-pulse-1"
          gradientUnits="userSpaceOnUse"
          initial={{
            x1: 83,
            x2: 83,
            y1: 320,
            y2: 415
          }}
          animate={{
            x1: [83, 400],
            x2: [83, 350],
            y1: [320, 83],
            y2: [415, 133.75]
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            repeatDelay: 1.4,
            delay: 0.5
          }}
        >
          <stop stopColor="#2EB9DF" stopOpacity="0" />
          <stop offset="0.05" stopColor="#2EB9DF" />
          <stop offset="1" stopColor="#2EB9DF" stopOpacity="0" />
        </motion.linearGradient>

        {/*  */}
        <motion.linearGradient
          id="blue-pulse-2"
          gradientUnits="userSpaceOnUse"
          initial={{
            x1: 83,
            x2: 83,
            y1: 320,
            y2: 415
          }}
          animate={{
            x1: [83, 400],
            x2: [83, 350],
            y1: [320, 83],
            y2: [415, 133.75]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 1.2,
      
          }}
        >
          <stop stopColor="#2EB9DF" stopOpacity="0" />
          <stop offset="0.05" stopColor="#2EB9DF" />
          <stop offset="1" stopColor="#2EB9DF" stopOpacity="0" />
        </motion.linearGradient>

        {/* Pink pulse gradients */}
        <motion.linearGradient
          id="pink-pulse-1"
          gradientUnits="userSpaceOnUse"
          
          initial={{
            x1: 490,
            x2: 490,
            y1: 266,
            y2: 284
          }}
          animate={{
            x1: [490, 490, 480, 478, 475],
            x2: [490, 479, 488],
            y1: [266, 120],
            y2: [284, 150]
          }}
          transition={{
              duration: 0.9,
            repeat: Infinity,
            repeatDelay: 1.9,
            delay: 0.3
          }}
        >
          <stop stopColor="#FF4A81" stopOpacity="0" />
          <stop offset="0.0564843" stopColor="#FF4A81" />
          <stop offset="0.4616" stopColor="#DF6CF6" />
          <stop offset="1" stopColor="#0196FF" stopOpacity="0" />
        </motion.linearGradient>
            {/* Pink pulse gradients2 */}
        <motion.linearGradient
          id="pink-pulse-2"
          gradientUnits="userSpaceOnUse"
          initial={{
            x1: 490,
            x2: 490,
            y1: 266,
            y2: 284
          }}
          animate={{
            x1: [490, 490, 480, 478, 475],
            x2: [490, 479, 488],
            y1: [266, 120],
            y2: [284, 150]
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            repeatDelay: 1.8,
            delay: 0.5
          }}
        >
          <stop stopColor="#FF4A81" stopOpacity="0" />
          <stop offset="0.0564843" stopColor="#FF4A81" />
          <stop offset="0.4616" stopColor="#DF6CF6" />
          <stop offset="1" stopColor="#0196FF" stopOpacity="0" />
        </motion.linearGradient>

        {/* Orange pulse gradients */}
        <motion.linearGradient
          id="orange-pulse-1"
          gradientUnits="userSpaceOnUse"
          initial={{
            x1: 826,
            x2: 826,
            y1: 270,
            y2: 340
          }}
          animate={{
            x1: [826, 360],
            x2: [826, 400],
            y1: [270, 130],
            y2: [340, 170]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 1.8,
            delay: 0.6
          }}
        >
          <stop stopColor="#FF7432" stopOpacity="0" />
          <stop offset="0.0550784" stopColor="#FF7432" />
          <stop offset="0.373284" stopColor="#F7CC4B" />
          <stop offset="1" stopColor="#F7CC4B" stopOpacity="0" />
        </motion.linearGradient>
        <motion.linearGradient
          id="orange-pulse-2"
          gradientUnits="userSpaceOnUse"
          initial={{
            x1: 826,
            x2: 826,
            y1: 270,
            y2: 340
          }}
          animate={{
            x1: [826, 360],
            x2: [826, 400],
            y1: [270, 130],
            y2: [340, 170]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatDelay: 2,
            delay: 0.9
          }}
        >
          <stop stopColor="#FF7432" stopOpacity="0" />
          <stop offset="0.0550784" stopColor="#FF7432" />
          <stop offset="0.373284" stopColor="#F7CC4B" />
          <stop offset="1" stopColor="#F7CC4B" stopOpacity="0" />
        </motion.linearGradient>

        {/* Static gradients */}
        <linearGradient
          id="paint0_linear"
          gradientUnits="userSpaceOnUse"
          x1="412.5"
          x2="412.5"
          y1="0"
          y2="96"
        >
          <stop stopOpacity="0" />
          <stop offset="1" />
        </linearGradient>
      </defs>
    </svg>



</>
    

  );
};

export default AnimatedCPU;
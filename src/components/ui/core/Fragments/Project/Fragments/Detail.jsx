"use client"

import Link from "next/link"
import Image from "next/image"
import { useRef, useEffect, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import AnimatedContent from "../../../../Animation/AnimatedContent";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/core/common/tooltip"
const Detail = ({
    i,
    title,
    color,
    Tech,
    Description,
    list,
    Code
}) => {

    const [animationKey, setAnimationKey] = useState(0);
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { 
        amount: 0.2,
        once: false 
    });

    
    useEffect(() => {
        setAnimationKey(prev => prev + 1);
    }, [title]);

    return(
       

        <aside 
        
            ref={containerRef}
            className="flex font-oufit "
            key={i}
        >
           <TooltipProvider  
      
        >
        <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={false}
          config={{ tension: 80, friction: 20 }}
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
          className={` flex`}
        >
            <div aria-hidden="true" className={`my-4 mr-4 h-1 min-w-6 rounded-full bg-${color}-500`}></div>
          
            <article className="flex flex-col items-start lg:h-[500px]">
                <header className="flex items-center gap-3">
                    <motion.h3 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        key={`title-${animationKey}`}
                        transition={{ duration: 0.3 }}
                        className="text-foreground text-2xl font-bold"
                    >
                        {title}
                    </motion.h3>
                    <Tooltip>
<TooltipTrigger asChild className="h-fit">
                    <Link href={Code ? Code : '/'} target="_blank" className="translate-y-px cursor-pointer rounded-full p-2 hover:bg-zinc-900">
                        <svg stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height={20} width={20} xmlns="http://www.w3.org/2000/svg" className="size-5"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                    </Link>
</TooltipTrigger>
<TooltipContent>
    <span>Source Code</span>
</TooltipContent>
                    </Tooltip>
                </header>
                <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    key={`desc-${animationKey}`}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="my-2 text-base text-[#A3A3A3] font-ligh line-clamp-3 "
                >
                    {Description}
                </motion.p>
                
                {/* Animated List */}
                <AnimatePresence mode="wait">
                    <motion.ul 
                        key={`list-${animationKey}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-accent-foreground/85 mt-4 flex flex-col gap-y-2 text-base"
                    >
                        {list.map((lis, i) => (
                            <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ 
                                    duration: 0.3, 
                                    delay: i * 0.1 + 0.2, 
                                    ease: "easeOut" 
                                }}
                                className="flex  items-center text-sm"
                            >

                                <svg 
                                    width={24} 
                                    height={24} 
                                    viewBox="0 0 24 24" 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    className={`mt-1 mr-2 size-5 shrink-0 fill-${color}-600 text-${color}-400 bg-${color}-600 lg:bg-black`}
                                >
                                    <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z"></path>
                                </svg>
                                <span className="line-clamp-2">{lis}</span>
                            </motion.li>
                        ))}
                    </motion.ul>
                </AnimatePresence>
                
                {/* Tech Stack */}
                <AnimatePresence mode="wait">
                    <motion.ul 
                        key={`tech-${animationKey}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="mt-10 flex flex-wrap gap-3 text-sm"
                    >
                        {Tech.map((Stack, i) => (
                            <motion.li
                                key={i}
                                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ 
                                    duration: 0.3, 
                                    delay: i * 0.1 + 0.3, 
                                    ease: "easeOut" 
                                }}
                                className="flex items-center gap-2 rounded-xl  border border-white/[0.14] bg-neutral-900 px-3 py-1 text-sm"
                            >
                                <Image width={16} height={16} className="size-4" alt={Stack} src={`Assets/Tech/${Stack}.svg`} />
                                {Stack}
                            </motion.li>
                        ))}
                    </motion.ul>
                </AnimatePresence>
            </article>
        </AnimatedContent>
        </TooltipProvider>
        </aside>
    )
}

export default Detail
"use client";
import React, {  useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/hooks/lib/utils";
import { Card } from "./Fragments/Card";
import Detail from "./Fragments/Detail";
import { useMediaQuery } from "@/hooks/lib/use-media-query";



export const StickyScroll = ({
  content,

}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const isMobile = useMediaQuery("(max-width: 1024px)")
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
      const distance = Math.abs(latest - breakpoint);
      if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
        return index;
      }
      return acc;
    }, 0);
    setActiveCard(closestBreakpointIndex);
  });

  return (
    <motion.div 
      className="relative mx-auto flex w-full"
      ref={ref}
    >
 
        <div className="mx-auto flex  flex-col gap-y-6 md:gap-y-24 lg:max-w-[65%]">
          {content.map((item, i) => (
            <Card
              key={i}
              description={item?.deskripcion}
              title={item?.title}
              tech={item?.stackx}
              images={item?.imag}
              color={item?.colore}
              Web={item?.web}
              Code={item?.Code}
              hex={item?.hex}
            />
          ))}
        </div>
        
        {!isMobile && (
          <div className=" py-4 sticky block lg:w-[35%]">
            <div className={cn("sticky top-40")}>
              <Detail 
                title={content[activeCard]?.title}
              Description={content[activeCard]?.deskripcion}
              Tech={content[activeCard]?.stackx}
              list={content[activeCard]?.listx}
              Code={content[activeCard]?.Code}
              color={content[activeCard]?.colore}
            />
          </div>
          </div>
        )}
    </motion.div>
  );
};
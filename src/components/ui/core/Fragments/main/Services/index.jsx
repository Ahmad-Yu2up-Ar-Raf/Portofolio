import Image from "next/image"
import { cn } from "@/hooks/lib/utils"
import { forwardRef } from "react"




const Card = forwardRef(({
    id,  frontAlt,backText
} , ref ) => {
    return (
        <li
        
      
        className="lg:absolute relative mx-auto my-40   lg:my-0   lg:h-[65vh]  lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2
          lg:-translate-y-1/2 h-[57vh]   w-[90vw]  lg:w-[19.5vw]   "
  ref={ref}
 id={id}
 
  style={{
    perspective: "1000px"
  }}
 >
            <div className={cn("absolute top-[50%]   left-[50%]   w-full h-full   animate-float      ",
                id ==  'card-2' ? 'delay-100' : id == 'card-3' ? 'delay-200' : id == 'card-4' ? 'delay-300' : 'delay-0'

                
            )

          
          
          
          } id="card-wrapper">
                <div className="relative w-full h-full " id="flip-card-inner"
                style={{
                    transformStyle: "preserve-3d"
                }}
                >
                    <div className="absolute  w-full h-full rounded-[0.5em] overflow-hidden "
                    style={{
                        backfaceVisibility: "hidden"
                    }}
                    id="flip-card-front">
                        <Image
                        priority
                         src="/Assets/Card/FrontCard.svg"
                          alt={frontAlt} 
                          width={500}                        
                          height={500}  
                               className="w-full  h-full object-cover"                   
                        />
                    </div>
                    <div className="absolute  bg-[#1a1a1a] p-[1em]  rounded-[0.5em] w-full h-full  overflow-hidden "
                    
                    style={{
                        transformStyle: "preserve-3d",
                        backfaceVisibility: "hidden",
                        transform: "rotateY(185deg)"
                    }}
                    id="flip-card-back">
                        <h2 className={cn("uppercase    animate-pulse lg:animate-glow  select-none        font-SixCaps tracking-tighter  absolute transform  top-1/2 left-1/2  text-[10rem]  -translate-y-1/2 -translate-x-1/2  text-center md:text-[11.5vw] " ,
'  leading-[9rem] md:leading-[21vh]  ',
id ==  'card-2' ? 'delay-100' : id == 'card-3' ? 'delay-300' : id == 'card-4' ? 'delay-500' : 'delay-0'

                        ) }>{backText}</h2>
                    </div>
                </div>
            </div>
        </li>
    )
});

export default Card
import Image from "next/image"
import { cn } from "@/lib/utils"
import { forwardRef } from "react"




const Card = forwardRef(({
    id,  frontAlt,backText
} , ref ) => {
    return (
        <li
        
      
        className="lg:absolute relative m-auto my-40   lg:my-0   h-[70vh]  lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2  lg:-translate-y-1/2 w-[90vw]   md:w-[24em]  lg:w-[19em]  perspective-[1000px] "
  ref={ref}
 id={id}
 
 
 >
            <div className={cn("absolute top-[50%]  lg:transform lg:-translate-x-1/2  lg:-translate-y-1/2  left-[50%]   w-full h-full   animate-float      ",
                                     id ==  'card-2' ? 'delay-200' : id == 'card-3' ? 'delay-500 ' : id == 'card-4' ? 'delay-500' : 'delay-0'

                
            )

          
          
          
          } id="card-wrapper">
                <div className="relative w-full h-full  "
                style={{
                    transformStyle: "preserve-3d"
                }}
                id="flip-card-inner">
                    <div className="absolute w-full h-full  rounded-[0.4em] overflow-hidden "
                    
                    style={{
                        backfaceVisibility: "hidden"
                    }}
                    id="flip-card-front">
                        <Image
                        priority
                         src="/Assets/Card/serviceCard.png"
                          alt={frontAlt} 
                          width={500}                        
                          height={500}  
                               className="w-full h-full object-cover"                   
                        />
                    </div>
                    <div className="absolute  bg-[#1a1a1a] p-[1em] transform  w-full h-full  rounded-[0.4em] overflow-hidden "
                    
                    style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)"
                    }}
                    id="flip-card-back">
                        <h2 className={cn("uppercase  font-SixCaps animate-pulse  lg:animate-glow    pointer-events-none       tracking-tight   font-semibold absolute transform  top-1/2 left-1/2   -translate-x-1/2  -translate-y-1/2  text-center  text-[12em] " ,
 'leading-[1em]',
                                            id ==  'card-2' ? 'delay-200' : id == 'card-3' ? 'delay-500 ' : id == 'card-4' ? 'delay-500' : 'delay-0'
                        ) }>{backText}</h2>
                    </div>
                </div>
            </div>
        </li>
    )
});

export default Card
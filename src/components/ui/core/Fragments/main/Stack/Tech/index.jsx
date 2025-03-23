"use client"

import Link from "next/link"
import Image from "next/image"
import styles from './style.module.css';
import PixelCard from '@/components/ui/core/Fragments/main/Stack/PixelCard';


export default function Tech({
   i,
   Name,
   Description,
   Imagex,
   Url,
   Colors
}) {
    return(
     

<PixelCard 
 Url={Url}
key={i}

canvasStyle={'[mask-image:_linear-gradient(to_top,transparent_0,_black_125px,_black_calc(0%),transparent_100%)] '}  colors={Colors} className={`${styles.stack}
 ${i == 0 ? 
    'before:bg-[conic-gradient(from_180deg_at_50%_50%,#333333_0deg,#333333_176deg,#61dafb_193deg,#333333_217deg,#333333_1turn)]'
     : i == 1 ? 'before:bg-[conic-gradient(from_0deg_at_50%_50%,#333333_0deg,#333333_3deg,#333333_328deg,#df2e6c_349deg,#333333_1turn)]' :
      'before:bg-[conic-gradient(from_0deg_at_50%_50%,#ffbc31_-7.19deg,#333333_14deg,#333333_51deg,#333333_311deg,#ffbc31_353deg,#333333_374deg)]'}   
group  rounded-[12px] h-[200px]  md:h-[230px] overflow-hidden `}   gaya={{
   boxShadow: "0 1px 0 1px rgba(0,0,0,.02),0 4px 6px rgba(0,0,0,.02),inset 0 0 0 6px #111111",
      
      background: "linear-gradient(180deg, #242424, #121212 65.62%)",
      backgroundSize: "cover"}}   >
<div  href={Url} target="blank"  className="absolute left-0 top-0 bottom-0 right-0 flex justify-between  flex-col  gap-[24px] p-[24px]">
<Image className="size-9 lg:size-10" height={42} width={42} src={`/Assets/Tech/${Imagex}.svg`} alt={Name}   />

<article className="flex flex-col gap-1.5 z-20">
<header className="flex items-center gap-1" >
   
<span className="font-semibold text-[16px] transition-all ease-in-out duration-700 group-hover:text-[#d2d2d2] md:text-[20px]">{Name}</span>
<svg data-testid="geist-icon" className="size-[16px] translate-x-[2px] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all  ease-linear duration-300 text-[#8f8f8f]   group-hover:text-white"  strokeLinejoin="round"  viewBox="0 0 16 16" width="16"><path fillRule="evenodd" clipRule="evenodd" d="M5.75001 2H5.00001V3.5H5.75001H11.4393L2.21968 12.7197L1.68935 13.25L2.75001 14.3107L3.28034 13.7803L12.4988 4.56182V10.25V11H13.9988V10.25V3C13.9988 2.44772 13.5511 2 12.9988 2H5.75001Z" fill="currentColor"></path></svg>

</header>
<p className="text-[14px] group-hover:text-[#bcbcbc]  transition-all ease-in-out duration-700 line-clamp-3 leading-[1.5] text-[#888888] m-0 max-w-[50ch] tracking-[-0.01em]">{Description}</p>      
</article>
</div>
            <div className="pointer-events-none z-50 absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
            <div className="pointer-events-none z-50 absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
</PixelCard>
      

    )
}
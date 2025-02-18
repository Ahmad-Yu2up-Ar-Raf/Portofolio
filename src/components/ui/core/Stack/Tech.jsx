import Link from "next/link"
import Image from "next/image"
import { BorderBeam } from "@/components/ui/core/magicui/border-beam";
import { CardSpotlight } from "@/components/ui/core/card-spotlight";
import './Stack.css'
import PixelCard from '@/components/ui/core/PixelCard';
import FadeContent from "@/components/Animation/Content";


export default function Tech() {
    return(
      <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>

<PixelCard  canvasStyle={'[mask-image:_linear-gradient(to_top,transparent_0,_black_125px,_black_calc(0%),transparent_100%)] '}  colors={'#61dafb'} className="stack    group  rounded-[12px] h-[200px]  md:h-[230px] overflow-hidden " gaya={{
   boxShadow: "0 1px 0 1px rgba(0,0,0,.02),0 4px 6px rgba(0,0,0,.02),inset 0 0 0 6px #111111",
      
      background: "linear-gradient(180deg, #242424, #121212 65.62%)",
      backgroundSize: "cover"}}   >
<Link  href={"https://react.dev/"} target="blank"  className="absolute left-0 top-0 bottom-0 right-0 flex justify-between  flex-col  gap-[24px] p-[24px]">
<Image width={100} height={100} className="size-[44px] z-20 flex items-center mb-auto" src='https://nextjs.org/icons/react.svg' alt="image"  />

<div className="flex flex-col gap-1.5 z-20">
<div className="flex items-center gap-1" >
   
<span className="font-semibold text-[16px] transition-all ease-in-out duration-700 group-hover:text-[#d2d2d2] md:text-[20px]">React</span>
<svg data-testid="geist-icon" className="size-[16px] translate-x-[2px] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all  ease-linear duration-300 text-[#8f8f8f]   group-hover:text-white"  strokeLinejoin="round"  viewBox="0 0 16 16" width="16"><path fillRule="evenodd" clipRule="evenodd" d="M5.75001 2H5.00001V3.5H5.75001H11.4393L2.21968 12.7197L1.68935 13.25L2.75001 14.3107L3.28034 13.7803L12.4988 4.56182V10.25V11H13.9988V10.25V3C13.9988 2.44772 13.5511 2 12.9988 2H5.75001Z" fill="currentColor"></path></svg>

</div>
<p className="text-[14px] group-hover:text-[#bcbcbc]  transition-all ease-in-out duration-700 line-clamp-3 leading-[1.5] text-[#888888] m-0 max-w-[50ch] tracking-[-0.01em]">The library for web and native user interfaces. Next.js is built on the latest React features, including Server Components and Actions.</p>
</div>
</Link>
{/* <BorderBeam
 duration={8} size={110}  colorFrom="#61dafb"
 colorTo="#61dafb"
      /> */}
            <div className="pointer-events-none z-50 absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
            <div className="pointer-events-none z-50 absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
</PixelCard>
           {/* <Link href={"https://react.dev/"} target="blank"  className="">
              <CardSpotlight className="stack justify-between flex flex-col    p-[24px] gap-[24px] overflow-hidden   group  min-h-[190px] md:min-h-[240px] w-full relative " 
              style={{ 
 boxShadow: "0 1px 0 1px rgba(0,0,0,.02),0 4px 6px rgba(0,0,0,.02),inset 0 0 0 6px #111111",
        background: "linear-gradient(180deg,#242424,#121212 65.62%)", 

         }}>
  <BorderBeam
 duration={8} size={110}  colorFrom="#61dafb"
 colorTo="#61dafb"
      />
           <Image width={100} height={100} className="size-[44px] z-20 flex items-center mb-auto" src='https://nextjs.org/icons/react.svg' alt="image"  />

<div className="flex flex-col gap-1.5 z-20">
<div className="flex items-center gap-1" >
   
<span className="font-semibold text-[16px] md:text-[20px]">React</span>
<svg data-testid="geist-icon" className="size-[16px] translate-x-[2px] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all  ease-linear duration-100 group-hover:text-white"  strokeLinejoin="round" style={{ color:"hsl(0, 0%, 56%)"}} viewBox="0 0 16 16" width="16"><path fillRule="evenodd" clipRule="evenodd" d="M5.75001 2H5.00001V3.5H5.75001H11.4393L2.21968 12.7197L1.68935 13.25L2.75001 14.3107L3.28034 13.7803L12.4988 4.56182V10.25V11H13.9988V10.25V3C13.9988 2.44772 13.5511 2 12.9988 2H5.75001Z" fill="currentColor"></path></svg>

</div>
<p className="text-[14px] line-clamp-3 leading-[1.5] text-[#888888] m-0 max-w-[50ch] tracking-[-0.01em]">The library for web and native user interfaces. Next.js is built on the latest React features, including Server Components and Actions.</p>
</div>
              </CardSpotlight>
           </Link> */}
        </FadeContent>
    )
}
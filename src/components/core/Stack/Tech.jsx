import Link from "next/link"
import Image from "next/image"

export default function Tech() {
    return(
        <>
           <Link href={"https://react.dev/"} target="blank" >
              <div className="p-[24px] gap-[24px] group justify-between group flex flex-col rounded-[12px] min-h-[190px] md:min-h-[240px] w-full relative " style={{ 
 boxShadow: "0 1px 0 1px rgba(0,0,0,.02),0 4px 6px rgba(0,0,0,.02),inset 0 0 0 6px #111111",
        background: "linear-gradient(180deg,#242424,#121212 65.62%)" 
         
         }}>

           <Image width={100} height={100} className="size-[46px]" src='https://nextjs.org/icons/react.svg' alt="image"  />

<div className="flex flex-col gap-1.5 ">
<div className="flex items-center gap-1" >
   
<span className="font-semibold text-[16px]">React</span>
<svg data-testid="geist-icon" className="size-[17px] translate-x-[2px] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all  ease-linear duration-100 group-hover:text-white"  stroke-linejoin="round" style={{ color:"hsl(0, 0%, 56%)"}} viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.75001 2H5.00001V3.5H5.75001H11.4393L2.21968 12.7197L1.68935 13.25L2.75001 14.3107L3.28034 13.7803L12.4988 4.56182V10.25V11H13.9988V10.25V3C13.9988 2.44772 13.5511 2 12.9988 2H5.75001Z" fill="currentColor"></path></svg>

</div>
<p className="text-[14px] leading-[1.5] text-[#888888] max-w-[50ch] tracking-[-0.01em]">The library for web and native user interfaces. Next.js is built on the latest React features, including Server Components and Actions.</p>
</div>
              </div>
           </Link>
        </>
    )
}
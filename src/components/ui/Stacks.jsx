'use client';
import React, { useRef } from 'react';
import { AnimatedBeam, Circle } from '@/components/core/animated-beam';
import ScrollElement from '@/components/core/scroll-element';
import { LineShadowText } from "@/components/magicui/line-shadow-text";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import AnimatedCPU from '../other/AnimatedCPU';
import Image from 'next/image';
import './Stack.css'
export default function index() {
  const containerRef = useRef(null);
  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const div3Ref = useRef(null);
  const div4Ref = useRef(null);
  const div5Ref = useRef(null);
  const div6Ref = useRef(null);
  const div7Ref = useRef(null);

  return (


    
//     <section className='min-h-[100vh] lg:min-h-[150vh] s mt-14 px-5 space space-y-20 content-center '>
//  <div className='text-center space-y-5' >
//   <h1 className='font-semibold md:text-7xl  text-5xl '>My  <LineShadowText className="italic" shadowColor='White'>Stacks</LineShadowText></h1>
//   <p className='text-sm md:text-base'>Commitment to staying updated with the latest design trends and techniques.</p>
//  </div>
//  <ScrollElement viewport={{ amount: 0.5, margin: '0px 0px 0px 0px' }}>
//     <div
//       className="relative flex w-full max-w-3xl mx-auto items-center justify-center  bg-background  md:shadow-xl"
//       ref={containerRef}>
       

//       <div className="flex h-full w-full flex-col items-stretch justify-between gap-12">
//         <div className="flex flex-row items-center justify-between">
//         <NeonGradientCard className="w-fit"   neonColors={{ firstColor: "#9c6bdb", secondColor: "#FFFFFF" }}
//     >
//           <Circle ref={div1Ref} className="md:p-5">
//             <Icons.googleDrive />
//           </Circle>
//        </NeonGradientCard>
//           <NeonGradientCard className="w-fit"   neonColors={{ firstColor: "#48CFCB", secondColor: "#1D3557 " }}
    
//     >
//           <Circle ref={div5Ref} className="md:p-5">
//             <Icons.googleDocs />
//           </Circle>
//    </NeonGradientCard>
//         </div>
//         <div className="flex flex-row items-center justify-between">
//         <NeonGradientCard className="w-fit"   neonColors={{ firstColor: "#ffffff", secondColor: "#222529" }}
    
//     >
//           <Circle ref={div2Ref} className="md:p-5 ">
//             <Icons.openai />
//           </Circle>
//           </NeonGradientCard>
          
//           <NeonGradientCard className="w-fit">
//           <Circle ref={div4Ref} className=" size-16  lg:size-24 md:p-4">
//             <Icons.vscode />
//           </Circle>
//           </NeonGradientCard>
//           <NeonGradientCard className="w-fit"   neonColors={{ firstColor: "#71ebe9", secondColor: "#181f1e" }}
    
//     >
//           <Circle ref={div6Ref} className="md:p-5">
//             <Icons.zapier />
//           </Circle>
//           </NeonGradientCard>
//         </div>
//         <div className="flex flex-row items-center justify-between">
//         <NeonGradientCard className="w-fit"   neonColors={{ firstColor: "#f5f6f7", secondColor: "#0c1624" }}
    
//     >
//           <Circle ref={div3Ref} className="md:p-5">
//             <Icons.whatsapp />
//           </Circle>
//           </NeonGradientCard>
//           <NeonGradientCard className="w-fit"   neonColors={{ firstColor: "#ff5733", secondColor: "#33ff57" }}
    
//     >
//           <Circle ref={div7Ref} className="md:p-5">
//             <Icons.messenger />
//           </Circle>
//           </NeonGradientCard>
//         </div>
//       </div>
         

//       <AnimatedBeam
//         containerRef={containerRef}
//         fromRef={div1Ref}
//         toRef={div4Ref}
//         curvature={-75}
//         endYOffset={-10}
//         dotted
//         gradientStartColor="#00ac47"
//         gradientStopColor="#ffba00"
//       />
//       <AnimatedBeam
//         containerRef={containerRef}
//         fromRef={div2Ref}
//         toRef={div4Ref}
//         dotted
//         gradientStartColor="#d948ae"
//         gradientStopColor="#5b60ff"
//       />
//       <AnimatedBeam
//         containerRef={containerRef}
//         fromRef={div3Ref}
//         toRef={div4Ref}
//         curvature={75}
//         endYOffset={10}
//         dotted
//       />
//       <AnimatedBeam
//         containerRef={containerRef}
//         fromRef={div5Ref}
//         toRef={div4Ref}
//         curvature={-75}
//         endYOffset={-10}
//         reverse
//         gradientStartColor="#48b0d9"
//         gradientStopColor="#67aeff"
//         dotted
//       />
//       <AnimatedBeam
//         containerRef={containerRef}
//         fromRef={div6Ref}
//         toRef={div4Ref}
//         reverse
//         dotted
//         gradientStartColor="#00ac47"
//         gradientStopColor="#4fcc5d"
//       />
//       <AnimatedBeam
//         containerRef={containerRef}
//         fromRef={div7Ref}
//         toRef={div4Ref}
//         curvature={75}
//         endYOffset={10}
//         reverse
//         dotted
//         gradientStartColor="#48b0d9"
//         gradientStopColor="#67aeff"
//       />
//     </div>
//        </ScrollElement>

//     </section>
<section className='min-h-screen bg-zinc-950 content-center '>
  <h1></h1>
{/* Gunakan background gelap untuk efek terbaik */}

<div className="flex relative  justify-center h-[264px] overflow-hidden w-full  content-center  max-w-7xl m-auto">

  <AnimatedCPU />
  {/* <Image alt="mobile" aria-hidden="true" loading="lazy" width="400" height="312" decoding="async" data-nimg="1" class="foundation_mobileLines__3hBQx" style="color:transparent" src="https://nextjs.org/icons/mobile-lines.svg"/> */}

  <div  className="poweredby translate-y-[8px] flex items-center justify-center content-center  tracking-[-0.04em]  py-[15px] px-[21px] relative border-inherit md:py-[21px] md:px-[25px]  text-[20px] md:text-[24px] rounded-[8px] font-bold text-center w-fit m-auto  bg-[linear-gradient(180deg,#232323,#222222),linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.05)_26.56%,rgba(0,0,0,0.05)_51.56%,rgba(0,0,0,0.05))] ">
    
  
  <div className='flex absolute -top-[10px]  gap-[18px]    '   >
        <span  style={{

    background: "linear-gradient(180deg, #787878, #6b6b6b 33.33%, #8b8b8b 66.67%, #303030)",
    boxShadow: "0 2px 2px 1px rgba(0, 0, 0, .02), inset 0 -1px 1px 1px rgba(0, 0, 0, .1), inset 0 -1px 1px #dddddd"
        }} className='bg-white  flex w-[6px] h-[10px]  '>

        </span>
        <span  style={{

    background: "linear-gradient(180deg, #787878, #6b6b6b 33.33%, #8b8b8b 66.67%, #303030)",
    boxShadow: "0 2px 2px 1px rgba(0, 0, 0, .02), inset 0 -1px 1px 1px rgba(0, 0, 0, .1), inset 0 -1px 1px #dddddd"
        }} className='bg-white  flex w-[6px] h-[10px]  '>

        </span>
        <span  style={{

    background: "linear-gradient(180deg, #787878, #6b6b6b 33.33%, #8b8b8b 66.67%, #303030)",
    boxShadow: "0 2px 2px 1px rgba(0, 0, 0, .02), inset 0 -1px 1px 1px rgba(0, 0, 0, .1), inset 0 -1px 1px #dddddd"
        }} className='bg-white absolute flex w-[6px] h-[10px]  '>

        </span>
        <span  style={{

    background: "linear-gradient(180deg, #787878, #6b6b6b 33.33%, #8b8b8b 66.67%, #303030)",
    boxShadow: "0 2px 2px 1px rgba(0, 0, 0, .02), inset 0 -1px 1px 1px rgba(0, 0, 0, .1), inset 0 -1px 1px #dddddd"
        }} className='bg-white  flex w-[6px] h-[10px]  '>

        </span>
        <span  style={{

    background: "linear-gradient(180deg, #787878, #6b6b6b 33.33%, #8b8b8b 66.67%, #303030)",
    boxShadow: "0 2px 2px 1px rgba(0, 0, 0, .02), inset 0 -1px 1px 1px rgba(0, 0, 0, .1), inset 0 -1px 1px #dddddd"
        }} className='bg-white  flex w-[6px] h-[10px]  '>

        </span>
        <span  style={{

    background: "linear-gradient(180deg, #787878, #6b6b6b 33.33%, #8b8b8b 66.67%, #303030)",
    boxShadow: "0 2px 2px 1px rgba(0, 0, 0, .02), inset 0 -1px 1px 1px rgba(0, 0, 0, .1), inset 0 -1px 1px #dddddd"
        }} className='bg-white  flex w-[6px] h-[10px]  '>

        </span>
        <span  style={{

    background: "linear-gradient(180deg, #787878, #6b6b6b 33.33%, #8b8b8b 66.67%, #303030)",
    boxShadow: "0 2px 2px 1px rgba(0, 0, 0, .02), inset 0 -1px 1px 1px rgba(0, 0, 0, .1), inset 0 -1px 1px #dddddd"
        }} className='bg-white  flex w-[6px] h-[10px]  '>

        </span>

      </div>



      <div className='flex absolute justify-center flex-col gap-[14px]  -left-[10px]     '   >
        <span  style={{

    background: "linear-gradient(1turn, #6f6f6f, #878787 33.33%, #8b8b8b 66.67%, #4d4d4d);",
    boxShadow: "0 2px 2px 1px rgba(0, 0, 0, .05), inset 1px 0 1px 1px rgba(0, 0, 0, .1), inset 1px 0 1px #dddddd"
        }} className='bg-white   flex w-[10px] h-[6px]  '>

        </span>
        <span  style={{

    background: "linear-gradient(1turn, #6f6f6f, #878787 33.33%, #8b8b8b 66.67%, #4d4d4d);",
    boxShadow: "0 2px 2px 1px rgba(0, 0, 0, .05), inset 1px 0 1px 1px rgba(0, 0, 0, .1), inset 1px 0 1px #dddddd"
        }} className='bg-white   flex w-[10px] h-[6px]  '>

        </span>
      

      </div>

  <span     style={{
        textShadow: "0 0 10px rgba(255, 255, 255, 0.1), 0 -1px 0 rgba(0, 0, 0, 0.1)",
           background: "linear-gradient(92.66deg, #919191, #eaeaea 19.79%, #828181 33.33%, #c6c6c6 70.31%, #606060)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }} >Powered By</span>

      <div className='flex absolute -bottom-[10px]  gap-[18px]    '   >
        <span  style={{

    background: "linear-gradient(180deg, #787878, #6b6b6b 33.33%, #8b8b8b 66.67%, #303030)",
    boxShadow: "0 2px 2px 1px rgba(0, 0, 0, .02), inset 0 -1px 1px 1px rgba(0, 0, 0, .1), inset 0 -1px 1px #dddddd"
        }} className='bg-white  flex w-[6px] h-[10px]  '>

        </span>
        <span  style={{

    background: "linear-gradient(180deg, #787878, #6b6b6b 33.33%, #8b8b8b 66.67%, #303030)",
    boxShadow: "0 2px 2px 1px rgba(0, 0, 0, .02), inset 0 -1px 1px 1px rgba(0, 0, 0, .1), inset 0 -1px 1px #dddddd"
        }} className='bg-white  flex w-[6px] h-[10px]  '>

        </span>
        <span  style={{

    background: "linear-gradient(180deg, #787878, #6b6b6b 33.33%, #8b8b8b 66.67%, #303030)",
    boxShadow: "0 2px 2px 1px rgba(0, 0, 0, .02), inset 0 -1px 1px 1px rgba(0, 0, 0, .1), inset 0 -1px 1px #dddddd"
        }} className='bg-white absolute flex w-[6px] h-[10px]  '>

        </span>
        <span  style={{

    background: "linear-gradient(180deg, #787878, #6b6b6b 33.33%, #8b8b8b 66.67%, #303030)",
    boxShadow: "0 2px 2px 1px rgba(0, 0, 0, .02), inset 0 -1px 1px 1px rgba(0, 0, 0, .1), inset 0 -1px 1px #dddddd"
        }} className='bg-white  flex w-[6px] h-[10px]  '>

        </span>
        <span  style={{

    background: "linear-gradient(180deg, #787878, #6b6b6b 33.33%, #8b8b8b 66.67%, #303030)",
    boxShadow: "0 2px 2px 1px rgba(0, 0, 0, .02), inset 0 -1px 1px 1px rgba(0, 0, 0, .1), inset 0 -1px 1px #dddddd"
        }} className='bg-white  flex w-[6px] h-[10px]  '>

        </span>
        <span  style={{

    background: "linear-gradient(180deg, #787878, #6b6b6b 33.33%, #8b8b8b 66.67%, #303030)",
    boxShadow: "0 2px 2px 1px rgba(0, 0, 0, .02), inset 0 -1px 1px 1px rgba(0, 0, 0, .1), inset 0 -1px 1px #dddddd"
        }} className='bg-white  flex w-[6px] h-[10px]  '>

        </span>
        <span  style={{

    background: "linear-gradient(180deg, #787878, #6b6b6b 33.33%, #8b8b8b 66.67%, #303030)",
    boxShadow: "0 2px 2px 1px rgba(0, 0, 0, .02), inset 0 -1px 1px 1px rgba(0, 0, 0, .1), inset 0 -1px 1px #dddddd"
        }} className='bg-white  flex w-[6px] h-[10px]  '>

        </span>

      </div>
      <div className='flex absolute flex-col -right-[10px] gap-[14px]    '   >
        <span  style={{

    background: "linear-gradient(1turn, #6f6f6f, #878787 33.33%, #8b8b8b 66.67%, #4d4d4d);",
    boxShadow: "0 2px 2px 1px rgba(0, 0, 0, .05), inset -1px 0 1px 1px rgba(0, 0, 0, .1), inset -1px 0 1px #dddddd;"
        }} className='bg-white   flex w-[10px] h-[6px]  '>

        </span>
        <span  style={{

    background: "linear-gradient(1turn, #6f6f6f, #878787 33.33%, #8b8b8b 66.67%, #4d4d4d);",
    boxShadow: "0 2px 2px 1px rgba(0, 0, 0, .05), inset -1px 0 1px 1px rgba(0, 0, 0, .1), inset -1px 0 1px #dddddd;"
        }} className='bg-white   flex w-[10px] h-[6px]  '>

        </span>
        {/* <span  style={{

    background: "linear-gradient(180deg, #787878, #6b6b6b 33.33%, #8b8b8b 66.67%, #303030)",
    boxShadow: "0 2px 2px 1px rgba(0, 0, 0, .02), inset 0 -1px 1px 1px rgba(0, 0, 0, .1), inset 0 -1px 1px #dddddd"
        }} className='bg-white  absolute flex w-[6px] h-[10px]  '>

        </span>
        <span  style={{

    background: "linear-gradient(180deg, #787878, #6b6b6b 33.33%, #8b8b8b 66.67%, #303030)",
    boxShadow: "0 2px 2px 1px rgba(0, 0, 0, .02), inset 0 -1px 1px 1px rgba(0, 0, 0, .1), inset 0 -1px 1px #dddddd"
        }} className='bg-white absolute flex w-[6px] h-[10px]  '>

        </span>
        <span  style={{

    background: "linear-gradient(180deg, #787878, #6b6b6b 33.33%, #8b8b8b 66.67%, #303030)",
    boxShadow: "0 2px 2px 1px rgba(0, 0, 0, .02), inset 0 -1px 1px 1px rgba(0, 0, 0, .1), inset 0 -1px 1px #dddddd"
        }} className='bg-white  flex w-[6px] h-[10px]  '>

        </span> */}

      </div>

  </div>        
 
  
</div>


</section>
  );
}



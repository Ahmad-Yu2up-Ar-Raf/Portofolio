

import ScrollVelocity from "../Animation/Text/ScrollVelocity";
import SmearCard from "../core/Fragments/Hero/Smear";
import Threads from "../Animation/Background";


export default function Hero() {



    
    return(
      <section id="Hero" className="w-full h-[90vh] lg:h-screen lg:p-[2rem] p-[1rem]    relative  ">
        <main className="content-center flex flex-col justify-end items-center" >

       <SmearCard/>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-[100vw]  whitespace-nowrap -z-10">
      
        <div style={{ width: '100%', height: '600px', position: 'relative' }} className="hidden lg:block" >
  <Threads
    amplitude={1.0}
    distance={0}
    enableMouseInteraction={false}
  />
</div>
          <ScrollVelocity
            texts={['ahmad yusuf ar-rafi -']} 
            velocity={100}
            className={`text-[#131313]  lg:hidden uppercase  font-thin text-[50vw] md:text-[25vw] lg:text-[15vw] tracking-[-0.8rem] leading-[90%] font-ppregular`}
          />
        </div>
        
          <h5 className={`lg:text-[1rem]  font-ppbook  text-[#f8f8f8] tracking-[.05rem] uppercase  max-w-[21rem] w-full text-center leading-[17.6px]  text-[.8rem] `}>AN INDEPENDENT CREATIVE DESIGNER & <span className="  ">DEVELOPER BASED IN INDONESIA</span></h5>
        </main>
      </section>
    )

}

import Container from "../Shared";
import ScrollVelocity from "../Animation/Text/ScrollVelocity";
import SmearCard from "../core/Fragments/main/Hero/Smear";



export default function Hero() {



    
    return(
   <Container
   
   id="Hero"
   sectionName="Hero Section"
    ariaLabel="Portfolio Hero Section"
    role="banner"
    bg
   maxW 
   >

     <SmearCard/>

  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-[100vw]  whitespace-nowrap -z-10">

        <ScrollVelocity
          texts={['ahmad yusuf ar-rafi -']} 
          velocity={100}
          className={`text-[#131313]    uppercase  font-thin text-[50vw] md:text-[25vw] lg:text-[15vw] tracking-[-0.8rem] leading-[90%] font-ppregular`}
        />
  </div>
      
      
        <p className={`lg:text-[1rem] absolute transform  mx-auto  -translate-x-1/2 -translate-y-1/2 -z-10 font-ppbook right-1/2 left-1/2  bottom-0 text-[#f8f8f8] tracking-[.05rem] uppercase   w-full text-center leading-[17.6px]  text-[.8rem] `}>AN INDEPENDENT CREATIVE DESIGNER & <span className=" block  ">DEVELOPER BASED IN INDONESIA</span></p>
   </Container>

      
    )

}

import  Card  from "@/components/Card";


export default function Hero() {



    
    return(
  <>
   <section className=" w-full min-h-screen overflow-hidden ">
    <div className=" w-full h-full relative    ">

      <div className="w-full z-50 space-y-5 px-6  h-screen content-center  max-w-7xl m-auto  ">
       <h1 className="font-bold leading-[3.4rem]  text-[2.4rem]"><span>WEB & MOBILE</span><span className="block">DESIGN EXPERT</span></h1>
       <p className=" leading-8 line-clamp-4">Hello there, I am Jaykay  – a product designer specializing in web and mobile apps for FinTech, eCommerce, and SaaS. I craft user-focused designs that drive conversions and resonate with audiences. Currently based in Lagos, Dubai, London  Manchester, UK.</p>
      </div>
   {/* <Card    /> */}
    </div>
   </section>
  </>
    )

}
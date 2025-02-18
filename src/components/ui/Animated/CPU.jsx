import React from "react"




const Connecttors = (props) => {
    const {  length, variants = "-top-[10px]  gap-[18px]  ", boxShadow = "0 2px 2px 1px rgba(0, 0, 0, .02), inset 0 -1px 1px 1px rgba(0, 0, 0, .1), inset 0 -1px 1px #dddddd",linear = "linear-gradient(180deg, #787878, #6b6b6b 33.33%, #8b8b8b 66.67%, #303030)" ,    variant = "w-[6px] h-[10px]  " } = props
    return ( 
        <div className={`flex ${variants} absolute   ` }   >
        {Array.from({ length: `${length}` }, (_, i) => 
        <span  key={i} style={{
    background: `${linear}`,
    boxShadow: `${boxShadow}`
        }} className={`bg-white  flex   ${variant}   `}>
  
        </span>
    )}
            </div>

    )}





export default function Cpu() {
   return(
   


<div 
 className="poweredby translate-y-[2px] md:translate-y-[8px] flex items-center justify-center content-center  tracking-[-0.04em]  py-[15px] px-[21px] relative border-inherit md:py-[21px] md:px-[25px]  text-[20px] md:text-[24px] rounded-[8px] font-bold text-center w-fit m-auto  bg-[linear-gradient(180deg,#232323,#222222),linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.05)_26.56%,rgba(0,0,0,0.05)_51.56%,rgba(0,0,0,0.05))] ">
     

     <div className="poweredby2 "></div>
  
  <Connecttors  length="6"  />
    
  <Connecttors  boxShadow="0 2px 2px 1px rgba(0, 0, 0, .05), inset 1px 0 1px 1px rgba(0, 0, 0, .1), inset 1px 0 1px #dddddd" linear="linear-gradient(1turn, #6f6f6f, #878787 33.33%, #8b8b8b 66.67%, #4d4d4d)"   length="2"  variants="flex-col -left-[10px] gap-[14px]"  variant="w-[10px] h-[6px]" />
    
   
    
    <span     style={{
          textShadow: "0 0 10px rgba(255, 255, 255, 0.1), 0 -1px 0 rgba(0, 0, 0, 0.1)",
             background: "linear-gradient(92.66deg, #919191, #eaeaea 19.79%, #828181 33.33%, #c6c6c6 70.31%, #606060)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }} >Powered By</span>
      
    <Connecttors variants=" -bottom-[10px]  gap-[18px] "  space="18" length="6"  />



    <Connecttors  boxShadow="0 2px 2px 1px rgba(0, 0, 0, .05), inset -1px 0 1px 1px rgba(0, 0, 0, .1), inset -1px 0 1px #dddddd" 
    linear="linear-gradient(1turn, #6f6f6f, #878787 33.33%, #8b8b8b 66.67%, #4d4d4d)"  length="2"   variants="flex-col -right-[10px] gap-[14px]"   variant="w-[10px] h-[6px]" />
    
    </div>  
        
   )

}

import AnimatedContent from "../../../../Animation/AnimatedContent";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
export const Card = ({
    i,
    title,
    color,
    tech,
    description,
    images,
    Web,
    Code
  }) => {
    

    return (
      <AnimatedContent
      distance={150}
      direction="vertical"
      reverse={false}
      config={{ tension: 80, friction: 20 }}
      initialOpacity={0.2}
      animateOpacity
      scale={0.9}
      key={i}
      threshold={0.2}>
  <div className="project-card flex w-full flex-row">
  <div className="flex flex-col lg:mx-10 lg:w-full">
  <Link href={Web ? Web : '/'} target={Web ? '_blank' : ''} className='pointer-events-none view relative cursor-pointer overflow-hidden rounded-2xl border border-white/15 bg-[#c535350c] p-1.5 shadow-2xl md:pointer-events-auto lg:h-[560px] lg:rounded-3xl lg:p-2'>
   <div className="absolute inset-x-0 top-0 h-px" 
  style={{ background:"linear-gradient(90deg, rgba(0, 0, 0, 0) 5%, rgba(255, 255, 255, 0.8) 35%, rgb(255, 255, 255) 50%, rgba(255, 255, 255, 0.8) 65%, rgba(0, 0, 0, 0) 95%"}}
  
  />

  <div
  
  className="group relative flex size-full flex-col items-center justify-between bg-gradient-to-b from-black/20 to-transparent  overflow-hidden rounded-xl lg:rounded-2xl  transition-all duration-300"
  

  
  >
  <div className={`absolute inset-0 -z-1 bg-${color}-700`}></div>
  <div className="absolute inset-x-0 top-px z-10 h-[0.8px] opacity-70" style={{background:"linear-gradient(90deg, rgba(0, 0, 0, 0) 20%, rgb(255, 255, 255) 50%, rgba(0, 0, 0, 0) 80%)"}}></div>
  <div className="hidden w-full flex-row items-center justify-between px-12 py-8 opacity-85 lg:flex">
    <h3 className="max-w-[90%] font-medium tracking-tight   text-xl line-clamp-2 ">{description}</h3>
    <ArrowRight  className="size-6"/>
    {/* <svg xmlns="http://www.w3.org/2000/svg"  width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"  className="lucide lucide-arrow-right size-6"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg> */}
    </div>
  <Image  width={1203} height={753} alt={title} src={`${images}`} style={{color:'transparent'}} loading='lazy' className='lg:group-hover:translsate-y-10 w-full max-w-[85%] translate-y-5 -rotate-3 rounded-t-lg shadow-[0_35px_60px_-15px_rgba(0,0,0,1)] transition-all duration-300 will-change-transform  lg:block lg:rotate-0 lg:group-hover:scale-[1.08] lg:group-hover:-rotate-3'/>
  
  
  </div>
  </Link>
  <div className="mt-6 mb-14 lg:mb-24 flex flex-col px-2 lg:hidden">
    <article>
  <header className="flex items-center">
  <h3 className="my-auto line-clamp-1 text-lg font-bold">{title}</h3>
  <div aria-hidden="true" className={`ml-3 h-1 min-w-6 rounded-full bg-${color}-600`}></div>
  </header>
  <p className='text-muted-foreground mt-2 text-sm line-clamp-3'>{description}</p>
  <ul className="my-4 flex max-w-fit flex-wrap items-center gap-1">
  
  

{tech.map((stack,i) => {

return(

<li
key={i}
className={`inline rounded-sm border-white/[0.34] px-1.5 py-[3px] text-xs fill-${color}-600 text-${color}-400 bg-${color}-600/20 lg:bg-black`}>{stack}</li>
)

})}
      
  
       
    </ul>
    </article>
  <footer className="flex w-full gap-4 ">
    <Link href={Code ? Code : '/'} target={Code ? '_blank' : ''} rel='noopener noreferrer' className="relative flex h-fit w-1/2 items-center justify-center text-sm tracking-tighter gap-2 rounded-xl bg-neutral-900 px-5 py-2 shadow-[inset_0_2px_10px_#ffffff1f]"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github size-4"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>Source code</Link>
    <Link href={Web ? Web : ''} 
    aria-disabled={!Web} target={Web ? '_blank' : ''} 
    rel="noopener noreferrer" 
    className={` ${ !Web ? 'pointer-events-none text-white/50' : ''    }  relative flex h-fit w-1/2 text-sm tracking-tighter items-center
     justify-center gap-2 rounded-xl bg-neutral-900 px-5 py-2 shadow-[inset_0_2px_10px_#ffffff1f]
      after:inset-0 after:bg-black/50 `}>
        {/* <svg xmlns="http://www.w3.org/2000/svg" width={24}height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link size-4 "><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg */}
<ExternalLink width={24} height={24} className={`size-4 ${!Web ? 'hidden' : '' } `} />
    {Web ? 'Website' : 'Coming Soon'}
    </Link>
  </footer>
  </div> 

  </div>
   </div>




   
      </AnimatedContent>
    );
  };
  
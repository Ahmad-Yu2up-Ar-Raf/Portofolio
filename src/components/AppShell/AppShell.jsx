
'use client'

import Header from "../ui/layout/Header";
import Cursors from "../ui/Cursor/link";
// import Footer from "../ui/layout/Footer";
import { useSessionState } from "@/hooks/StateContext";
import Preloader2 from "../Preload";
import { useMediaQuery } from "@/hooks/lib/use-media-query";
import { useRouter } from "next/router"

export function useFirstVisitHome() {
  const { isFirstVisit } = useSessionState();
    const isMobile = useMediaQuery("(max-width: 768px)")
  if (typeof window === 'undefined') return false;
  return isFirstVisit || !isMobile;
}



const disable = ["/_error", "/404"]


export default function AppShell(props) {


  const { pathname } = useRouter()



 






  const { children, cla } = props;
  return (
    <div 
    
    id="AppShell"
    role="wrapper"
    className={`${cla}   relative w-full h-full`}>


  {  useFirstVisitHome()  && !disable.includes(pathname) && <Preloader2 /> }
      

  { !disable.includes(pathname) && <Header/>}
      <main >
      {children}
        <Cursors />
      </main>
    {/* <Footer/> */}
    </div>
  );
}


'use client'

import Header from "../ui/layout/Header";
import Cursors from "../ui/Cursor/link";
// import Footer from "../ui/layout/Footer";
import { useEffect,useState } from "react";
import { useSessionState } from "@/hooks/StateContext";
import Preloader2 from "../Preload";
import useMobile from "@/hooks/use-mobile";


export function useFirstVisitHome() {
  const { isFirstVisit } = useSessionState();
  const isMobile = useMobile(768)
  if (typeof window === 'undefined') return false;
  return isFirstVisit && !isMobile;
}






export default function AppShell(props) {


  
useEffect(() => {
    if (typeof window !== 'undefined') {
    
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'instant' 
        });
      }, 0);
    }
  }, []);
 






  const { children, cla } = props;
  return (
    <div 
    
    id="AppShell"
    role="wrapper"
    className={`${cla}  relative w-full h-full`}>


  {  useFirstVisitHome()  ? <Preloader2 /> : null}
      

 <Header/>
      <main >
      {children}
        <Cursors />
      </main>
    {/* <Footer/> */}
    </div>
  );
}

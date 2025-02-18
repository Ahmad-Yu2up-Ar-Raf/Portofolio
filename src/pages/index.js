'use client';
import  Card  from "@/components/ui/Card";

import Project from '../components/ui/section/Project'
import Stacks from '../components/ui/section/Stacks'
import Preloader from '../components/Preloader';
import  Hero from '@/components/ui/section/Hero'
// import About from "@/components/ui/about";

export default function Home() {

  return (

    <Preloader>


    {/* <Card    /> */}

  <Hero/>

{/* <About/> */}
   <Project/>

   <Stacks/>
     


    </Preloader>
  );
}

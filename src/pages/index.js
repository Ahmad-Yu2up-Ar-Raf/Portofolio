'use client';
import  Card  from "@/components/Card";

import Project from '../components/ui/Project'
import Stacks from '../components/ui/Stacks'
import Preloader from '../components/Preloader';
import  Hero from '@/components/ui/Hero'


export default function Home() {

  return (

    <Preloader>


    {/* <Card    /> */}

  <Hero/>


   <Project/>

   <Stacks/>
     


    </Preloader>
  );
}

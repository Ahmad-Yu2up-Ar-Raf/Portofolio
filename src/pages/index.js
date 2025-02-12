'use client';
import  Card  from "@/components/ui/Card";

import Project from '../components/ui/Section/Project'
import Stacks from '../components/ui/Section/Stacks'
import Preloader from '../components/Preloader';
import  Hero from '@/components/ui/Section/Hero'


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

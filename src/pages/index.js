'use client';
import  Card  from "@/components/Card";

import Project from '../components/ui/Project'
import Stacks from '../components/ui/Stacks'
import Preloader from '../components/Preloader';
import  Hero from '@/components/ui/Hero'
import DelayedComponent from "@/components/Delay";

export default function Home() {

  return (

    <Preloader>

    <DelayedComponent>
    <Card    />

    </DelayedComponent>


   <Project/>

   <Stacks/>
     


    </Preloader>
  );
}

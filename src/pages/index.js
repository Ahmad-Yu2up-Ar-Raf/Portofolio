'use client';


import Project from '../components/ui/section/Project'
import Stacks from '../components/ui/section/Stacks'
import Preloader from '../components/Preloader';
import  Hero from '@/components/ui/section/Hero'
// import About from "@/components/ui/about";

export default function Home() {

  return (



<Preloader>

<Hero/>


<Project/>

<Stacks/>
  
</Preloader>







  );
}

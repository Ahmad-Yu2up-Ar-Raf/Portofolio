import Project from '../components/ui/section/Project'
import Stacks from '../components/ui/section/Stacks'
import Hero from '@/components/ui/section/Hero'
import Service from '@/components/ui/Section/Services';
import About from '@/components/ui/Section/About';


export default function Home() {
  return (

      <main >
      
        <Hero/>
        <About/>
        <Service/>
        <Project/>
        <Stacks/>
      </main>

  );
}

import Project from '../components/ui/section/Project'
import Stacks from '../components/ui/section/Stacks'
import Hero from '@/components/ui/section/Hero'
import Service from '@/components/ui/Section/Services';
import About from '@/components/ui/Section/About';
import { useMediaQuery } from '@/hooks/lib/use-media-query';
import Head from 'next/head';

export default function Home() {
  const isMobile = useMediaQuery("(max-width: 768px)")
  return (
    <>
      <Head>
        <title>Ahmad Yusuf Ar-Rafi | Web Developer & Designer from Indonesia</title>
        <link rel="canonical" href="https://ahmadyusufarrafi.id/" />
        <meta name="description" content="Web developer & designer from Bogor, Indonesia specializing in creating stunning and functional websites with Next.js and React." />
      </Head>
      <section >
        <Hero/>
        <About/>
       {!isMobile &&  <Service/>}
        <Project/>
        <Stacks/>
      </section>
    </>
  );
}

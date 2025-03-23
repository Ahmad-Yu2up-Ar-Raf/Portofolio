import Project from '@/components/ui/Section/Project'
import StacksSection from '@/components/ui/Section/Stacks';
import Hero from '@/components/ui/Section/Hero'
import Service from '@/components/ui/Section/Services';
import About from '@/components/ui/Section/About';
import { useMediaQuery } from '@/hooks/lib/use-media-query';
import Head from 'next/head';

export default function Home() {
  const isMobile = useMediaQuery("(max-width: 1024px)")
  return (
    <>
      <Head>
        <title>Ahmad Yusuf Ar-Rafi | Web Developer & Designer from Indonesia</title>
        <link rel="canonical" href="https://yusufffffffffff.vercel.app/" />
        <meta name="description" content="Web developer & designer from Bogor, Indonesia specializing in creating stunning and functional websites with Next.js and React." />
      </Head>
      <section >
        <Hero/>
        <About/>
       {!isMobile &&  <Service/>}
        <Project/>
        <StacksSection/>
      </section>
    </>
  );
}

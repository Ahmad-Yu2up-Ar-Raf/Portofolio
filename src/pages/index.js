import Project from '@/components/ui/Section/Project'
import StacksSection from '@/components/ui/Section/Stacks';
import Hero from '@/components/ui/Section/Hero'
import Service from '@/components/ui/Section/Services';
import About from '@/components/ui/Section/About';
import { useMediaQuery } from '@/hooks/lib/use-media-query';
import Head from 'next/head';

export default function Home() {
  const isMobile = useMediaQuery("(max-width: 1024px)")
  
  // Create structured data directly in the component
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "headline": "Ahmad Yusuf Ar-Rafi | Web Developer & Designer from Indonesia",
    "description": "Web developer & designer from Bogor, Indonesia specializing in creating stunning and functional websites with Next.js and React.",
    "datePublished": "2023-08-28",
    "dateModified": "2024-06-29",
    "author": {
      "@type": "Person",
      "name": "Ahmad Yusuf Ar-Rafi",
      "url": "https://www.yusuffff.my.id/"
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "Web Design",
        "description": "Custom website design services with modern aesthetics and functionality"
      },
      {
        "@type": "Offer",
        "name": "Web Development",
        "description": "Full-stack development with React, Next.js and modern web technologies"
      },
      {
        "@type": "Offer", 
        "name": "AI Integration",
        "description": "Implementing AI solutions for enhanced website functionality"
      },
      {
        "@type": "Offer",
        "name": "SEO Optimization",
        "description": "Search engine optimization to improve website visibility"
      }
    ]
  };
  
  return (
    <>
      <Head>
        <title>Ahmad Yusuf Ar-Rafi | Web Developer & Designer from Indonesia</title>
        <link rel="canonical" href="https://www.yusuffff.my.id/" />
        <meta name="description" content="Web developer & designer from Bogor, Indonesia specializing in creating stunning and functional websites with Next.js and React." />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="keywords" content="web developer bogor, frontend developer indonesia, react developer, nextjs portfolio, web design indonesia" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
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

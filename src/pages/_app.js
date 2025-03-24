import '@/styles/globals.css'
import AppShell from '@/components/AppShell/AppShell';
import Head from 'next/head';
import { Analytics } from "@vercel/analytics/react"
import { SessionStateProvider } from '@/hooks/StateContext';
import ReactLenis from 'lenis/react'
import { fontVariables } from '@/hooks/Font';

export default function App({ Component, pageProps, router }) {
    

    return (
    
          <SessionStateProvider>
                <Head>
                    {/* Essential Meta Tags */}
                    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
                    <meta name="description" content="Ahmad Yusuf Ar-Rafi - Web Developer & Designer from Indonesia specializing in modern web technologies." />
                    <meta name="keywords" content="web developer, designer, indonesia, bogor, nextjs, react, ui designer, portfolio, software engineering, student developer" />
                    <meta name="author" content="Ahmad Yusuf Ar-Rafi" />
                    <meta name="theme-color" content="#000000" />
                    <meta name="msapplication-TileColor" content="#000000" />
                    <meta name="mobile-web-app-capable" content="yes" />
                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

                    {/* Open Graph Protocol */}
                    <meta property="og:title" content="Ahmad Yusuf Ar-Rafi | Web Developer & Designer" />
                    <meta property="og:description" content="Creative web developer from Indonesia specializing in Next.js and React." />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://www.yusuffff.my.id/" />
                    <meta property="og:image" content="https://www.yusuffff.my.id/og-image.jpg" />
                    <meta property="og:image:alt" content="Ahmad Yusuf Ar-Rafi - Web Developer" />
                    <meta property="og:image:width" content="1200" />
                    <meta property="og:image:height" content="630" />
                    <meta property="og:site_name" content="Ahmad Yusuf Ar-Rafi Portfolio" />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:locale:alternate" content="id_ID" />

                    {/* Twitter Card */}
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content="Ahmad Yusuf Ar-Rafi | Web Developer & Designer" />
                    <meta name="twitter:description" content="Creative web developer from Indonesia specializing in Next.js and React." />
                    <meta name="twitter:image" content="https://www.yusuffff.my.id/og-image.jpg" />
                    <meta name="twitter:creator" content="@a_yu2up_a_r" />
                    <meta name="twitter:site" content="@a_yu2up_a_r" />

                    {/* Internationalization */}
                    <link rel="alternate" hrefLang="en" href="https://www.yusuffff.my.id/" />
                    <link rel="alternate" hrefLang="id" href="https://www.yusuffff.my.id/" />
                    <link rel="alternate" hrefLang="x-default" href="https://www.yusuffff.my.id/" />

                    {/* Geo Meta Tags */}
                    <meta name="geo.region" content="ID-JB" />
                    <meta name="geo.placename" content="Bogor" />
                    <meta name="geo.position" content="-6.5971;106.8060" />
                    <meta name="ICBM" content="-6.5971, 106.8060" />

                    {/* Link Tags */}
                    <link rel="canonical" href={`https://www.yusuffff.my.id${router.asPath === '/' ? '' : router.asPath}`} />
                    <link rel="icon" href="/favicon.ico" />
                
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                </Head>
                <Analytics/>
                <ReactLenis root>
                    <AppShell cla={`${fontVariables} font-montserrat`}> 
                     
                            <Component key={router.route} {...pageProps} />
                       
                    </AppShell>
                </ReactLenis>
          </SessionStateProvider>
           
        
    )
}
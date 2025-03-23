import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" suppressHydrationWarning>
      <Head>
      <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Six+Caps:wght@400&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100..900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
        <meta charSet="utf-8" />
        {/* Person Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Ahmad Yusuf Ar-Rafi",
              "url": "https://ahmadyusufarrafi.id",
              "jobTitle": "Web Developer",
              "description": "Creative web developer from Bogor, Indonesia specializing in Next.js and modern web technologies",
              "knowsAbout": ["Web Development", "React", "Next.js", "Tailwind CSS", "JavaScript"],
              "nationality": "Indonesian",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bogor",
                "addressCountry": "Indonesia"
              },
              "sameAs": [
                "https://github.com/Ahmad-Yu2up-Ar-Raf",
                "https://www.instagram.com/a.yu2up.a.r/",
                "https://www.linkedin.com/in/ahmad-yusuf-ar-rafi-9b85b8323/"
              ],
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "Pesat Informatics Vocational School",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Bogor",
                  "addressCountry": "Indonesia"
                }
              },
              "workLocation": {
                "@type": "Place",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Bogor",
                  "addressCountry": "Indonesia"
                }
              }
            })
          }}
        />
        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Ahmad Yusuf Ar-Rafi Portfolio",
              "url": "https://ahmadyusufarrafi.id",
              "description": "Personal portfolio of Ahmad Yusuf Ar-Rafi, a web developer and designer from Indonesia",
              "inLanguage": ["en-US", "id-ID"],
              "author": {
                "@type": "Person",
                "name": "Ahmad Yusuf Ar-Rafi"
              },
              "copyrightYear": new Date().getFullYear(),
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://ahmadyusufarrafi.id/search?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        {/* Portfolio Projects as CreativeWork */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "item": {
                    "@type": "CreativeWork",
                    "name": "Expro Travel",
                    "creator": {
                      "@type": "Person",
                      "name": "Ahmad Yusuf Ar-Rafi"
                    },
                    "url": "https://github.com/Ahmad-Yu2up-Ar-Raf/Travel-Website",
                    "description": "Comprehensive fullstack travel booking platform with curated travel packages.",
                    "keywords": "travel booking, PHP, JavaScript, web development"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "item": {
                    "@type": "CreativeWork",
                    "name": "LiveUp",
                    "creator": {
                      "@type": "Person",
                      "name": "Ahmad Yusuf Ar-Rafi"
                    },
                    "url": "https://liveup-host.vercel.app/",
                    "description": "Platform dedicated to connecting people with disabilities to meaningful job opportunities.",
                    "keywords": "accessibility, job platform, tailwind css, alpine.js"
                  }
                }
              ]
            })
          }}
        />
      </Head>
      <body className="antialiased ">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

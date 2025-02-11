
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="dark" lang="en">
      <Head>

      <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
      </Head>
  
      <body className="antialiased min-h-[200em]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

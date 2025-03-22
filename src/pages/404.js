import Head from 'next/head';
import Link from 'next/link';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Page Not Found | Ahmad Yusuf Ar-Rafi</title>
        <meta name="description" content="The page you are looking for does not exist. Return to Ahmad Yusuf Ar-Rafi's portfolio homepage." />
        <meta name="robots" content="noindex, follow" />
      </Head>
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl mb-8">Page not found</p>
        <Link href="/" className="px-6 py-3 bg-white text-black rounded-md hover:bg-gray-200 transition">
          Return Home
        </Link>
      </div>
    </>
  );
} 
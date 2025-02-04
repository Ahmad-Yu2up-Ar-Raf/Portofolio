import '@/styles/globals.css'
import { AnimatePresence } from 'framer-motion'
// 
import Header from '../components/Header';
import '../components/Preloader/style.scss';


export default function App({ Component, pageProps, router }) {
    return (
        <div className='main'>
             {/* <div className='header'>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
            </div> */}
             <Header />
            <AnimatePresence mode='wait'>
                <Component key={router.route} {...pageProps} />
            </AnimatePresence>
        </div>
    )
}
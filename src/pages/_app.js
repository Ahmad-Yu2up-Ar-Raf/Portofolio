


import '@/styles/globals.css'
import AppShell from '@/components/AppShell/AppShell';
import { AnimatePresence } from 'framer-motion'
import '../components/Preloader/style.scss';



export default function App({ Component, pageProps, router }) {
    return (
        <AppShell>

            <AnimatePresence mode='wait'>
                <Component key={router.route} {...pageProps} />
            </AnimatePresence>
        </AppShell>
    )
}
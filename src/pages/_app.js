


import '@/styles/globals.css'
import AppShell from '@/components/AppShell/AppShell';
import { AnimatePresence } from 'framer-motion'
import '../components/Preloader/style.scss';
import { ThemeProvider } from '@/components/hook/theme-provider';
import { SessionStateProvider } from '@/context/StateContext';

export default function App({ Component, pageProps, router }) {
    return (
        <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <SessionStateProvider>

        <AppShell>

            <AnimatePresence mode='wait'>
                <Component key={router.route} {...pageProps} />
            </AnimatePresence>
        </AppShell>
        </SessionStateProvider>
        </ThemeProvider >
    )
}
import '@/styles/globals.css'
import AppShell from '@/components/AppShell/AppShell';
import { AnimatePresence } from 'framer-motion'

import { ThemeProvider } from '@/hooks/theme-provider';
import { SessionStateProvider } from '@/hooks/StateContext';
import ReactLenis from 'lenis/react'
import { fontVariables } from '@/hooks/Font';

export default function App({ Component, pageProps, router }) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
            <SessionStateProvider>
                <ReactLenis root>
                    <AppShell cla={`${fontVariables} font-montserrat`}> 
                        <AnimatePresence mode='wait'>
                            <Component key={router.route} {...pageProps} />
                        </AnimatePresence>
                    </AppShell>
                </ReactLenis>
            </SessionStateProvider>
        </ThemeProvider>
    )
}
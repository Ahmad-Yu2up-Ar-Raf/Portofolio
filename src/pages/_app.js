


import '@/styles/globals.css'
import AppShell from '@/components/AppShell/AppShell';
import { AnimatePresence } from 'framer-motion'
import '../components/Preloader/style.scss';
import { ThemeProvider } from '@/components/hook/theme-provider';
import { SessionStateProvider } from '@/context/StateContext';
import Cursors from '../components/ui/core/Cursor'
import SpotlightCursor from '@/components/ui/Cursor';
import ReactLenis from 'lenis/react'
export default function App({ Component, pageProps, router }) {
    return (
        <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
       
<SessionStateProvider>
          <ReactLenis root >
        <AppShell >
            <AnimatePresence mode='wait'>
                <Component key={router.route} {...pageProps}  />
            </AnimatePresence>
        </AppShell>
        <Cursors/>
          </ReactLenis>
          </SessionStateProvider>
      
        </ThemeProvider >
    )
}
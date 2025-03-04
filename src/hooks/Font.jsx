import localFont from "next/font/local";
import { Montserrat, Outfit } from 'next/font/google';

export const pp = localFont({
    src: "../../public/Fonts/ppneuemontreal-medium.otf",
    variable: "--font-ppmedium",
    display: "swap",
});
export const pps = localFont({
    src: "../../public/Fonts/ppneuemontreal-book.otf",
    variable: "--font-ppre",
    display: "swap",
});

export const ppw = localFont({
    src: "../../public/Fonts/NeueMontreal-Regular.otf",
    variable: "--font-ppregular",
    display: "swap",
});

export const NyghtSerif = localFont({
    src: "../../public/Fonts/NyghtSerif-MediumItalic.woff",
    variable: "--font-nyghtserif",
    display: "swap",
});

export const montserrat = Montserrat({
    subsets: ['latin'],
    variable: '--font-montserrat',
    display: 'swap',
});

export const outfit = Outfit({
    subsets: ['latin'],
    variable: '--font-outfit',
    display: 'swap',
});


export const fontVariables = `${montserrat.variable} ${outfit.variable} ${pp.variable} ${ppw.variable} ${NyghtSerif.variable} ${pps.variable}`;
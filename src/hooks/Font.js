import localFont from "next/font/local";
import { Montserrat, Six_Caps, Inter, Outfit} from 'next/font/google';

export const pp = localFont({
    src: "../../public/Assets/Fonts/ppneuemontreal-medium.otf",
    variable: "--font-ppmedium",
    display: "swap",
});

export const pps = localFont({
    src: "../../public/Assets/Fonts/ppneuemontreal-book.otf",
    variable: "--font-ppre",
    display: "swap",

});
export const Degular = localFont({
    src: "../../public/Assets/Fonts/fonnts.com-DegularDemo-Bold.otf",
    variable: "--font-degular",
    display: "swap",

});

export const ppw = localFont({
    src: "../../public/Assets/Fonts/NeueMontreal-Regular.otf",
    variable: "--font-ppregular",
    display: "swap",
});



 export const montserrat = Montserrat({
    subsets: ['latin'],
    variable: "--font-montserrat",
    display: "swap",
 })
 export const outfit = Outfit({
    subsets: ['latin'],
    variable: "--font-outfit",
    display: "swap",
 })
 export const inter = Inter({
    subsets: ['latin'],
    variable: "--font-inter",
    display: "swap",
 })


 export const SixCaps = Six_Caps({
    subsets: ['latin'],
    variable: '--Six-Cap',
    display: 'swap',
   weight: "400"
 })

export const fontVariables = `${montserrat.variable} ${outfit.variable} ${pp.variable} ${Degular.variable} ${inter.variable}  ${ppw.variable} ${pps.variable}  ${SixCaps.variable}   `;
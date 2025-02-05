'use client';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from './style.module.scss';
import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import Nav from './nav';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Rounded from '../../common/RoundedButton';
import Magnetic from '../../common/Magnetic';
import Link from 'next/link';
export default function index() {
    const header = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const pathname = usePathname();
    const button = useRef(null);

    useEffect( () => {
      if(isActive) setIsActive(false)
    }, [pathname])


function toggleButtonScale(isActive) {
  gsap.to(button.current, {
    scale: isActive ? 1 : 0,
    duration: 0.25,
    ease: "power1.out",
  });
  setIsActive(isActive); // Update state
}

    
    useLayoutEffect( () => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.to(button.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                start: 0,
                end: window.innerHeight,
                onLeave: () => {gsap.to(button.current, {scale: 1, duration: 0.25, ease: "power1.out"})},
                onEnterBack: () => {gsap.to(button.current, {scale: 0, duration: 0.25, ease: "power1.out"},setIsActive(false))}
            }
        })
    }, [])

    return (
        <>
        <div ref={header} className={`${styles.header}`}>
        <Magnetic>
 <Link href={'/'}>
            <div className={styles.logo}>
                <p className={styles.copyright}>©</p>
                <div className={styles.name}>
                    <p className={styles.codeBy}>Code by</p>
                    <p className={styles.dennis}>Ahmad</p>
                    <p className={styles.snellenberg}>Yusuf Ar-Rafi</p>
                </div>
            </div>
 </Link>
        </Magnetic>
            <div className={`${styles.nav}  hidden md:flex` }>
                <Magnetic>
                    <div className={styles.el}>
                        <Link href={'/'}>Work</Link>
                        <div className={styles.indicator}></div>
                    </div>
                </Magnetic>
                <Magnetic>
                    <div className={styles.el}>
                        <Link href={'/about'}>About</Link>
                        <div className={styles.indicator}></div>
                    </div>
                </Magnetic>
                <Magnetic>
                    <div className={styles.el}>
                        <Link href={'/contact'}>Contact</Link>
                        <div className={styles.indicator}></div>
                    </div>
                </Magnetic>
             
            </div>
            <div className='md:hidden'>

            <Magnetic>
                
                    <button  onClick={() => {setIsActive(!isActive)}} className={`${styles.el} flex items-center space-x-4`}>
                        <div className='size-1.5 bg-white rounded-full'></div>
                        <a>Menu</a>
                    </button>
                </Magnetic>
            </div>
        </div>
        <div ref={button} className={styles.headerButtonContainer}>
            <Rounded onClick={() => {setIsActive(!isActive)}} className={`${styles.button} size-16 md:size-20`}>
                <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
            </Rounded>
        </div>
        <AnimatePresence mode="wait">
            {isActive && <Nav />}
        </AnimatePresence>
        </>
    )
}
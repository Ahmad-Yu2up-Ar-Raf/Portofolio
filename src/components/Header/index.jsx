// 'use client';
// import { useEffect, useLayoutEffect, useRef, useState } from 'react';
// import styles from './style.module.scss';
// import { usePathname } from 'next/navigation';
// import { AnimatePresence } from 'framer-motion';
// import Nav from './nav';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
// import Rounded from '../../common/RoundedButton';
// import Magnetic from '../../common/Magnetic';
// import Link from 'next/link';
// import Footer from '../Footer';
import { DockDemo } from "../combine/Magnifier";
export default function index() {
  return (
    // <div className="">

    // </div>
    <div className="fixed md:px-6 md:sticky  md:flex md:items-center md:bottom-0 md:justify-between md:top-6    bottom-4 w-full    z-50">
      <div className="hidden md:inline-flex md:text-sm">
        <h1>Asia/Jakarta</h1>
      </div>
      <DockDemo />
      <div className="hidden md:inline-flex md:text-sm">
        <h1>Asia/Jakarta</h1>
      </div>
    </div>
  );
}

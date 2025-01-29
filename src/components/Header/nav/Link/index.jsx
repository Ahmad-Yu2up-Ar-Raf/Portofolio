import styles from './style.module.scss';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { slide, scale } from '../../animation';
import Magnetic from '../../../../common/Magnetic';
export default function Index({data, isActive, setSelectedIndicator}) {
  
    const { title, href, index} = data;
  
    return (
      <Magnetic >

      <motion.div 
        className={`${styles.link} md:w-fit `} 
        onMouseEnter={() => {setSelectedIndicator(href)}} 
        custom={index} 
        variants={slide} 
        initial="initial" 
        animate="enter" 
        exit="exit"
      >
        <motion.div 
          variants={scale} 
          animate={isActive ? "open" : "closed"} 
          className={`${styles.indicator} right-6 md:-left-[35px]`}>
        </motion.div>
        <Link href={href}>{title}</Link>
      </motion.div>
      </Magnetic>
    )
}
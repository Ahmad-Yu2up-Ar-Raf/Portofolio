import { motion } from 'framer-motion';
import Link from 'next/link';
import { blur, translate } from '../../anim';

export default function Body({links, selectedLink, setSelectedLink}) {
    const getChars = (word) => {
        let chars = [];
        word.split("").forEach((char, i) => {
          chars.push(
            <motion.span 
                custom={[i * 0.02, (word.length - i) * 0.01]} 
                variants={translate} 
                initial="initial" 
                animate="enter" 
                exit="exit" 
                key={char + i}
            >
                {char}
            </motion.span>
          )
        })
        return chars;
    }
    
    return (
        <ul className="flex flex-col h-fit  mb-[3rem]  mt-[9rem] items-center justify-center">
            {links.map((link, index) => {
                const { title, href } = link;
                return (
                    <li key={`l_${index}`}>
                        <Link 
                            scroll={false}
                            href={href}
                            className="text-white h-fit uppercase"
                        >
                            <motion.h5
                                onMouseOver={() => {setSelectedLink({isActive: true, index})}} 
                                onMouseLeave={() => {setSelectedLink({isActive: false, index})}} 
                                variants={blur} 
                                animate={selectedLink.isActive && selectedLink.index != index ? "open" : "closed"}
                                className=" flex  font-ppregular  h-fit overflow-hidden text-[1.8rem]   md:text-[2.2rem]   lg:text-[2.67rem] "
                            >
                                {getChars(title)}
                            </motion.h5>
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}
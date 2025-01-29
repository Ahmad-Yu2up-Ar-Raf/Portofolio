'use client';
import { ReactLenis } from 'lenis/react';
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { ArrowRight} from "lucide-react";

const projects = [
  {
    title: 'Matthias Leidinger',
    description:
      'Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.',
    src: 'rock.jpg',
    link: 'https://images.unsplash.com/photo-1605106702842-01a887a31122?q=80&w=500&auto=format&fit=crop',
    color: '#382080',
  },
  {
    title: 'Clément Chapillon',
    description:
      'This is a story on the border between reality and imaginary, about the contradictory feelings that the insularity of a rocky, arid, and wild territory provokes”—so French photographer Clément.',
    src: 'tree.jpg',
    link: 'https://images.unsplash.com/photo-1605106250963-ffda6d2a4b32?w=500&auto=format&fit=crop&q=60',
    color: '#131f2b',
  },
  {
    title: 'Zissou',
    description:
      'Though he views photography as a medium for storytelling, Zissou’s images don’t insist on a narrative. Both crisp and ethereal.',
    src: 'water.jpg',
    link: 'https://images.unsplash.com/photo-1605106901227-991bd663255c?w=500&auto=format&fit=crop',
    color: '#69081a',
  },
  {
    title: 'Mathias Svold and Ulrik Hasemann',
    description:
      'The coastlines of Denmark are documented in tonal colors in a pensive new series by Danish photographers Ulrik Hasemann and Mathias Svold; an ongoing project investigating how humans interact with and disrupt the Danish coast.',
    src: 'house.jpg',
    link: 'https://images.unsplash.com/photo-1605106715994-18d3fecffb98?w=500&auto=format&fit=crop&q=60',
    color: '#147536',
  },
  {
    title: 'Mark Rammers',
    description:
      'Dutch photographer Mark Rammers has shared with IGNANT the first chapter of his latest photographic project, ‘all over again’—captured while in residency at Hektor, an old farm in Los Valles, Lanzarote.',
    src: 'cactus.jpg',
    link: 'https://images.unsplash.com/photo-1506792006437-256b665541e2?w=500&auto=format&fit=crop',
    color: '#b85d12',
  },
];
export default function index() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });
  return (
    <ReactLenis root>

      <main className="px-4   " ref={container}>
        <div className='max-w-[73rem] m-auto'>

        <>
          <section className="text-white  h-[70vh] pb-20  w-full  content-end ">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
         <div className='md:flex  space-y-3 md:items-center md:justify-between'>

            <h1 className=" text-xl  font-semibold  tracking-tight leading-[120%]">
            Featured Case Studie
            </h1>
            <div className="re flex items-center space-x-2 md:space-x-3">
  <span className="size-1 rounded-full bg-green-500 animate-ping "></span>
  <h1 className='text-sm text-customGray'>Available for new projects</h1>
</div>
         </div>
          </section>
        </>

        <section className="text-white   w-full   ">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                url={project?.link}
                src={project?.src}
                title={project?.title}
                color={project?.color}
                description={project?.description}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </section>
        </div>


      </main>
    </ReactLenis>
  );
}
export const Card = ({
  i,
  title,
  description,
  src,
  url,
  color,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);
  return (
    <div
      ref={container}
      className="h-full flex items-center justify-center sticky top-40"
    >
  
      <motion.div
        style={{
    
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={`flex flex-col group  transition-all ease-in-out duration-150 bg-gradient-to-t from-[#050a0a] to-[#051818] hover:from-[#05070a] hover:to-[#0b1a3b]  before:absolute before:inset-0 before:bg-[url('https://raw.githubusercontent.com/taimoorshahzada/Film-Grain-Noise-Effect-on-Background-in-Website-using-Pure-CSS/refs/heads/main/noise.gif')] before:opacity-5  cursor-pointer border  border-gray-600 group relative space-y-3  -top-[25%] lg:h-[120vh] h-[110vh] w-full rounded-2xl p-3 lg:p-5    origin-top`}
      >

        
        <div className='flex items-end border-b pt-3 border-customGray pb-4 justify-between'>
         
        <h2 className="text-base  font-semibold">2024</h2>
        <h2 className="text-sm  font-semibold">Mobile, Web, Website & Admin</h2>
        </div> 
        <div className='block space-y-5  lg:space-y-8'>

        <div className='flex justify-between text-3xl'>
          <h1  className='font-bold  lg:text-6xl'>

        Boosting Roqqu's Expansion Across Africa & Europe
          </h1>
        <span >

        <ArrowRight  className='size-8 lg:size-20 group-hover:-rotate-45 transition-all ease-in-out duration-100'/>
        </span>
        </div>
        <div className='space-y-5 lg:gap-10 lg:flex lg:space-y-0'>

        <div className='block space-y-2 lg:w-80'>
          <h1  className='font-bold  lg:text-3xl text-[22px]'>

        Over1m
          </h1>
        <p className='text-base font-medium'>

        Increase in user base, demonstrating significant growth and effectiveness
        </p>
        </div>
        <div className='block space-y-2 lg:w-80'>
          <h1  className='font-bold lg:text-3xl  text-[22px]'>

          35%
          </h1>
        <p className='text-base font-medium'>

        Increase in user base, demonstrating significant growth and effectiveness
        </p>
        </div>
        </div>
        {/* <div className='block '>
  
        <p className='text-base'>

        Increase in user base, demonstrating significant growth and effectiveness
        </p>
        
        </div> */}
        </div>
        <div className={` block h-full lg:pt-6 pt-5 relative rounded-b-2xl  overflow-hidden  space-y-7  `}>
          <div className={`w-full relative `}>
            <p className="text-base leading-5 font-medium">  Increase in user base, demonstrating significant growth and effectiveness</p>
       
          </div>

          <div
            className={`relative w-full h-full  rounded-2xl overflow-hidden `}
          >
            <motion.div
              className={`w-full h-full`}
              style={{ scale: imageScale }}
            >
              <Image fill src='https://framerusercontent.com/images/ZXVxrdjNY7pALFn5Ya6mbHGW0.png?scale-down-to=2048' alt="image" className="object-cover" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

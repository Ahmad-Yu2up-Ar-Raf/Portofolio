"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
const SmearCard = ({
  width = 200,
  height = 300,
  image = "Assets//Galery/Mantap.JPG",
  layers = 10,
  maxDelay = 0.2,
  borderRadius = 12,
}) => {
  const containerRef = useRef(null);
  const imagesRef = useRef(Array.from({ length: layers }, () => null));
  const cursor = useRef({ x: 0, y: 0 });
  const lastPosition = useRef({ x: 0, y: 0, rotation: 0 });
  const winsize = useRef({ width: 0, height: 0 });

  useEffect(() => {
    winsize.current = { width: window.innerWidth, height: window.innerHeight };
    cursor.current = { x: winsize.current.width / 2, y: winsize.current.height / 2 };

    const handleResize = () => {
      winsize.current = { width: window.innerWidth, height: window.innerHeight };
    };

    const handleMouseMove = (ev) => {
      cursor.current = { x: ev.clientX, y: ev.clientY };
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    const lerp = (a, b, n) => (1 - n) * a + n * b;
    const map = (x, a, b, c, d) => ((x - a) * (d - c)) / (b - a) + c;

    let animationFrame;
    const animate = () => {
      // Keep the wide movement range
      let targetX = map(cursor.current.x, 0, winsize.current.width, -250, 250);
      let targetY = map(cursor.current.y, 0, winsize.current.height, -250, 250);
      // Reduced rotation range from -25,25 to -10,10 for subtler tilt
      let targetRotation = map(cursor.current.x, 0, winsize.current.width, -10, 10);

      const bound = 300;
      targetX = Math.max(-bound, Math.min(bound, targetX));
      targetY = Math.max(-bound, Math.min(bound, targetY));

      imagesRef.current.forEach((imageEl, index) => {
        if (imageEl) {
          const opacity = (index + 1) / layers;
          const delay = (layers - index - 1) * 0.020 ; 

          gsap.to(imageEl, {
            x: targetX,
            y: targetY,
            rotation: targetRotation,
            opacity: opacity,
            duration: 0.35,
            delay: delay,
            ease: "power2.out",
            force3D: true,
          });
        }
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, [layers]);

  return (
    <div
      ref={containerRef}
      className="  relative w-full h-full "
    >
      {Array.from({ length: layers }, (_, index) => (
         index === 9 ? null : (
        <Image
          key={index}
          ref={(el) => (imagesRef.current[index] = el)}
          src={image}
      
           priority
          width={1000} // Increase from 500
          height={1000} // Increase from 500
          quality={100}
          alt={`Trail ${index + 1}`}
          className={`      transform  -translate-x-1/2 -translate-y-1/2  left-1/2 right-1/2  w-[80vw] h-[55vh] absolute md:w-[19em] md:h-[60vh]    lg:w-[23em] lg:h-[30em]    object-cover object-[60%_60%]`}  
          style={{
            opacity: (index + 1) / layers,
            borderRadius: `${borderRadius}px`,
            willChange: "transform",
          }}
        />

         )
      ))}
    </div>
  );
};

export default SmearCard;
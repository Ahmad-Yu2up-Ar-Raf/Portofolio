import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Cursors = () => {
  const cursorRef = useRef(null);
  const cursorTextRef = useRef(null);
  const linksRef = useRef([]);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorText = cursorTextRef.current;

    // Fungsi untuk update links
    const updateLinks = () => {
      linksRef.current = [...document.querySelectorAll('a')];
      attachLinkListeners();
    };

    // Observer untuk mendeteksi perubahan DOM
    const observer = new MutationObserver(updateLinks);
    observer.observe(document.body, { subtree: true, childList: true });

    const onMouseMove = (event) => {
      const { clientX, clientY } = event;
      // Menggunakan gsap.to dengan delay untuk menciptakan efek lambat
      gsap.to(cursor, {
        x: clientX,
        y: clientY,
        duration: 1.5, // Durasi lebih lama untuk efek lambat
        ease: "power2.out"
      });
    };

    const onMouseEnterLink = (event) => {
      const link = event.target;
      if (link.classList.contains('view')) {
        gsap.to(cursor, {
          scale: 4,
          opacity: 1,
          duration: 0.3
        });
        gsap.to(cursorText, {
          opacity: 1,
          duration: 0.3
        });
      }
    };

    const onMouseLeaveLink = () => {
      gsap.to(cursor, {
        scale: 0,
        opacity: 0,
        duration: 0.3
      });
      gsap.to(cursorText, {
        opacity: 0,
        duration: 0.3
      });
    };

    // Pasang event listeners ke links
    const attachLinkListeners = () => {
      linksRef.current.forEach(link => {
        link.addEventListener('mouseenter', onMouseEnterLink);
        link.addEventListener('mouseleave', onMouseLeaveLink);
      });
    };

    // Hapus event listeners dari links
    const removeLinkListeners = () => {
      linksRef.current.forEach(link => {
        link.removeEventListener('mouseenter', onMouseEnterLink);
        link.removeEventListener('mouseleave', onMouseLeaveLink);
      });
    };

    // Initial setup
    updateLinks();
    document.addEventListener('mousemove', onMouseMove);

    // Cleanup function
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      removeLinkListeners();
      observer.disconnect();
      gsap.killTweensOf(cursor);
      gsap.killTweensOf(cursorText);
    };
  }, []);
  return (
    
<div
  ref={cursorRef}
  className="fixed size-2 p-[13.5px] font-Outfit border border-white border-opacity-10  flex justify-center items-center opacity-0 pointer-events-none z-[9999] rounded-full -top-4 left-0 bg-white/10 backdrop-blur-[2px] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]"
>

  
  
  <span
    ref={cursorTextRef}
    className="text-[3.5px] opacity-0       absolute font-Outfit font-medium text-white/80"
  >
    Visit Website
  </span>
</div>
  );
};

export default Cursors;
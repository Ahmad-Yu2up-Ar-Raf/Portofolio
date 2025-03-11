// anim.js
export const createAnimationVariants = (type, initialPath, targetPath, isFirstVisit) => {
const delay = isFirstVisit ? 3 : 0.35 
  
    const variants = {
      text: {
        initial: { opacity: 1 },
        enter: {
          opacity: 0,
          top: -100,
          transition: { duration: .75,   delay , ease: [0.76, 0, 0.24, 1] },
          transitionEnd: { top: '47.5%' },
        },
        exit: {
          opacity: 1,
          top: '40%',
          transition: { duration: .5,  delay , ease: [0.33, 1, 0.68, 1] },
        },
      },
      curve: {
        initial: { d: initialPath },
        enter: {
          d: targetPath,
          transition: { duration: .75, delay , ease: [0.76, 0, 0.24, 1] },
        },
        exit: {
          d: initialPath,
          transition: { duration: .75, ease: [0.76, 0, 0.24, 1] },
        },
      },
      translate: {
        initial: { top: '-300px' },
        enter: {
          top: '-100vh',
          transition: { duration: .75, delay, ease: [0.76, 0, 0.24, 1] },
          transitionEnd: { top: '100vh' },
        },
        exit: {
          top: '-300px',
          transition: { duration: .75, ease: [0.76, 0, 0.24, 1] },
        },
      },
      opacity: {
        initial: {
            opacity: 0
        },
        enter: {
            opacity: 0.75,
            transition: {duration: 1, delay: 0.2}
        },
    }

    };
  
    return variants[type];
  };
  
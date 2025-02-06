import { useState, useEffect } from 'react';

export default function DelayedComponent({ children, delay = 1000 }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return isVisible ? children : '';
}

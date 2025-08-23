import { useState, useEffect } from 'react';

function useIntersectionObserver() {
    const [isVisible, setIsVisible] = useState(false);
    const [element, setElement] = useState(null);
    
    useEffect(() => {
      if (!element) return;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold: 0.1 }
      );
      
      observer.observe(element);
      return () => observer.unobserve(element);
    }, [element]);
    
    return [setElement, isVisible];
  }

  export default useIntersectionObserver;
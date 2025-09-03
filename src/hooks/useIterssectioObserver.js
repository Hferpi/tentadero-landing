import { useState, useEffect } from 'react';

function useIntersectionObserver() {
    const [isVisible, setIsVisible] = useState(false);
    const [element, setElement] = useState(null);
    
    useEffect(() => {
      if (!element) return;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(entry.isIntersecting);
        },
        { threshold: 0.1 }
      );
      
      observer.observe(element);
      return () => observer.disconnect();
    }, [element]);
    
    return [setElement, isVisible];
  }

  export default useIntersectionObserver;
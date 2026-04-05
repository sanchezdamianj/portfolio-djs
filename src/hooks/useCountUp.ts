import { useState, useEffect, useRef } from 'react';

export function useCountUp(
  end: number, 
  duration: number = 1500, 
  delay: number = 0,
  isVisible: boolean = false
): number {
  const [count, setCount] = useState(0);
  const hasStartedRef = useRef(false);
  
  useEffect(() => {
    if (!isVisible || hasStartedRef.current) return;
    
    hasStartedRef.current = true;
    
    const timeout = setTimeout(() => {
      const startTime = performance.now();
      
      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Ease-out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(end * eased);
        
        setCount(current);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }, delay * 1000);
    
    return () => clearTimeout(timeout);
  }, [isVisible, end, duration, delay]);
  
  return count;
}

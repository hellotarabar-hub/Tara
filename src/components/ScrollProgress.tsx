import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);
  const { scrollYProgress } = useScroll();
  
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const dotY = useTransform(scrollYProgress, [0, 1], [0, 116]);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll position
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Subscribe to scrollYProgress changes to update percentage
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      setScrollPercent(Math.round(latest * 100));
    });
    return unsubscribe;
  }, [scrollYProgress]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="fixed right-6 top-1/2 -translate-y-1/2 z-30 pointer-events-none hidden lg:block"
    >
      <div className="relative w-2 h-32">
        {/* Background track */}
        <div className="absolute inset-0 bg-neutral-200 rounded-full" />
        
        {/* Progress fill */}
        <motion.div
          className="absolute bottom-0 left-0 w-full bg-neutral-900 rounded-full origin-bottom"
          style={{ scaleY }}
        />
        
        {/* Moving dot indicator */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-neutral-900 rounded-full shadow-lg"
          style={{ 
            top: 0,
            y: dotY
          }}
        />
      </div>

      {/* Percentage text */}
      <div
        className="absolute -left-12 top-1/2 -translate-y-1/2 text-xs text-neutral-400 tracking-wider"
        style={{ fontSize: '0.625rem' }}
      >
        <span>
          {scrollPercent}%
        </span>
      </div>
    </motion.div>
  );
}
import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [stage, setStage] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 600),
      setTimeout(() => setStage(2), 1200),
      setTimeout(() => setStage(3), 1800),
      setTimeout(() => {
        setIsVisible(false);
        setTimeout(onComplete, 1000);
      }, 3300) // Increased by 0.5 seconds
    ];

    return () => timers.forEach(timer => clearTimeout(timer));
  }, [onComplete]);

  if (!isVisible && stage === 3) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.5 }}
          transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-50 overflow-hidden"
        >
          {/* Animated particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-neutral-300 rounded-full"
              initial={{
                x: '50vw',
                y: '50vh',
                scale: 0,
                opacity: 0
              }}
              animate={{
                x: `${50 + (Math.cos(i * 18 * Math.PI / 180) * (30 + i * 2))}vw`,
                y: `${50 + (Math.sin(i * 18 * Math.PI / 180) * (30 + i * 2))}vh`,
                scale: stage >= 1 ? [0, 1.5, 0] : 0,
                opacity: stage >= 1 ? [0, 0.6, 0] : 0
              }}
              transition={{
                duration: 2,
                delay: i * 0.05,
                ease: "easeOut"
              }}
            />
          ))}

          {/* Expanding circles */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`circle-${i}`}
              className="absolute rounded-full border border-neutral-200"
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: stage >= 2 ? [0, 3, 4] : 0,
                opacity: stage >= 2 ? [0, 0.3, 0] : 0
              }}
              transition={{
                duration: 1.5,
                delay: i * 0.2,
                ease: "easeOut"
              }}
              style={{
                width: '200px',
                height: '200px',
                left: 'calc(50% - 100px)',
                top: 'calc(50% - 100px)'
              }}
            />
          ))}

          {/* Main TARA text with zoom out effect */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{
                opacity: stage >= 0 && isVisible ? 1 : 0,
                scale: stage >= 0 && isVisible ? 1 : 0.3,
                y: stage >= 3 ? -20 : 0
              }}
              exit={{ 
                scale: 2.5, 
                opacity: 0,
                filter: "blur(20px)"
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut"
              }}
            >
              <h1
                className="tracking-[0.3em] text-neutral-800 relative"
                style={{ 
                  fontSize: 'clamp(5rem, 15vw, 10rem)',
                  fontWeight: 300,
                  letterSpacing: '0.3em'
                }}
              >
                {['T', 'A', 'R', 'A'].map((letter, i) => (
                  <motion.span
                    key={i}
                    className="inline-block"
                    initial={{ opacity: 0, y: 30, rotateX: -90 }}
                    animate={{
                      opacity: 1,
                      y: [30, -15, 0],
                      rotateX: 0
                    }}
                    exit={{
                      opacity: 0,
                      scale: 1.5,
                      y: -30
                    }}
                    transition={{
                      duration: 0.8,
                      delay: i * 0.1,
                      ease: "easeOut"
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: stage >= 2 ? 1 : 0,
                y: stage >= 2 ? 0 : 10
              }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="text-center text-neutral-500 tracking-wider mt-8"
              style={{ fontSize: '0.875rem', letterSpacing: '0.3em' }}
            >
              FUEL YOUR ESSENCE
            </motion.p>
          </div>

          {/* Progress bar */}
          <motion.div
            className="absolute bottom-0 left-0 h-0.5 bg-neutral-800"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 3.3, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

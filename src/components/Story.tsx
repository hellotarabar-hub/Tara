// import { motion, useScroll, useTransform } from 'motion/react';
// import { useInView } from 'motion/react';
// import { useRef, useEffect } from 'react';
// import { ImageWithFallback } from './figma/ImageWithFallback';
// import { X } from 'lucide-react';

// interface StoryProps {
//   onPopupTrigger: () => void;
// }

// export default function Story({ onPopupTrigger }: StoryProps) {
//   const ref = useRef(null);
//   const imageRef = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.3 });

//   const { scrollYProgress } = useScroll({
//     target: imageRef,
//     offset: ["start end", "end start"]
//   });

//   const imageY = useTransform(scrollYProgress, [0, 1], ['30%', '-30%']);
//   const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1, 1.15]);

//   // Trigger popup when section is in view
//   useEffect(() => {
//     if (isInView) {
//       const timer = setTimeout(() => {
//         onPopupTrigger();
//       }, 1000);
//       return () => clearTimeout(timer);
//     }
//   }, [isInView, onPopupTrigger]);

//   const noItems = [
//     'No artificial flavors, sweeteners, or preservatives',
//     'No fillers',
//     'No sugar alcohols',
//     'No seed oils',
//     'No dairy',
//     'No soy',
//     'No bloat',
//     'No crash'
//   ];

//   return (
//     <section
//       id="story"
//       ref={ref}
//       className="relative min-h-screen flex items-center py-32 px-6 lg:px-12 bg-neutral-50 overflow-hidden"
//     >
//       {/* Parallax separator */}
//       <motion.div
//         style={{ y: useTransform(scrollYProgress, [0, 1], ['-100px', '100px']) }}
//         className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-neutral-300 to-transparent opacity-50"
//       />

//       <div className="max-w-7xl mx-auto w-full">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           {/* Image Side with Parallax */}
//           <motion.div
//             ref={imageRef}
//             initial={{ opacity: 0, x: -60 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 1, ease: "easeOut" }}
//             className="relative h-[600px] overflow-hidden rounded-2xl"
//           >
//             <motion.div
//               style={{ y: imageY, scale: imageScale }}
//               className="absolute inset-0 -top-20 -bottom-20"
//             >
//               <ImageWithFallback
//                 src="https://images.unsplash.com/photo-1611077094726-11cf1f992009?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwd29tYW4lMjB3ZWxsbmVzc3xlbnwxfHx8fDE3NjIxMjE4NzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
//                 alt="Wellness"
//                 className="w-full h-full object-cover"
//               />
//             </motion.div>
            
//             {/* Gradient overlay */}
//             <div className="absolute inset-0 bg-gradient-to-t from-[#1a2332]/40 via-transparent to-transparent" />
//           </motion.div>

//           {/* Content Side */}
//           <motion.div
//             initial={{ opacity: 0, x: 60 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
//             className="space-y-8"
//           >
//             <div>
//               <motion.div
//                 initial={{ width: 0 }}
//                 animate={isInView ? { width: '60px' } : {}}
//                 transition={{ duration: 0.8, delay: 0.4 }}
//                 className="h-px bg-[#1a2332] mb-8"
//               />
//               <h2
//                 className="text-[#1a2332] mb-6 tracking-tight"
//                 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', fontWeight: 300, lineHeight: 1.2 }}
//               >
//                 Better Digestion Means Better Recovery
//               </h2>
//             </div>

//             <div className="space-y-6 text-neutral-600" style={{ fontSize: '1.125rem', lineHeight: 1.8, fontWeight: 300 }}>
//               <motion.p
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={isInView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ duration: 0.8, delay: 0.6 }}
//               >
//                Most bars rely on dairy isolates, sugar alcohols, and sticky syrups that cause heaviness and bloating. TARA skips the junk, delivering real performance nutrition that keeps you light and satisfied.
//               </motion.p>
//               <motion.p
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={isInView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ duration: 0.8, delay: 0.8 }}
//                 className="text-[#1a2332]"
//                 style={{ fontWeight: 400 }}
//               >
//               </motion.p>
//             </div>

//             {/* Animated "No" Banner */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.8, delay: 1 }}
//               className="pt-6 overflow-hidden"
//             >
//               <div className="relative">
//                 {/* Gradient overlays */}
//                 <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-neutral-50 to-transparent z-10" />
//                 <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-neutral-50 to-transparent z-10" />
                
//                 {/* Scrolling content - slower and reverse direction */}
//                 <motion.div
//                   className="flex gap-4"
//                   animate={{
//                     x: [-1600, 0]
//                   }}
//                   transition={{
//                     x: {
//                       repeat: Infinity,
//                       repeatType: "loop",
//                       duration: 30,
//                       ease: "linear"
//                     }
//                   }}
//                 >
//                   {/* Render items three times for seamless loop */}
//                   {[...noItems, ...noItems, ...noItems].map((item, index) => (
//                     <div
//                       key={index}
//                       className="flex items-center gap-2 px-5 py-2.5 border-2 border-[#1a2332] text-[#1a2332] rounded-full whitespace-nowrap flex-shrink-0"
//                     >
//                       <X className="w-4 h-4" strokeWidth={2.5} />
//                       <span className="text-sm" style={{ fontWeight: 400 }}>
//                         {item}
//                       </span>
//                     </div>
//                   ))}
//                 </motion.div>
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.8, delay: 1.2 }}
//               className="pt-6"
//             >
//               <a
//                 href="/devils-tongue"
//                 className="group inline-flex items-center gap-2 text-neutral-600 hover:text-[#1a2332] transition-colors"
//                 style={{ fontSize: '0.9rem', fontWeight: 300 }}
//               >
//                 <span className="tracking-wide">What's our secret? Click</span>
//                 <svg 
//                   className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
//                   fill="none" 
//                   stroke="currentColor" 
//                   viewBox="0 0 24 24"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                 </svg>
//               </a>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }



import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface StoryProps {
  onPopupTrigger: () => void;
}

export default function Story({ onPopupTrigger }: StoryProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        onPopupTrigger();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isInView, onPopupTrigger]);

  return (
    <section
      id="benefits"
      ref={ref}
      className="
        relative
        bg-neutral-50
        overflow-hidden
        py-32              /* SAME AS BEFORE */
        px-6 lg:px-12      /* SAME AS BEFORE */
      "
    >
      <motion.div style={{ y: contentY }} className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* LEFT TEXT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="space-y-10"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.5 }}
              className="text-neutral-900 tracking-tight"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 200,
                lineHeight: 1.2,
              }}
            >
              Better Digestion Means <br />
              Better Recovery
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.6 }}
              className="space-y-6"
            >
              <p
                className="text-neutral-600 tracking-wide leading-relaxed max-w-4xl"
                style={{
                  fontSize: "clamp(1rem, 2vw, 1.25rem)",
                  fontWeight: 300,
                  lineHeight: 1.8,
                }}
              >
                Most bars rely on dairy isolates, sugar alcohols, and sticky syrups
                that cause heaviness and bloating. TARA skips the junk, delivering
                real performance nutrition that keeps you light and satisfied.
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex justify-center lg:justify-end items-start"
          >
            <div
              className="
                relative overflow-hidden rounded-3xl
                bg-neutral-100
                w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[480px]
                aspect-[5/6] mx-auto
              "
            >
              <ImageWithFallback
                src="/nyc.png"
                alt="Healthy lifestyle"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

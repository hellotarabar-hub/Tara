// import { motion, useScroll, useTransform } from 'motion/react';
// import { useInView } from 'motion/react';
// import { useRef } from 'react';
// import { Check } from 'lucide-react';

// export default function IntroSection() {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.5 });

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"]
//   });

//   const y = useTransform(scrollYProgress, [0, 1], ['100px', '-100px']);
//   const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.3]);

//   const badges = [
//     'Vegan',
//     'All Natural',
//     'Non-GMO',
//     'Gluten Free',
//     'Kosher',
//     'Low-FODMAP Friendly'
//   ];

//   return (
//     <section
//       ref={ref}
//       className="relative min-h-[70vh] flex items-center justify-center py-24 px-6 lg:px-12 bg-white overflow-hidden"
//     >
//       {/* Parallax background elements */}
//       <motion.div
//         style={{ y }}
//         className="absolute inset-0 flex items-center justify-center opacity-5"
//       >
//         <div className="text-[#1a2332] tracking-[0.5em] text-[10rem] select-none">
//           TARA
//         </div>
//       </motion.div>

//       <motion.div
//         style={{ opacity }}
//         className="relative z-10 max-w-5xl mx-auto text-center"
//       >
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={isInView ? { opacity: 1 } : { opacity: 0 }}
//           transition={{ duration: 1.5, ease: "easeOut" }}
//         >
//           <motion.div
//             initial={{ width: 0 }}
//             animate={isInView ? { width: '60px' } : { width: 0 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//             className="h-px bg-neutral-300 mx-auto mb-12"
//           />

//           <motion.h2
//             initial={{ opacity: 0, y: 30 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//             transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
//                        className="text-neutral-900 mb-8 tracking-tight"
//                 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 200, lineHeight: 1.1 }}
//           >
//             Stop Overcomplicating Wellness
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//             transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
//             className="text-neutral-600 tracking-wide leading-relaxed max-w-4xl mx-auto"
//             style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', fontWeight: 300, lineHeight: 1.8 }}
//           >
//            No more powders, shakes, or tracking apps. Just one bar that carries you from workout to next meal. Clean, effective, and made for real life.
//           </motion.p>

//           {/* Animated Scrolling Banner */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//             transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
//             className="mt-16 overflow-hidden"
//           >
//             <div className="relative">
//               {/* Gradient overlays for fade effect */}
//               <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
//               <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />
              
//               {/* Scrolling content */}
//               <motion.div
//                 className="flex gap-6"
//                 animate={{
//                   x: [0, -1200]
//                 }}
//                 transition={{
//                   x: {
//                     repeat: Infinity,
//                     repeatType: "loop",
//                     duration: 25,
//                     ease: "linear"
//                   }
//                 }}
//               >
//                 {/* Render badges twice for seamless loop */}
//                 {[...badges, ...badges, ...badges].map((badge, index) => (
//                   <div
//                     key={index}
//                     className="flex items-center gap-2 px-6 py-3 bg-[#1a2332] text-white rounded-full whitespace-nowrap flex-shrink-0"
//                   >
//                     <Check className="w-4 h-4" />
//                     <span className="tracking-wide text-sm" style={{ fontWeight: 400 }}>
//                       {badge}
//                     </span>
//                   </div>
//                 ))}
//               </motion.div>
//             </div>
//           </motion.div>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }














// import { motion, useScroll, useTransform } from 'motion/react';
// import { useInView } from 'motion/react';
// import { useRef, useState, useEffect } from 'react';
// import { Check } from 'lucide-react';

// export default function IntroSection() {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.5 });

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"]
//   });

//   const y = useTransform(scrollYProgress, [0, 1], ['100px', '-100px']);
//   const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.3]);

//   const badges = [
//     "Vegan",
//     "All Natural",
//     "Non-GMO",
//     "Gluten Free",
//     "Kosher",
//     "Low-FODMAP Friendly"
//   ];

//   const [isMobile, setIsMobile] = useState(false);
//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth < 1024);
//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const headingFont = 'clamp(2rem, 5vw, 4rem)';
//   const paragraphFont = 'clamp(1rem, 2vw, 1.25rem)';

//   return (
//     <section
//       ref={ref}
//       className="relative bg-white-50 overflow-hidden py-20 sm:py-24 lg:py-32 px-4 md:px-6 lg:px-12"
//     >
//       {/* DESKTOP — unchanged */}
//       {!isMobile && (
//         <>
//           <motion.div
//             style={{ y }}
//             className="absolute inset-0 flex items-center justify-center opacity-5"
//           >
//             <div className="text-[#1a2332] tracking-[0.5em] text-[10rem] select-none">
//               TARA
//             </div>
//           </motion.div>

//           <div className="w-full max-w-5xl mx-auto text-center relative z-10">
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={isInView ? { opacity: 1 } : { opacity: 0 }}
//               transition={{ duration: 1.5, ease: "easeOut" }}
//             >
//               <motion.div
//                 initial={{ width: 0 }}
//                 animate={isInView ? { width: '60px' } : { width: 0 }}
//                 transition={{ duration: 0.8, delay: 0.3 }}
//                 className="h-px bg-neutral-300 mx-auto mb-12"
//               />

//               <motion.h2
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//                 transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
//                 className="text-neutral-900 mb-8 tracking-tight"
//                 style={{ fontSize: headingFont, fontWeight: 200, lineHeight: 1.1 }}
//               >
//                 Stop Overcomplicating Wellness
//               </motion.h2>

//               <motion.p
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//                 transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
//                 className="text-neutral-600 tracking-wide leading-relaxed max-w-4xl mx-auto"
//                 style={{ fontSize: paragraphFont, fontWeight: 300, lineHeight: 1.8 }}
//               >
//                 No more powders, shakes, or tracking apps. Just one bar that carries you from workout to next meal. Clean, effective, and made for real life.
//               </motion.p>

//               {/* Desktop scrolling banner */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//                 transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
//                 className="mt-16 overflow-hidden"
//               >
//                 <div className="relative">
//                   <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
//                   <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

//                   <motion.div
//                     className="flex gap-6"
//                     animate={{ x: [0, -1200] }}
//                     transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 25, ease: "linear" } }}
//                   >
//                     {[...badges, ...badges, ...badges].map((badge, index) => (
//                       <div
//                         key={index}
//                         className="px-5 py-2 rounded-full border border-gray-200 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.05)] text-gray-700 text-sm font-medium whitespace-nowrap"
//                       >
//                         {badge}
//                       </div>
//                     ))}
//                   </motion.div>
//                 </div>
//               </motion.div>
//             </motion.div>
//           </div>
//         </>
//       )}

//       {/* MOBILE — compact layout with bullet points */}
//       {isMobile && (
//         <div className="flex flex-col gap-6 max-w-md mx-auto text-center">
//           {/* Heading */}
//           <h2
//             className="text-neutral-900 font-light tracking-tight"
//             style={{ fontSize: headingFont, lineHeight: 1.2 }}
//           >
//             Stop Overcomplicating Wellness
//           </h2>

//           {/* Paragraph */}
//           <motion.p
//             initial={{ opacity: 0, y: 10 }}
//             animate={isInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="text-neutral-600"
//             style={{ fontSize: paragraphFont, fontWeight: 300, lineHeight: 1.8 }}
//           >
//             No powders, shakes, or apps. Just one clean bar designed to support your everyday movement and recovery.
//           </motion.p>

//           {/* Bullet points */}
//           <div className="flex flex-col gap-3 mt-4">
//             {badges.map((badge, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={isInView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
//               >
//                 <div
//                   className="flex items-start gap-2 text-neutral-900"
//                   style={{ fontSize: paragraphFont, fontWeight: 300, lineHeight: 1.8 }}
//                 >
//                   <Check className="w-4 h-4 flex-shrink-0 mt-1 text-green-500" />
//                   <span>{badge}</span>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {/* Divider */}
//           <div className="h-px bg-neutral-100 mt-6" />
//         </div>
//       )}
//     </section>
//   );
// }










import { motion, useScroll, useTransform } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { Check } from 'lucide-react';

export default function IntroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['100px', '-100px']);

  const badges = [
    "Vegan",
    "All Natural",
    "Non-GMO",
    "Gluten Free",
    "Kosher",
    "Low-FODMAP Friendly"
  ];

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const headingFont = 'clamp(2rem, 5vw, 4rem)';
  const paragraphFont = 'clamp(1rem, 2vw, 1.25rem)';

  return (
    <section
      ref={ref}
      className="relative bg-white-50 overflow-hidden py-20 sm:py-24 lg:py-32 px-4 md:px-6 lg:px-12"
    >
      {/* Faded TARA background — both desktop and mobile */}
      <motion.div
        style={{ y }}
        className={`absolute inset-0 flex items-center justify-center select-none`}
      >
        <div
          className={`text-[#1a2332] tracking-[0.5em] select-none`}
          style={{
            fontSize: isMobile ? '6rem' : '10rem',
            opacity: isMobile ? 0.05 : 0.05,
          }}
        >
          TARA
        </div>
      </motion.div>

      {/* DESKTOP — unchanged */}
      {!isMobile && (
        <div className="w-full max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: '60px' } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-px bg-neutral-300 mx-auto mb-12"
            />

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
              className="text-neutral-900 mb-8 tracking-tight"
              style={{ fontSize: headingFont, fontWeight: 200, lineHeight: 1.1 }}
            >
              Stop Overcomplicating Wellness
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
              className="text-neutral-600 tracking-wide leading-relaxed max-w-4xl mx-auto"
              style={{ fontSize: paragraphFont, fontWeight: 300, lineHeight: 1.8 }}
            >
              No more powders, shakes, or tracking apps. Just one bar that carries you from workout to next meal. Clean, effective, and made for real life.
            </motion.p>

            {/* Desktop scrolling banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
              className="mt-16 overflow-hidden"
            >
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

                <motion.div
                  className="flex gap-6"
                  animate={{ x: [0, -1200] }}
                  transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 25, ease: "linear" } }}
                >
                  {[...badges, ...badges, ...badges].map((badge, index) => (
                    <div
                      key={index}
                      className="px-5 py-2 rounded-full border border-gray-200 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.05)] text-gray-700 text-sm font-medium whitespace-nowrap"
                    >
                      {badge}
                    </div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      )}

      {/* MOBILE — heading + paragraph + running banner */}
      {isMobile && (
        <div className="flex flex-col gap-6 max-w-md mx-auto text-center relative z-10">
          <h2
            className="text-neutral-900 font-light tracking-tight"
            style={{ fontSize: headingFont, lineHeight: 1.2 }}
          >
            Stop Overcomplicating Wellness
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-neutral-600"
            style={{ fontSize: paragraphFont, fontWeight: 300, lineHeight: 1.8 }}
          >
            No powders, shakes, or apps. Just one clean bar designed to support your everyday movement and recovery.
          </motion.p>

          {/* Mobile running banner */}
          <div className="relative overflow-hidden mt-4 bg-gray-50 p-2 rounded-2xl shadow-sm">
            <div className="flex gap-3 animate-scroll">
              {[...badges, ...badges].map((badge, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/80 shadow text-green-800 text-xs font-semibold whitespace-nowrap"
                >
                  <Check className="w-3 h-3 text-green-500 flex-shrink-0" />
                  <span>{badge}</span>
                </div>
              ))}
            </div>

            {/* Gradient overlays for smooth edges */}
            <div className="absolute left-0 top-0 bottom-0 w-6 bg-gray-50 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-6 bg-gray-50 pointer-events-none" />
          </div>

          {/* Divider */}
       
        </div>
      )}

      {/* Custom CSS for smooth scrolling */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: flex;
          min-width: max-content;
          animation: scroll 15s linear infinite;
        }
      `}</style>
    </section>
  );
}

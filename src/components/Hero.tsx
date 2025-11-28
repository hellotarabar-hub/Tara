// import { motion, useScroll, useTransform } from 'motion/react';
// import { ImageWithFallback } from './figma/ImageWithFallback';
// import { useRef } from 'react';

// export default function Hero() {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end start"]
//   });

//   const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
//   const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

//   const scrollToSection = (id: string) => {
//     const element = document.getElementById(id);
//     if (element) {
//       const offset = 80;
//       const elementPosition = element.getBoundingClientRect().top;
//       const offsetPosition = elementPosition + window.pageYOffset - offset;

//       window.scrollTo({
//         top: offsetPosition,
//         behavior: 'smooth'
//       });
//     }
//   };

//   return (
//     <section
//       id="hero"
//       ref={ref}
//       className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4 md:px-6 lg:px-8"
//       style={{ backgroundColor: '#F6F2E8' }}
//     >
//       {/* Rounded Card Container */}
// <motion.div
//   initial={{ opacity: 0, scale: 0.98 }}
//   animate={{ opacity: 1, scale: 1 }}
//   transition={{ duration: 1, ease: "easeOut" }}
//   className="relative w-full max-w-[1200px] mx-auto rounded-3xl lg:rounded-[2.5rem] overflow-hidden"
//   style={{
//     background: `
//       radial-gradient(circle at 90% 45%, rgba(224, 200, 172, 0.6) 0px, transparent 30%),
//       radial-gradient(ellipse at 15% 90%, rgba(224, 200, 172, 0.8) 0px, transparent 50%),
//       linear-gradient(135deg, #F6F2E8 0%, #EAE2D6 50%, #D9CEC0 100%)
//     `,
//     backgroundRepeat: 'no-repeat',
//     backgroundSize: 'cover',
//     minHeight: "calc(100vh - 120px)"
//   }}
// >


//         {/* Subtle Gradient Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-br from-neutral-800/10 via-transparent to-neutral-900/20" />
        
//         {/* Main Grid */}
//         <div className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-120px)] p-8 md:p-12 lg:p-16">
          
//           {/* LEFT SIDE — TEXT */}
//           <motion.div 
//             className="space-y-8 lg:space-y-10 max-w-xl"
//             style={{ opacity }}
//           >
//             <motion.h1
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.3 }}
//               className="text-white 900 mb-8 tracking-tight"
//               style={{
//                 fontSize: 'clamp(3.5rem, 6vw, 5rem)',
//                 fontWeight: 400,
//                 lineHeight: 1.1
//               }}
//             >
//               Fuel Well. Recover Better.
//             </motion.h1>

//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.5 }}
//               className="text-neutral-400"
//               style={{ 
//                 fontSize: 'clamp(1rem, 1.5vw, 1.125rem)', 
//                 fontWeight: 300,
//                 lineHeight: 1.7
//               }}
//             >
//               20 g plant protein, gut-friendly prebiotic fiber, and recovery minerals — all in one clean, low-FODMAP bar.
//             </motion.p>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.7 }}
//               className="pt-4"
//             >
//               <button
//                 onClick={() => scrollToSection('cta')}
//                 className="px-10 py-4 bg-white text-black hover:bg-neutral-200 transition-all duration-300 rounded-full"
//                 style={{ 
//                   fontWeight: 500, 
//                   letterSpacing: '0.02em',
//                   fontSize: '0.9375rem'
//                 }}
//               >
//                 JOIN WAITLIST
//               </button>
//             </motion.div>
//           </motion.div>

//           {/* RIGHT SIDE — FIXED IMAGE (more visible, not cut) */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1, delay: 0.4 }}
//             style={{ y }}
//             className="relative flex items-center justify-center lg:justify-end"
//           >
//             <div className="absolute inset-0 bg-gradient-to-br from-neutral-700/20 via-transparent to-transparent rounded-full blur-3xl" />
            
//             <div
//               className="
//                 relative
//                 w-full 
//                 max-w-xl 
//                 h-[480px]
//                 md:h-[540px]
//                 lg:h-[620px]
//                 flex items-center justify-center
//                 px-6
//               "
//             >
//               <ImageWithFallback
//                 src="./src/images/hero_tara.png"
//                 alt="TARA Protein Bar"
//                 className="
//                   w-full 
//                   h-full 
//                   object-contain 
//                   relative z-10
//                 "
//               />
//             </div>
//           </motion.div>

//         </div>
//       </motion.div>

//       {/* Scroll Indicator */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1.5, duration: 1 }}
//         className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
//       >
//         <motion.div
//           animate={{ y: [0, 8, 0] }}
//           transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//           className="flex flex-col items-center gap-3"
//         >
//           <div className="w-6 h-10 border-2 border-neutral-700 rounded-full flex items-start justify-center p-2">
//             <motion.div
//               animate={{ y: [0, 12, 0] }}
//               transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//               className="w-1 h-2 bg-neutral-500 rounded-full"
//             />
//           </div>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }

















import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4 md:px-6 lg:px-8"
      style={{ backgroundColor: "rgba(255, 238, 216)" }}
    >
      {/* Rounded Card Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative w-full max-w-[1400px] mx-auto rounded-3xl lg:rounded-[2.5rem] overflow-hidden p-6 md:p-12 lg:p-16 flex flex-col justify-center"
        style={{
          background: `
        radial-gradient(circle at 90% 75%, rgba(255, 238, 216) 0px, transparent 40%),
           radial-gradient(circle at 1% 55%, rgba(199, 179, 133, 0.64) 0px, transparent 30%),
           radial-gradient(at 98% 10%, rgba(222, 195, 134, 0.5) 0px, transparent 25%),
            linear-gradient(135deg, rgba(245, 222, 164, 0.82) 0%, #e7cea9ff 50%, #f4dfc4ff 100%)
          `,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          minHeight: "calc(100vh - 100px)" // Adjusted for navbar
        }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-800/10 via-transparent to-neutral-900/20" />

        {/* Main Grid */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-80px)]">
          {/* Left side — text */}
          <motion.div
            className="space-y-6 md:space-y-8 lg:space-y-10 max-w-3xl mx-auto lg:mx-0"
            style={{ opacity }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
                className="text-neutral-900 mb-8 tracking-tight"
                style={{ fontSize: 'clamp(4rem, 5vw, 3rem)', fontWeight: 400, lineHeight: 1.1,     color: 'rgba(122, 115, 80)' }}
            >
              Fuel Well. <br />
              <span className="italic font-serif">Recover Better.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-neutral-700 dark:text-neutral-300"
              style={{
                fontSize: "clamp(1.2rem, 1.25vw, 1.125rem)",
                fontWeight: 300,
                lineHeight: 1.7,
                    color: 'rgba(92, 86, 59)' 
              }}
            >
              20 g plant protein, gut-friendly prebiotic fiber, and recovery minerals — all in one clean, low-FODMAP bar.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <button
                onClick={() => scrollToSection("cta")}
                className="px-10 py-4 bg-white text-black hover:bg-neutral-200 transition-all duration-300 rounded-full font-medium"
                style={{ letterSpacing: "0.02em", fontSize: "0.9375rem" }}
              >
                JOIN WAITLIST
              </button>
            </motion.div>
          </motion.div>

          {/* Right side — image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            style={{ y }}
            className="relative flex items-center justify-center w-full"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-700/20 via-transparent to-transparent rounded-full blur-3xl" />
            <div className="relative w-full max-w-[900px] md:max-w-[900px] lg:max-w-[900px] h-[500px] md:h-[600px] lg:h-[700px] flex items-center justify-center">
              <ImageWithFallback
                src="/hero_tara.png"  
                alt="TARA Protein Bar"
                className="w-full h-full object-contain relative z-10 rounded-3xl lg:rounded-[2.5rem]"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3"
        >
          <div className="w-6 h-10 border-2 border-neutral-700 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-2 bg-neutral-500 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

















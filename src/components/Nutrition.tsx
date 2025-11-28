// import { motion, useScroll, useTransform } from 'motion/react';
// import { useInView } from 'motion/react';
// import { useRef } from 'react';
// import { ImageWithFallback } from './figma/ImageWithFallback';

// export default function Nutrition() {
//   const ref = useRef(null);
//   const imageRef = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.3 });

//   const { scrollYProgress } = useScroll({
//     target: imageRef,
//     offset: ["start end", "end start"]
//   });

//   const imageY = useTransform(scrollYProgress, [0, 1], ['20%', '-20%']);
//   const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

//   const nutritionStats = [
//     { value: "200", label: "calories" },
//     { value: "20g", label: "complete plant protein" },
//     { value: "7g", label: "low-fermentable fiber" },
//     { value: "<5g", label: "total sugar" }
//   ];

//   const benefits = [
//     "No artificial flavors, sweeteners, or preservatives",
//     "No fillers or seed oils",
//     "No sugar alcohols",
//     "No dairy or soy",
//     "  No bloat. No crash. No compromise."
//   ];

//   return (
//     <section
//       id="nutrition"
//       ref={ref}
//       className="relative min-h-screen flex items-center py-32 px-6 lg:px-12 bg-neutral-50 overflow-hidden"
//     >
//       {/* Parallax separator */}
//       <motion.div
//         style={{ y: useTransform(scrollYProgress, [0, 1], ['-120px', '120px']) }}
//         className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-40 bg-gradient-to-b from-transparent via-neutral-300 to-transparent opacity-50"
//       />

//       <div className="max-w-7xl mx-auto w-full">
//         <div className="grid lg:grid-cols-2 gap-20 items-center">

//           {/* Content Side */}
//           <motion.div
//             initial={{ opacity: 0, x: -60 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 1, ease: "easeOut" }}
//             className="space-y-12"
//           >
//             <div>
//               <motion.div
//                 initial={{ width: 0 }}
//                 animate={isInView ? { width: '60px' } : {}}
//                 transition={{ duration: 0.8, delay: 0.3 }}
//                 className="h-px bg-neutral-800 mb-8"
//               />
//               <h2
//                 className="text-neutral-900 mb-8 tracking-tight"
//                 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 200, lineHeight: 1.1 }}
//               >
//                 You Deserve Better
//               </h2>
//               <p
//                 className="text-neutral-600 tracking-wide leading-relaxed max-w-4xl"
//                 style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', fontWeight: 300, lineHeight: 1.8 }}
//               >
//                 Scientifically formulated for active recovery and digestive comfort.
//               </p>
//             </div>

//             {/* Nutrition Stats */}
//             <div className="grid grid-cols-2 gap-6">
//               {nutritionStats.map((stat, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={isInView ? { opacity: 1, y: 0 } : {}}
//                   transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
//                   className="group"
//                 >
//                   <div
//                     className="text-neutral-900 mb-2"
//                     style={{ fontSize: '3rem', fontWeight: 200 }}
//                   >
//                     {stat.value}
//                   </div>
//                   <div
//                     className="text-neutral-600 tracking-wide text-sm"
//                     style={{ fontWeight: 300, letterSpacing: '0.1em' }}
//                   >
//                     {stat.label.toUpperCase()}
//                   </div>
//                   <motion.div
//                     initial={{ width: 0 }}
//                     animate={isInView ? { width: '30px' } : {}}
//                     transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
//                     className="h-px bg-neutral-300 mt-3 group-hover:w-16 group-hover:bg-neutral-900 transition-all duration-300"
//                   />
//                 </motion.div>
//               ))}
//             </div>

//             {/* Benefits */}
//             <div className="space-y-4">
//               {benefits.map((benefit, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={isInView ? { opacity: 1, x: 0 } : {}}
//                   transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
//                   className="flex items-center gap-4 group"
//                 >
//                   <motion.div
//                     initial={{ scale: 0 }}
//                     animate={isInView ? { scale: 1 } : {}}
//                     transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
//                     className="w-1 h-1 bg-neutral-400 rounded-full group-hover:w-2 group-hover:h-2 group-hover:bg-neutral-900 transition-all duration-300"
//                   />
//                   <span
//                     className="text-neutral-600 tracking-wide leading-relaxed transition-colors duration-300"
//                     style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', fontWeight: 300, lineHeight: 1.8 }}
//                   >
//                     {benefit}
//                   </span>
//                 </motion.div>
//               ))}
//             </div>

//             {/* Emphasized Bottom Text */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.8, delay: 1.5 }}
//               className="pt-4 text-center"
//             >
           
//             </motion.div>

//           </motion.div>

//           {/* Image Side with Parallax */}
//           <motion.div
//             ref={imageRef}
//             initial={{ opacity: 0, x: 60 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
//             className="relative h-[700px] overflow-hidden"
//           >
//             <motion.div
//               style={{ y: imageY, scale: imageScale }}
//               className="absolute inset-0 -top-20 -bottom-20"
//             >
//               <ImageWithFallback
//                 src="./src/images/7.jpg"
//                 alt="Healthy protein snack"
//                 className="w-full h-full object-cover"
//               />
//             </motion.div>
            
//             {/* Overlay accent */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={isInView ? { opacity: 1 } : {}}
//               transition={{ duration: 1, delay: 0.8 }}
//               className="absolute inset-0 bg-gradient-to-t from-neutral-50 via-transparent to-transparent"
//             />
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }
















import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function Nutrition() {
  const ref = useRef(null);
  const imageRef = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

  const nutritionStats = [
    { value: "200", label: "calories" },
    { value: "20g", label: "complete plant protein" },
    { value: "7g", label: "low-fermentable fiber" },
    { value: "<5g", label: "total sugar" },
  ];

  const benefits = [
    "No artificial flavors, sweeteners, or preservatives",
    "No fillers or seed oils",
    "No sugar alcohols",
    "No dairy or soy",
    "No bloat. No crash. No compromise.",
  ];

  return (
    <section
      id="nutrition"
      ref={ref}
      className="relative py-20 px-4 md:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-10 sm:space-y-12"
          >
            <div>
              <h2
                className="text-neutral-900 mb-6 sm:mb-8 tracking-tight"
                style={{
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  fontWeight: 200,
                  lineHeight: 1.15,
                }}
              >
                You Deserve Better
              </h2>
              <p
                className="text-neutral-600 tracking-wide leading-relaxed max-w-3xl"
                style={{
                  fontSize: "clamp(0.95rem, 1.5vw, 1.25rem)",
                  fontWeight: 300,
                  lineHeight: 1.8,
                }}
              >
                Scientifically formulated for active recovery and digestive comfort.
              </p>
            </div>

            {/* Nutrition Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 sm:gap-6">
              {nutritionStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="group"
                >
                  <div
                    className="text-neutral-900 mb-1 sm:mb-2"
                    style={{ fontSize: "2.5rem", fontWeight: 200 }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-neutral-600 tracking-wide text-xs sm:text-sm"
                    style={{ fontWeight: 300, letterSpacing: "0.08em" }}
                  >
                    {stat.label.toUpperCase()}
                  </div>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: "30px" } : {}}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    className="h-px bg-neutral-300 mt-2 group-hover:w-14 group-hover:bg-neutral-900 transition-all duration-300"
                  />
                </motion.div>
              ))}
            </div>

            {/* Benefits */}
            <div className="space-y-3 sm:space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -15 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="flex items-center gap-3 sm:gap-4"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                    className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-neutral-400 rounded-full group-hover:w-2.5 group-hover:h-2.5 group-hover:bg-neutral-900 transition-all duration-300"
                  />
                  <span
                    className="text-neutral-600 tracking-wide leading-relaxed transition-colors duration-300"
                    style={{
                      fontSize: "clamp(0.95rem, 1.5vw, 1.2rem)",
                      fontWeight: 300,
                      lineHeight: 1.7,
                    }}
                  >
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Side with Parallax */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative h-80 sm:h-[400px] md:h-[550px] lg:h-[750px] overflow-hidden rounded-xl flex justify-center items-center"
          >
            <motion.div
              style={{ y: imageY, scale: imageScale }}
              className="relative w-full h-full overflow-hidden rounded-3xl bg-neutral-100 max-w-[600px]"
            >
              <ImageWithFallback
                src="/7.jpg"
                alt="Healthy protein snack"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Overlay accent */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.8 }}
              className="absolute inset-0 bg-gradient-to-t from-neutral-50 via-transparent to-transparent"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

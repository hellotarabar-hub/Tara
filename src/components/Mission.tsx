// import { motion, useScroll, useTransform } from 'motion/react';
// import { useInView } from 'motion/react';
// import { useRef } from 'react';
// import { ImageWithFallback } from './figma/ImageWithFallback';

// export default function Mission() {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.2 });

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"]
//   });

//   const ingredients = [
//     {
//       title: "Fuel",
//       heading: "Real performance nutrition",
//       description: "Complete plant protein + nut butters for strength and sustained energy — clean, efficient, and satisfying (did we say delicious?).",
//       image: "https://images.unsplash.com/photo-1622484212839-2425bcf558f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFudCUyMHByb3RlaW4lMjBudXRyaXRpb258ZW58MXx8fHwxNzYzMzQxNTkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
//     },
//     {
//       title: "Absorb",
//       heading: "Gut-friendly by design",
//       description: "Low-FODMAP konjac fiber promotes comfortable digestion, steady nutrient uptake, and gentle fullness that curbs cravings naturally.",
//       image: "https://images.unsplash.com/photo-1649073586373-b6d49022d567?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdlc3RpdmUlMjBoZWFsdGglMjBndXR8ZW58MXx8fHwxNjMzNDE1OTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
//     },
//     {
//       title: "Recover",
//       heading: "Mineral-driven recovery",
//       description: "Magnesium, potassium, and zinc restore electrolytes, reduce fatigue, and keep your body ready for what's next.",
//       image: "https://images.unsplash.com/photo-1699027833343-668341021344?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWNvdmVyeSUyMG1pbmVyYWxzJTIwc3VwcGxlbWVudHN8ZW58MXx8fHwxNzYzMzQxNTk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
//     }
//   ];

//   return (
//     <section
//       id="mission"
//       ref={ref}
//       className="relative py-24 lg:py-32 px-4 md:px-6 lg:px-8 bg-white overflow-hidden"
//     >
//       {/* Parallax separator */}
//       <motion.div
//         style={{ y: useTransform(scrollYProgress, [0, 1], ['-100px', '100px']) }}
//         className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-neutral-300 to-transparent opacity-50"
//       />

//       <div className="max-w-[1400px] mx-auto">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 1, ease: "easeOut" }}
//           className="text-center mb-20 max-w-3xl mx-auto"
//         >
//           <motion.div
//             initial={{ width: 0 }}
//             animate={isInView ? { width: '60px' } : {}}
//             transition={{ duration: 0.8, delay: 0.3 }}
//             className="h-px bg-neutral-300 mx-auto mb-8"
//           />
//           <h2
//             className="text-[#1a2332] tracking-tight"
//             style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 300, lineHeight: 1.2 }}
//           >
//             How Our Ingredients Work Together
//           </h2>
//         </motion.div>

//         {/* Three Column Grid */}
//         <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
//           {ingredients.map((ingredient, index) => (
//             <motion.div
//               key={ingredient.title}
//               initial={{ opacity: 0, y: 60 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.8, delay: 0.2 + index * 0.15, ease: "easeOut" }}
//               className="group relative bg-white rounded-2xl overflow-hidden border border-neutral-200 hover:border-[#1a2332] transition-all duration-500 hover:shadow-xl"
//             >
//               {/* Image Section */}
//               <div className="relative h-64 overflow-hidden">
//                 <ImageWithFallback
//                   src={ingredient.image}
//                   alt={ingredient.title}
//                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                 />
//                 {/* Gradient overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
//                 {/* Title badge */}
//                 <div className="absolute top-6 left-6">
//                   <div className="px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full">
//                     <span className="text-[#1a2332] tracking-wider text-xs uppercase" style={{ fontWeight: 500 }}>
//                       {ingredient.title}
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               {/* Content Section */}
//               <div className="p-8 space-y-4">
//                 <h3 
//                   className="text-[#1a2332]"
//                   style={{ fontSize: '1.5rem', fontWeight: 400, lineHeight: 1.3 }}
//                 >
//                   {ingredient.heading}
//                 </h3>
//                 <p 
//                   className="text-neutral-600"
//                   style={{ fontSize: '0.9375rem', lineHeight: 1.7, fontWeight: 300 }}
//                 >
//                   {ingredient.description}
//                 </p>
//               </div>

//               {/* Hover indicator */}
//               <motion.div
//                 className="absolute bottom-0 left-0 right-0 h-1 bg-[#1a2332] origin-left"
//                 initial={{ scaleX: 0 }}
//                 whileInView={{ scaleX: isInView ? 1 : 0 }}
//                 transition={{ duration: 0.8, delay: 0.4 + index * 0.15 }}
//               />
//             </motion.div>
//           ))}
//         </div>

//         {/* Bottom CTA or Info */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8, delay: 1 }}
//           className="text-center mt-16"
//         >
//           <p className="text-neutral-600 max-w-2xl mx-auto" style={{ fontSize: '1rem', lineHeight: 1.7, fontWeight: 300 }}>
//             Every ingredient is chosen for a purpose. Every bar is crafted with precision. 
//             This is nutrition that works as hard as you do.
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   );
// }





// import { motion, useScroll, useTransform, useInView } from "framer-motion";
// import { useRef } from "react";
// import { ImageWithFallback } from "./figma/ImageWithFallback";

// export default function Mission() {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.2 });

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"]
//   });

//   const ingredients = [
//     {
//       title: "Fuel",
//       heading:
//         "Complete plant protein and nut butters provide sustained strength and energy for your active lifestyle.",
//       image:
//         "./src/images/1.png"
//     },
//     {
//       title: "Absorb",
//       heading:
//         "Low-FODMAP konjac fiber supports gentle digestion, optimal nutrient uptake, and natural satiety.",
//       image:
//         "./src/images/2.png"
//     },
//     {
//       title: "Recover",
//       heading:
//         "Magnesium, potassium, and zinc replenish electrolytes, reduce fatigue, and help your body recover efficiently.",
//       image:
// "./src/images/3.png"    }
//   ];

//   return (
//     <section
//       id="function"
//       ref={ref}
//       className="relative bg-neutral-50 overflow-hidden py-20 sm:py-24 lg:py-32 px-4 md:px-6 lg:px-12"
//     >
//       {/* Parallax separator */}
//       <motion.div
//         style={{
//           y: useTransform(scrollYProgress, [0, 1], ["-100px", "100px"])
//         }}
//         className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-neutral-300 to-transparent opacity-50"
//       />

//       <div className="relative w-full max-w-[1400px] mx-auto">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 1, ease: "easeOut" }}
//           className="text-center mb-20 max-w-3xl mx-auto"
//         >
//           <motion.div
//             initial={{ width: 0 }}
//             animate={isInView ? { width: "80px" } : {}}
//             transition={{ duration: 0.8, delay: 0.3 }}
//             className="h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mb-8 rounded"
//           />
//           <h1
//             className="text-neutral-900 mb-4 tracking-tight "
//             style={{
//               fontSize: "clamp(2.5rem, 5vw, 4rem)",
//               fontWeight: 200,
//               lineHeight: 1.2
//             }}
//           >
//             Function, Not Fad
//           </h1>
//           <p
//             className="text-neutral-600 tracking-wide leading-relaxed max-w-4xl mx-auto"
//             style={{
//               fontSize: "clamp(1rem, 2vw, 1.25rem)",
//               fontWeight: 300,
//               lineHeight: 1.8
//             }}
//           >
//             Every ingredient is carefully selected to support performance, digestion, and recovery — clean, effective, and delicious.
//           </p>
//         </motion.div>

//         {/* Three Column Grid */}
//         <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
//           {ingredients.map((ingredient, index) => (
//             <motion.div
//               key={ingredient.title}
//               initial={{ opacity: 0, y: 60 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{
//                 duration: 0.8,
//                 delay: 0.2 + index * 0.15,
//                 ease: "easeOut"
//               }}
//               className="group relative bg-white rounded-3xl overflow-hidden border border-neutral-200 hover:border-purple-600 transition-all duration-500 hover:shadow-2xl"
//             >
//               {/* Image */}
//               <div className="relative h-64 sm:h-72 md:h-64 overflow-hidden rounded-t-3xl">
//                 <ImageWithFallback
//                   src={ingredient.image}
//                   alt={ingredient.title}
//                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent rounded-t-3xl" />
//                 <div className="absolute top-4 left-4">
//                   <div className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full">
//                     <span className="text-neutral-900 tracking-wider text-xs uppercase font-semibold">
//                       {ingredient.title}
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="p-6 sm:p-8 space-y-3">
//                 <p
//                   className="text-neutral-600 tracking-wide leading-relaxed max-w-4xl"
//                   style={{
//                     fontSize: "clamp(1rem, 2vw, 1.25rem)",
//                     fontWeight: 300,
//                     lineHeight: 1.8
//                   }}
//                 >
//                   {ingredient.heading}
//                 </p>
//               </div>

//               {/* Hover indicator */}
//               <motion.div
//                 className="absolute bottom-0 left-0 right-0 h-1 bg-purple-600 origin-left"
//                 initial={{ scaleX: 0 }}
//                 whileInView={{ scaleX: isInView ? 1 : 0 }}
//                 transition={{ duration: 0.8, delay: 0.4 + index * 0.15 }}
//               />
//             </motion.div>
//           ))}
//         </div>

//         {/* CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8, delay: 1 }}
//           className="text-center mt-16"
//         >
 
//         </motion.div>
//       </div>
//     </section>
//   );
// }







import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function Mission() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const ingredients = [
    {
      title: "Fuel",
      heading:
        "Complete plant protein and nut butters provide sustained strength and energy for your active lifestyle.",
      image: "/1.png",
    },
    {
      title: "Absorb",
      heading:
        "Low-FODMAP konjac fiber supports gentle digestion, optimal nutrient uptake, and natural satiety.",
      image: "/2.png",
    },
    {
      title: "Recover",
      heading:
        "Magnesium, potassium, and zinc replenish electrolytes, reduce fatigue, and help your body recover efficiently.",
      image: "/3.png",
    },
  ];

  return (
    <section
      id="function"
      ref={ref}
      className="relative bg-neutral-50 overflow-hidden py-20"
    >
      {/* ✅ Updated container to match Story/Secret */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-20 space-y-6"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "80px" } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded mb-6"
          />
          <h1
            className="text-neutral-900 tracking-tight"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 200,
              lineHeight: 1.2,
            }}
          >
            Function, Not Fad
          </h1>
          <p
            className="text-neutral-600 tracking-wide leading-relaxed max-w-4xl"
            style={{
              fontSize: "clamp(1rem, 2vw, 1.25rem)",
              fontWeight: 300,
              lineHeight: 1.8,
            }}
          >
            Every ingredient is carefully selected to support performance, digestion,
            and recovery — clean, effective, and delicious.
          </p>
        </motion.div>

        {/* Three Column Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {ingredients.map((ingredient, index) => (
            <motion.div
              key={ingredient.title}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.2 + index * 0.15,
                ease: "easeOut",
              }}
              className="group relative bg-white rounded-3xl overflow-hidden border border-neutral-200 hover:border-purple-600 transition-all duration-500 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative h-94 sm:h-72 md:h-64 overflow-hidden rounded-t-3xl">
                <ImageWithFallback
                  src={ingredient.image}
                  alt={ingredient.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent rounded-t-3xl" />
                <div className="absolute top-4 left-4">
                  <div className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full">
                    <span className="text-neutral-900 tracking-wider text-xs uppercase font-semibold">
                      {ingredient.title}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 space-y-3 text-left">
                <p
                  className="text-neutral-600 tracking-wide leading-relaxed max-w-4xl"
                  style={{
                    fontSize: "clamp(1rem, 2vw, 1.25rem)",
                    fontWeight: 300,
                    lineHeight: 1.6,
                  }}
                >
                  {ingredient.heading}
                </p>
              </div>

              {/* Hover indicator */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-purple-600 origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: isInView ? 1 : 0 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.15 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

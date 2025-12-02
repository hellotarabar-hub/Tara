// import { motion } from 'motion/react';
// import { useInView } from 'motion/react';
// import { useRef, useState } from 'react';
// import { ArrowRight } from 'lucide-react';

// export default function CTA() {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.3 });
//   const [email, setEmail] = useState('');
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (email && emailRegex.test(email)) {
//       setSubmitted(true);
//       setTimeout(() => {
//         setSubmitted(false);
//         setEmail('');
//       }, 4000);
//     }
//   };

//   return (
//     <section
//       id="cta"
//       ref={ref}
//       className="relative min-h-[55vh] flex flex-col items-center justify-center overflow-hidden bg-black bg-gradient-to-b from-black/90 to-neutral-900 px-6 py-20"
//     >
//       {/* Content */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={isInView ? { opacity: 1, y: 0 } : {}}
//         transition={{ duration: 1, ease: "easeOut" }}
//         className="max-w-3xl text-center"
//       >
//         <motion.div
//           initial={{ width: 0 }}
//           animate={isInView ? { width: '60px' } : {}}
//           transition={{ duration: 0.8, delay: 0.3 }}
//           className="h-px bg-white/60 mx-auto mb-10"
//         />

//         <h2
//           className="text-white mb-8 tracking-tight"
//           style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 200, lineHeight: 1.1 }}
//         >
//           Join The Movement
//         </h2>

//         <p
//           className="text-white/80 mb-12 max-w-xl mx-auto tracking-wide leading-relaxed"
//           style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', fontWeight: 300 }}
//         >
//           Be the first to experience TARA. Join our waitlist for exclusive early access.
//         </p>

//         {/* Email Form */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
//           className="max-w-lg mx-auto"
//         >
//           {submitted ? (
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               className="py-6 px-6 bg-white/10 backdrop-blur-sm border border-white/20"
//             >
//               <p className="text-white tracking-wide" style={{ fontSize: '1.125rem', fontWeight: 300, letterSpacing: '0.05em' }}>
//                 WELCOME TO TARA
//               </p>
//               <p className="text-white/60 mt-2 text-sm tracking-wide" style={{ fontWeight: 300 }}>
//                 Check your email for confirmation
//               </p>
//             </motion.div>
//           ) : (
//             <form onSubmit={handleSubmit} className="relative group">
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="Enter your email"
//                   required
//                   className="flex-1 px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white placeholder-white/40 outline-none focus:border-white/40 transition-all duration-300 tracking-wide"
//                   style={{ fontSize: 'clamp(1rem, 1.5vw, 1rem)', fontWeight: 300, lineHeight: 1.5 }}
//                   aria-label="Email address"
//                 />
//                 <button
//                   type="submit"
//                   className="px-8 py-4 bg-white text-neutral-900 hover:bg-white/90 transition-all duration-300 flex items-center justify-center gap-3 group"
//                   style={{ fontWeight: 400, letterSpacing: '0.1em', fontSize: '0.875rem' }}
//                   aria-label="Join waitlist"
//                 >
//                   JOIN
//                   <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
//                 </button>
//               </div>
//             </form>
//           )}
//         </motion.div>
//       </motion.div>

//       {/* Footer */}
//       <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/10">
//         <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
//           <div className="flex flex-col sm:flex-row items-center justify-between text-white/40 gap-4 text-xs tracking-wide">
//             <p style={{ letterSpacing: '0.1em' }}>© 2025 TARA Nutrition, LLC</p>
//             <div className="flex gap-8">
//               <button
//                 onClick={() => window.open('/privacy', '_blank', 'width=1000,height=800')}
//                 className="hover:text-white/80 transition-colors tracking-wide"
//                 style={{ letterSpacing: '0.1em' }}
//               >
//                 Privacy
//               </button>
//               <button
//                 onClick={() => window.open('/terms', '_blank', 'width=1000,height=800')}
//                 className="hover:text-white/80 transition-colors tracking-wide"
//                 style={{ letterSpacing: '0.1em' }}
//               >
//                 Terms
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
























// import { motion } from 'motion/react';
// import { useInView } from 'motion/react';
// import { useRef, useState, useEffect } from 'react';
// import { ArrowRight } from 'lucide-react';

// export default function CTA() {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.3 });
//   const [email, setEmail] = useState('');
//   const [submitted, setSubmitted] = useState(false);
//   const [cookiesAccepted, setCookiesAccepted] = useState(false);

//   // Load cookie preference from localStorage
//   useEffect(() => {
//     const accepted = localStorage.getItem('cookiesAccepted');
//     if (accepted === 'true') setCookiesAccepted(true);
//   }, []);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (email && emailRegex.test(email)) {
//       setSubmitted(true);
//       setTimeout(() => {
//         setSubmitted(false);
//         setEmail('');
//       }, 4000);
//     }
//   };

//   const handleAcceptCookies = () => {
//     localStorage.setItem('cookiesAccepted', 'true');
//     setCookiesAccepted(true);
//   };
//   const handleDeclineCookies = () => {
//     localStorage.setItem('cookiesAccepted', 'true'); // Treat decline same as accept for hiding
//     setCookiesAccepted(true);
//   };

//   return (
//     <section
//       id="cta"
//       ref={ref}
//       className="relative min-h-[55vh] flex flex-col items-center justify-center overflow-hidden bg-black bg-gradient-to-b from-black/90 to-neutral-900 px-6 py-20"
//     >
//       {/* Content */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={isInView ? { opacity: 1, y: 0 } : {}}
//         transition={{ duration: 1, ease: "easeOut" }}
//         className="max-w-3xl text-center"
//       >
//         <motion.div
//           initial={{ width: 0 }}
//           animate={isInView ? { width: '60px' } : {}}
//           transition={{ duration: 0.8, delay: 0.3 }}
//           className="h-px bg-white/60 mx-auto mb-10"
//         />

//         <h2
//           className="text-white mb-8 tracking-tight"
//           style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 200, lineHeight: 1.1 }}
//         >
//           Join The Movement
//         </h2>

//         <p
//           className="text-white/80 mb-12 max-w-xl mx-auto tracking-wide leading-relaxed"
//           style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', fontWeight: 300 }}
//         >
//           Be the first to experience TARA. Join our waitlist for exclusive early access.
//         </p>

//         {/* Email Form */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
//           className="max-w-lg mx-auto"
//         >
//           {submitted ? (
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               className="py-6 px-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl"
//             >
//               <p className="text-white tracking-wide" style={{ fontSize: '1.125rem', fontWeight: 300, letterSpacing: '0.05em' }}>
//                 WELCOME TO TARA
//               </p>
//               <p className="text-white/60 mt-2 text-sm tracking-wide" style={{ fontWeight: 300 }}>
//                 Check your email for confirmation
//               </p>
//             </motion.div>
//           ) : (
//             <form onSubmit={handleSubmit} className="relative group">
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="Enter your email"
//                   required
//                   className="flex-1 px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white placeholder-white/40 outline-none focus:border-white/40 transition-all duration-300 tracking-wide rounded-xl"
//                   style={{ fontSize: 'clamp(1rem, 1.5vw, 1rem)', fontWeight: 300, lineHeight: 1.5 }}
//                   aria-label="Email address"
//                 />
//                 <button
//                   type="submit"
//                   className="px-8 py-4 bg-white text-neutral-900 hover:bg-white/90 transition-all duration-300 flex items-center justify-center gap-3 group rounded-xl"
//                   style={{ fontWeight: 400, letterSpacing: '0.1em', fontSize: '0.875rem' }}
//                   aria-label="Join waitlist"
//                 >
//                   JOIN
//                   <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
//                 </button>
//               </div>
//             </form>
//           )}
//         </motion.div>

//         {/* COOKIE BANNER INLINE — STYLISH BLACK BUTTONS WITH EXTRA PADDING */}
//         {!cookiesAccepted && (
//           <div className="w-full max-w-lg bg-white text-black p-6 sm:p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl border border-gray-200 mt-12 mx-auto">
//             <p className="text-black text-sm sm:text-base text-center sm:text-left font-medium">
//               We respect your data. We use cookies to enhance your experience and analyze our traffic. By clicking "Accept", you consent to our use of cookies.
//             </p>
//             <div className="flex gap-3 flex-col sm:flex-row w-full sm:w-auto mt-3 sm:mt-0">
//               <button
//                 onClick={handleDeclineCookies}
//                 className="w-full sm:w-28 px-4 py-3 bg-black text-white rounded-xl hover:bg-gray-800 font-medium transition-colors"
//               >
//                 No thanks
//               </button>
//               <button
//                 onClick={handleAcceptCookies}
//                 className="w-full sm:w-28 px-4 py-3 bg-black text-white rounded-xl hover:bg-gray-800 font-medium transition-colors"
//               >
//                Accept
//               </button>
//             </div>
//           </div>
//         )}
//       </motion.div>

//       {/* Footer */}
//       <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/10">
//         <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
//           <div className="flex flex-col sm:flex-row items-center justify-between text-white/40 gap-4 text-xs tracking-wide">
//             <p style={{ letterSpacing: '0.1em' }}>© 2025 TARA Nutrition, LLC</p>
//             <div className="flex gap-8">
//               <button
//                 onClick={() => window.open('/privacy', '_blank', 'width=1000,height=800')}
//                 className="hover:text-white/80 transition-colors tracking-wide"
//                 style={{ letterSpacing: '0.1em' }}
//               >
//                 Privacy
//               </button>
//               <button
//                 onClick={() => window.open('/terms', '_blank', 'width=1000,height=800')}
//                 className="hover:text-white/80 transition-colors tracking-wide"
//                 style={{ letterSpacing: '0.1em' }}
//               >
//                 Terms
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }





import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ArrowRight, Instagram } from 'lucide-react';

// TikTok icon (inline SVG)
const TikTok = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 256 256"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M240 80.7v44.7a94.8 94.8 0 0 1-54-16.7v59.3a88 88 0 1 1-88-88 89 89 0 0 1 13.5 1v47.2a40.9 40.9 0 1 0 28 38.8V16h46.5a54 54 0 0 0 54 54.7Z" />
  </svg>
);

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) return;

    const formData = new FormData();
    formData.append('EMAIL', email);

    const mailchimpURL =
      'https://us15.list-manage.com/subscribe/post-json?u=55288db69ea3107690efe06f6&id=9d24d91277&c=?';

    fetch(mailchimpURL, {
      method: 'POST',
      body: formData,
      mode: 'no-cors',
    }).finally(() => {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmail('');
      }, 4000);
    });
  };

  return (
    <section
      id="cta"
      ref={ref}
      className="relative min-h-[55vh] flex flex-col items-center justify-center overflow-hidden bg-black bg-gradient-to-b from-black/90 to-neutral-900 px-6 py-20"
    >
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="max-w-3xl text-center"
      >
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: '60px' } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-px bg-white/60 mx-auto mb-10"
        />

        <h2
          className="text-white mb-8 tracking-tight"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 200, lineHeight: 1.1 }}
        >
          Join The Movement
        </h2>

        <p
          className="text-white/80 mb-12 max-w-xl mx-auto tracking-wide leading-relaxed"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', fontWeight: 300 }}
        >
         Be the first to experience TARA.
        </p>

        {/* Email Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
          className="max-w-lg mx-auto"
        >
          {submitted ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="py-6 px-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl"
            >
              <p
                className="text-white tracking-wide"
                style={{ fontSize: '1.125rem', fontWeight: 300, letterSpacing: '0.05em' }}
              >
                WELCOME TO TARA
              </p>
              <p className="text-white/60 mt-2 text-sm tracking-wide" style={{ fontWeight: 300 }}>
                Thank you for joining our waitlist!
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="relative group">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white placeholder-white/40 outline-none focus:border-white/40 transition-all duration-300 tracking-wide rounded-xl"
                  style={{ fontSize: 'clamp(1rem, 1.5vw, 1rem)', fontWeight: 300, lineHeight: 1.5 }}
                  aria-label="Email address"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-white text-neutral-900 hover:bg-white/90 transition-all duration-300 flex items-center justify-center gap-3 group rounded-xl"
                  style={{ fontWeight: 400, letterSpacing: '0.1em', fontSize: '0.875rem' }}
                  aria-label="Join waitlist"
                >
                  JOIN
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </motion.div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between text-white/40 gap-4 text-xs tracking-wide">
            
            <p style={{ letterSpacing: '0.1em' }}>© 2025 TARA Nutrition, LLC</p>

            <div className="flex items-center gap-8">
              {/* Privacy & Terms */}
              <button
                onClick={() => window.open('/privacy', '_blank', 'width=1000,height=800')}
                className="hover:text-white/80 transition-colors tracking-wide"
                style={{ letterSpacing: '0.1em' }}
              >
                Privacy
              </button>

              <button
                onClick={() => window.open('/terms', '_blank', 'width=1000,height=800')}
                className="hover:text-white/80 transition-colors tracking-wide"
                style={{ letterSpacing: '0.1em' }}
              >
                Terms
              </button>

              {/* Social Icons */}
              <div className="flex items-center gap-6 text-white/40">
                <a
                  href="https://instagram.com/havesome.tara"
                  target="_blank"
                  className="hover:text-white transition-colors"
                >
                  <Instagram size={18} />
                </a>

                <a
                  href="https://www.tiktok.com/@havesome.tara"
                  target="_blank"
                  className="hover:text-white transition-colors"
                >
                  <TikTok />
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

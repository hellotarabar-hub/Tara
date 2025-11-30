// import { motion, AnimatePresence } from 'motion/react';
// import { useState, useEffect } from 'react';
// import { X, ArrowRight } from 'lucide-react';

// interface WaitlistPopupProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// export default function WaitlistPopup({ isOpen, onClose }: WaitlistPopupProps) {
//   const [email, setEmail] = useState('');
//   const [submitted, setSubmitted] = useState(false);

//   // Reset submitted state when popup closes
//   useEffect(() => {
//     if (!isOpen) {
//       const timer = setTimeout(() => {
//         setSubmitted(false);
//         setEmail('');
//       }, 500);
//       return () => clearTimeout(timer);
//     }
//   }, [isOpen]);

//   // Prevent body scroll only
//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }
//   }, [isOpen]);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (email && emailRegex.test(email)) {
//       setSubmitted(true);
//       setTimeout(() => {
//         onClose();
//       }, 2500);
//     }
//   };

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <>
//           {/* Backdrop */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.3 }}
//             className="fixed inset-0 bg-neutral-900/60 backdrop-blur-sm z-50"
//             onClick={onClose}
//           />

//           {/* Popup */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9, y: 20 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             exit={{ opacity: 0, scale: 0.9, y: 20 }}
//             transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
//             className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-lg mx-2"
//           >
//             <div className="bg-white rounded-none shadow-2xl overflow-hidden relative">
//               {/* Close button */}
//               <button
//                 onClick={onClose}
//                 className="absolute top-6 right-6 text-neutral-400 hover:text-neutral-900 transition-colors z-10"
//                 aria-label="Close popup"
//               >
//                 <X size={24} />
//               </button>

//               <div className="p-12">
//                 {submitted ? (
//                   <motion.div
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     className="text-center py-8"
//                   >
//                     <motion.div
//                       initial={{ scale: 0 }}
//                       animate={{ scale: 1 }}
//                       transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
//                       className="w-16 h-16 mx-auto mb-6 rounded-full bg-neutral-900 flex items-center justify-center"
//                     >
//                       <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                       </svg>
//                     </motion.div>
//                     <h3
//                       className="text-neutral-900 mb-3 tracking-wide"
//                       style={{ fontSize: 'clamp(1.25rem, 2vw, 1.5rem)', fontWeight: 300 }}
//                     >
//                       Welcome to TARA
//                     </h3>
//                     <p
//                       className="text-neutral-600 tracking-wide leading-relaxed"
//                       style={{ fontSize: 'clamp(1rem, 1.5vw, 1.125rem)' }}
//                     >
//                       Thank you for joining our waitlist! We'll keep you updated with the latest news and exclusive offers.
//                     </p>
//                   </motion.div>
//                 ) : (
//                   <>
//                     <motion.div
//                       initial={{ opacity: 0, y: 10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: 0.1 }}
//                       className="text-center mb-8"
//                     >
//                       <h3
//                         className="text-neutral-900 mb-4 tracking-tight"
//                         style={{ fontSize: 'clamp(1.75rem, 4vw, 2rem)', fontWeight: 300 }}
//                       >
//                         Join Our Waitlist
//                       </h3>
//                       <p
//                         className="text-neutral-600 tracking-wide leading-relaxed max-w-md mx-auto"
//                         style={{ fontSize: 'clamp(1rem, 1.5vw, 1.125rem)' }}
//                       >
//                         Be the first to experience TARA. Get exclusive early access and special launch offers.
//                       </p>
//                     </motion.div>

//                     <motion.form
//                       initial={{ opacity: 0, y: 10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: 0.2 }}
//                       onSubmit={handleSubmit}
//                       className="space-y-6"
//                     >
//                       <div>
//                         <input
//                           type="email"
//                           value={email}
//                           onChange={(e) => setEmail(e.target.value)}
//                           placeholder="Enter your email"
//                           required
//                           className="w-full px-6 py-4 bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder-neutral-400 outline-none focus:border-neutral-400 transition-all"
//                         />
//                       </div>

//                       <button
//                         type="submit"
//                         className="w-full px-8 py-4 bg-neutral-900 text-white hover:bg-neutral-800 transition-all flex items-center justify-center gap-3 group"
//                         style={{ letterSpacing: '0.1em' }}
//                       >
//                         JOIN WAITLIST
//                         <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                       </button>
//                     </motion.form>
//                   </>
//                 )}
//               </div>

//               {/* Decorative accent */}
//               <motion.div
//                 initial={{ scaleX: 0 }}
//                 animate={{ scaleX: 1 }}
//                 transition={{ delay: 0.3, duration: 0.6 }}
//                 className="h-1 bg-neutral-900 origin-left"
//               />
//             </div>
//           </motion.div>
//         </>
//       )}
//     </AnimatePresence>
//   );
// }

















// import { motion, AnimatePresence } from 'motion/react';
// import { useState, useEffect } from 'react';
// import { X, ArrowRight } from 'lucide-react';

// interface WaitlistPopupProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// export default function WaitlistPopup({ isOpen, onClose }: WaitlistPopupProps) {
//   const [email, setEmail] = useState('');
//   const [submitted, setSubmitted] = useState(false);

//   useEffect(() => {
//     if (!isOpen) {
//       const timer = setTimeout(() => {
//         setSubmitted(false);
//         setEmail('');
//       }, 500);
//       return () => clearTimeout(timer);
//     }
//   }, [isOpen]);

//   useEffect(() => {
//     document.body.style.overflow = isOpen ? 'hidden' : 'unset';
//   }, [isOpen]);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!email || !emailRegex.test(email)) return;

//     const formData = new FormData();
//     formData.append('EMAIL', email);

//     const mailchimpURL =
//       'https://us15.list-manage.com/subscribe/post-json?u=55288db69ea3107690efe06f6&id=9d24d91277&c=?';

//     fetch(mailchimpURL, {
//       method: 'POST',
//       body: formData,
//       mode: 'no-cors',
//     }).finally(() => {
//       setSubmitted(true);
//       setTimeout(() => {
//         onClose();
//       }, 2500);
//     });
//   };

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <>
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.3 }}
//             className="fixed inset-0 bg-neutral-900/60 backdrop-blur-sm z-50"
//             onClick={onClose}
//           />

//           <motion.div
//             initial={{ opacity: 0, scale: 0.9, y: 20 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             exit={{ opacity: 0, scale: 0.9, y: 20 }}
//             transition={{ duration: 0.4 }}
//             className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-lg mx-2"
//           >
//             <div className="bg-white rounded-none shadow-2xl overflow-hidden relative">
//               <button
//                 onClick={onClose}
//                 className="absolute top-6 right-6 text-neutral-400 hover:text-neutral-900 transition-colors z-10"
//                 aria-label="Close popup"
//               >
//                 <X size={24} />
//               </button>

//               <div className="p-12">
//                 {submitted ? (
//                   <motion.div
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     className="text-center py-8"
//                   >
//                     <motion.div
//                       initial={{ scale: 0 }}
//                       animate={{ scale: 1 }}
//                       transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
//                       className="w-16 h-16 mx-auto mb-6 rounded-full bg-neutral-900 flex items-center justify-center"
//                     >
//                       <svg
//                         className="w-8 h-8 text-white"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M5 13l4 4L19 7"
//                         />
//                       </svg>
//                     </motion.div>
//                     <h3
//                       className="text-neutral-900 mb-3 tracking-wide"
//                       style={{
//                         fontSize: 'clamp(1.25rem, 2vw, 1.5rem)',
//                         fontWeight: 300,
//                       }}
//                     >
//                       Welcome to TARA
//                     </h3>
//                     <p
//                       className="text-neutral-600 tracking-wide leading-relaxed"
//                       style={{
//                         fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
//                       }}
//                     >
//                       Thank you for joining our waitlist! We'll keep you updated
//                       with the latest news and exclusive offers.
//                     </p>
//                   </motion.div>
//                 ) : (
//                   <>
//                     <motion.div
//                       initial={{ opacity: 0, y: 10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: 0.1 }}
//                       className="text-center mb-8"
//                     >
//                       <h3
//                         className="text-neutral-900 mb-4 tracking-tight"
//                         style={{
//                           fontSize: 'clamp(1.75rem, 4vw, 2rem)',
//                           fontWeight: 300,
//                         }}
//                       >
//                         Join Our Waitlist
//                       </h3>
//                       <p
//                         className="text-neutral-600 tracking-wide leading-relaxed max-w-md mx-auto"
//                         style={{
//                           fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
//                         }}
//                       >
//                         Be the first to experience TARA. Get exclusive early
//                         access and special launch offers.
//                       </p>
//                     </motion.div>

//                     <motion.form onSubmit={handleSubmit} className="space-y-6">
//                       <div>
//                         <input
//                           type="email"
//                           value={email}
//                           onChange={(e) => setEmail(e.target.value)}
//                           placeholder="Enter your email"
//                           required
//                           className="w-full px-6 py-4 bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder-neutral-400 outline-none focus:border-neutral-400 transition-all"
//                         />
//                       </div>
//                       <button
//                         type="submit"
//                         className="w-full px-8 py-4 bg-neutral-900 text-white hover:bg-neutral-800 transition-all flex items-center justify-center gap-3 group"
//                         style={{ letterSpacing: '0.1em' }}
//                       >
//                         JOIN WAITLIST
//                         <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                       </button>
//                     </motion.form>
//                   </>
//                 )}
//               </div>
//             </div>
//           </motion.div>
//         </>
//       )}
//     </AnimatePresence>
//   );
// }







// import { motion, AnimatePresence } from 'motion/react';
// import { useState, useEffect } from 'react';
// import { X, ArrowRight } from 'lucide-react';

// interface WaitlistPopupProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// export default function WaitlistPopup({ isOpen, onClose }: WaitlistPopupProps) {
//   const [email, setEmail] = useState('');
//   const [submitted, setSubmitted] = useState(false);
//   const [showPopup, setShowPopup] = useState(isOpen);

//   // Check if the popup should be shown
//   useEffect(() => {
//     const submittedEmail = localStorage.getItem('waitlistEmail');
//     const closedBefore = localStorage.getItem('waitlistClosed');
//     if (submittedEmail || closedBefore) {
//       setShowPopup(false);
//     } else {
//       setShowPopup(isOpen);
//     }
//   }, [isOpen]);

//   useEffect(() => {
//     document.body.style.overflow = showPopup ? 'hidden' : 'unset';
//   }, [showPopup]);

//   const handleClose = () => {
//     setShowPopup(false);
//     localStorage.setItem('waitlistClosed', 'true'); // mark as closed
//     onClose();
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!email || !emailRegex.test(email)) return;

//     localStorage.setItem('waitlistEmail', email); // mark email as submitted

//     const formData = new FormData();
//     formData.append('EMAIL', email);

//     const mailchimpURL = 'https://us15.list-manage.com/subscribe/post-json?u=55288db69ea3107690efe06f6&id=9d24d91277&c=?';

//     fetch(mailchimpURL, {
//       method: 'POST',
//       body: formData,
//       mode: 'no-cors',
//     }).finally(() => {
//       setSubmitted(true);
//       setTimeout(() => {
//         handleClose();
//       }, 1500);
//     });
//   };

//   if (!showPopup) return null; // completely hide if closed or submitted

//   return (
//     <AnimatePresence>
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         transition={{ duration: 0.3 }}
//         className="fixed inset-0 bg-neutral-900/60 backdrop-blur-sm z-50"
//         onClick={handleClose}
//       />

//       <motion.div
//         initial={{ opacity: 0, scale: 0.9, y: 20 }}
//         animate={{ opacity: 1, scale: 1, y: 0 }}
//         exit={{ opacity: 0, scale: 0.9, y: 20 }}
//         transition={{ duration: 0.4 }}
//         className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-lg mx-2"
//       >
//         <div className="bg-white rounded-none shadow-2xl overflow-hidden relative">
//           <button
//             onClick={handleClose}
//             className="absolute top-6 right-6 text-neutral-400 hover:text-neutral-900 transition-colors z-10"
//             aria-label="Close popup"
//           >
//             <X size={24} />
//           </button>

//           <div className="p-12">
//             {submitted ? (
//               <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center py-8">
//                 <motion.div
//                   initial={{ scale: 0 }}
//                   animate={{ scale: 1 }}
//                   transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
//                   className="w-16 h-16 mx-auto mb-6 rounded-full bg-neutral-900 flex items-center justify-center"
//                 >
//                   <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                   </svg>
//                 </motion.div>
//                 <h3 className="text-neutral-900 mb-3 tracking-wide" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.5rem)', fontWeight: 300 }}>
//                   Welcome to TARA
//                 </h3>
//                 <p className="text-neutral-600 tracking-wide leading-relaxed" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.125rem)' }}>
//                   Thank you for joining our waitlist!
//                 </p>
//               </motion.div>
//             ) : (
//               <>
//                 <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-center mb-8">
//                   <h3 className="text-neutral-900 mb-4 tracking-tight" style={{ fontSize: 'clamp(1.75rem, 4vw, 2rem)', fontWeight: 300 }}>
//                     Join Our Waitlist
//                   </h3>
//                   <p className="text-neutral-600 tracking-wide leading-relaxed max-w-md mx-auto" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.125rem)' }}>
//                     Be the first to experience TARA. Get exclusive early access and special launch offers.
//                   </p>
//                 </motion.div>

//                 <motion.form onSubmit={handleSubmit} className="space-y-6">
//                   <div>
//                     <input
//                       type="email"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       placeholder="Enter your email"
//                       required
//                       className="w-full px-6 py-4 bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder-neutral-400 outline-none focus:border-neutral-400 transition-all"
//                     />
//                   </div>
//                   <button
//                     type="submit"
//                     className="w-full px-8 py-4 bg-neutral-900 text-white hover:bg-neutral-800 transition-all flex items-center justify-center gap-3 group"
//                     style={{ letterSpacing: '0.1em' }}
//                   >
//                     JOIN WAITLIST
//                     <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                   </button>
//                 </motion.form>
//               </>
//             )}
//           </div>
//         </div>
//       </motion.div>
//     </AnimatePresence>
//   );
// }






// import { motion, AnimatePresence } from 'motion/react';
// import { useState, useEffect } from 'react';
// import { X, ArrowRight } from 'lucide-react';

// interface WaitlistPopupProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// export default function WaitlistPopup({ isOpen, onClose }: WaitlistPopupProps) {
//   const [email, setEmail] = useState('');
//   const [submitted, setSubmitted] = useState(false);
//   const [showPopup, setShowPopup] = useState(isOpen);

//   useEffect(() => {
//     const submittedEmail = localStorage.getItem('waitlistEmail');
//     const closedBefore = localStorage.getItem('waitlistClosed');
//     if (submittedEmail || closedBefore) {
//       setShowPopup(false);
//     } else {
//       setShowPopup(isOpen);
//     }
//   }, [isOpen]);

//   useEffect(() => {
//     document.body.style.overflow = showPopup ? 'hidden' : 'unset';
//   }, [showPopup]);

//   const handleClose = () => {
//     setShowPopup(false);
//     localStorage.setItem('waitlistClosed', 'true');
//     onClose();
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!email || !emailRegex.test(email)) return;

//     localStorage.setItem('waitlistEmail', email);

//     const formData = new FormData();
//     formData.append('EMAIL', email);

//     const mailchimpURL =
//       'https://us15.list-manage.com/subscribe/post-json?u=55288db69ea3107690efe06f6&id=9d24d91277&c=?';

//     fetch(mailchimpURL, {
//       method: 'POST',
//       body: formData,
//       mode: 'no-cors',
//     }).finally(() => {
//       setSubmitted(true);
//       setTimeout(() => {
//         handleClose();
//       }, 1500);
//     });
//   };

//   if (!showPopup) return null;

//   return (
//     <AnimatePresence>
//       {/* Overlay */}
//       {showPopup && (
//         <motion.div
//           key="overlay" // ✅ Unique key
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.3 }}
//           className="fixed inset-0 bg-neutral-900/60 backdrop-blur-sm z-50"
//           onClick={handleClose}
//         />
//       )}

//       {/* Modal */}
//       {showPopup && (
//         <motion.div
//           key="modal" // ✅ Unique key
//           initial={{ opacity: 0, scale: 0.9, y: 20 }}
//           animate={{ opacity: 1, scale: 1, y: 0 }}
//           exit={{ opacity: 0, scale: 0.9, y: 20 }}
//           transition={{ duration: 0.4 }}
//           className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-lg mx-2"
//         >
//           <div className="bg-white rounded-none shadow-2xl overflow-hidden relative">
//             <button
//               onClick={handleClose}
//               className="absolute top-6 right-6 text-neutral-400 hover:text-neutral-900 transition-colors z-10"
//               aria-label="Close popup"
//             >
//               <X size={24} />
//             </button>

//             <div className="p-12">
//               <AnimatePresence mode="wait">
//                 {submitted ? (
//                   <motion.div
//                     key="submitted" // ✅ Unique key
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: 10 }}
//                     className="text-center py-8"
//                   >
//                     <motion.div
//                       initial={{ scale: 0 }}
//                       animate={{ scale: 1 }}
//                       transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
//                       className="w-16 h-16 mx-auto mb-6 rounded-full bg-neutral-900 flex items-center justify-center"
//                     >
//                       <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                       </svg>
//                     </motion.div>
//                     <h3
//                       className="text-neutral-900 mb-3 tracking-wide"
//                       style={{ fontSize: 'clamp(1.25rem, 2vw, 1.5rem)', fontWeight: 300 }}
//                     >
//                       Welcome to TARA
//                     </h3>
//                     <p
//                       className="text-neutral-600 tracking-wide leading-relaxed"
//                       style={{ fontSize: 'clamp(1rem, 1.5vw, 1.125rem)' }}
//                     >
//                       Thank you for joining our waitlist!
//                     </p>
//                   </motion.div>
//                 ) : (
//                   <motion.div
//                     key="form" // ✅ Unique key
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: 10 }}
//                     transition={{ delay: 0.1 }}
//                   >
//                     <div className="text-center mb-8">
//                       <h3
//                         className="text-neutral-900 mb-4 tracking-tight"
//                         style={{ fontSize: 'clamp(1.75rem, 4vw, 2rem)', fontWeight: 300 }}
//                       >
//                         Join Our Waitlist
//                       </h3>
//                       <p
//                         className="text-neutral-600 tracking-wide leading-relaxed max-w-md mx-auto"
//                         style={{ fontSize: 'clamp(1rem, 1.5vw, 1.125rem)' }}
//                       >
//                         Be the first to experience TARA. Get exclusive early access and special launch offers.
//                       </p>
//                     </div>

//                     <form onSubmit={handleSubmit} className="space-y-6">
//                       <input
//                         type="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         placeholder="Enter your email"
//                         required
//                         className="w-full px-6 py-4 bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder-neutral-400 outline-none focus:border-neutral-400 transition-all"
//                       />
//                       <button
//                         type="submit"
//                         className="w-full px-8 py-4 bg-neutral-900 text-white hover:bg-neutral-800 transition-all flex items-center justify-center gap-3 group"
//                         style={{ letterSpacing: '0.1em' }}
//                       >
//                         JOIN WAITLIST
//                         <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                       </button>
//                     </form>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>
//           </div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }






import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { X, ArrowRight } from 'lucide-react';

interface WaitlistPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WaitlistPopup({ isOpen, onClose }: WaitlistPopupProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showPopup, setShowPopup] = useState(isOpen);

  // Check if the popup should be shown
  useEffect(() => {
    const submittedEmail = localStorage.getItem('waitlistEmail');
    const closedBefore = localStorage.getItem('waitlistClosed');
    if (submittedEmail || closedBefore) {
      setShowPopup(false);
    } else {
      setShowPopup(isOpen);
    }
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = showPopup ? 'hidden' : 'unset';
  }, [showPopup]);

  const handleClose = () => {
    setShowPopup(false);
    localStorage.setItem('waitlistClosed', 'true'); // mark as closed
    onClose();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) return;

    localStorage.setItem('waitlistEmail', email); // mark email as submitted

    const formData = new FormData();
    formData.append('EMAIL', email);

    const mailchimpURL = 'https://us15.list-manage.com/subscribe/post-json?u=55288db69ea3107690efe06f6&id=9d24d91277&c=?';

    fetch(mailchimpURL, {
      method: 'POST',
      body: formData,
      mode: 'no-cors',
    }).finally(() => {
      setSubmitted(true);
      setTimeout(() => {
        handleClose();
      }, 1500);
    });
  };

  if (!showPopup) return null; // completely hide if closed or submitted

  return (
    <AnimatePresence>
      <motion.div
        key="overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 bg-neutral-900/60 backdrop-blur-sm z-50"
        onClick={handleClose}
      />

      <motion.div
        key="popup"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.4 }}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-lg mx-2"
      >
        <div className="bg-white rounded-none shadow-2xl overflow-hidden relative">
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 text-neutral-400 hover:text-neutral-900 transition-colors z-10"
            aria-label="Close popup"
          >
            <X size={24} />
          </button>

          <div className="p-12">
            {submitted ? (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center py-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                  className="w-16 h-16 mx-auto mb-6 rounded-full bg-neutral-900 flex items-center justify-center"
                >
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
                <h3 className="text-neutral-900 mb-3 tracking-wide" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.5rem)', fontWeight: 300 }}>
                  Welcome to TARA
                </h3>
                <p className="text-neutral-600 tracking-wide leading-relaxed" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.125rem)' }}>
                  Thank you for joining our waitlist!
                </p>
              </motion.div>
            ) : (
              <>
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-center mb-8">
                  <h3 className="text-neutral-900 mb-4 tracking-tight" style={{ fontSize: 'clamp(1.75rem, 4vw, 2rem)', fontWeight: 300 }}>
                    Join Our Waitlist
                  </h3>
                  <p className="text-neutral-600 tracking-wide leading-relaxed max-w-md mx-auto" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.125rem)' }}>
                    Be the first to experience TARA. Get exclusive early access and special launch offers.
                  </p>
                </motion.div>

                <motion.form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    {/* Accessible label */}
                    <label htmlFor="waitlist-email" className="sr-only">Email</label>

                    <input
                      type="email"
                      id="waitlist-email"           // Unique ID
                      name="email"                  // Unique name
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      autoComplete="email"
                      className="w-full px-6 py-4 bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder-neutral-400 outline-none focus:border-neutral-400 transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-neutral-900 text-white hover:bg-neutral-800 transition-all flex items-center justify-center gap-3 group"
                    style={{ letterSpacing: '0.1em' }}
                  >
                    JOIN WAITLIST
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.form>
              </>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

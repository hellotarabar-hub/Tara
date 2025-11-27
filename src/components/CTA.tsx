import { motion, useScroll, useTransform } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function CTA() {
  const ref = useRef(null);
  const imageRef = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"]
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
  const imageY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && emailRegex.test(email)) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmail('');
      }, 4000);
    }
  };

  return (
    <section
      id="cta"
      ref={ref}
      className="relative min-h-[55vh] flex items-center overflow-hidden bg-neutral-900"
    >
      {/* Background Image with Parallax */}
      <div ref={imageRef} className="absolute inset-0 overflow-hidden">
        <motion.div
          style={{ scale: imageScale, y: imageY }}
          className="absolute inset-0 -top-20 -bottom-20"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1710511464405-b7cd5d503af8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBtaW5pbWFsJTIwYWVzdGhldGljfGVufDF8fHx8MTc2MjEyMTg2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Nature minimal"
            className="w-full h-full object-cover opacity-30"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/80 via-neutral-900/70 to-neutral-900/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center px-6 lg:px-12 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
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
            Be the first to experience TARA. Join our waitlist for exclusive early access.
          </p>
        </motion.div>

        {/* Email Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="max-w-lg mx-auto mb-10"
        >
          {submitted ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="py-6 px-6 bg-white/10 backdrop-blur-sm border border-white/20"
            >
              <p className="text-white tracking-wide" style={{ fontSize: '1.125rem', fontWeight: 300, letterSpacing: '0.05em' }}>
                WELCOME TO TARA
              </p>
              <p className="text-white/60 mt-2 text-sm tracking-wide" style={{ fontWeight: 300 }}>
                Check your email for confirmation
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
                  className="flex-1 px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white placeholder-white/40 outline-none focus:border-white/40 transition-all duration-300 tracking-wide"
                  style={{ fontSize: 'clamp(1rem, 1.5vw, 1rem)', fontWeight: 300, lineHeight: 1.5 }}
                  aria-label="Email address"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-white text-neutral-900 hover:bg-white/90 transition-all duration-300 flex items-center justify-center gap-3 group"
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
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between text-white/40 gap-4 text-xs tracking-wide">
            <p style={{ letterSpacing: '0.1em' }}>© 2025 TARA</p>
            <div className="flex gap-8">
              <button className="hover:text-white/80 transition-colors tracking-wide" style={{ letterSpacing: '0.1em' }}>
                Privacy
              </button>
              <button className="hover:text-white/80 transition-colors tracking-wide" style={{ letterSpacing: '0.1em' }}>
                Terms
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

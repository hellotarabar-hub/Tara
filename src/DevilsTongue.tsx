import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { ArrowLeft } from 'lucide-react';

export default function DevilsTongue() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Small delay for smooth entrance
    const timer = setTimeout(() => setShowContent(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // SEO and Security: Set document metadata
  useEffect(() => {
    document.title = "The Devil's Tongue - TARA's Secret Ingredient";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover konjac root - the ancient Asian superfood that powers TARA protein bars with gut-friendly fiber and natural satiety.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Discover konjac root - the ancient Asian superfood that powers TARA protein bars with gut-friendly fiber and natural satiety.';
      document.head.appendChild(meta);
    }
  }, []);

  const HeroSection = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start start", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

    return (
      <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden bg-neutral-900">
        {/* Background Image with Parallax */}
        <motion.div 
          style={{ scale, y }}
          className="absolute inset-0"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1662343959573-4f710eeadaf2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdXJwbGUlMjBib3RhbmljYWwlMjBwbGFudHxlbnwxfHx8fDE3NjI4OTE5NDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Purple botanical plant"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/60 via-neutral-900/40 to-neutral-900/80" />
        </motion.div>

        {/* Back Button */}
        <motion.a
          href="/"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute top-8 left-8 z-20 flex items-center gap-2 text-neutral-200 hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="tracking-wider text-sm">Back to TARA</span>
        </motion.a>

        {/* Hero Content */}
        <motion.div 
          style={{ opacity }}
          className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-6"
          >
            <span className="text-neutral-300 tracking-[0.3em] text-sm">OUR LITTLE SECRET</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-neutral-50 mb-8 tracking-tight"
            style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: 200, lineHeight: 1.1 }}
          >
            The Devil's Tongue
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-neutral-300 max-w-2xl mx-auto"
            style={{ fontSize: 'clamp(1.125rem, 2vw, 1.5rem)', fontWeight: 300, lineHeight: 1.8 }}
          >
            An ancient Asian superfood with a mysterious name and extraordinary benefits
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-12"
          >
            <div className="inline-block h-16 w-px bg-gradient-to-b from-transparent via-neutral-400 to-transparent opacity-50" />
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-neutral-400 text-xs tracking-widest"
        >
          SCROLL TO DISCOVER
        </motion.div>
      </section>
    );
  };

  const IntroSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
      <section ref={ref} className="relative min-h-screen flex items-center py-32 px-6 lg:px-12 bg-neutral-50">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, ease: "easeOut" }}
              className="space-y-8"
            >
              <div>
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: '60px' } : {}}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="h-px bg-neutral-800 mb-8"
                />
                <h2
                  className="text-neutral-900 mb-6 tracking-tight"
                  style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 200, lineHeight: 1.1 }}
                >
                  And our little secret, you ask?
                </h2>
              </div>

              <div className="space-y-6 text-neutral-600" style={{ fontSize: '1.125rem', lineHeight: 1.8, fontWeight: 300 }}>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Well, it's the devil's tongue, of course.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  That's what konjac root has been called for centuries in Asia — a tongue-shaped 
                  purple plant that's anything but evil.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  It's traditionally made into noodles and jellies and valued for helping you 
                  feel full at virtually zero calories — one reason it's a staple in light, 
                  gut-friendly dishes across Asia.
                </motion.p>
              </div>
            </motion.div>

            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="relative h-[600px] overflow-hidden"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1658354628278-07aae68a61ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb25qYWMlMjByb290JTIwcGxhbnR8ZW58MXx8fHwxNzYyODkxOTQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Konjac root plant"
                className="w-full h-full object-cover"
              />
              
              {/* Floating accent */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute -top-8 -left-8 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
              />
            </motion.div>
          </div>
        </div>
      </section>
    );
  };

  const BenefitsSection = () => {
    const ref = useRef(null);
    const imageRef = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    const { scrollYProgress } = useScroll({
      target: imageRef,
      offset: ["start end", "end start"]
    });

    const imageY = useTransform(scrollYProgress, [0, 1], ['20%', '-20%']);

    const benefits = [
      {
        text: "Soothes digestion and prevents gas and bloating",
        delay: 0.5
      },
      {
        text: "Supports steady energy through gradual nutrient release",
        delay: 0.7
      },
      {
        text: "Feeds beneficial gut bacteria and aids hydration",
        delay: 0.9
      },
      {
        text: "Naturally activates fullness hormones like GLP-1 to help curb cravings and improve nutrient absorption",
        delay: 1.1
      }
    ];

    return (
      <section ref={ref} className="relative py-32 px-6 lg:px-12 bg-white overflow-hidden">
        {/* Background decorative element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-neutral-50 to-transparent opacity-50" />

        <div className="max-w-7xl mx-auto w-full relative">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Image Side with Parallax */}
            <motion.div
              ref={imageRef}
              initial={{ opacity: 0, x: -60 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative h-[700px] overflow-hidden order-2 lg:order-1"
            >
              <motion.div
                style={{ y: imageY }}
                className="absolute inset-0 -top-20 -bottom-20"
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1546553836-33b20490e87e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndXQlMjBoZWFsdGglMjB3ZWxsbmVzc3xlbnwxfHx8fDE3NjI4NDc3MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Gut health wellness"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>

            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="space-y-10 order-1 lg:order-2"
            >
              <div>
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: '60px' } : {}}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="h-px bg-neutral-800 mb-8"
                />
                <h2
                  className="text-neutral-900 mb-6 tracking-tight"
                  style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 200, lineHeight: 1.2 }}
                >
                  Konjac's soluble fiber, glucomannan, gently expands in the stomach to form a soft gel that:
                </h2>
              </div>

              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: benefit.delay }}
                    className="flex items-start gap-4"
                  >
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-neutral-800 flex-shrink-0" />
                    <p className="text-neutral-600" style={{ fontSize: '1.125rem', lineHeight: 1.8, fontWeight: 300 }}>
                      {benefit.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
  };

  const ClosingSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "end start"]
    });

    const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

    return (
      <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-900">
        {/* Background Image with Parallax */}
        <motion.div 
          style={{ y: bgY }}
          className="absolute inset-0"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1558877397-bc0250979944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHRyYWRpdGlvbmFsJTIwZm9vZHxlbnwxfHx8fDE3NjI4OTE5NDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Asian traditional food"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/80 via-neutral-900/60 to-neutral-900/90" />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: '60px' } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-px bg-neutral-400 mb-12 mx-auto"
            />

            <h2
              className="text-neutral-50 mb-8 tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 200, lineHeight: 1.2 }}
            >
              No tricks, just biology
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-neutral-300 max-w-3xl mx-auto"
              style={{ fontSize: '1.25rem', lineHeight: 1.8, fontWeight: 300 }}
            >
              So yes, our "little secret" is just an ancient superfood doing what good food should — 
              helping your body work smarter, not harder.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="pt-8"
            >
              <a
                href="/"
                className="inline-block px-8 py-4 bg-white text-neutral-900 hover:bg-neutral-100 transition-colors tracking-wider text-sm"
              >
                DISCOVER TARA
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-neutral-400 to-transparent"
        />
      </section>
    );
  };

  if (!showContent) {
    return (
      <div className="min-h-screen bg-neutral-900 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-neutral-400 tracking-widest text-sm"
        >
          LOADING...
        </motion.div>
      </div>
    );
  }

  return (
    <div className="relative antialiased bg-white">
      <HeroSection />
      <IntroSection />
      <BenefitsSection />
      <ClosingSection />
    </div>
  );
}

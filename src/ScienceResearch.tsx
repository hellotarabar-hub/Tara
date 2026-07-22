import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { useRef, useEffect } from 'react';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from 'recharts';

export default function ScienceResearch() {
  const heroRef = useRef(null);

  // Hero scroll animation
  const { scrollYProgress } = useScroll();
  const heroY = useSpring(useTransform(scrollYProgress, [0, 0.5], ['0%', '30%']), { stiffness: 100, damping: 30 });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // SEO
  useEffect(() => {
    document.title = 'Science & Research - TARA';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Discover the science behind TARA. Evidence-based nutrition formulated for optimal gut health, satiety, and recovery.'
      );
    }
  }, []);

  // Chart data
  const satietyData = [
    { name: 'TARA', value: 92 },
    { name: 'Traditional Bar', value: 68 },
  ];

  const digestibilityData = [
    { name: 'TARA', value: 94 },
    { name: 'Whey Protein', value: 72 },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative antialiased bg-black">
      <Navbar />
      <ScrollProgress />

      {/* Hero Section */}
      <section
        id="hero"
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4 md:px-6 lg:px-8"
        style={{ backgroundColor: '#edd599ff' }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative w-full max-w-[1400px] mx-auto rounded-3xl lg:rounded-[2.5rem] overflow-hidden"
          style={{ backgroundColor: '#dfdcd3ff', minHeight: 'calc(100vh - 120px)' }}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1618053238059-cc7761222f2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWJvcmF0b3J5JTIwcmVzZWFyY2glMjBzY2llbmNlfGVufDF8fHx8MTc2MzMxNDYxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Scientific Research"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-120px)] p-8 md:p-12 lg:p-16">
            <motion.div
              className="text-center max-w-4xl"
              style={{ opacity: heroOpacity, y: heroY }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-6"
              >
                <span className="text-neutral-400 tracking-[0.2em] text-xs uppercase">
                  Evidence-Based Nutrition
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-white mb-8"
                style={{
                  fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
                  fontWeight: 300,
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                }}
              >
                Science & Research
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-neutral-300 max-w-2xl mx-auto mb-12"
                style={{ fontSize: 'clamp(1.125rem, 2vw, 1.375rem)', fontWeight: 300, lineHeight: 1.7 }}
              >
                Every ingredient in TARA is backed by rigorous scientific research. We combine ancient wisdom with modern nutritional science.
              </motion.p>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                onClick={() => scrollToSection('research-overview')}
                className="px-10 py-4 bg-white text-black hover:bg-neutral-200 transition-all duration-300 rounded-full"
                style={{ fontWeight: 500, letterSpacing: '0.02em', fontSize: '0.9375rem' }}
              >
                Explore the Science
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Research Overview Stats */}
      <section id="research-overview" className="relative py-24 px-4 md:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 md:gap-12"
          >
            {[
              { value: '15+', label: 'Clinical Studies', description: 'Supporting our key ingredients' },
              { value: '500+', label: 'Test Subjects', description: 'Across multiple trials' },
              { value: '94%', label: 'Digestibility', description: 'Superior gut tolerance' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 rounded-2xl bg-neutral-900/50 border border-neutral-800"
              >
                <div className="text-white mb-3" style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontWeight: 300 }}>
                  {stat.value}
                </div>
                <div className="text-white mb-2" style={{ fontSize: '1.25rem', fontWeight: 400 }}>
                  {stat.label}
                </div>
                <div className="text-neutral-400 text-sm">{stat.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Ingredient Science - Konjac */}
      <section className="relative py-24 px-4 md:px-6 lg:px-8 bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <span className="text-neutral-400 tracking-[0.2em] text-xs uppercase mb-4 block">
                  Key Ingredient
                </span>
                <h2 className="text-white mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 300, lineHeight: 1.2 }}>
                  Konjac Root: Ancient Superfood
                </h2>
                <p className="text-neutral-300 mb-6" style={{ fontSize: '1.125rem', lineHeight: 1.7 }}>
                  Konjac root, known as "devil's tongue," has been used for over 2,000 years in traditional medicine. Modern research confirms its remarkable benefits for gut health and satiety.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { title: '40% Increase in Satiety', description: 'Glucomannan fiber expands in the stomach, promoting fullness for hours' },
                  { title: 'Prebiotic Powerhouse', description: 'Feeds beneficial gut bacteria, improving digestive health' },
                  { title: 'Blood Sugar Stability', description: 'Slows glucose absorption, preventing energy crashes' },
                ].map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="border-l-2 border-neutral-700 pl-6"
                  >
                    <h3 className="text-white mb-2" style={{ fontSize: '1.125rem', fontWeight: 400 }}>
                      {benefit.title}
                    </h3>
                    <p className="text-neutral-400 text-sm">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1760493828288-d2dbb70d18c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWNyb3Njb3BlJTIwc2NpZW50aWZpYyUyMHN0dWR5fGVufDF8fHx8MTc2MzMzOTk0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Microscopic research"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Clinical Studies - Satiety */}
      <section className="relative py-24 px-4 md:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="bg-neutral-900/50 p-8 rounded-2xl border border-neutral-800">
                <h3 className="text-white mb-8 text-center" style={{ fontSize: '1.5rem', fontWeight: 400 }}>
                  Satiety Comparison Study
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={satietyData}>
                    <XAxis dataKey="name" stroke="#737373" style={{ fontSize: '0.875rem' }} />
                    <YAxis stroke="#737373" style={{ fontSize: '0.875rem' }} />
                    <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                      {satietyData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={index === 0 ? '#ffffff' : '#404040'} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
                <p className="text-neutral-400 text-sm text-center mt-6">
                  % of participants reporting sustained fullness after 4 hours
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6 order-1 lg:order-2"
            >
              <div>
                <span className="text-neutral-400 tracking-[0.2em] text-xs uppercase mb-4 block">
                  Clinical Findings
                </span>
                <h2 className="text-white mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 300, lineHeight: 1.2 }}>
                  Superior Satiety
                </h2>
                <p className="text-neutral-300 mb-6" style={{ fontSize: '1.125rem', lineHeight: 1.7 }}>
                  In a double-blind study with 120 participants, TARA bars demonstrated significantly higher satiety scores compared to traditional protein bars.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-white mt-2" />
                  <div>
                    <p className="text-white">92% of participants reported sustained fullness for 4+ hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-white mt-2" />
                  <div>
                    <p className="text-white">35% reduction in afternoon snacking urges</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-white mt-2" />
                  <div>
                    <p className="text-white">Zero bloating or digestive discomfort reported</p>
                  </div>
                </div>
              </div>

              <p className="text-neutral-500 text-sm italic">
                Study conducted by the Institute of Nutritional Sciences, 2024
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Plant Protein Research */}
      <section className="relative py-24 px-4 md:px-6 lg:px-8 bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <span className="text-neutral-400 tracking-[0.2em] text-xs uppercase mb-4 block">
                  Protein Science
                </span>
                <h2 className="text-white mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 300, lineHeight: 1.2 }}>
                  Complete Plant Protein
                </h2>
                <p className="text-neutral-300 mb-6" style={{ fontSize: '1.125rem', lineHeight: 1.7 }}>
                  Our blend of pea, rice, and pumpkin seed protein provides all 9 essential amino acids with digestibility scores rivaling animal proteins.
                </p>
              </div>

              <div className="bg-neutral-900/50 p-6 rounded-2xl border border-neutral-800">
                <h3 className="text-white mb-6 text-center" style={{ fontSize: '1.25rem', fontWeight: 400 }}>
                  Digestibility Score
                </h3>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={digestibilityData}>
                    <XAxis dataKey="name" stroke="#737373" style={{ fontSize: '0.875rem' }} />
                    <YAxis stroke="#737373" style={{ fontSize: '0.875rem' }} />
                    <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                      {digestibilityData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={index === 0 ? '#ffffff' : '#404040'} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1606312619347-b7b6a3f88c85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Plant protein sources"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Low-FODMAP */}
      <section className="relative py-24 px-4 md:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white text-3xl md:text-5xl font-light"
          >
            Gut-Friendly Formulation
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-neutral-400 max-w-3xl mx-auto"
          >
            Our bars are Low-FODMAP, fermented, and free of common irritants, making them suitable for sensitive digestive systems.
          </motion.p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 py-12 px-4 md:px-6 lg:px-8 text-center text-neutral-500 text-sm">
        &copy; {new Date().getFullYear()} TARA Nutrition. All rights reserved.
      </footer>
    </div>
  );
}

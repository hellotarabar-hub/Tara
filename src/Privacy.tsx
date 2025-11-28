import { motion } from 'motion/react';

export default function Privacy() {
  return (
    <section className="min-h-screen bg-black bg-gradient-to-b from-black/95 to-neutral-900 px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-4xl mx-auto text-white"
      >
        <h1 className="text-4xl sm:text-5xl font-light mb-8 tracking-tight">Privacy Policy</h1>
        <p className="text-white/70 mb-6">Effective Date: October 14, 2025 · Last Updated: October 14, 2025</p>

        <p className="mb-6 text-white/80 leading-relaxed">
          TARA Nutrition, LLC (“we,” “our,” or “us”) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or sign up for updates.
        </p>

        <h2 className="text-2xl font-light mb-4 mt-8">1. Information We Collect</h2>
        <ul className="list-disc list-inside text-white/80 mb-6">
          <li>Your email address when you subscribe to our waitlist, promotions, or updates.</li>
          <li>Automatically collected data, including IP address, browser type, device information, and site usage through cookies, analytics tools (e.g., Google Analytics), and local storage.</li>
          <li>LocalStorage data used to enhance user experience, such as popup display settings and waitlist counters.</li>
        </ul>

        <h2 className="text-2xl font-light mb-4 mt-8">2. How We Use Your Information</h2>
        <p className="mb-6 text-white/80 leading-relaxed">
          To send you updates about Tara Bar, including product launches, promotions, and waitlist invitations; to improve website functionality, performance, and user experience; and to personalize your interactions and track usage patterns for analytics purposes.
        </p>

        <h2 className="text-2xl font-light mb-4 mt-8">3. Consent and Lawful Basis</h2>
        <p className="mb-6 text-white/80 leading-relaxed">
          By using our website or providing your email address, you consent to the collection and use of your personal information as described in this Privacy Policy. You may withdraw consent at any time by clicking “unsubscribe” in our emails or contacting us directly.
        </p>

        <h2 className="text-2xl font-light mb-4 mt-8">4. Cookies, Analytics, and Local Storage</h2>
        <p className="mb-6 text-white/80 leading-relaxed">
          We use cookies and similar technologies (such as Google Analytics) to collect site usage data. Cookies help us analyze trends, track user movement, and improve site functionality. Local storage is used for UI/UX purposes only (e.g., waitlist counters, popup cooldowns). You may disable cookies in your browser settings, but some features may not function correctly.
        </p>

        <h2 className="text-2xl font-light mb-4 mt-8">Contact Us</h2>
        <p className="mb-6 text-white/80 leading-relaxed">
          Email: <a href="mailto:hello@eattara.com" className="underline hover:text-white/60">hello@eattara.com</a><br />
          Company: TARA Nutrition, LLC
        </p>
      </motion.div>
    </section>
  );
}

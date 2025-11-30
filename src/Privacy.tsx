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
        <p className="text-white/70 mb-6">Effective Date: November 25, 2025 · Last Updated: November 29, 2025</p>

        <p className="mb-6 text-white/80 leading-relaxed">
          TARA Nutrition, LLC (“we,” “our,” or “us”) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and protect your data when you visit our website, subscribe to our mailing list, or use our services.
        </p>

        <h2 className="text-2xl font-light mb-4 mt-8">1. Information We Collect</h2>
        <ul className="list-disc list-inside text-white/80 mb-6">
          <li>Email addresses and contact information when you subscribe to our waitlist, promotions, or updates.</li>
          <li>Automatically collected data, including IP address, browser type, device information, and usage analytics through cookies, local storage, and tracking tools (e.g., Google Analytics).</li>
          <li>LocalStorage data for UI/UX purposes, such as popup cooldowns, waitlist counters, and display preferences.</li>
        </ul>

        <h2 className="text-2xl font-light mb-4 mt-8">2. How We Use Your Information</h2>
        <p className="mb-6 text-white/80 leading-relaxed">
          We use your information to:
        </p>
        <ul className="list-disc list-inside text-white/80 mb-6">
          <li>Send updates, marketing emails, promotions, and waitlist invitations.</li>
          <li>Improve website functionality, performance, and user experience.</li>
          <li>Analyze site usage and trends for analytics and business insights.</li>
          <li>Personalize your experience and communications.</li>
        </ul>

        <h2 className="text-2xl font-light mb-4 mt-8">3. Legal Basis and Consent</h2>
        <p className="mb-6 text-white/80 leading-relaxed">
          By using our Site or providing your personal information, you consent to its collection and use as described here. You may withdraw consent at any time by unsubscribing from our emails or contacting us directly.
        </p>

        <h2 className="text-2xl font-light mb-4 mt-8">4. Your Rights (GDPR/CCPA)</h2>
        <p className="mb-6 text-white/80 leading-relaxed">
          If you are located in the EU or California, you have rights under GDPR and CCPA, including:
        </p>
        <ul className="list-disc list-inside text-white/80 mb-6">
          <li>Access your personal data.</li>
          <li>Request correction or deletion of your data.</li>
          <li>Object to processing or withdraw consent.</li>
          <li>Opt-out of sale or sharing of personal information (where applicable).</li>
          <li>Request a copy of your data in a portable format.</li>
        </ul>

        <h2 className="text-2xl font-light mb-4 mt-8">5. Cookies, Analytics, and Tracking</h2>
        <p className="mb-6 text-white/80 leading-relaxed">
          We use cookies, local storage, and tracking technologies to enhance site functionality, analyze trends, and improve your experience. You can disable cookies in your browser, but some features may not function properly.
        </p>

        <h2 className="text-2xl font-light mb-4 mt-8">6. Sharing and Third Parties</h2>
        <p className="mb-6 text-white/80 leading-relaxed">
          We do not sell your personal information. Data may be shared with service providers who perform services on our behalf (e.g., email delivery, analytics). Third-party links on the Site are not controlled by us, and we are not responsible for their privacy practices.
        </p>

        <h2 className="text-2xl font-light mb-4 mt-8">7. Security</h2>
        <p className="mb-6 text-white/80 leading-relaxed">
          We implement reasonable administrative, technical, and physical safeguards to protect your information. However, no method of transmission or storage is 100% secure, and we cannot guarantee absolute security.
        </p>

        <h2 className="text-2xl font-light mb-4 mt-8">8. International Users</h2>
        <p className="mb-6 text-white/80 leading-relaxed">
          By using this Site, international users agree to comply with local laws regarding privacy, online services, and marketing. GDPR and CCPA rights apply where relevant.
        </p>

        <h2 className="text-2xl font-light mb-4 mt-8">9. Compliance with Law</h2>
        <p className="mb-6 text-white/80 leading-relaxed">
          We comply with New York consumer protection laws and federal regulations governing online marketing and email communications (e.g., CAN-SPAM Act). Users are responsible for ensuring compliance with applicable local laws.
        </p>

        <h2 className="text-2xl font-light mb-4 mt-8">10. Updates to Privacy Policy</h2>
        <p className="mb-6 text-white/80 leading-relaxed">
          We may update this Privacy Policy at any time. Updated versions will be posted here with a new “Last Updated” date. Continued use constitutes acceptance of the revised Privacy Policy.
        </p>

        <h2 className="text-2xl font-light mb-4 mt-8">11. Contact Us</h2>
        <p className="mb-6 text-white/80 leading-relaxed">
          Email: <a href="mailto:hello@eattara.com" className="underline hover:text-white/60">hello@eattara.com</a><br />
          Company: TARA Nutrition, LLC
        </p>
      </motion.div>
    </section>
  );
}

import { motion } from 'motion/react';

export default function Terms() {
  return (
    <section className="min-h-screen bg-black bg-gradient-to-b from-black/95 to-neutral-900 px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-4xl mx-auto text-white"
      >
        <h1 className="text-4xl sm:text-5xl font-light mb-4 tracking-tight">Terms of Use</h1>
        <p className="text-white/70 mb-8">
          Effective Date: November 25, 2025 · Last Updated: November 29, 2025
        </p>

        <p className="mb-6 text-white/80 leading-relaxed">
          TARA Nutrition, LLC (“we,” “our,” or “us”) operates this website (the “Site”). By accessing or using this Site, you agree to be bound by these Terms of Use (“Terms”). If you do not agree, please do not use our Site.
        </p>

        <section className="space-y-6">

          <h2 className="text-2xl font-light mb-2 mt-6">1. Eligibility</h2>
          <p className="leading-relaxed text-white/80">
            You must be at least 18 years old to use this Site. By using the Site, you represent and warrant that you meet this requirement.
          </p>

          <h2 className="text-2xl font-light mb-2 mt-6">2. License and Site Use</h2>
          <p className="leading-relaxed text-white/80">
            We grant you a limited, non-exclusive, non-transferable, and revocable license to access and use the Site for personal, non-commercial purposes. You agree not to reproduce, distribute, modify, or create derivative works without our prior written consent, and not to interfere with the Site’s security or functionality.
          </p>

          <h2 className="text-2xl font-light mb-2 mt-6">3. Email Sign-Up and Communications</h2>
          <p className="leading-relaxed text-white/80">
            By subscribing to our mailing list, you consent to receive marketing emails, updates, and promotional materials. Submitting your email does not guarantee eligibility for offers. You may unsubscribe at any time via links in our emails.
          </p>
          <p className="leading-relaxed text-white/80">
            All email communications comply with the federal CAN-SPAM Act.
          </p>

          <h2 className="text-2xl font-light mb-2 mt-6">4. Privacy and Cookies</h2>
          <p className="leading-relaxed text-white/80">
            Your use of this Site is subject to our <a href="/privacy" className="underline hover:text-white/60">Privacy Policy</a>, which explains how we collect, use, and store personal information. We comply with GDPR (for EU users) and CCPA (for California residents). Cookies may be used to improve your experience.
          </p>

          <h2 className="text-2xl font-light mb-2 mt-6">5. Product Information and Availability</h2>
          <p className="leading-relaxed text-white/80">
            Content, including product descriptions, images, and pricing, is for informational purposes. We do not guarantee accuracy and may change or discontinue products at any time without notice.
          </p>

          <h2 className="text-2xl font-light mb-2 mt-6">6. User Conduct</h2>
          <p className="leading-relaxed text-white/80">
            You agree not to engage in illegal activities, violate intellectual property rights, harass others, or use automated tools to interact with the Site.
          </p>

          <h2 className="text-2xl font-light mb-2 mt-6">7. Intellectual Property Rights</h2>
          <p className="leading-relaxed text-white/80">
            All content, trademarks, logos, and designs are the property of TARA Nutrition, LLC or its licensors and are protected by law. Unauthorized use is strictly prohibited.
          </p>

          <h2 className="text-2xl font-light mb-2 mt-6">8. Third-Party Links</h2>
          <p className="leading-relaxed text-white/80">
            The Site may contain links to third-party websites. We are not responsible for third-party content, policies, or practices.
          </p>

          <h2 className="text-2xl font-light mb-2 mt-6">9. Disclaimers and Warranties</h2>
          <p className="leading-relaxed text-white/80">
            The Site is provided “as is” and “as available,” without warranties of any kind, express or implied.
          </p>

          <h2 className="text-2xl font-light mb-2 mt-6">10. Limitation of Liability</h2>
          <p className="leading-relaxed text-white/80">
            To the fullest extent permitted by law, TARA Nutrition, LLC and its affiliates, officers, and employees shall not be liable for indirect, incidental, special, or consequential damages arising from your use of the Site.
          </p>

          <h2 className="text-2xl font-light mb-2 mt-6">11. Indemnification</h2>
          <p className="leading-relaxed text-white/80">
            You agree to indemnify and hold harmless TARA Nutrition, LLC, its affiliates, officers, and employees from claims arising from your use of the Site or violation of these Terms.
          </p>

          <h2 className="text-2xl font-light mb-2 mt-6">12. Governing Law and Dispute Resolution</h2>
          <p className="leading-relaxed text-white/80">
            These Terms are governed by New York State law. Any disputes shall be resolved exclusively in state or federal courts in New York. Arbitration may apply where permitted by law.
          </p>

          <h2 className="text-2xl font-light mb-2 mt-6">13. Modifications</h2>
          <p className="leading-relaxed text-white/80">
            We may update these Terms at any time without prior notice. The updated version will be posted here. Continued use constitutes acceptance of the revised Terms.
          </p>

          <h2 className="text-2xl font-light mb-2 mt-6">14. International Users</h2>
          <p className="leading-relaxed text-white/80">
            By using this Site, international users agree to comply with local laws regarding online services, privacy, and marketing. GDPR and CCPA rights are respected where applicable.
          </p>

          <h2 className="text-2xl font-light mb-2 mt-6">15. Contact Us</h2>
          <p className="leading-relaxed text-white/80">
            Email: <a href="mailto:hello@eattara.com" className="underline hover:text-white/60">hello@eattara.com</a><br />
            Company: TARA Nutrition, LLC
          </p>

        </section>
      </motion.div>
    </section>
  );
}

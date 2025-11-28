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
          Effective Date: October 13, 2025 · Last Updated: October 13, 2025
        </p>

        <p className="mb-6 text-white/80 leading-relaxed">
          TARA Nutrition, LLC (“we,” “our,” or “us”). By accessing or using this website (the “Site”), you agree to be bound by these Terms of Use (“Terms”). If you do not agree with these Terms, please do not use our Site.
        </p>

        <section className="space-y-6">
          <h2 className="text-2xl font-light mb-2 mt-6">1. License and Site Use</h2>
          <p className="leading-relaxed text-white/80">
            We grant you a limited, non-exclusive, non-transferable, and revocable license to access and use this Site for personal, non-commercial purposes. You agree not to reproduce, distribute, modify, or create derivative works from any content on this Site without our prior written consent.
          </p>

          <h2 className="text-2xl font-light mb-2 mt-6">2. Email Sign-Up and Communications</h2>
          <p className="leading-relaxed text-white/80">
            By subscribing to our mailing list, you consent to receive updates, offers, and promotional materials from Tara Bar. Submitting your email does not guarantee eligibility for such offers. You may unsubscribe at any time.
          </p>

          <h2 className="text-2xl font-light mb-2 mt-6">3. Product Information and Availability</h2>
          <p className="leading-relaxed text-white/80">
            Product descriptions, images, and information provided on the Site are for general informational purposes. We do not warrant that product descriptions or other content are accurate, complete, or error-free. We reserve the right to modify or discontinue products without prior notice.
          </p>

          <h2 className="text-2xl font-light mb-2 mt-6">4. No Warranties</h2>
          <p className="leading-relaxed text-white/80">
            The Site and its content are provided “as is” and “as available,” without warranties of any kind, either express or implied.
          </p>

          <h2 className="text-2xl font-light mb-2 mt-6">5. Limitation of Liability</h2>
          <p className="leading-relaxed text-white/80">
            To the fullest extent permitted by law, Tara Bar, its affiliates, employees, and agents shall not be liable for any damages arising out of your use of the Site. Your sole remedy for dissatisfaction with the Site is to stop using it.
          </p>

          <h2 className="text-2xl font-light mb-2 mt-6">6. Indemnification</h2>
          <p className="leading-relaxed text-white/80">
            You agree to indemnify, defend, and hold harmless Tara Bar and its affiliates, officers, and employees from any claims arising from your use of the Site or violation of these Terms.
          </p>

          <h2 className="text-2xl font-light mb-2 mt-6">7. Intellectual Property Rights</h2>
          <p className="leading-relaxed text-white/80">
            All content, trademarks, logos, and designs displayed on the Site are the property of Tara Bar or its licensors and are protected by applicable laws. Unauthorized use is strictly prohibited.
          </p>

          <h2 className="text-2xl font-light mb-2 mt-6">8. Third-Party Links</h2>
          <p className="leading-relaxed text-white/80">
            This Site may contain links to third-party websites. Tara Bar is not responsible for the content, policies, or practices of third-party sites.
          </p>

          <h2 className="text-2xl font-light mb-2 mt-6">9. Governing Law</h2>
          <p className="leading-relaxed text-white/80">
            These Terms shall be governed by and construed in accordance with the laws of the State of New York. Any disputes shall be resolved exclusively in state or federal courts located in New York.
          </p>

          <h2 className="text-2xl font-light mb-2 mt-6">10. Modifications to Terms</h2>
          <p className="leading-relaxed text-white/80">
            We may update these Terms at any time without prior notice. The updated version will be posted on this page. Continued use constitutes acceptance of the revised Terms.
          </p>

          <h2 className="text-2xl font-light mb-2 mt-6">11. Contact Us</h2>
          <p className="leading-relaxed text-white/80">
            Email: <a href="mailto:hello@eattara.com" className="underline hover:text-white/60">hello@eattara.com</a><br />
            Company: TARA Nutrition, LLC
          </p>
        </section>
      </motion.div>
    </section>
  );
}

import { motion } from "framer-motion";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function Secret() {
  return (
    <section
      id="secret"
      className="relative py-32 overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 90% 75%, rgba(223, 217, 222, 1) 0px, transparent 40%),
          radial-gradient(circle at 1% 55%, rgba(238, 232, 226, 0.64) 0px, transparent 30%),
          radial-gradient(at 98% 10%, rgba(239, 234, 226, 0.5) 0px, transparent 25%),
          linear-gradient(135deg, rgba(235, 230, 225, 0.82) 0%, rgba(238, 232, 226, 0.5) 50%, rgba(239, 234, 226, 0.5) 100%)
        `,
      }}
    >
      {/* ✅ Same container as Story */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* TEXT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            {/* Title + Main Paragraph */}
            <div>
              <h1
                className="text-neutral-900 mb-4 tracking-tight"
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  fontWeight: 200,
                  lineHeight: 1.2,
                  color: "rgba(62, 34, 66, 1)",
                }}
              >
                Meet the Devil's Tongue
              </h1>

              <p
                className="text-neutral-600 tracking-wide leading-relaxed max-w-4xl"
                style={{
                  fontSize: "clamp(1rem, 2vw, 1.25rem)",
                  lineHeight: 1.8,
                  fontWeight: 300,
                  color: "rgba(62, 34, 66, 1)",
                  textAlign: "left",
                }}
              >
                Used for centuries in Asia, konjac earned its fiery nickname from its
                tongue-shaped red-purple flower. Traditionally made into noodles and
                jellies, this root is prized for helping you feel full and light with
                virtually no calories or carbs.
              </p>
            </div>

            {/* BENEFITS */}
            <div className="space-y-6 max-w-4xl">
              <h2
                style={{
                  fontSize: "clamp(1rem, 2vw, 1.25rem)",
                  fontWeight: 500,
                  color: "rgba(62, 34, 66, 1)",
                  lineHeight: 1.4,
                  textAlign: "left",
                }}
              >
                Its soluble fiber, glucomannan, forms a soft gel in the stomach that:
              </h2>

              <div
                className="space-y-4 text-neutral-600"
                style={{
                  fontSize: "clamp(1rem, 2vw, 1.25rem)",
                  lineHeight: 1.8,
                  fontWeight: 300,
                  color: "rgba(62, 34, 66, 1)",
                }}
              >
                {[
                  "Calms the digestive system and helps reduce bloating",
                  "Provides gradual nutrient release for smoother, stable energy",
                  "Acts as a powerful prebiotic and supports hydration",
                  "Naturally triggers GLP-1 fullness signals for longer satiety",
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div
                      className="w-1 h-1 rounded-full"
                      style={{ backgroundColor: "rgba(62, 34, 66, 1)", marginTop: ".9rem" }}
                    />
                    <p
                      style={{
                        fontSize: "clamp(1rem, 2vw, 1.25rem)",
                        lineHeight: 1.8,
                        fontWeight: 300,
                        color: "rgba(62, 34, 66, 1)",
                        textAlign: "left",
                      }}
                    >
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* IMAGE SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center items-start"
          >
            <div
              className="
                relative overflow-hidden rounded-3xl bg-neutral-100 w-full
                max-w-[280px] aspect-[4/5]
                sm:max-w-[340px] sm:aspect-[4/5]
                md:max-w-[400px] md:aspect-[5/6]
                lg:max-w-[500px] lg:aspect-[5/6]
                mx-auto
              "
            >
              <ImageWithFallback
                src="/konjac.png"
                alt="Konjac Root"
                className="w-full max-h-[160px] md:max-h-[200px] lg:max-h-[220px] object-contain"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

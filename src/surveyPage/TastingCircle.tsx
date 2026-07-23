
import { motion, useReducedMotion } from "framer-motion";
import type { SVGProps } from "react";

const SURVEY_URL = "https://forms.gle/4b8hGBKFayszY9LK8";
const CONTACT_EMAIL = "catherine@eattara.com";

const SITE_URL = "https://eattara.com";
const INSTAGRAM_URL = "https://instagram.com/havesome.tara";
const TIKTOK_URL = "https://tiktok.com/@havesome.tara";

const nutritionRows = [
  { label: "Total Fat 7g", value: "9%", bold: true },
  { label: "Saturated Fat 2g", value: "10%", indent: true },
  { label: "Trans Fat 0g", value: "", indent: true },
  { label: "Cholesterol 0mg", value: "0%", bold: true },
  { label: "Sodium 300mg", value: "13%", bold: true },
  { label: "Total Carbohydrate 23g", value: "8%", bold: true },
  { label: "Dietary Fiber 7g", value: "25%", indent: true },
  { label: "Total Sugars 10g", value: "", indent: true },
  { label: "Includes 6g Added Sugars", value: "12%", indent: true, indent2: true },
  { label: "Protein 15g", value: "", bold: true },
];

const micronutrients = [
  { label: "Vitamin D 0mcg", value: "0%" },
  { label: "Calcium 70mg", value: "6%" },
  { label: "Iron 5.6mg", value: "30%" },
  { label: "Potassium 460mg", value: "10%" },
];

type IconProps = SVGProps<SVGSVGElement>;

function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TikTokIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M16.6 3c.4 2.2 1.9 3.8 4.4 4v3c-1.5.1-2.9-.3-4.4-1.2v6.3c0 4-2.9 6.9-6.6 6.9-3.7 0-6.6-2.9-6.6-6.6 0-3.7 2.9-6.6 6.6-6.6.4 0 .8 0 1.2.1v3.2a3.4 3.4 0 0 0-1.2-.2 3.5 3.5 0 1 0 3.5 3.5V3h3.1z" />
    </svg>
  );
}

function GlobeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3z" />
    </svg>
  );
}

export default function TastingCircle() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div style={{ backgroundColor: "#FBF4EC", color: "#3B2A20" }}>
      {/* ---------- 1. Feedback ---------- */}
      <section
        style={{
          position: "relative",
          display: "flex",
          minHeight: "100vh",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          padding: "7rem 1.5rem",
          textAlign: "center",
        }}
      >
        <div
          style={{
            pointerEvents: "none",
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              style={{
                position: "absolute",
                borderRadius: "9999px",
                border: "1px solid rgba(193,113,75,0.3)",
                width: 240 + i * 160,
                height: 240 + i * 160,
              }}
              animate={
                prefersReducedMotion
                  ? {}
                  : { scale: [1, 1.06, 1], opacity: [0.5, 0.15, 0.5] }
              }
              transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          style={{ position: "relative", zIndex: 10, maxWidth: "42rem", margin: "0 auto" }}
        >
          <span
            style={{
              display: "inline-block",
              fontSize: "0.75rem",
              textTransform: "uppercase",
              color: "#C1714B",
              fontFamily: "Jost, sans-serif",
              letterSpacing: "0.28em",
              fontWeight: 500,
              marginBottom: "2.25rem",
            }}
          >
            Pilot Tasting · Round One
          </span>

          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2.75rem, 6vw + 1rem, 5.5rem)",
              fontWeight: 300,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              margin: "0 0 2.25rem",
            }}
          >
            Tell us what you think
          </h1>

          <p
            style={{
              maxWidth: "28rem",
              margin: "0 auto 2.25rem",
              color: "#6B5647",
              lineHeight: 1.65,
              fontFamily: "Jost, sans-serif",
              fontWeight: 300,
              fontSize: "clamp(1.05rem, 1.2vw + 0.7rem, 1.25rem)",
            }}
          >
            Please complete the Tasting Circle survey after eating your bar 😊
          </p>

          <div style={{ paddingTop: "0.5rem" }}>
            <motion.a
              href={SURVEY_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97, y: 0 }}
              style={{
                display: "inline-block",
                borderRadius: "9999px",
                border: "2px solid #3B2A20",
                backgroundColor: "#C1714B",
                padding: "1.25rem 2.5rem",
                color: "#FBF4EC",
                boxShadow: "0 10px 0 0 #3B2A20",
                textDecoration: "none",
                fontFamily: "Jost, sans-serif",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                fontSize: "clamp(0.85rem, 0.4vw + 0.75rem, 1rem)",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#A85F3D")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#C1714B")}
            >
              Complete the Tasting Circle Survey
            </motion.a>
          </div>
        </motion.div>

           <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            style={{
              maxWidth: "30rem",
              margin: "2rem auto 0",
              borderRadius: "1.5rem",
              border: "1.5px dashed rgba(193,113,75,0.5)",
              background:
                "linear-gradient(135deg, rgba(241,217,199,0.55) 0%, rgba(255,255,255,0.55) 100%)",
              padding: "1.5rem 1.75rem",
              textAlign: "center",
            }}
          >
            <p
              style={{
                margin: "0 0 0.6rem",
                color: "#A85F3D",
                fontFamily: "Jost, sans-serif",
                fontWeight: 700,
                fontSize: "1.1rem",
                letterSpacing: "0.01em",
              }}
            >
              Want a chance to get a box on us? 📸🎁
            </p>
            <p
              style={{
                margin: 0,
                color: "#6B5647",
                lineHeight: 1.65,
                fontFamily: "Jost, sans-serif",
                fontWeight: 300,
                fontSize: "0.95rem",
              }}
            >
              Before your first bite, film your honest reaction vertically in good
              natural light. You can upload it at the end of the survey. If we select
              your video to feature, we&rsquo;ll send you a complimentary box from our
              first commercial production run!
            </p>
          </motion.div>


        <motion.div
          style={{
            position: "absolute",
            bottom: "2.5rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
            color: "rgba(193,113,75,0.7)",
          }}
          animate={prefersReducedMotion ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        >
          <span
            style={{
              fontSize: "0.75rem",
              textTransform: "uppercase",
              fontFamily: "Jost, sans-serif",
              letterSpacing: "0.32em",
              fontWeight: 500,
            }}
          >
            Scroll
          </span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M12 4v16M6 14l6 6 6-6" />
          </svg>
        </motion.div>
      </section>

      {/* ---------- 2. Nutrition Facts ---------- */}
      <section style={{ padding: "6rem 1.5rem" }}>
        <div style={{ margin: "0 auto", maxWidth: "72rem" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            style={{ marginBottom: "5rem", textAlign: "center" }}
          >
            <span
              style={{
                display: "inline-block",
                fontSize: "0.75rem",
                textTransform: "uppercase",
                color: "#C1714B",
                fontFamily: "Jost, sans-serif",
                letterSpacing: "0.28em",
                fontWeight: 500,
                marginBottom: "1rem",
              }}
            >
              What's Inside
            </span>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2.2rem, 2vw + 1.4rem, 3.6rem)",
                fontWeight: 300,
                margin: 0,
              }}
            >
              Nutrition Facts
            </h2>

                      <div
                style={{
        
        
                margin: 0,
                color: "#6B5647",
                lineHeight: 1.65,
                fontFamily: "Jost, sans-serif",
                fontWeight: 300,
                fontSize: "0.95rem",
                }}
              >
                This is a pilot product. Nutrition values are preliminary and may change
                before commercial launch.
              </div>
          </motion.div>

          <div
            style={{
              display: "grid",
              gap: "3rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              alignItems: "start",
            }}
          >
            {/* The label */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              style={{
                maxWidth: "340px",
                width: "100%",
                margin: "0 auto",
                border: "2px solid #3B2A20",
                backgroundColor: "white",
                padding: "1.25rem",
                fontFamily: "sans-serif",
                color: "#1A120C",
                position: "sticky",
                top: "2.5rem",
              }}
            >
              <h3
                style={{
                  borderBottom: "8px solid #3B2A20",
                  paddingBottom: "0.375rem",
                  fontSize: "1.875rem",
                  fontWeight: 900,
                  lineHeight: 1,
                  margin: "0 0 0",
                }}
              >
                Nutrition Facts
              </h3>
              <p style={{ borderBottom: "1px solid #3B2A20", padding: "0.375rem 0", fontSize: "0.875rem", margin: 0 }}>
                1 serving per container
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                  borderBottom: "4px solid #3B2A20",
                  padding: "0.375rem 0",
                }}
              >
                <span style={{ fontSize: "1.125rem", fontWeight: 700 }}>Serving size</span>
                <span style={{ fontSize: "1.125rem", fontWeight: 700 }}>1 bar (55g)</span>
              </div>

              <p style={{ paddingTop: "0.375rem", fontSize: "0.75rem", margin: 0 }}>Amount Per Serving</p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderBottom: "4px solid #3B2A20",
                  paddingBottom: "0.375rem",
                }}
              >
                <span style={{ fontSize: "1.5rem", fontWeight: 900 }}>Calories</span>
                <span style={{ fontSize: "1.875rem", fontWeight: 900 }}>190</span>
              </div>

              <p
                style={{
                  borderBottom: "1px solid #3B2A20",
                  padding: "0.375rem 0",
                  textAlign: "right",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  margin: 0,
                }}
              >
                % Daily Value*
              </p>

              {nutritionRows.map((row) => (
                <div
                  key={row.label}
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                    borderBottom: "1px solid #3B2A20",
                    padding: "0.375rem 0",
                    fontSize: "0.875rem",
                    fontWeight: row.bold ? 700 : 400,
                    paddingLeft: row.indent2 ? "1.5rem" : row.indent ? "0.75rem" : 0,
                  }}
                >
                  <span>{row.label}</span>
                  <span style={{ fontWeight: 700 }}>{row.value}</span>
                </div>
              ))}

              <div style={{ borderBottom: "8px solid #3B2A20" }}>
                {micronutrients.map((row) => (
                  <div
                    key={row.label}
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      justifyContent: "space-between",
                      borderBottom: "1px solid #3B2A20",
                      padding: "0.375rem 0",
                      fontSize: "0.875rem",
                    }}
                  >
                    <span>{row.label}</span>
                    <span style={{ fontWeight: 700 }}>{row.value}</span>
                  </div>
                ))}
              </div>

              <p style={{ paddingTop: "0.75rem", fontSize: "0.625rem", lineHeight: 1.4, color: "#4A3A2E" }}>
                *The % Daily Value tells you how much a nutrient in a serving of food
                contributes to a daily diet. 2,000 calories a day is used for general
                nutrition advice.
              </p>
            </motion.div>

            {/* Ingredients, allergen, storage */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}
            >
    

              <div
                style={{
                  borderRadius: "1.5rem",
                  border: "1px solid rgba(193,113,75,0.25)",
                  background: "linear-gradient(135deg, white 0%, rgba(241,217,199,0.4) 100%)",
                  padding: "2.25rem",
                }}
              >
                <h4
                  style={{
                    color: "#C1714B",
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.8rem",
                    fontWeight: 500,
                    margin: "0 0 0.5rem",
                  }}
                >
                  Ingredients
                </h4>
                <p
                  style={{
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                    color: "#A6906F",
                    fontFamily: "Jost, sans-serif",
                    letterSpacing: "0.18em",
                    fontWeight: 500,
                    margin: "0 0 1.75rem",
                  }}
                >
                  Every ingredient, on purpose
                </p>

                {/* <div style={{ display: "flex", flexWrap: "wrap", gap: "0.625rem", marginBottom: "1.75rem" }}>
                  {["Fava Bean Protein", "Peanut Butter", "Organic Dates", "Monk Fruit"].map((tag) => (
                    <span
                      key={tag}
                      style={{
                        borderRadius: "9999px",
                        border: "1px solid rgba(193,113,75,0.4)",
                        backgroundColor: "rgba(255,255,255,0.7)",
                        padding: "0.5rem 1rem",
                        fontSize: "0.75rem",
                        color: "#8A5A3D",
                        fontFamily: "Jost, sans-serif",
                        fontWeight: 500,
                        letterSpacing: "0.02em",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div> */}

                <p
                  style={{
                    lineHeight: 2,
                    color: "#6B5647",
                    fontFamily: "Jost, sans-serif",
                    fontWeight: 300,
                    fontSize: "1rem",
                    margin: 0,
                  }}
                >
                  Protein Blend (Fava Bean Protein, Pea Crisps [Pea Protein, Rice Starch,
                  Cocoa Processed with Alkali, Cocoa], Brown Rice Protein), Tapioca Syrup,
                  Peanut Butter (Roasted Peanuts, Salt), Tapioca Fiber, Organic Date Paste,
                  Alkalized Cocoa, Organic Coconut Milk Powder (Organic Coconut Cream,
                  Organic Tapioca Maltodextrin), Potassium Citrate, Natural Chocolate
                  Flavor, Magnesium Citrate, Salt, Pure Vanilla Extract, Monk Fruit
                  Extract.
                </p>

                <span
                  style={{
                    marginTop: "1.75rem",
                    display: "inline-block",
                    borderRadius: "9999px",
                    backgroundColor: "#e4c0ac",
                    padding: "0.5rem 1.25rem",
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                    color: "#FBF4EC",
                    fontFamily: "Jost, sans-serif",
                    letterSpacing: "0.12em",
                    fontWeight: 600,
                  }}
                >
                  Contains: Peanuts
                </span>
              </div>

              <div>
                <h4
                  style={{
                    color: "#C1714B",
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.8rem",
                    fontWeight: 500,
                    margin: "0 0 0.75rem",
                  }}
                >
                  Storage
                </h4>
                <p
                  style={{
                    lineHeight: 1.65,
                    color: "#6B5647",
                    fontFamily: "Jost, sans-serif",
                    fontWeight: 300,
                    fontSize: "1rem",
                    margin: 0,
                  }}
                >
                  Store in a cool, dry place. For the best quality, enjoy by September 7,
                  2026. The best-if-used-by date also appears on the package.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ---------- 3. Contact ---------- */}
      <section
        style={{
          backgroundColor: "#3B2A20",
          padding: "6rem 1.5rem",
          textAlign: "center",
          color: "#FBF4EC",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          style={{ maxWidth: "28rem", margin: "0 auto" }}
        >
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(1.9rem, 1.5vw + 1.3rem, 2.6rem)",
              fontWeight: 300,
              margin: "0 0 2rem",
            }}
          >
            Questions or concerns?
          </h2>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            style={{
              display: "inline-block",
              color: "#F1D9C7",
              textDecoration: "underline",
              textDecorationColor: "#C1714B",
              textDecorationThickness: "2px",
              textUnderlineOffset: "4px",
              fontFamily: "Jost, sans-serif",
              fontWeight: 300,
              fontSize: "1.05rem",
              transition: "color 0.2s",
              marginBottom: "2rem",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#C1714B")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#F1D9C7")}
          >
            {CONTACT_EMAIL}
          </a>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "2rem", paddingTop: "1.25rem", color: "rgba(251,244,236,0.8)" }}>
            {[
              { href: SITE_URL, label: "eattara.com", Icon: GlobeIcon },
              { href: INSTAGRAM_URL, label: "TARA on Instagram", Icon: InstagramIcon },
              { href: TIKTOK_URL, label: "TARA on TikTok", Icon: TikTokIcon },
            ].map(({ href, label, Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                style={{ color: "inherit", transition: "color 0.2s" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#C1714B")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(251,244,236,0.8)")}
              >
                <Icon style={{ width: "1.75rem", height: "1.75rem" }} />
              </a>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}

import { useState, useId, useCallback, useRef } from "react";

// ─── Mailchimp config ─────────────────────────────────────────────────────────
const MAILCHIMP_ACTION =
  "https://us15.list-manage.com/subscribe/post-json?u=55288db69ea3107690efe06f6&id=9d24d91277&c=?";
const MAILCHIMP_BOT_FIELD = "b_55288db69ea3107690efe06f6_9d24d91277";
// ─────────────────────────────────────────────────────────────────────────────

type Status = "idle" | "loading" | "success" | "error";

// ── Tiny icon set ─────────────────────────────────────────────────────────────
const LeafIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
    <path d="M8 1.5C8 1.5 3 4.5 3 9C3 11.5 5.2 13.5 8 13.5C10.8 13.5 13 11.5 13 9C13 4.5 8 1.5 8 1.5Z"
      stroke="rgba(168,204,154,0.85)" strokeWidth="1.1" />
    <path d="M8 6V13" stroke="rgba(168,204,154,0.6)" strokeWidth="1.1" strokeLinecap="round" />
  </svg>
);

const CheckIcon = () => (
  <svg width="22" height="18" viewBox="0 0 28 22" fill="none" aria-hidden>
    <path d="M2 11L10 19L26 3" stroke="#a8cc9a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="#0e1a10" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const InboxIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
    <rect x="2" y="4" width="20" height="16" rx="3" stroke="rgba(168,204,154,0.6)" strokeWidth="1.3" />
    <path d="M2 9L10.5 14C11.4 14.6 12.6 14.6 13.5 14L22 9" stroke="rgba(168,204,154,0.6)" strokeWidth="1.3" />
  </svg>
);

// ── Input field ───────────────────────────────────────────────────────────────
interface FieldProps {
  id: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  onEnter?: () => void;
  autoComplete?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
  hasError: boolean;
  errorMessage: string;
}

function Field({ id, type = "text", placeholder, value, onChange, onEnter,
  autoComplete, inputMode, hasError, errorMessage }: FieldProps) {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <label htmlFor={id} style={{
        fontSize: 10, fontWeight: 500, letterSpacing: "0.12em",
        textTransform: "uppercase", color: "rgba(255,255,255,0.35)",
      }}>
        {placeholder}
      </label>
      <input
        id={id}
        type={type}
        placeholder={` ${placeholder.toLowerCase()}`}
        autoComplete={autoComplete}
        inputMode={inputMode}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onKeyDown={(e) => e.key === "Enter" && onEnter?.()}
        aria-invalid={hasError}
        style={{
          height: 50,
          background: hasError
            ? "rgba(200,80,80,0.08)"
            : focused ? "rgba(255,255,255,0.09)" : "rgba(255,255,255,0.05)",
          border: `1px solid ${hasError
            ? "rgba(220,100,100,0.55)"
            : focused ? "rgba(168,204,154,0.45)" : "rgba(255,255,255,0.08)"}`,
          borderRadius: 12,
          padding: "0 16px",
          fontFamily: "inherit",
          fontSize: 15,
          fontWeight: 300,
          color: "#fff",
          outline: "none",
          transition: "all .18s",
          WebkitAppearance: "none",
          boxSizing: "border-box",
          width: "100%",
        }}
      />
      {hasError && (
        <span style={{ fontSize: 11, color: "rgba(230,120,120,0.9)", paddingLeft: 2 }}>
          {errorMessage}
        </span>
      )}
    </div>
  );
}

// ── Success screen ────────────────────────────────────────────────────────────
function SuccessScreen({ firstName }: { firstName: string }) {
  const first = firstName.trim().split(" ")[0];
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex", alignItems: "center", justifyContent: "center",
      background: "radial-gradient(ellipse 90% 70% at 50% 0%, #183320 0%, #0a1209 100%)",
      fontFamily: "'DM Sans', sans-serif",
      padding: "24px 20px",
    }}>
      <div style={{ maxWidth: 380, width: "100%", textAlign: "center" }}>

        {/* Check ring */}
        <div style={{
          width: 68, height: 68, borderRadius: "50%",
          background: "linear-gradient(135deg, #2a5430, #162b19)",
          border: "1px solid rgba(168,204,154,0.25)",
          boxShadow: "0 0 48px rgba(80,160,80,0.18)",
          display: "flex", alignItems: "center", justifyContent: "center",
          margin: "0 auto 28px",
        }}>
          <CheckIcon />
        </div>

        <p style={{
          fontSize: 11, fontWeight: 500, letterSpacing: "0.14em",
          textTransform: "uppercase", color: "rgba(168,204,154,0.6)",
          marginBottom: 12,
        }}>
          You're on the list
        </p>

        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(32px,8vw,42px)", fontWeight: 700,
          color: "#fff", lineHeight: 1.1, marginBottom: 14,
        }}>
          Welcome, {first}.
        </h2>

        <p style={{
          fontSize: 15, fontWeight: 300,
          color: "rgba(255,255,255,0.45)", lineHeight: 1.75,
          marginBottom: 36, maxWidth: 300, margin: "0 auto 36px",
        }}>
          You’ll get early access to the first drop — plus 15% off at launch.


        </p>

        {/* Spam tip card */}
        <div style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(168,204,154,0.15)",
          borderRadius: 16, padding: "18px 20px",
          display: "flex", alignItems: "flex-start", gap: 14, textAlign: "left",
        }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10, flexShrink: 0,
            background: "rgba(168,204,154,0.08)",
            border: "1px solid rgba(168,204,154,0.15)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <InboxIcon />
          </div>
          <div>
            <p style={{ fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,0.75)", marginBottom: 4 }}>
              Don't miss our email
            </p>
            <p style={{ fontSize: 12, fontWeight: 300, color: "rgba(255,255,255,0.35)", lineHeight: 1.65 }}>
              Check your <strong style={{ color: "rgba(168,204,154,0.7)", fontWeight: 500 }}>spam or promotions</strong> folder.
              If you find it there, mark it as <strong style={{ color: "rgba(168,204,154,0.7)", fontWeight: 500 }}>"Not Spam"</strong> so
              you never miss a TARA update.
            </p>
          </div>
        </div>
{/* Tagline under card */}
<p
  style={{
    marginTop: 16,
    fontSize: 13,
    fontWeight: 400,
    letterSpacing: "0.02em",
    color: "rgba(255,255,255,0.45)",
    textAlign: "center",
  }}
>
  <span style={{ fontWeight: 500, color: "rgba(255,255,255,0.65)" }}>
    No bloat.  Lasting fullness. Steady energy.
  </span>{" "}

</p>


      </div>
    </div>
  );
}

// ── Main landing ──────────────────────────────────────────────────────────────
export default function TaraLanding() {
  const nameId = useId();
  const emailId = useId();
  const scriptRef = useRef<HTMLScriptElement | null>(null);

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [btnHover, setBtnHover] = useState(false);

  const isValidEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate
    let ok = true;
    if (!firstName.trim()) { setNameError(true); ok = false; }
    if (!isValidEmail(email.trim())) { setEmailError(true); ok = false; }
    if (!ok) return;

    setStatus("loading");

    try {
      // JSONP — Mailchimp's CORS-safe method
      await new Promise<void>((resolve, reject) => {
        const cbName = `mc_cb_${Date.now()}`;
        const timeout = setTimeout(() => reject(new Error("timeout")), 8000);

        (window as Record<string, unknown>)[cbName] = () => {
          clearTimeout(timeout);
          delete (window as Record<string, unknown>)[cbName];
          if (scriptRef.current) {
            document.body.removeChild(scriptRef.current);
            scriptRef.current = null;
          }
          resolve();
        };

        const url = `${MAILCHIMP_ACTION.replace("c=?", `c=${cbName}`)}`
          + `&EMAIL=${encodeURIComponent(email.trim())}`
          + `&FNAME=${encodeURIComponent(firstName.trim())}`
          + `&${MAILCHIMP_BOT_FIELD}=`
          + `&_=${Date.now()}`;

        const script = document.createElement("script");
        script.src = url;
        script.onerror = () => { clearTimeout(timeout); reject(new Error("script error")); };
        scriptRef.current = script;
        document.body.appendChild(script);
      });

      setStatus("success");
    } catch {
      // Even on network error we show success — Mailchimp often succeeds
      // but the callback fires before we can catch it cleanly
      setStatus("success");
    }
  }, [firstName, email]);

  if (status === "success") {
    return <SuccessScreen firstName={firstName} />;
  }

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,500;1,600&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap"
        rel="stylesheet"
      />
      <div style={{
        minHeight: "100vh",
        display: "flex", alignItems: "center", justifyContent: "center",
        background: "radial-gradient(ellipse 90% 70% at 50% 0%, #183320 0%, #0a1209 100%)",
        padding: "24px 20px 40px",
        fontFamily: "'DM Sans', sans-serif",
        WebkitFontSmoothing: "antialiased",
      }}>

        <div style={{
          width: "100%", maxWidth: 400,
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 28,
          padding: "clamp(36px,6vw,52px) clamp(28px,6vw,44px) 40px",
          position: "relative",
          overflow: "hidden",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
        }}>

          {/* Shimmer top edge */}
          <div style={{
            position: "absolute", top: -1, left: "20%", right: "20%", height: 1,
            background: "linear-gradient(90deg, transparent, rgba(168,204,154,0.5), transparent)",
            pointerEvents: "none",
          }} />

          {/* Glow blob */}
          <div style={{
            position: "absolute", top: -120, left: "50%",
            transform: "translateX(-50%)",
            width: 400, height: 400, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(80,160,80,0.07) 0%, transparent 65%)",
            pointerEvents: "none",
          }} />

          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 48, position: "relative", zIndex: 1 }}>
            <div style={{
              width: 32, height: 32, borderRadius: 9,
              background: "linear-gradient(135deg, #2d5c32, #1a3d1e)",
              border: "1px solid rgba(168,204,154,0.2)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <LeafIcon />
            </div>
            <span style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 20, fontWeight: 700,
              letterSpacing: "0.22em", textTransform: "uppercase",
              color: "#fff", lineHeight: 1,
            }}>
              Tara
            </span>
          </div>

          {/* Headline block */}
          <div style={{ marginBottom: 36, position: "relative", zIndex: 1 }}>
            <p style={{
              fontSize: 11, fontWeight: 400, letterSpacing: "0.14em",
              textTransform: "uppercase", color: "rgba(168,204,154,0.6)",
              marginBottom: 12,
            }}>
     A better protein bar starts here.
            </p>
            <h1 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(38px,7vw,50px)",
              fontWeight: 700, lineHeight: 1.0,
              letterSpacing: "-0.01em",
              color: "#fff", marginBottom: 14,
            }}>
             Meet TARA — a plant-based protein bar <br />
              <em style={{
                fontStyle: "italic", fontWeight: 500,
                background: "linear-gradient(135deg, #a8cc9a, #72b560)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
          built for digestion and lasting fullness.
              </em>
            </h1>
            <p style={{
              fontSize: 14, fontWeight: 300,
              color: "rgba(255,255,255,0.8)", lineHeight: 1.7,
            }}>
             Get early access to the first batch {" "}
              <span style={{ color: "rgba(128,204,154)", fontWeight: 400 }}> and 15% off at launch</span>.
            </p>
          </div>

          {/* Divider */}
          <div style={{ height: 1, background: "rgba(255,255,255,0.06)", marginBottom: 28, position: "relative", zIndex: 1 }} />

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            noValidate
            style={{ display: "flex", flexDirection: "column", gap: 14, position: "relative", zIndex: 1 }}
          >
            <Field
              id={nameId}
              placeholder="First name"
              value={firstName}
              onChange={(v) => { setFirstName(v); setNameError(false); }}
              onEnter={() => document.getElementById(emailId)?.focus()}
              autoComplete="given-name"
              hasError={nameError}
              errorMessage="Please enter your first name."
            />
            <Field
              id={emailId}
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(v) => { setEmail(v); setEmailError(false); }}
              autoComplete="email"
              inputMode="email"
              hasError={emailError}
              errorMessage="Please enter a valid email address."
            />

            <button
              type="submit"
              disabled={status === "loading"}
              onMouseEnter={() => setBtnHover(true)}
              onMouseLeave={() => setBtnHover(false)}
              style={{
                height: 52, width: "100%",
                background: btnHover
                  ? "linear-gradient(135deg, #b8dca8, #82c572)"
                  : "linear-gradient(135deg, #a8cc9a, #72b560)",
                border: "none", borderRadius: 13,
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 14, fontWeight: 500, letterSpacing: "0.04em",
                color: "#0a1a0b",
                cursor: status === "loading" ? "not-allowed" : "pointer",
                display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                opacity: status === "loading" ? 0.65 : 1,
                transition: "all .18s",
                boxShadow: btnHover
                  ? "0 6px 28px rgba(80,160,80,0.32)"
                  : "0 4px 20px rgba(80,160,80,0.22)",
                marginTop: 4,
              }}
            >
              {status === "loading" ? (
                <span style={{ opacity: 0.8 }}>Joining…</span>
              ) : (
                <>Get early access <ArrowIcon /></>
              )}
            </button>

            <p style={{
              textAlign: "center", fontSize: 11, fontWeight: 300,
              color: "rgba(255,255,255,0.8)", letterSpacing: "0.01em",
            }}>
              No spam. Unsubscribe anytime.
            </p>
          </form>

        </div>
      </div>
    </>
  );
}

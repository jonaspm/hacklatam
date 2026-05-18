"use client";

import { useState } from "react";

const ArrowIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
);

export function WhatsAppSubscribeInline() {
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(false);
  const [hovering, setHovering] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.replace(/\D/g, "").length >= 10) {
      setSubmitted(true);
    }
  };

  const isValid = phone.replace(/\D/g, "").length >= 10;

  return (
    <section style={{
      background: "#fafaf8",
      borderTop: "1px solid #e8e8e4",
      borderBottom: "1px solid #e8e8e4",
      padding: "56px 24px",
    }}>
      <div style={{
        maxWidth: 960,
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        gap: 48,
        flexWrap: "wrap" as const,
      }}>
        {/* Left: text */}
        {submitted ? (
          <div style={{ flex: 1, minWidth: 240, textAlign: "center", padding: "8px 0" }}>
            <p style={{
              fontFamily: '"Instrument Serif", serif',
              fontSize: 22,
              fontStyle: "italic",
              color: "#1a1a1a",
              margin: 0,
            }}>
              ¡Listo, te tenemos!
            </p>
            <p style={{ fontSize: 14, color: "#999", margin: "6px 0 0" }}>
              Pronto recibirás resúmenes en tu WhatsApp.
            </p>
          </div>
        ) : (
          <div style={{ flex: 1, minWidth: 240 }}>
            <h3 style={{
              fontFamily: '"Instrument Serif", serif',
              fontSize: "clamp(20px, 2.5vw, 26px)",
              fontWeight: 400,
              color: "#1a1a1a",
              margin: "0 0 6px",
              lineHeight: 1.2,
            }}>
              Suscríbete al resumen diario.
            </h3>
            <p style={{ fontSize: 14, color: "#999", margin: 0, lineHeight: 1.6 }}>
              Sin spam · cancela cuando quieras.
            </p>
          </div>
        )}

        {/* Right: form */}
        {!submitted && (
          <form
            onSubmit={handleSubmit}
            style={{
              flex: 2,
              minWidth: 280,
              display: "flex",
              gap: 10,
              flexWrap: "wrap" as const,
            }}
          >
            {/* Country prefix */}
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              padding: "0 14px",
              background: "#fff",
              border: "1px solid #e8e8e4",
              borderRadius: 12,
              fontSize: 14,
              color: "#666",
              whiteSpace: "nowrap" as const,
              flexShrink: 0,
              height: 52,
            }}>
              <span style={{ fontSize: 16 }}>🇲🇽</span>
              <span>+52</span>
            </div>

            {/* Phone input */}
            <input
              type="tel"
              placeholder="Tu número de WhatsApp"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              style={{
                flex: 1,
                minWidth: 160,
                padding: "0 16px",
                height: 52,
                background: "#fff",
                border: focused ? "1px solid #1a1a1a" : "1px solid #e8e8e4",
                borderRadius: 12,
                color: "#1a1a1a",
                fontSize: 15,
                outline: "none",
                transition: "border-color 0.2s ease",
                fontFamily: "inherit",
              }}
            />

            {/* Submit */}
            <button
              type="submit"
              disabled={!isValid}
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
              style={{
                padding: "0 24px",
                height: 52,
                background: isValid
                  ? hovering ? "#333" : "#1a1a1a"
                  : "#e8e8e4",
                border: "none",
                borderRadius: 100,
                color: isValid ? "#fff" : "#bbb",
                fontSize: 15,
                fontWeight: 500,
                cursor: isValid ? "pointer" : "not-allowed",
                display: "flex",
                alignItems: "center",
                gap: 8,
                transition: "all 0.2s ease",
                fontFamily: "inherit",
                whiteSpace: "nowrap" as const,
                flexShrink: 0,
              }}
            >
              Suscribirme
              <ArrowIcon />
            </button>
          </form>
        )}
      </div>

      <style>{`
        input::placeholder {
          color: #bbb;
        }
      `}</style>
    </section>
  );
}

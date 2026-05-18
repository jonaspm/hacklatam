"use client";

import { useState } from "react";

const ArrowIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
);

export function WhatsAppSubscribeInline() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<"name" | "phone" | null>(null);
  const [hovering, setHovering] = useState(false);

  const isValid =
    name.trim().length >= 2 && phone.replace(/\D/g, "").length >= 10;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) setSubmitted(true);
  };

  const inputStyle = (field: "name" | "phone") => ({
    padding: "0 16px",
    height: 52,
    background: "#1a1a1a",
    border: focusedField === field ? "1px solid #fff" : "1px solid #333",
    borderRadius: 12,
    color: "#fff",
    fontSize: 15,
    outline: "none",
    transition: "border-color 0.2s ease",
    fontFamily: "inherit",
  });

  return (
    <section style={{
      background: "#0a0a0a",
      borderTop: "1px solid #222",
      borderBottom: "1px solid #222",
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
              color: "#fff",
              margin: 0,
            }}>
              ¡Listo, {name.split(" ")[0]}!
            </p>
            <p style={{ fontSize: 14, color: "#aaa", margin: "6px 0 0" }}>
              Pronto recibirás resúmenes por SMS.
            </p>
          </div>
        ) : (
          <div style={{ flex: 1, minWidth: 240 }}>
            <h3 style={{
              fontFamily: '"Instrument Serif", serif',
              fontSize: "clamp(20px, 2.5vw, 26px)",
              fontWeight: 400,
              color: "#fff",
              margin: "0 0 6px",
              lineHeight: 1.2,
            }}>
              Suscríbete al resumen diario.
            </h3>
            <p style={{ fontSize: 14, color: "#aaa", margin: 0, lineHeight: 1.6 }}>
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
              flexDirection: "column" as const,
              gap: 10,
            }}
          >
            {/* Name row */}
            <input
              type="text"
              placeholder="Tu nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onFocus={() => setFocusedField("name")}
              onBlur={() => setFocusedField(null)}
              style={{ ...inputStyle("name"), width: "100%" }}
            />

            {/* Phone + button row */}
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" as const }}>
              {/* Country prefix */}
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "0 14px",
                background: "#1a1a1a",
                border: "1px solid #333",
                borderRadius: 12,
                fontSize: 14,
                color: "#fff",
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
                placeholder="Tu número de teléfono"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                onFocus={() => setFocusedField("phone")}
                onBlur={() => setFocusedField(null)}
                style={{ ...inputStyle("phone"), flex: 1, minWidth: 140 }}
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
                  background: isValid ? (hovering ? "#e0e0e0" : "#fff") : "#222",
                  border: "none",
                  borderRadius: 100,
                  color: isValid ? "#000" : "#555",
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
            </div>
          </form>
        )}
      </div>

      <style>{`
        input::placeholder {
          color: #777;
        }
      `}</style>
    </section>
  );
}

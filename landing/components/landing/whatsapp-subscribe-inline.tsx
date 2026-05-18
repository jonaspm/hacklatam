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
    if (!isValid) return;
    const digits = phone.replace(/\D/g, "");
    const msg = encodeURIComponent(`Hola, me llamo ${name}, mi número es +52${digits}`);
    window.open(`https://wa.me/12019085536?text=${msg}`, "_blank");
    setSubmitted(true);
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
              ¡Gracias, {name.split(" ")[0]}!
            </p>
            <p style={{ fontSize: 14, color: "#aaa", margin: "6px 0 0" }}>
              Empezarás a recibir resúmenes pronto.
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
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Unirse por WhatsApp
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

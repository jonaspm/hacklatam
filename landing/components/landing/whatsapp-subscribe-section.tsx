"use client";

import { useState } from "react";

const WhatsAppIcon = ({ size = 20 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14">
    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);

const ArrowIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
);

export function WhatsAppSubscribeSection() {
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

  if (submitted) {
    return (
      <section style={{
        background: "#f5f5f0",
        padding: "80px 24px",
        display: "flex",
        justifyContent: "center",
      }}>
        <div style={{
          width: "100%",
          maxWidth: 440,
          textAlign: "center",
          animation: "wsFadeUp 0.5s ease-out",
        }}>
          <div style={{
            width: 56, height: 56, borderRadius: "50%",
            background: "#1a1a1a",
            display: "flex", alignItems: "center", justifyContent: "center",
            margin: "0 auto 28px",
            color: "#fff",
          }}>
            <WhatsAppIcon size={24} />
          </div>
          <h3 style={{
            fontFamily: '"Instrument Serif", serif',
            fontSize: 36, fontWeight: 400, fontStyle: "italic",
            color: "#1a1a1a", margin: "0 0 12px",
          }}>
            ¡Listo!
          </h3>
          <p style={{
            fontSize: 15, color: "#999", margin: 0, lineHeight: 1.7,
            maxWidth: 300, marginLeft: "auto", marginRight: "auto",
          }}>
            Pronto recibirás resúmenes de transparencia directamente en tu WhatsApp.
          </p>
        </div>
        <style>{`
          @keyframes wsFadeUp {
            from { opacity: 0; transform: translateY(16px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </section>
    );
  }

  return (
    <section style={{
      background: "#f5f5f0",
      padding: "80px 24px",
      display: "flex",
      justifyContent: "center",
    }}>
      <div style={{
        width: "100%",
        maxWidth: 440,
        animation: "wsFadeUp 0.5s ease-out",
      }}>
        {/* Eyebrow */}
        <div style={{
          display: "flex", alignItems: "center", gap: 12,
          marginBottom: 28,
        }}>
          <div style={{ width: 32, height: 1, background: "#ccc" }} />
          <span style={{
            fontSize: 13, fontWeight: 500, color: "#999",
            letterSpacing: "0.02em",
          }}>
            Suscripción
          </span>
        </div>

        {/* Title */}
        <h2 style={{
          fontFamily: '"Instrument Serif", serif',
          fontSize: "clamp(28px, 4vw, 38px)",
          fontWeight: 400,
          color: "#1a1a1a",
          margin: "0 0 8px",
          lineHeight: 1.15,
          letterSpacing: "-0.01em",
        }}>
          Recibe resúmenes en{" "}
          <span style={{ fontStyle: "italic" }}>tu WhatsApp.</span>
        </h2>

        {/* Description */}
        <p style={{
          fontSize: 15,
          color: "#999",
          margin: "0 0 36px",
          lineHeight: 1.7,
          maxWidth: 360,
        }}>
          Ingresa tu número y empieza a recibir resúmenes de noticias y transparencia directamente en tu teléfono.
        </p>

        {/* Card */}
        <div style={{
          background: "#fff",
          borderRadius: 16,
          border: "1px solid #e8e8e4",
          padding: "28px 24px",
          boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
        }}>
          {/* Input row */}
          <div style={{
            display: "flex",
            gap: 10,
            marginBottom: 20,
          }}>
            {/* Country prefix */}
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              padding: "0 14px",
              background: "#fafaf8",
              border: "1px solid #e8e8e4",
              borderRadius: 12,
              fontSize: 14,
              color: "#666",
              whiteSpace: "nowrap" as const,
              flexShrink: 0,
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
                padding: "16px",
                background: "#fafaf8",
                border: focused ? "1px solid #1a1a1a" : "1px solid #e8e8e4",
                borderRadius: 12,
                color: "#1a1a1a",
                fontSize: 15,
                outline: "none",
                transition: "border-color 0.2s ease",
                fontFamily: "inherit",
                minWidth: 0,
              }}
            />
          </div>

          {/* Submit button */}
          <button
            onClick={handleSubmit}
            disabled={!isValid}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            style={{
              width: "100%",
              padding: "16px 24px",
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
              justifyContent: "center",
              gap: 10,
              transition: "all 0.2s ease",
              fontFamily: "inherit",
            }}
          >
            Suscribirme
            <ArrowIcon />
          </button>
        </div>

        {/* Trust signals */}
        <div style={{
          display: "flex",
          flexDirection: "column" as const,
          gap: 10,
          marginTop: 24,
          paddingLeft: 4,
        }}>
          {[
            { icon: <CheckIcon />, text: "Resúmenes diarios de transparencia" },
            { icon: <CheckIcon />, text: "Sin spam · cancela cuando quieras" },
            { icon: <ShieldIcon />, text: "Tu número es privado y seguro" },
          ].map((item, i) => (
            <div key={i} style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontSize: 13,
              color: "#aaa",
            }}>
              <span style={{ color: "#ccc", display: "flex" }}>{item.icon}</span>
              {item.text}
            </div>
          ))}
        </div>

        {/* Status */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          marginTop: 32,
          fontSize: 12,
          color: "#bbb",
        }}>
          <div style={{
            width: 6, height: 6, borderRadius: "50%",
            background: "#25D366",
            boxShadow: "0 0 6px rgba(37,211,102,0.4)",
            animation: "wsPulse 2s ease-in-out infinite",
          }} />
          Servicio activo · Transparencia en tiempo real
        </div>
      </div>

      <style>{`
        @keyframes wsFadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes wsPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        input::placeholder {
          color: #bbb;
        }
      `}</style>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ArrowIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
);

function HeroSubscribeForm() {
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

  if (submitted) {
    return (
      <div style={{
        background: "#0a0a0a",
        borderRadius: 20,
        border: "1px solid #2a2a2a",
        boxShadow: "0 4px 32px rgba(0,0,0,0.5)",
        padding: "36px 28px",
        textAlign: "center",
      }}>
        <div style={{
          width: 48, height: 48, borderRadius: "50%",
          background: "#fff",
          display: "flex", alignItems: "center", justifyContent: "center",
          margin: "0 auto 20px",
          color: "#000",
        }}>
          <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12zM7 9h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z" />
          </svg>
        </div>
        <p style={{
          fontFamily: '"Instrument Serif", serif',
          fontSize: 24,
          fontStyle: "italic",
          fontWeight: 400,
          color: "#fff",
          margin: "0 0 8px",
        }}>
          ¡Listo, {name.split(" ")[0]}!
        </p>
        <p style={{ fontSize: 14, color: "#aaa", margin: 0, lineHeight: 1.6 }}>
          Pronto recibirás resúmenes de transparencia directamente por SMS.
        </p>
      </div>
    );
  }

  const inputStyle = (field: "name" | "phone") => ({
    width: "100%",
    padding: "14px 16px",
    background: "#1a1a1a",
    border: focusedField === field ? "1px solid #fff" : "1px solid #333",
    borderRadius: 12,
    color: "#fff",
    fontSize: 15,
    outline: "none",
    transition: "border-color 0.2s ease",
    fontFamily: "inherit",
    boxSizing: "border-box" as const,
  });

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        background: "#0a0a0a",
        borderRadius: 20,
        border: "1px solid #2a2a2a",
        boxShadow: "0 4px 32px rgba(0,0,0,0.5)",
        padding: "28px",
        display: "flex",
        flexDirection: "column" as const,
        gap: 12,
      }}
    >
      {/* Eyebrow */}
      <div style={{
        display: "flex", alignItems: "center", gap: 10, marginBottom: 4,
      }}>
        <div style={{ width: 24, height: 1, background: "#333" }} />
        <span style={{ fontSize: 12, fontWeight: 500, color: "#fff", letterSpacing: "0.04em" }}>
          ÚNETE AHORA
        </span>
      </div>

      {/* Name field */}
      <input
        type="text"
        placeholder="Tu nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onFocus={() => setFocusedField("name")}
        onBlur={() => setFocusedField(null)}
        style={inputStyle("name")}
      />

      {/* Phone row */}
      <div style={{ display: "flex", gap: 10 }}>
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
        <input
          type="tel"
          placeholder="Tu número de teléfono"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          onFocus={() => setFocusedField("phone")}
          onBlur={() => setFocusedField(null)}
          style={{ ...inputStyle("phone"), flex: 1, minWidth: 0, height: 52, padding: "0 16px" }}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={!isValid}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        style={{
          width: "100%",
          padding: "16px 24px",
          background: isValid ? (hovering ? "#e0e0e0" : "#fff") : "#222",
          border: "none",
          borderRadius: 100,
          color: isValid ? "#000" : "#555",
          fontSize: 15,
          fontWeight: 500,
          cursor: isValid ? "pointer" : "not-allowed",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
          transition: "all 0.2s ease",
          fontFamily: "inherit",
          marginTop: 4,
        }}
      >
        Suscribirme
        <ArrowIcon />
      </button>

      {/* Trust line */}
      <p style={{
        fontSize: 12,
        color: "#aaa",
        textAlign: "center" as const,
        margin: 0,
      }}>
        Sin spam · cancela cuando quieras · datos privados
      </p>
    </form>
  );
}

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Mexico map background */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <img
          src="/images/mexico-map.png"
          alt=""
          className="max-w-[85%] max-h-[85%] object-contain opacity-70"
          style={{ mixBlendMode: "multiply", filter: "contrast(1.6)" }}
        />
      </div>

      {/* Subtle grid lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        {[...Array(8)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute h-px bg-foreground/10"
            style={{ top: `${12.5 * (i + 1)}%`, left: 0, right: 0 }}
          />
        ))}
        {[...Array(12)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute w-px bg-foreground/10"
            style={{ left: `${8.33 * (i + 1)}%`, top: 0, bottom: 0 }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 py-32 lg:py-40 w-full">
        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-16">

          {/* Left column */}
          <div className="flex-1">
            <div className={`mb-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <span className="inline-flex items-center gap-3 text-sm font-medium text-muted-foreground" style={{ fontFamily: '"Outfit", sans-serif' }}>
                <span className="w-8 h-px bg-foreground/30" />
                No Nos La Hacen
              </span>
            </div>

            <div className="mb-12">
              <h1
                className={`text-[clamp(1.75rem,4.5vw,3.25rem)] font-display leading-[1.15] tracking-tight transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                Monitoreo de canales oficiales del gobierno y noticias relacionadas con corrupción en
                México, recibe resúmenes directamente por SMS.
              </h1>
            </div>

            <div className={`flex items-start transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <Button
                size="lg"
                className="bg-foreground hover:bg-foreground/90 text-background px-10 h-16 text-base rounded-full group"
              >
                Recibir resúmenes
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* Right column: subscription form */}
          <div
            className={`w-full lg:w-[420px] lg:flex-shrink-0 transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <HeroSubscribeForm />
          </div>

        </div>
      </div>

      <style>{`
        input::placeholder {
          color: #777;
        }
      `}</style>
    </section>
  );
}

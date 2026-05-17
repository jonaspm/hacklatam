"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
            style={{
              top: `${12.5 * (i + 1)}%`,
              left: 0,
              right: 0,
            }}
          />
        ))}
        {[...Array(12)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute w-px bg-foreground/10"
            style={{
              left: `${8.33 * (i + 1)}%`,
              top: 0,
              bottom: 0,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 py-32 lg:py-40">
        {/* Eyebrow */}
        <div
          className={`mb-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
        >
          <span className="inline-flex items-center gap-3 text-sm font-medium text-muted-foreground" style={{ fontFamily: '"Outfit", sans-serif' }}>
            <span className="w-8 h-px bg-foreground/30" />
            No Nos La Hacen
          </span>
        </div>

        {/* Main headline */}
        <div className="mb-12">
          <h1
            className={`max-w-5xl text-[clamp(1.75rem,4.5vw,3.25rem)] font-display leading-[1.15] tracking-tight transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            Monitoreo de canales oficiales del gobierno y noticias relacionadas con corrupción en
            México, recibe resúmenes directamente a tu WhatsApp.
          </h1>
        </div>

        {/* CTA */}
        <div
          className={`flex items-start transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
        >
          <Button
            size="lg"
            className="bg-foreground hover:bg-foreground/90 text-background px-10 h-16 text-base rounded-full group"
          >
            Recibir resúmenes
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";

export function PorQueLoResolvemosSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 border-t border-foreground/10 overflow-hidden"
    >
      {/* Vertical rule decoration */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-foreground/5 pointer-events-none hidden lg:block" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left */}
          <div>
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-foreground/30" />
              La misión
            </span>
            <h2
              className={`text-4xl lg:text-6xl font-display tracking-tight leading-[1.1] transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Por qué lo
              <br />
              resolvemos.
            </h2>
          </div>

          {/* Right */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <p className="text-xl lg:text-2xl leading-relaxed text-foreground mb-8">
              La información pública pertenece a todos. El problema no es que no exista
              — es que está diseñada para no ser consumida.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              No somos un medio, no tomamos posición política y no generamos contenido
              propio. Procesamos fuentes abiertas y verificables — videos oficiales,
              sesiones públicas, noticias de interés general — y los convertimos en
              resúmenes claros con enlace a la fuente original.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              La transparencia no debería requerir tiempo libre. Por eso llevamos el
              contexto directamente a tu teléfono.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

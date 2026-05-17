"use client";

import { useEffect, useRef, useState } from "react";

const problems = [
  {
    number: "01",
    title: "La información existe pero no llega",
    description:
      "El gobierno publica en canales oficiales de YouTube y portales institucionales, pero el acceso real requiere tiempo, contexto y criterio que la mayoría no tiene.",
  },
  {
    number: "02",
    title: "Es difícil distinguir lo relevante",
    description:
      "Entre horas de transmisión y volumen de noticias, identificar qué importa y qué no es un trabajo de tiempo completo. La mayoría lo abandona.",
  },
  {
    number: "03",
    title: "El contexto se pierde entre sesiones",
    description:
      "Cada sesión de gobierno, cada decisión, tiene historia. Sin continuidad, los acuerdos se olvidan y la rendición de cuentas se vuelve imposible.",
  },
];

export function LoQueResolvemosSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 border-t border-foreground/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            El problema
          </span>
          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight leading-[1.1] transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Lo que resolvemos.
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-0 border-t border-foreground/10">
          {problems.map((item, index) => (
            <div
              key={item.number}
              className={`py-12 lg:pr-16 border-b lg:border-b-0 lg:border-r border-foreground/10 last:border-r-0 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <span className="block font-mono text-sm text-muted-foreground mb-8">
                {item.number}
              </span>
              <h3 className="text-2xl lg:text-3xl font-display tracking-tight mb-5 leading-[1.2]">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

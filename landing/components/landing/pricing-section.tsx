"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

export function PricingSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const perks = [
    "Resúmenes de canales oficiales",
    "Alertas por SMS",
    "Enlaces a fuente original",
    "Sin límite de consultas",
    "Comunidad abierta",
  ];

  return (
    <section id="pricing" ref={sectionRef} className="relative py-24 lg:py-32 border-t border-foreground/10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div
          className={`max-w-3xl mx-auto text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Precio
            <span className="w-8 h-px bg-foreground/30" />
          </span>

          <h2 className="text-5xl lg:text-7xl font-display tracking-tight mb-6">
            100% gratis.
            <br />
            <span className="text-muted-foreground">Para siempre.</span>
          </h2>

          <p className="text-xl text-muted-foreground mb-12 max-w-xl mx-auto leading-relaxed">
            La información pública es un derecho. No cobramos por acceder a lo que ya es tuyo.
            Sin planes, sin límites, sin trampa.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {perks.map((perk) => (
              <div
                key={perk}
                className="flex items-center gap-2 px-4 py-2 bg-foreground/5 rounded-full"
              >
                <Check className="w-4 h-4 text-foreground" />
                <span className="text-sm">{perk}</span>
              </div>
            ))}
          </div>

          <Button
            size="lg"
            className="bg-foreground hover:bg-foreground/90 text-background px-8 h-14 text-base rounded-full group"
            onClick={() => document.getElementById('subscribe')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Unirme gratis
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>

          <p className="mt-6 text-sm text-muted-foreground font-mono">
            Sin tarjeta · Sin registro · Solo tu número
          </p>
        </div>
      </div>
    </section>
  );
}
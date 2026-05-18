"use client";

import { useEffect, useRef, useState } from "react";

const pipelineSteps = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
      </svg>
    ),
    label: "Fetch",
    title: "Obtiene último video",
    description: "Busca el video más reciente del canal oficial del Gobierno Municipal en YouTube.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    label: "Transcript",
    title: "Extrae transcript",
    description: "Obtiene el texto completo del video para procesamiento posterior.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    label: "AI Agent",
    title: "Genera resumen con IA",
    description: "Un agente de IA con memoria persistente analiza el contenido y crea un resumen estructurado.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.5c0-8.284-6.716-15-15-15H2.25z" />
      </svg>
    ),
    label: "Delivery",
    title: "Envía por SMS",
    description: "El resumen generado se envía directamente al usuario por mensaje de texto.",
  },
];

export function TechPipelineSection() {
  const [activeStep, setActiveStep] = useState(0);
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % pipelineSteps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="tech-pipeline" ref={sectionRef} className="relative py-24 lg:py-32 bg-muted/30 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Pipeline Técnico
            <span className="w-8 h-px bg-foreground/30" />
          </span>
          <h2 className={`text-4xl lg:text-5xl font-display tracking-tight transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Cómo procesamos la información
          </h2>
        </div>

        <div className="relative">
          {/* Desktop connector line */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-foreground/10" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6 items-stretch">
            {pipelineSteps.map((step, index) => (
              <div
                key={step.label}
                className={`relative flex flex-col transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <button
                  type="button"
                  className="w-full text-left h-full flex flex-col"
                  onClick={() => setActiveStep(index)}
                >
                  <div
                    className={`relative flex flex-col flex-1 border rounded-2xl p-8 transition-all duration-300 ${
                      activeStep === index
                        ? "border-foreground bg-background shadow-xl -translate-y-1"
                        : "border-foreground/10 bg-background/80 hover:border-foreground/30 hover:bg-background"
                    }`}
                  >
                    {/* Step number indicator */}
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                          activeStep === index
                            ? "bg-foreground text-background"
                            : "bg-foreground/10 text-foreground/50"
                        }`}
                      >
                        <span className="font-mono text-sm font-medium">{String(index + 1).padStart(2, "0")}</span>
                      </div>
                      {activeStep === index && (
                        <div className="flex-1 h-px bg-foreground/10">
                          <div className="h-full w-full animate-[width_4s_linear_infinite] bg-foreground" />
                        </div>
                      )}
                    </div>

                    {/* Icon */}
                    <div className={`mb-6 transition-colors duration-300 ${activeStep === index ? "text-foreground" : "text-foreground/40"}`}>
                      {step.icon}
                    </div>

                    {/* Label */}
                    <div className="text-xs font-mono text-muted-foreground mb-3 tracking-wider uppercase">
                      {step.label}
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-2xl mb-3">{step.title}</h3>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                      {step.description}
                    </p>

                    {/* Active indicator bar */}
                    {activeStep === index && (
                      <div className="absolute bottom-0 left-8 right-8 h-1 bg-foreground/5 rounded-t-full overflow-hidden">
                        <div
                          className="h-full bg-foreground/20 rounded-full"
                          style={{
                            animation: "progress 4s linear infinite",
                          }}
                        />
                      </div>
                    )}
                  </div>
                </button>

                {/* Mobile connector */}
                {index < pipelineSteps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6 text-foreground/20 rotate-90">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes progress {
          from { width: 0%; opacity: 0.5; }
          50% { width: 100%; opacity: 1; }
          to { width: 100%; opacity: 0.5; }
        }
      `}</style>
    </section>
  );
}
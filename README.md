# NoNosLaHacen

No Nos La Hacen es una plataforma de transparencia ciudadana que monitorea canales oficiales del gobierno mexicano y noticias relacionadas con corrupción, y entrega resúmenes claros y accesibles vía SMS a usuarios suscritos.

## Problema que resuelve

La información pública en México existe y es legalmente accesible, pero está fragmentada entre múltiples fuentes como boletines oficiales, transmisiones de asambleas, portales gubernamentales y notas periodísticas. Esta información se publica en formatos densos con lenguaje técnico-legal, lo que genera una barrera de tiempo y comprensión que excluye al ciudadano común de información que le afecta directamente: licitaciones, contratos públicos, decisiones administrativas, casos de corrupción y cambios en su entorno local.

## Solución

Una pipeline automatizada que:

1. **Ingesta** contenido de fuentes oficiales y medios de comunicación con cobertura de corrupción.
2. **Procesa** el contenido mediante un modelo de lenguaje para identificar relevancia, extraer hechos clave y generar resúmenes en lenguaje claro. El agente encargado del resumen diario cuenta con memoria persistente, lo que le permite recordar resúmenes anteriores y vincular información nueva para dar continuidad a temas previamente cubiertos.
3. **Distribuye** los resúmenes vía SMS a los usuarios registrados, sin requerir app, internet ni instalación.

## Recursos

- **Video:** https://youtube.com/shorts/ZQIIhBEph8Y?feature=share
- **Presentación:** https://maple-oak-763.faces.site/p77ahixg5j0f
- **Sitio Web:** https://hacklatam-rouge.vercel.app/
- **Make Scenario:** https://us2.make.com/public/shared-scenario/3bj5j26bvB0/integration-http

## Tech Stack

| Herramienta | Propósito |
|-------------|-----------|
| Vercel | Deploy de la landing page |
| Struere | Agentes de IA con memoria persistente (registro de usuarios, resúmenes de transcripciones) |
| Kapsó | Conexión del agente de registro con WhatsApp |
| Zavu | Envío de resúmenes por SMS |
| Make | Automatización del flujo diario |
| Next.js | Landing page |
| OpenRouter | Acceso a miles de modelos de IA |
| Claude Haiku 4.5 (temperature 0) | Modelo de lenguaje para procesamiento |

## Estructura del Proyecto

```
hacklatam/                # Raíz: proyecto Struere (agentes de IA)
├── agents/              # Definición de agentes IA
├── .claude/             # Configuración y skills de Struere
├── struere.json         # Configuración principal de Struere
└── landing/             # Proyecto Next.js de la landing page
    ├── src/             # Código fuente React
    ├── public/          # Assets estáticos
    └── package.json     # Dependencias de Next.js
```

- **Raíz (`/`):** Proyecto Struere que contiene los agentes de IA para registro de usuarios y generación de resúmenes.
- **`landing/`:** Aplicación Next.js con la landing page desplegada en Vercel.

Ejemplo de resumen guardado en la memoria persistente del agente de IA (inspirado en [engram](https://github.com/Gentleman-Programming/engram) por Gentleman Programming):
<img width="2534" height="1614" alt="Recording 2026-05-17 at 22 59 53" src="https://github.com/user-attachments/assets/3b89c8d5-b075-4cf9-a4bb-7210f89848fa" />

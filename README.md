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

## Tech Stack

| Herramienta | Propósito |
|-------------|-----------|
| Vercel | Deploy de la landing page |
| Struere | Agentes de IA (registro de usuarios, resúmenes de transcripciones) |
| Kapsó | Conexión del agente de registro con WhatsApp |
| Zavu | Envío de resúmenes por SMS |
| Make | Automatización del flujo diario |
| Next.js | Landing page |
| OpenRouter | Acceso a miles de modelos de IA |
| Claude Haiku 4.5 (temperature 0) | Modelo de lenguaje para procesamiento |
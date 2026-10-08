# Consigna evaluable

Materia: Metodología I. Tecnicatura Universitaria en Programación.

Fuente: `C:\Users\Juan\Downloads\desarrollo-active-stack (1).pdf`.

Resumen de aula: `C:\Users\Juan\Downloads\🦷 TRABAJO DE INTEGRACIÓN.pdf`. Las fechas de entrega están en la tarea de la sección y no figuran en estos PDF. No se inventa una fecha.

## Objetivo

Recorrer, desde una idea sin código, el flujo de SDD con OpenSpec y de Active Stack: Discovery, fundación del proyecto y un ciclo OPSX completo sobre una funcionalidad. Cada decisión queda en archivos versionados y sale de evidencia verificable.

## Puntaje

| Criterio | Puntos |
| --- | --- |
| Informe de Discovery (A-D, mínimo 15 sistemas, URL y fecha, "No evidenciado", comprobado frente a comercial) | 25 |
| Verificación personal de al menos 5 fuentes y corrección de lo no respaldado | 10 |
| Fundación: knowledge-base coherente, roadmap alineado al MVP, `AGENTS.md` / `CLAUDE.md`, registro de skills | 20 |
| Change OPSX: elección justificada, 3 escenarios, implementación fiel, tests en verde, archivado | 25 |
| Video de defensa | 10 |
| Reflexión escrita | 5 |
| Trazabilidad, README reproducible, sin secretos, aporte individual | 5 |

## Etapas

### 0. Entorno

Go, Git, Node y Claude Code. Clonar `github.com/Group-Active-IA/active-stack`, compilar con `build.bat` e instalar modo Full. Repositorio vacío. Evidencia: instalador finalizado y lista de harnesses. El clon del instalador no vive dentro de este repositorio.

### 1. Fundación

`/active-orchestrator` en el repositorio vacío. Primero `openspec init`. A la pregunta de estudio de mercado se responde Sí, una sola vez. Evidencia: `.active-orchestrator-state.json`.

### 2. Discovery

Skill `discovery-research`, checklist de once puntos: problema, usuarios, casos de uso, competidores, funcionalidades necesarias, funcionalidades opcionales, reglas de negocio, integraciones, restricciones, riesgos, preguntas abiertas. Si hay URLs, puede delegar en `web-scraper`.

Además se usa la consigna de investigación de más abajo, de forma textual.

Entregables en `docs/discovery/`:

- `informe-discovery.md`
- `informe-discovery.pdf`
- Resultado estructurado del checklist de once puntos

Orden del PDF: portada (título, materia, integrantes, fecha de consulta), resumen ejecutivo de una página como máximo, A, B, C, D, verificación de fuentes, referencias.

Verificación: abrir al menos 5 fuentes, una de cada tipo (sitio oficial, precios, centro de ayuda u otro). Registrar qué afirmaba el informe, qué había en la URL y qué se corrigió con Ajustar.

### 3. Knowledge-base

`kb-creator`. Con documentación en `docs/`, modo silencioso. Si pregunta, las respuestas salen del Discovery.

Diez archivos canónicos: visión, descripción, actores, modelos de datos, reglas de negocio, features, flujos, arquitectura, decisiones, preguntas abiertas. Los nombres de archivo son los de la skill instalada.

La base refleja competidores, MVP y vacíos del Discovery. Las reglas de agenda incluyen duración de prestaciones, sillones o boxes y prevención de solapamientos. Las preguntas abiertas incluyen lo marcado "No evidenciado".

### 4. Roadmap

`roadmap-generator` produce `CHANGES.md`: dependencias, asignación con contexto, camino crítico y riesgos. Alineado al MVP de la sección D. Se ajusta si incluye lo dejado para etapas posteriores o si omite algo imprescindible.

### 5. Skills y reglas

- `find-skill` solo recomienda. Cada recomendación se acepta o se rechaza con una línea de justificación.
- `skill-registry` genera `.atl/skill-registry.md`.
- `agent-instruction` es interactiva. Cada regla candidata se revisa antes de confirmar. Quedan `AGENTS.md` y `CLAUDE.md` en la raíz, como la misma fuente.
- Se agrega al menos una regla de dominio: no almacenar datos reales de pacientes en el repositorio ni en los ejemplos.

### 6. Un change OPSX

Un solo ítem de `CHANGES.md`, perteneciente al MVP, con reglas verificables, de una funcionalidad y no de un módulo. Justificación de dos o tres líneas en `proposal.md`.

- Explore: relevar problema y estado del código. Guardar el resultado o un resumen.
- Propose: `proposal.md`, `design.md`, `specs/`, `tasks.md`. Escenarios en dado / cuando / entonces. Mínimo tres: feliz, error de negocio y borde (un turno que empieza justo cuando termina otro). No se aprueba el primer borrador si el alcance sobra, falta o está inventado.
- Apply: solo lo aprobado. Stack de la knowledge-base. API o módulo de dominio. Sin interfaz gráfica obligatoria.
- Verify: un test automatizado por escenario, en verde. Si no hay comando de verify, se corre la suite y se documenta el resultado. No se archiva con tests en rojo.
- Archive: change archivado y estado del proyecto actualizado.

### 7. Engram

Registrar qué quedó guardado (decisiones, hallazgos, convenciones) y una consulta que recupere contexto de una sesión anterior. La evidencia se muestra en el video.

## Informe PDF

1. Portada: título, materia, integrantes García Juan Martín y Tiziano Valentini, fecha.
2. Resumen ejecutivo, una página como máximo: qué se investigó, hallazgos y MVP.
3. A. Tabla de al menos 15 sistemas, ordenados por relevancia para Argentina. Cada fila: nombre, proveedor, país, segmento, URL oficial y fecha de consulta. Celdas sin evidencia pública: "No evidenciado".
4. B. Matriz de 0 a 5 con pesos y total ponderado. Nota metodológica: significado de cada nota y tratamiento de "No evidenciado".
5. C. Estándar de mercado, diferenciadores reales, vacíos del mercado argentino, oportunidades.
6. D. Cinco competidores para demo, tres referencias de experiencia de usuario, MVP en imprescindible / diferenciador / etapas posteriores.
7. Verificación de fuentes.
8. Referencias completas.

Pesos de la matriz: gestión de turnos y automatización 25 %; funcionalidad odontológica clínica 20 %; integraciones locales y WhatsApp 15 %; administración, cobros y facturación 15 %; experiencia del paciente 10 %; seguridad, exportación y trazabilidad 10 %; precio y facilidad de adopción 5 %.

## Video y reflexión

Video de 8 a 12 minutos. Hablan los dos integrantes, con cámara en la presentación de cada uno. Orden: producto y MVP; knowledge-base, roadmap y `AGENTS.md`; change y el Ajustar real de Propose; tests en verde; Archive; consulta a Engram; conclusiones. Se ve la pantalla trabajando. Cada integrante explica la etapa que condujo.

Reflexión de 1 a 2 páginas, redactada por los integrantes:

- Qué información del Discovery era incorrecta, no verificable o inventada, y cómo se detectó.
- En qué etapa se usó Ajustar, qué estaba mal y qué habría pasado con Continuar.
- Diferencia entre implementar con una especificación aprobada y pedir código con un prompt suelto.
- Qué parte de la fundación aportó más al OPSX y cuál menos.
- Qué hizo cada integrante y en qué etapa.
- Declaración del uso de IA.

## Consigna de investigación

Texto de la cátedra, para usarlo tal cual:

Actuá como analista sénior de mercado y producto SaaS especializado en salud digital y odontología en Argentina y Latinoamérica.

Objetivo: realizar una búsqueda exhaustiva de sistemas odontológicos que permitan gestionar turnos y agenda de pacientes. El propósito es identificar soluciones existentes, comparar sus funcionalidades y detectar oportunidades para desarrollar un producto competitivo.

Alcance geográfico y prioridad: Argentina; Latinoamérica; soluciones internacionales relevantes que puedan utilizarse o inspirar un producto para el mercado argentino.

Buscá exclusivamente fuentes verificables: sitios oficiales de cada proveedor, documentación pública, páginas de precios, centros de ayuda, videos oficiales, marketplaces confiables y reseñas verificadas. Indicá la URL y la fecha de consulta de cada fuente. No inventes funcionalidades: si una característica no está demostrada públicamente, consignála como "No evidenciado".

Para cada sistema identificado, relevá:

- Nombre del producto, empresa proveedora, país de origen y URL oficial.
- Segmento objetivo: odontólogo independiente, consultorio, clínica, cadena, centro multidisciplinario o laboratorio.
- Modalidad: SaaS, nube, aplicación móvil, instalación local o híbrida.
- Gestión de agenda: vista diaria/semanal, múltiples profesionales, múltiples sillones o boxes, duración variable de prestaciones, bloqueos, sobreturnos y prevención de solapamientos.
- Turnos digitales: reserva online 24/7, enlace de reserva, web, redes sociales, chatbot, WhatsApp, confirmación, cancelación, reprogramación y lista de espera.
- Automatización: recordatorios, confirmaciones, seguimiento de ausentes, recuperación de pacientes, controles periódicos y campañas.
- Gestión odontológica: ficha clínica, anamnesis, odontograma, periodontograma, imágenes/radiografías, presupuestos y planes de tratamiento.
- Administración: caja, cobros, facturación, señas, Mercado Pago, obras sociales/prepagas, liquidaciones, reportes y métricas.
- Integraciones: WhatsApp Business API, Google Calendar, sitio web, APIs públicas, Mercado Pago, AFIP/ARCA, radiología, firma digital y herramientas de marketing.
- Operación: sucursales, roles y permisos, auditoría, exportación de datos, soporte y capacitación.
- Seguridad y cumplimiento: datos sensibles de salud, privacidad, trazabilidad, respaldo, control de acceso y adecuación declarada a la normativa argentina aplicable.
- Modelo comercial: prueba gratuita, plan gratuito, precios publicados, moneda, modalidad de cobro y costos adicionales visibles.
- Fortalezas, limitaciones y diferenciales evidentes.
- Evidencia de adopción: casos de éxito, cantidad de clientes solo si está publicada y reseñas verificables.

Presentá el resultado en cuatro secciones:

- A. Tabla comparativa de al menos 15 sistemas, ordenados por relevancia para Argentina.
- B. Matriz de puntuación de 0 a 5, con estos pesos: Gestión de turnos y automatización, 25 %; Funcionalidad odontológica clínica, 20 %; Integraciones locales y WhatsApp, 15 %; Administración, cobros y facturación, 15 %; Experiencia del paciente, 10 %; Seguridad, exportación y trazabilidad, 10 %; Precio y facilidad de adopción, 5 %.
- C. Análisis competitivo: funcionalidades que ya son estándar de mercado; funcionalidades diferenciadoras reales; vacíos frecuentes del mercado argentino; oportunidades de innovación para un nuevo sistema de gestión odontológica.
- D. Recomendación final: cinco competidores prioritarios para analizar mediante demo; tres productos de referencia para experiencia de usuario; un MVP sugerido con funcionalidades imprescindibles, diferenciadores y funcionalidades a dejar para etapas posteriores.

Redactá en español formal, con criterio crítico. Diferenciá siempre entre una funcionalidad comprobada y una afirmación comercial del proveedor.

No se contactan proveedores ni se crean cuentas con datos personales reales para evaluar productos.

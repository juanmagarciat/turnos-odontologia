---
name: tp-metodologia-i
description: >-
  Conduce el trabajo integrador de Metodología I (Tecnicatura Universitaria
  en Programación) de un sistema de turnos y agenda odontológica para
  Argentina, con Active Stack en modo Full, Discovery con fuentes verificables
  y un único ciclo OPSX. Usar en este repositorio y cuando se mencione
  Metodología I, Active Stack, OpenSpec, OPSX, discovery odontológico,
  knowledge-base, CHANGES.md, Engram o el change de turnos sin solapamientos.
---

# Trabajo integrador Metodología I

El contexto durable está en [docs/contexto/contexto-tp.md](../../../docs/contexto/contexto-tp.md). Leer ese archivo antes de fundar, investigar, especificar o implementar. El detalle operativo está en los tres archivos de esta carpeta.

## Orden de lectura

1. [consigna.md](consigna.md) — etapas, rúbrica y consigna de investigación textual.
2. [metodo-active-stack.md](metodo-active-stack.md) — harnesses, fundación, OPSX y Engram.
3. [entregables.md](entregables.md) — estructura del repo, autores de commit y límites.

## Reglas duras

- El producto es gestión de turnos y agenda de pacientes para consultorios odontológicos en Argentina. Food Store es la demo de los videos, no este trabajo.
- Una funcionalidad sin respaldo público se escribe "No evidenciado". No se deduce ni se deja la celda vacía.
- Se distingue funcionalidad comprobada de afirmación comercial.
- El MVP y el change salen del Discovery. El ejemplo de la cátedra (crear un turno sin solapamientos por profesional y por sillón o box) se implementa solo si la sección D lo incluye en el MVP.
- Ninguna etapa de la fundación empieza sin inspección de la anterior: Continuar, Ajustar o Parar acá. En Propose se revisa el spec antes de Apply. Lo que no está en el spec no se inventa en Apply: se vuelve a Propose.
- Los nombres de archivos que dependan de la versión de una skill son los que genere el instalador.
- Datos de pacientes, ejemplos y tests son ficticios. No hay claves, credenciales ni datos reales de personas en el repositorio.
- El texto del informe, del código, de los specs y del README habla del producto y del trabajo entregado. No incluye notas al equipo ni instrucciones de chat.
- La reflexión de 1 a 2 páginas la redactan los integrantes. No se genera como si fuera de su autoría.
- El video de defensa lo graban los integrantes. No se fabrica un video.

## Decisiones del equipo

- Agente: Claude Code. Active Stack en modo Full. El clon del instalador queda fuera de este repositorio.
- Stack del change: TypeScript sobre Node, módulo de dominio sin interfaz gráfica, tests con `node:test`.
- García Juan Martín conduce Discovery, verificación de fuentes y knowledge-base.
- Tiziano Valentini conduce roadmap, reglas del agente y el ciclo OPSX.
- Autores de commit en [entregables.md](entregables.md). No se modifica `git config`.

## Secuencia

Etapa 0 entorno Full, etapa 1 `/active-orchestrator` con Discovery en Sí, etapa 2 informe de mercado, etapa 3 knowledge-base, etapa 4 `CHANGES.md`, etapa 5 skills y reglas, etapa 6 un solo OPSX, etapa 7 consulta real a Engram.

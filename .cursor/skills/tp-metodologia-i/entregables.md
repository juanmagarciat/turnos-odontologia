# Entregables y metadatos de trabajo

## Estructura mínima

Los nombres que dependan de la skill instalada se respetan tal como los genere. El conjunto esperado es:

```text
AGENTS.md
CLAUDE.md
CHANGES.md
.active-orchestrator-state.json
.atl/skill-registry.md
docs/discovery/informe-discovery.md
docs/discovery/informe-discovery.pdf
docs/contexto/contexto-tp.md
knowledge-base/
openspec/specs/
openspec/changes/archive/AAAA-MM-DD-<change>/
  proposal.md
  design.md
  tasks.md
  specs/
src/
tests/
README.md
```

`README.md` alcanza para clonar el repositorio y ejecutar los tests, sin pasos que vivan solo en el chat.

El historial de commits muestra el proceso: fundación, discovery y change. No un único commit final.

## Integrantes y commits

Portada y reflexión: García Juan Martín y Tiziano Valentini.

No se modifica `git config`. Cada commit lleva el autor de la etapa que conduce:

- García Juan Martín conduce Discovery, verificación de fuentes y knowledge-base. Autor Git: `García Juan Martín <garciajuanmartin258@gmail.com>`. Usuario de GitHub: `juanmagarciat`.
- Tiziano Valentini conduce roadmap, reglas del agente y el ciclo OPSX. Autor Git: `Tiziano Valentini <valentini.tizianoignacio2@gmail.com>`. Usuario de GitHub: `TiziIV`.

Esos emails son metadatos de commit. No aparecen en el informe, en el README, en los ejemplos ni en los tests.

La repartición no está en la consigna. Es la decisión del equipo para que cada integrante conduzca al menos una etapa.

## Stack

TypeScript y Node. Módulo de dominio del change, sin interfaz gráfica. Tests con `node:test`, uno por escenario del spec. La consigna no impone lenguaje; esta es la decisión del equipo.

## Change

Intención, sujeta a la sección D: crear un turno evitando solapamientos por profesional y por sillón o box. Alternativas válidas de la cátedra, si el MVP pide otra: reprogramar un turno, o cancelar un turno y liberar el horario.

Tres escenarios mínimos: feliz, error de negocio, borde de un turno que empieza justo cuando termina otro.

## Lo que no se escribe sin evidencia

- Sistemas, precios, funcionalidades y cantidad de clientes del Discovery.
- Fecha de entrega de la tarea de aula.
- Flag de permisos del instalador que `active-stack install --help` no liste.
- Contenido de Engram antes de una consulta real.
- Nombres de archivo distintos de los que produzca la skill instalada.

## Lo que queda fuera del repositorio generado

- Video de 8 a 12 minutos.
- Reflexión de 1 a 2 páginas redactada por los integrantes.

## Tono

Informes, specs, código y README describen el producto y el trabajo entregado. No contienen apartes al equipo ni restos de la conversación con el agente.

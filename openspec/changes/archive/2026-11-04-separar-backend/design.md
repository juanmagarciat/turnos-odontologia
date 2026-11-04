# Design

## Context

`src/agenda/turno.ts` concentra el dominio. `package.json` y `tests/` están en la raíz, junto a `docs/`, `knowledge-base/` y `openspec/`. Ver `proposal.md`.

## Goals / Non-Goals

**Goals:**

- Dejar el programa ejecutable bajo `backend/`.
- Separar el dominio por las operaciones que ya existen.

**Non-Goals:**

- Cambiar firmas, motivos de rechazo o escenarios.
- Crear la capa HTTP.

## Decisions

- `backend/package.json` es el único lugar de `npm test`.
- `backend/src/dominio/turno.ts` guarda el turno, el solapamiento y `crearTurno`.
- `reserva.ts`, `estado.ts` y `espera.ts` importan esa regla. No la copian.
- `backend/src/dominio/index.ts` reexporta el dominio para los tests.
- `scripts/` queda en la raíz porque genera documentos, no el sistema.

## Risks / Trade-offs

- [Un import viejo apunta a `src/agenda`] → Se borran esas rutas y los tests importan `backend/src/dominio`.
- [La suite deja de correr desde la raíz] → El README indica `cd backend` y después `npm test`.

## Migration Plan

Mover, partir y ejecutar la suite. Si un escenario falla, no se archiva.

## Open Questions

Ninguna.

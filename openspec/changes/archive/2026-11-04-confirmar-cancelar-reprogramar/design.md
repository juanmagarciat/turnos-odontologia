# Design

## Context

`crearTurno` y `reservarPorEnlace` no distinguen un turno confirmado de uno reservado. Ver `proposal.md`.

## Goals / Non-Goals

**Goals:**

- Guardar `estado` en el turno.
- Confirmar, cancelar y reprogramar sin duplicar la comparación de solapamiento.

**Non-Goals:**

- Lista de espera y seña.
- Avisos.

## Decisions

- `estado` es `reservado` o `confirmado`. `crearTurno` no lo inventa: lo trae el pedido. `reservarPorEnlace` escribe `reservado`.
- Confirmar reemplaza el estado del turno encontrado. Cancelar lo quita de la lista. Reprogramar lo saca de la lista con la que se llama a `crearTurno` y, si esa llamada entra, el resultado es la agenda nueva.
- El turno se busca por profesional, sillón, ficha, inicio y fin. No hay otro identificador.
- Si no está, el motivo es `ausente`.

## Risks / Trade-offs

- [Reprogramar sin revalidar] → El destino entra solo por `crearTurno`, sin el turno de origen en la lista.
- [Cancelar deja el hueco ocupado] → El turno sale de la lista antes de cualquier alta nueva.
- [El campo nuevo rompe los ejemplos] → Los tests existentes pasan `estado: reservado`.

## Migration Plan

No hay persistencia. Los objetos de prueba ganan `estado`.

## Open Questions

Ninguna.

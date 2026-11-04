# Design

## Context

`crearTurno` ya valida duración, ficha y solapamiento. La agenda es una lista en memoria. Ver `proposal.md`.

## Goals / Non-Goals

**Goals:**

- Representar el enlace como identificadores y un intervalo, sin URL.
- Llamar a `crearTurno` para la reserva y marcar el enlace usado solo si esa llamada entra.

**Non-Goals:**

- Estado confirmado, cancelación, reprogramación y lista de espera.
- Servidor HTTP.

## Decisions

- `Enlace` guarda `enlaceId`, `profesionalId`, `sillonId`, `inicio` y `fin`. Los usados son una lista de `enlaceId`. Alternativa descartada: guardar el turno dentro del enlace y saltarse `crearTurno`.
- `reservarPorEnlace` arma el pedido con la ficha recibida y el hueco del enlace. Si `crearTurno` lanza, no se agrega el id a los usados.
- Un id vacío o ausente de la lista de enlaces es enlace inexistente. Un id presente en usados es enlace usado. Esos motivos son `enlace` y `usado`.
- La reserva no recorta textos. La ficha vacía sigue en `crearTurno`.

## Risks / Trade-offs

- [El enlace escribe datos de persona] → Solo entran identificadores `E1` y `F1`.
- [Un segundo uso del enlace duplica el turno] → El id usado se rechaza antes de llamar al alta.
- [La reserva saltea el solapamiento] → El alta es `crearTurno`.

## Migration Plan

No hay datos guardados. Las funciones nuevas no cambian la firma de `crearTurno`.

## Open Questions

Ninguna.

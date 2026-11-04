# Design

## Context

`cancelarTurno` deja el intervalo libre. `crearTurno` sigue siendo la única puerta del solapamiento. Ver `proposal.md`.

## Goals / Non-Goals

**Goals:**

- Guardar la espera aparte de la agenda.
- Asignar solo llamando a `crearTurno`.

**Non-Goals:**

- Seña, avisos y reordenar la lista.

## Decisions

- `Espera` guarda `esperaId`, `fichaId`, `profesionalId`, `sillonId`, `inicio` y `fin`. No tiene estado de turno.
- `anotarEspera` agrega la espera y no toca los turnos. El id y la ficha vacíos se rechazan con motivo `espera` y `ficha`.
- `asignarDesdeEspera` recorre la lista. La primera llamada a `crearTurno` que entra, con `estado: reservado`, reemplaza los turnos y saca esa espera. Si lanza `TurnoRechazado`, sigue con la próxima. Si ninguna entra, devuelve las mismas listas.

## Risks / Trade-offs

- [Asignar sin comprobar solapamiento] → No hay otra forma de crear el turno que `crearTurno`.
- [Dos esperas ocupan el mismo hueco] → Se corta en la primera que entra. La siguiente sigue en la lista.

## Migration Plan

No hay persistencia. La lista de espera empieza vacía.

## Open Questions

Ninguna.

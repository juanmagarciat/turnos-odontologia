# Design

## Context

`Turno` guarda `profesionalId`, `sillonId`, `inicio` y `fin`. `crearTurno` rechaza duración no positiva y solapamiento, en ese orden. La agenda es una lista en memoria. Ver `proposal.md` para el motivo del change.

## Goals / Non-Goals

**Goals:**

- Agregar `fichaId` al turno y conservarlo en el alta aceptada.
- Rechazar identificador vacío o solo espacios con motivo `ficha`, antes de mirar solapamientos.
- Dejar que la misma ficha tenga varios turnos si profesional y sillón están libres.

**Non-Goals:**

- Entidad ficha, nombre de paciente o historia clínica.
- Cambiar la regla de solapamiento o el intervalo semiabierto.
- Corregir el propósito «TBD» ni agregar escenarios de duración o de doble choque.

## Decisions

- `fichaId` es un `string` obligatorio en el turno. No hay otro tipo. Alternativa descartada: una entidad ficha con campos clínicos. El roadmap pide un identificador y marca como riesgo convertirla en historia clínica.
- Se rechaza cuando `fichaId.trim()` queda vacío. Si tiene algún carácter que no sea espacio, se guarda el texto recibido, sin recortarlo. Alternativa descartada: normalizar siempre con `trim`, porque la spec pide conservar el identificador aceptado.
- El motivo nuevo es `ficha`, del mismo conjunto que `duracion`, `profesional` y `sillon`. La ficha se controla después de la duración y antes del solapamiento. Un pedido con duración inválida y ficha vacía sigue informando `duracion`: ese control ya existe y no se mueve.
- Los tests ya escritos reciben `fichaId` ficticio `F1`. Siguen probando solapamiento. Cada escenario nuevo de este change tiene su propio test.

## Risks / Trade-offs

- [La ficha se vuelve historia clínica] → El tipo solo tiene un texto opaco. No se agregan nombre ni prestaciones.
- [Un `fichaId` distinto se usa para saltar el solapamiento] → El control de profesional y sillón queda después y no mira la ficha. Hay un escenario que lo fija.
- [El campo nuevo rompe los ejemplos actuales] → El mismo change actualiza los tests existentes. No hay datos guardados fuera del proceso.

## Migration Plan

No hay persistencia. El cambio vive en el tipo y en los tests. Si el alta con ficha no cierra, se vuelve al turno de cuatro campos del change archivado.

## Open Questions

Ninguna. El orden de los motivos y el tratamiento de los espacios quedan decididos arriba.

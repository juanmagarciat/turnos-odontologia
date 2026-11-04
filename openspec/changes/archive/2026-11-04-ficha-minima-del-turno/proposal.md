# Proposal

## Why

El change archivado registra el turno sin ficha. La sección D del informe deja la ficha mínima dentro del MVP imprescindible, y el roadmap la pone inmediatamente después del alta sin solapamientos. Sin ese dato, el turno no se puede asociar a una ficha ficticia.

## What Changes

- Cada turno lleva un identificador de ficha, texto opaco, del mismo tipo que `P1` o `S1`.
- El alta sin identificador, o con uno vacío, se rechaza y la agenda no cambia.
- La misma ficha puede tener varios turnos si no se solapan. La ficha no es un recurso de agenda.
- Un identificador de ficha distinto no saltea la regla de profesional ni la de sillón.
- **BREAKING**: el turno en memoria pasa a exigir el identificador de ficha. Los ejemplos existentes deben incluirlo.

## Capabilities

### New Capabilities

- Ninguna.

### Modified Capabilities

- `agenda-turnos`: el alta guarda la ficha y rechaza el identificador ausente. El solapamiento no cambia de regla.

## Impact

`src/agenda/turno.ts` y `tests/agenda.test.ts`. No hay interfaz, base de datos, historia clínica ni dependencia nueva.

## Elección

Se elige este change porque `CHANGES.md` lo deja como paso 2, depende solo del change ya archivado y la sección D lo marca imprescindible. El alcance es el identificador de ficha, no la historia clínica ni la reserva por enlace.

## Fuera de alcance

Nombre de paciente, odontograma, reserva por enlace, confirmación, cancelación, reprogramación, seña y lista de espera. El propósito «TBD» de la spec vigente y los escenarios que faltan de duración y doble choque no se corrigen en este change.

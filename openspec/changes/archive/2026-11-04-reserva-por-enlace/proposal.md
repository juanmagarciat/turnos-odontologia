# Proposal

## Why

La ficha ya viaja con el turno, y la sección D pide que el paciente reserve un hueco por enlace. Sin eso el alta solo existe para quien arma el turno a mano. El enlace tiene que pasar por la misma regla de solapamiento y de ficha.

## What Changes

- Un enlace opaco, como `E1`, nombra un hueco: profesional, sillón, inicio y fin.
- Reservar con ese enlace y una ficha crea el turno si el alta lo acepta, y el enlace queda usado.
- Si el alta rechaza, el enlace sigue disponible y la agenda no cambia.
- Un enlace ya usado no crea otro turno.
- Sin pantalla, sin URL pública y sin datos de persona.

## Capabilities

### New Capabilities

- Ninguna.

### Modified Capabilities

- `agenda-turnos`: reservar por enlace crea un turno con las reglas ya vigentes y consume el enlace solo si el alta entra.

## Impact

`src/agenda/turno.ts` y tests nuevos. No hay dependencia ni persistencia.

## Elección

Es el paso 3 de `CHANGES.md`. Depende de la ficha archivada y es imprescindible en la sección D. El alcance es el enlace y el alta, no la confirmación ni la lista de espera.

## Fuera de alcance

Confirmación, cancelación, reprogramación, lista de espera, seña y cualquier dato que no sea un identificador.

# Proposal

## Why

La reserva ya crea el turno, y la sección D pide confirmarlo, cancelarlo y reprogramarlo. Cancelar tiene que liberar el intervalo. Reprogramar tiene que volver a pasar por profesional y sillón. Si no, el hueco queda ocupado o se pisa otro turno.

## What Changes

- Cada turno tiene estado `reservado` o `confirmado`. La reserva y el alta nueva nacen `reservado`.
- Confirmar pasa el turno a `confirmado` y el intervalo sigue ocupado.
- Cancelar saca el turno. Ese intervalo vuelve a aceptar un alta.
- Reprogramar cambia profesional, sillón o intervalo, con la misma ficha, y usa la regla de solapamiento sin contar el turno que se mueve.
- Si la reprogramación se rechaza, el turno original queda igual.
- **BREAKING**: el turno en memoria exige `estado`.

## Capabilities

### New Capabilities

- Ninguna.

### Modified Capabilities

- `agenda-turnos`: el turno se confirma, se cancela o se reprograma. El solapamiento sigue vigente.

## Impact

`src/agenda/turno.ts`, los tests y la knowledge-base de flujos. Sin pantalla ni base de datos.

## Elección

Es el paso 4 de `CHANGES.md`. Depende de la reserva archivada. El alcance es el estado del turno y el movimiento del intervalo, no la lista de espera ni la seña.

## Fuera de alcance

Lista de espera, seña, aviso al paciente y datos que no sean identificadores.

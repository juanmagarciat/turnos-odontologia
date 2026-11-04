# Proposal

## Why

Cancelar ya libera el horario. La sección D deja la lista de espera como diferenciador: al liberarse un hueco, alguien que esperaba puede tomarlo. Si esa asignación no vuelve a pasar por el solapamiento, el hueco se pisa.

## What Changes

- Una espera opaca, como `W1`, guarda ficha, profesional, sillón e intervalo. Anotarla no crea un turno.
- Asignar recorre las esperas en orden y usa el alta. La primera que entra se convierte en turno reservado y sale de la lista.
- Si ninguna entra, la agenda y la lista quedan igual.
- Si la primera entra, las siguientes quedan esperando.

## Capabilities

### New Capabilities

- Ninguna.

### Modified Capabilities

- `agenda-turnos`: la espera se anota y, al asignar, solo ocupa un hueco que el alta acepta.

## Impact

`src/agenda/turno.ts` y tests. Sin pantalla ni datos de persona.

## Elección

Es el paso 5 de `CHANGES.md` y depende de la cancelación archivada. El alcance es la espera y la asignación con la regla ya vigente. La seña queda afuera.

## Fuera de alcance

Seña, avisos, orden distinto del de la lista y cualquier dato que no sea un identificador.

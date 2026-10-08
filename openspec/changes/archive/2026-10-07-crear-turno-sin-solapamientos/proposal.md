# Proposal

## Why

El relevamiento del 2026-10-07 muestra agenda y reserva en los productos odontológicos, y casi ninguno publica qué pasa cuando dos turnos se tocan en el mismo profesional o en el mismo sillón. Esta funcionalidad está en el MVP imprescindible: sin esa regla, la agenda no se puede verificar.

## What Changes

- Alta de un turno con profesional, sillón e intervalo.
- Rechazo si el intervalo pisa a otro turno del mismo profesional o del mismo sillón.
- Aceptación del turno que empieza en el instante en que otro termina.
- Sin interfaz gráfica, sin persistencia externa y sin datos reales de pacientes.

## Capabilities

### New Capabilities

- `agenda-turnos`: alta de un turno y regla de no solapamiento por profesional y por sillón.

### Modified Capabilities

- Ninguna. No hay specs previas.

## Impact

Módulo de dominio en TypeScript, ejecutado con Node, y tests con `node:test`. No agrega dependencias ni integraciones.

## Elección

Se elige este change porque la sección D del informe lo deja entre lo imprescindible y porque la regla se puede probar con un caso feliz, un rechazo de negocio y un borde de turnos contiguos. No es un módulo clínico.

## Ajuste de la especificación

La primera redacción trataba el intervalo como cerrado: el fin de un turno y el inicio del siguiente se pisaban. Eso rechazaba el borde que el MVP pide aceptar. La spec queda con un intervalo semiabierto `[inicio, fin)`. Apply implementa esa redacción y no la anterior.

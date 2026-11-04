# Proposal

## Why

En el parcial el código quedó mezclado con la fundación y todas las reglas viven en un solo archivo. El backend tiene que poder arrancar aparte, sin mover el Discovery ni las specs.

## What Changes

- El dominio y los tests pasan a `backend/`.
- Las reglas se separan en turnos, reserva, estado y espera.
- `npm test` se corre desde `backend/` y cubre los mismos escenarios.
- La fundación permanece en la raíz.

## Capabilities

### New Capabilities

- Ninguna. El comportamiento no cambia.

### Modified Capabilities

- Ninguna.

## Impact

Rutas de `src/` y `tests/`, `package.json`, README y la arquitectura de la knowledge-base. No hay API ni pantalla en este change.

## Elección

Corrige el orden pedido en el parcial sin adelantar Swagger ni la seña. Las dependencias de negocio siguen siendo los cinco changes ya archivados.

## Fuera de alcance

Endpoints, Swagger, frontend, seña y cualquier regla nueva.

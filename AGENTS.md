# Instrucciones del proyecto

Sistema de turnos para consultorios odontológicos en Argentina. El comportamiento vigente de la agenda está en `openspec/specs/agenda-turnos/spec.md`. El contexto de producto está en `knowledge-base/` y el plan en `CHANGES.md`.

## Stack

TypeScript y Node.js 24. Tests con `node:test` mediante `npm test`. Sin dependencias de producción y sin interfaz gráfica en el change archivado.

## Reglas

- No almacenar datos reales de pacientes en el repositorio, en los ejemplos ni en los tests.
- No agregar claves, tokens ni credenciales.
- No implementar en Apply un comportamiento que la spec no tenga. Si falta, se vuelve a Propose.
- No dar por existente una funcionalidad de mercado marcada como No evidenciado en `docs/discovery/informe-discovery.md`.
- El intervalo de un turno es semiabierto: el fin no se solapa con el inicio siguiente.

## Skills disponibles

Registro en `.atl/skill-registry.md`. No se instalaron skills de terceros para este change: no hay interfaz, cobro ni base de datos.

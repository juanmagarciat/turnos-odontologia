# Turnos de consultorio odontológico

Gestión de turnos para un consultorio odontológico en Argentina. Esta entrega implementa una sola regla: crear un turno sin que se superponga con otro del mismo profesional ni del mismo sillón.

El horario incluye el minuto de inicio y no incluye el de fin. Un turno que empieza a las 09:40, cuando otro termina a las 09:40, entra en la agenda. Si el profesional o el sillón ya están ocupados en ese rato, el alta se rechaza.

No hay pantalla ni base de datos. Los ejemplos usan identificadores `P1` y `S1`.

## Cómo correr los tests

Hace falta Node.js 24.

```bash
npm test
```

Son cuatro pruebas, una por escenario de `openspec/specs/agenda-turnos/spec.md`: turno libre, solapamiento de profesional, solapamiento de sillón y turnos contiguos.

## Documentos

| Documento | Markdown | PDF |
| --- | --- | --- |
| Informe de Discovery | `docs/discovery/informe-discovery.md` | `docs/discovery/informe-discovery.pdf` |
| Reflexión | `docs/reflexion/reflexion.md` | `docs/reflexion/reflexion.pdf` |

La knowledge-base está en `knowledge-base/`. El plan de lo que sigue está en `CHANGES.md`. Las reglas del proyecto están en `AGENTS.md` y `CLAUDE.md`.

## Código

| Ruta | Contenido |
| --- | --- |
| `src/agenda/turno.ts` | Alta del turno y regla de solapamiento |
| `tests/agenda.test.ts` | Escenarios de la spec |
| `openspec/specs/agenda-turnos/spec.md` | Comportamiento vigente |
| `openspec/changes/archive/2026-10-07-crear-turno-sin-solapamientos/` | Change cerrado: propuesta, diseño, tareas y verificación |

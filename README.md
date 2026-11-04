# Turnos de consultorio odontológico

Gestión de turnos para un consultorio odontológico en Argentina. El módulo de dominio crea un turno sin solapamiento, le asocia una ficha, lo reserva por enlace, lo confirma, lo cancela, lo reprograma y asigna una espera cuando el hueco está libre.

El horario incluye el minuto de inicio y no incluye el de fin. Un turno que empieza a las 09:40, cuando otro termina a las 09:40, entra en la agenda. Si el profesional o el sillón ya están ocupados en ese rato, el alta se rechaza.

No hay pantalla ni base de datos. Los ejemplos usan identificadores `P1`, `S1`, `F1`, `E1` y `W1`.

## Cómo correr los tests

Hace falta Node.js 24.

```bash
npm test
```

Las pruebas cubren los escenarios de `openspec/specs/agenda-turnos/spec.md`.

## Documentos

| Documento | Markdown | PDF |
| --- | --- | --- |
| Informe de Discovery | `docs/discovery/informe-discovery.md` | `docs/discovery/informe-discovery.pdf` |
| Reflexión | `docs/reflexion/reflexion.md` | `docs/reflexion/reflexion.pdf` |

La knowledge-base está en `knowledge-base/`. El plan de lo que sigue está en `CHANGES.md`. Las reglas del proyecto están en `AGENTS.md` y `CLAUDE.md`.

## Código

| Ruta | Contenido |
| --- | --- |
| `src/agenda/turno.ts` | Alta, ficha, enlace, confirmación, cancelación, reprogramación y espera |
| `tests/` | Escenarios de la spec |
| `openspec/specs/agenda-turnos/spec.md` | Comportamiento vigente |
| `openspec/changes/archive/` | Changes cerrados |

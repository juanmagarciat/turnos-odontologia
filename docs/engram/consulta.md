# Consulta a Engram

Proyecto `turnos-odontologia`. Fecha: 2026-10-07.

## Lo guardado

- Decisión #1, "Intervalo semiabierto": el turno ocupa `[inicio, fin)`. El fin no se solapa con el inicio siguiente. El ajuste quedó antes de Apply.
- Convención #2, "Sin datos reales de pacientes": los ejemplos usan `P1` y `S1`.

## Consulta

`engram search "solapamiento" --project turnos-odontologia` no devolvió memorias: el texto guardado usa "solapa", no "solapamiento".

`engram search "semiabierto" --project turnos-odontologia` devolvió la decisión #1.

`engram context turnos-odontologia` recuperó las dos observaciones de la sesión del 2026-10-07 sin volver a leer el informe ni la spec.

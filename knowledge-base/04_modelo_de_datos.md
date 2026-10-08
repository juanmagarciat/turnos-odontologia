# Modelo de datos

## Turno

| Campo | Significado |
| --- | --- |
| profesionalId | Texto del profesional. No es un nombre de persona. |
| sillonId | Texto del sillón o box. |
| inicio | Minuto de inicio, incluido. |
| fin | Minuto de fin, excluido. |

No hay entidad paciente. No hay historia clínica.

## Relación

Un profesional puede tener varios turnos si no comparten instante. Un sillón igual. El mismo par profesional-sillón sigue la misma regla de intervalo.

## Datos de prueba

Identificadores `P1`, `S1` y horarios de ejemplo. Ningún dato corresponde a una persona real.

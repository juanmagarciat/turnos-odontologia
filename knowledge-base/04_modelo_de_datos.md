# Modelo de datos

## Turno

| Campo | Significado |
| --- | --- |
| profesionalId | Texto del profesional. No es un nombre de persona. |
| sillonId | Texto del sillón o box. |
| fichaId | Texto de la ficha. No es un nombre de persona. |
| inicio | Minuto de inicio, incluido. |
| fin | Minuto de fin, excluido. |

No hay otra entidad. El identificador de ficha no guarda más datos.

## Relación

Un profesional puede tener varios turnos si no comparten instante. Un sillón igual. La misma ficha también, porque no es un recurso de agenda. El mismo par profesional-sillón sigue la misma regla de intervalo.

## Datos de prueba

Identificadores `P1`, `S1`, `F1` y horarios de ejemplo. Ningún dato corresponde a una persona real.

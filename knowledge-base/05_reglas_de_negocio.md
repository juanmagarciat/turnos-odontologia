# Reglas de negocio

## RN-01 Duración

`fin` es mayor que `inicio`. Si no, el alta se rechaza con motivo `duracion`.

## RN-02 Profesional

Dos turnos del mismo `profesionalId` no pueden cumplir `inicioA < finB` y `inicioB < finA`. Motivo de rechazo: `profesional`.

## RN-03 Sillón

La misma comparación con el mismo `sillonId`. Motivo de rechazo: `sillon`.

## RN-04 Contigüidad

Si un turno termina en el minuto en que otro empieza, no hay solapamiento. El fin no pertenece al intervalo.

## RN-05 Prioridad del motivo

Si chocan profesional y sillón a la vez, el rechazo informa `profesional`.

## RN-06 Datos

El repositorio, los ejemplos y los tests no almacenan datos reales de pacientes.

## Agenda en el mercado

Las páginas relevadas muestran bloqueo de un turno reservado o varios sillones. La regla por profesional y por sillón, con el borde contiguo, no quedó demostrada en esas páginas y por eso se especifica acá.

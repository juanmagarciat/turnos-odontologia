# Flujos

## Alta aceptada

1. La agenda no tiene un turno que comparta instante con el pedido, ni en el profesional ni en el sillón.
2. `crearTurno` devuelve la agenda más el turno nuevo.

## Alta rechazada

1. El pedido dura cero o menos, o pisa a un turno existente.
2. `crearTurno` lanza `TurnoRechazado` y la agenda recibida no se modifica.

## Contigüidad

1. Existe un turno que termina a las 09:40.
2. El pedido del mismo profesional empieza a las 09:40 en otro sillón.
3. El alta se acepta.

## Reserva por enlace

1. El enlace nombra profesional, sillón e intervalo.
2. `reservarPorEnlace` pide el alta con la ficha recibida.
3. Si el alta entra, el turno queda y el enlace pasa a usado.
4. Si el alta rechaza, o el enlace no existe, o ya estaba usado, la agenda no cambia.

Cancelación y reprogramación no tienen flujo implementado.

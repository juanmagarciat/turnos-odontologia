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

## Confirmación

1. El turno está en la agenda.
2. `confirmarTurno` lo deja en `confirmado`.
3. El intervalo sigue ocupado.

## Cancelación

1. `cancelarTurno` saca el turno.
2. Ese intervalo vuelve a poder registrarse.
3. Si el turno no está, el motivo es `ausente` y la agenda no cambia.

## Reprogramación

1. El destino se valida con `crearTurno` sin contar el turno que se mueve.
2. Si el destino entra, la ficha se conserva y el turno queda en el horario nuevo.
3. Si el destino se rechaza, el turno original sigue igual.

## Lista de espera

1. `anotarEspera` guarda identificador, ficha, profesional, sillón e intervalo. No crea un turno.
2. `asignarDesdeEspera` recorre la lista y llama a `crearTurno`.
3. La primera que entra queda como turno reservado y sale de la lista.
4. Si ninguna entra, las dos listas quedan igual.

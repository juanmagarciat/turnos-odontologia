# agenda-turnos Specification

## Purpose
TBD - created by archiving change crear-turno-sin-solapamientos. Update Purpose after archive.

## Requirements

### Requirement: Alta de un turno libre

El sistema MUST registrar un turno cuando el profesional y el sillón están libres durante todo el intervalo pedido y el identificador de ficha tiene al menos un carácter que no sea espacio. El intervalo es semiabierto: incluye el inicio y excluye el fin. La duración MUST ser mayor que cero. El turno registrado MUST conservar ese identificador de ficha.

#### Scenario: Turno en agenda vacía

- **GIVEN** no hay turnos para el profesional P1 ni para el sillón S1
- **WHEN** se pide un turno de P1 en S1, ficha F1, desde las 09:00 hasta las 09:40
- **THEN** el turno queda registrado con ese profesional, ese sillón, esa ficha y ese intervalo

### Requirement: Rechazo por solapamiento

El sistema MUST rechazar el alta si el intervalo comparte algún instante con otro turno del mismo profesional o del mismo sillón. MUST distinguir el motivo: profesional o sillón.

#### Scenario: Mismo profesional con horarios superpuestos

- **GIVEN** P1 ya tiene un turno en S1 desde las 09:00 hasta las 09:40
- **WHEN** se pide otro turno de P1 en S2 desde las 09:20 hasta las 10:00
- **THEN** el alta se rechaza por solapamiento de profesional y la agenda no cambia

#### Scenario: Mismo sillón con otro profesional

- **GIVEN** P1 ya tiene un turno en S1 desde las 09:00 hasta las 09:40
- **WHEN** se pide un turno de P2 en S1 desde las 09:10 hasta las 09:30
- **THEN** el alta se rechaza por solapamiento de sillón y la agenda no cambia

### Requirement: Turnos contiguos

El sistema MUST aceptar un turno que empieza en el instante en que otro termina, para el mismo profesional o el mismo sillón.

#### Scenario: Empieza cuando el anterior termina

- **GIVEN** P1 tiene un turno en S1 desde las 09:00 hasta las 09:40
- **WHEN** se pide un turno de P1 en S2 desde las 09:40 hasta las 10:20
- **THEN** el turno queda registrado

### Requirement: Rechazo por ficha ausente

El sistema MUST rechazar el alta cuando el identificador de ficha está ausente, vacío o compuesto solo por espacios. MUST informar el motivo ficha. La agenda MUST quedar igual.

#### Scenario: Identificador vacío

- **GIVEN** la agenda no tiene turnos
- **WHEN** se pide un turno de P1 en S1 desde las 09:00 hasta las 09:40 con identificador de ficha vacío
- **THEN** el alta se rechaza por ficha ausente y la agenda sigue vacía

#### Scenario: Identificador en blanco

- **GIVEN** la agenda no tiene turnos
- **WHEN** se pide un turno de P1 en S1 desde las 09:00 hasta las 09:40 con un identificador de ficha formado solo por espacios
- **THEN** el alta se rechaza por ficha ausente y la agenda sigue vacía

### Requirement: Varios turnos de la misma ficha

El sistema MUST aceptar otro turno de la misma ficha cuando el profesional y el sillón están libres. La ficha MUST NOT actuar como recurso que se solapa.

#### Scenario: La misma ficha en turnos contiguos

- **GIVEN** P1 tiene un turno en S1, ficha F1, desde las 09:00 hasta las 09:40
- **WHEN** se pide un turno de P1 en S2, ficha F1, desde las 09:40 hasta las 10:20
- **THEN** los dos turnos quedan registrados, ambos con la ficha F1

### Requirement: La ficha no anula el solapamiento

El sistema MUST seguir rechazando el solapamiento de profesional o de sillón aunque el identificador de ficha sea otro. El motivo MUST ser el del recurso que choca, no el de la ficha.

#### Scenario: Otra ficha con el mismo profesional ocupado

- **GIVEN** P1 ya tiene un turno en S1, ficha F1, desde las 09:00 hasta las 09:40
- **WHEN** se pide un turno de P1 en S2, ficha F2, desde las 09:20 hasta las 10:00
- **THEN** el alta se rechaza por solapamiento de profesional y la agenda no cambia

### Requirement: Reserva por enlace

El sistema MUST crear un turno cuando un enlace vigente nombra un hueco libre y la ficha es aceptable para el alta. El turno MUST conservar profesional, sillón, ficha e intervalo del pedido. El enlace MUST quedar usado.

#### Scenario: Hueco libre por enlace

- **GIVEN** no hay turnos y el enlace E1 nombra a P1 en S1 desde las 09:00 hasta las 09:40
- **WHEN** se reserva E1 con la ficha F1
- **THEN** queda un turno de P1 en S1, ficha F1, en ese intervalo, y E1 queda usado

#### Scenario: El enlace respeta el borde contiguo

- **GIVEN** P1 tiene un turno en S1 desde las 09:00 hasta las 09:40 y el enlace E1 nombra a P1 en S2 desde las 09:40 hasta las 10:20
- **WHEN** se reserva E1 con la ficha F1
- **THEN** el turno del enlace queda registrado y E1 queda usado

### Requirement: El enlace no se consume si el alta falla

El sistema MUST rechazar la reserva con el mismo motivo que el alta cuando el hueco no se puede registrar. El enlace MUST seguir disponible y la agenda MUST quedar igual.

#### Scenario: El hueco del enlace pisa al profesional

- **GIVEN** P1 ya tiene un turno en S1 desde las 09:00 hasta las 09:40 y el enlace E1 nombra a P1 en S2 desde las 09:20 hasta las 10:00
- **WHEN** se reserva E1 con la ficha F2
- **THEN** la reserva se rechaza por solapamiento de profesional, E1 sigue disponible y la agenda no cambia

#### Scenario: La ficha de la reserva está vacía

- **GIVEN** no hay turnos y el enlace E1 nombra a P1 en S1 desde las 09:00 hasta las 09:40
- **WHEN** se reserva E1 con la ficha vacía
- **THEN** la reserva se rechaza por ficha ausente, E1 sigue disponible y la agenda sigue vacía

### Requirement: Enlace no disponible

El sistema MUST rechazar una reserva cuyo enlace no existe o ya fue usado. MUST NOT crear un turno en ese caso.

#### Scenario: Enlace ya usado

- **GIVEN** E1 ya se usó para registrar un turno
- **WHEN** se reserva otra vez E1 con la ficha F2
- **THEN** la reserva se rechaza porque el enlace está usado y no se agrega otro turno

#### Scenario: Enlace desconocido

- **GIVEN** no existe el enlace E9
- **WHEN** se reserva E9 con la ficha F1
- **THEN** la reserva se rechaza porque el enlace no existe y la agenda no cambia

### Requirement: Confirmación del turno

El sistema MUST pasar un turno reservado a confirmado. El intervalo confirmado MUST seguir ocupado para el profesional y el sillón.

#### Scenario: Confirmar deja el horario ocupado

- **GIVEN** P1 tiene un turno reservado en S1, ficha F1, desde las 09:00 hasta las 09:40
- **WHEN** se confirma ese turno y se pide otro de P1 en S2 desde las 09:20 hasta las 10:00
- **THEN** el turno queda confirmado y el segundo alta se rechaza por solapamiento de profesional

### Requirement: Cancelación del turno

El sistema MUST sacar el turno cancelado de la agenda. El intervalo liberado MUST poder aceptarse de nuevo. Si el turno no está, el sistema MUST rechazar la cancelación y la agenda MUST quedar igual.

#### Scenario: Cancelar libera el horario

- **GIVEN** P1 tiene un turno en S1, ficha F1, desde las 09:00 hasta las 09:40
- **WHEN** se cancela ese turno y se pide otro de P2 en S1, ficha F2, en el mismo intervalo
- **THEN** el primer turno ya no está y el segundo queda registrado

#### Scenario: Cancelar un turno que no está

- **GIVEN** la agenda no tiene turnos
- **WHEN** se cancela un turno de P1 en S1, ficha F1, desde las 09:00 hasta las 09:40
- **THEN** la cancelación se rechaza porque el turno no está y la agenda sigue vacía

### Requirement: Reprogramación del turno

El sistema MUST mover el turno al nuevo profesional, sillón e intervalo, conservando la ficha. MUST volver a aplicar la regla de solapamiento sin contar el turno que se mueve. Si el destino se rechaza, el turno original MUST quedar igual.

#### Scenario: Reprogramar encima de otro profesional

- **GIVEN** P1 tiene un turno en S1, ficha F1, desde las 09:00 hasta las 09:40 y P2 tiene un turno en S2, ficha F2, desde las 10:00 hasta las 10:40
- **WHEN** se reprograma el turno de P1 para P2 en S1 desde las 10:20 hasta las 11:00
- **THEN** la reprogramación se rechaza por solapamiento de profesional y el turno de P1 sigue en su horario original

#### Scenario: Reprogramar al borde contiguo

- **GIVEN** P1 tiene un turno en S1, ficha F1, desde las 09:00 hasta las 09:40 y otro en S2, ficha F1, desde las 10:00 hasta las 10:40
- **WHEN** se reprograma el segundo para que empiece a las 09:40 en S2 y termine a las 10:20
- **THEN** el turno movido queda de 09:40 a 10:20 y el de las 09:00 sigue registrado

### Requirement: Anotar en lista de espera

El sistema MUST guardar una espera con identificador, ficha, profesional, sillón e intervalo. Anotarla MUST NOT crear un turno.

#### Scenario: Anotar no ocupa el horario

- **GIVEN** P1 tiene un turno en S1, ficha F1, desde las 09:00 hasta las 09:40
- **WHEN** se anota la espera W1 de la ficha F2 para P1 en S1 en ese mismo intervalo
- **THEN** la espera queda registrada y el único turno sigue siendo el de F1

### Requirement: Asignar la espera al hueco libre

El sistema MUST intentar el alta de cada espera, en el orden de la lista, con estado reservado. La primera que el alta acepta MUST convertirse en turno y MUST salir de la espera. Las que no entran MUST seguir en la lista.

#### Scenario: Al liberar el horario entra la espera

- **GIVEN** no hay turnos y la espera W1 pide P1 en S1, ficha F2, desde las 09:00 hasta las 09:40
- **WHEN** se asigna desde la espera
- **THEN** queda el turno reservado de F2 en ese intervalo y la lista de espera queda vacía

#### Scenario: Con el horario ocupado la espera sigue

- **GIVEN** P1 tiene un turno en S1, ficha F1, desde las 09:00 hasta las 09:40 y la espera W1 pide ese mismo hueco para la ficha F2
- **WHEN** se asigna desde la espera
- **THEN** no se agrega un turno y W1 sigue en la lista

#### Scenario: De dos esperas entra solo la primera

- **GIVEN** no hay turnos y la espera W1 pide P1 en S1, ficha F2, desde las 09:00 hasta las 09:40, y después W2 pide el mismo hueco para la ficha F3
- **WHEN** se asigna desde la espera
- **THEN** queda el turno de F2, W1 ya no espera y W2 sigue en la lista

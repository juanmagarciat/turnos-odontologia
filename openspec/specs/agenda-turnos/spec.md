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

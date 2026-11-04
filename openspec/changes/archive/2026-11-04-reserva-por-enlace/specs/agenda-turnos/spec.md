# Spec Delta

## ADDED Requirements

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

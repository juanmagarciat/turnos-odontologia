# agenda-turnos Specification

## Purpose
TBD - created by archiving change crear-turno-sin-solapamientos. Update Purpose after archive.

## Requirements

### Requirement: Alta de un turno libre

El sistema MUST registrar un turno cuando el profesional y el sillón están libres durante todo el intervalo pedido. El intervalo es semiabierto: incluye el inicio y excluye el fin. La duración MUST ser mayor que cero.

#### Scenario: Turno en agenda vacía

- **GIVEN** no hay turnos para el profesional P1 ni para el sillón S1
- **WHEN** se pide un turno de P1 en S1 desde las 09:00 hasta las 09:40
- **THEN** el turno queda registrado con ese profesional, ese sillón y ese intervalo

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

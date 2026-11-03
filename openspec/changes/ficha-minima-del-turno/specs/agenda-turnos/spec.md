# Spec Delta

## MODIFIED Requirements

### Requirement: Alta de un turno libre

El sistema MUST registrar un turno cuando el profesional y el sillón están libres durante todo el intervalo pedido y el identificador de ficha tiene al menos un carácter que no sea espacio. El intervalo es semiabierto: incluye el inicio y excluye el fin. La duración MUST ser mayor que cero. El turno registrado MUST conservar ese identificador de ficha.

#### Scenario: Turno en agenda vacía

- **GIVEN** no hay turnos para el profesional P1 ni para el sillón S1
- **WHEN** se pide un turno de P1 en S1, ficha F1, desde las 09:00 hasta las 09:40
- **THEN** el turno queda registrado con ese profesional, ese sillón, esa ficha y ese intervalo

## ADDED Requirements

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

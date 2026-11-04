# Spec Delta

## ADDED Requirements

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

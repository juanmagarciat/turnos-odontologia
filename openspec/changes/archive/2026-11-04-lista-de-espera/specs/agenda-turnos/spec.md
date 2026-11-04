# Spec Delta

## ADDED Requirements

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

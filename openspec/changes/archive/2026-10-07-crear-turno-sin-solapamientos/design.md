# Design

## Decisiones

- El turno guarda identificador de profesional, identificador de sillón, inicio y fin. Los identificadores son textos opacos. No hay ficha clínica en este change.
- El tiempo del escenario se expresa en minutos desde la medianoche del mismo día. Alcanza para los escenarios de la spec y evita zonas horarias.
- El intervalo es `[inicio, fin)`. Dos intervalos se solapan cuando `inicioA < finB` y `inicioB < finA`.
- Si ambos recursos chocan, el rechazo informa primero el profesional.
- La agenda es una lista en memoria. No hay base de datos ni interfaz.
- Los ejemplos de tests usan identificadores `P1`, `S1` y similares. No hay nombres de personas.

## Ajuste incorporado

Un intervalo cerrado habría rechazado el escenario de turnos contiguos. El diseño usa el semiabierto que quedó en la spec después de ese ajuste.

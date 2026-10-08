# Decisiones y supuestos

## Decisiones

- El primer change es el no solapamiento, porque el informe lo incluye en el MVP imprescindible.
- TypeScript y Node, con `node:test`, sin dependencias de producción.
- Intervalo semiabierto. Un intervalo cerrado rechazaba los turnos contiguos; la spec se ajustó antes de implementar.
- Identificadores opacos en lugar de nombres de pacientes.

## Supuestos

- Un día de agenda alcanza para expresar los escenarios. No hay turno que cruce la medianoche.
- Un profesional atiende en un solo sillón a la vez, porque el solapamiento de profesional ya lo impide aunque el sillón sea otro.
- El precio y varias integraciones del mercado siguen sin fuente pública. No se copian al producto como si existieran.

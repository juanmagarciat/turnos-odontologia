# Tasks

## 1. Alta con identificador de ficha

- [ ] 1.1 Agregar `fichaId` a `Turno` y el motivo `ficha` en `crearTurno`, después de la duración y antes del solapamiento. Rechazar identificador vacío o solo espacios. Verificar que un alta con `F1` conserva ese texto y que `""` y `"   "` lanzan motivo `ficha` sin modificar la agenda.
- [ ] 1.2 Pasar `fichaId` ficticio `F1` en los cuatro tests ya existentes y verificar con `npm test` que siguen en verde: turno libre, solapamiento de profesional, solapamiento de sillón y turnos contiguos.
- [ ] 1.3 Agregar un test por escenario nuevo de `specs/agenda-turnos/spec.md`: ficha vacía, ficha en blanco, la misma ficha en turnos contiguos, y otra ficha con el profesional ocupado. Verificar con `npm test` que los ocho quedan en verde.
- [ ] 1.4 Actualizar `knowledge-base/04_modelo_de_datos.md`, `knowledge-base/02_descripcion_general.md` y `knowledge-base/06_funcionalidades.md` para que el turno incluya la ficha y deje de figurar como no implementada. Verificar que esos archivos no nombran pacientes reales ni historia clínica.

## Workflow follow-up

- Revisar la spec antes de aplicar. Lo que no está en el delta no se implementa.
- Archivar el change cuando los tests estén en verde y la spec vigente haya incorporado el delta.

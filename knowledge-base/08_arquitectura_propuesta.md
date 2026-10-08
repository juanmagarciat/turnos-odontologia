# Arquitectura

```text
src/agenda/turno.ts    reglas de intervalo y alta
tests/agenda.test.ts   escenarios de la spec
openspec/specs/        comportamiento vigente
```

No hay capas de HTTP, persistencia ni presentación. El módulo no lee variables de entorno ni archivos de credenciales.

Una entrega posterior puede envolver `crearTurno` en una API. Esa API no forma parte de este change.

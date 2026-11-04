# Arquitectura

```text
backend/src/dominio/turno.ts    alta y solapamiento
backend/src/dominio/reserva.ts  enlace
backend/src/dominio/estado.ts   confirmar, cancelar, reprogramar
backend/src/dominio/espera.ts   lista de espera
backend/tests/                  escenarios de la spec
openspec/specs/                 comportamiento vigente
```

El backend está separado de la fundación. No hay capas de HTTP, persistencia ni presentación. El módulo no lee variables de entorno ni archivos de credenciales.

Una entrega posterior puede envolver el dominio en una API. Esa API no forma parte de los changes archivados.

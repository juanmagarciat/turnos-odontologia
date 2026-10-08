# Roadmap

El orden sale del MVP de la sección D del informe. Lo marcado como etapa posterior no entra en este camino.

## Dependencias

```text
crear-turno-sin-solapamientos
  └─ ficha-minima-del-turno
       └─ reserva-por-enlace
            └─ confirmar-cancelar-reprogramar
                 └─ lista-de-espera
```

La seña queda después de la reserva y no bloquea la lista de espera. No hay paralelismo en este camino: cada paso usa el turno ya creado.

## Camino crítico

1. Crear un turno sin solapamientos. Estado: implementado y archivado el 2026-10-07.
2. Ficha mínima del turno.
3. Reserva por enlace.
4. Confirmar, cancelar y reprogramar.
5. Lista de espera.

## Changes

### 1. crear-turno-sin-solapamientos

Contexto: `knowledge-base/05_reglas_de_negocio.md` y `openspec/specs/agenda-turnos/spec.md`.

Dependencias: ninguna.

Riesgo: tratar el fin del turno como instante ocupado y rechazar turnos contiguos. La spec usa intervalo semiabierto.

Estado: archivado.

### 2. ficha-minima-del-turno

Contexto: `knowledge-base/04_modelo_de_datos.md`. Asociar un identificador de ficha ficticia al turno, sin datos de persona.

Dependencias: change 1.

Riesgo: convertir la ficha en historia clínica.

Estado: pendiente.

### 3. reserva-por-enlace

Contexto: sección D del informe. El paciente elige un hueco que la regla del change 1 acepta.

Dependencias: change 2.

Riesgo: publicar un enlace que escriba datos reales en el repositorio.

Estado: pendiente.

### 4. confirmar-cancelar-reprogramar

Contexto: flujos de `knowledge-base/07_flujos_principales.md`. Cancelar libera el intervalo. Reprogramar vuelve a pasar por la regla de solapamiento.

Dependencias: change 3.

Riesgo: reprogramar sin revalidar profesional y sillón.

Estado: pendiente.

### 5. lista-de-espera

Contexto: diferenciador de la sección D. Al liberar un horario, queda un lugar de espera. No está implementada.

Dependencias: change 4.

Riesgo: asignar el hueco sin volver a comprobar solapamientos.

Estado: pendiente.

## Fuera de este roadmap

Odontograma, imágenes, AFIP/ARCA, obras sociales, WhatsApp Business API, firma digital y multi-sede. El informe los deja en etapas posteriores o sin evidencia uniforme.

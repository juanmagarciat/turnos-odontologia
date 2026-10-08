# Registro de skills

Skills presentes en `.claude/skills` de este repositorio. Cada bloque dice cuándo usarla. No se instalaron skills adicionales.

## openspec-explore

Usar antes de proponer un change, para leer el código y el informe sin escribir la spec.

- No crear artefactos de propuesta en esta fase.
- Guardar el relevamiento junto al change.

## openspec-propose

Usar para crear `proposal.md`, `design.md`, `tasks.md` y `specs/`.

- Los escenarios verificables van en la spec.
- No implementar código en esta fase.

## openspec-apply-change

Usar para ejecutar `tasks.md` contra la spec ya archivada como contrato.

- No agregar comportamiento que la spec no pida.
- Marcar las tareas al completarlas.

## openspec-update-change

Usar si la spec aprobada necesita un ajuste antes de seguir.

- Volver a la spec; no corregir el hueco solo en el código.

## openspec-archive-change

Usar con el change validado y los tests en verde.

- Sincronizar `openspec/specs` y mover el change a `archive`.

## openspec-sync-specs

Usar cuando las specs del change deban quedar como specs vigentes.

- No borrar escenarios que el código todavía debe cumplir.

## Recomendaciones no instaladas

- Skill de interfaz: el change no tiene pantalla.
- Skill de cobro: Mercado Pago no está en este change.
- Skill de base de datos: la agenda de esta entrega vive en memoria.

# Actores y roles

| Actor | Qué hace en el producto | En esta entrega |
| --- | --- | --- |
| Recepción | Crea, cancela y reprograma turnos | Solo la creación está implementada |
| Profesional | Atiende en un sillón durante el intervalo | Es un identificador del turno, no un usuario del sistema |
| Paciente | Reserva por un enlace | No hay cuenta ni datos de persona |

No hay permisos ni inicio de sesión. Cualquier llamada a `crearTurno` aplica las mismas reglas.

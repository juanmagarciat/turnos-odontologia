# Checklist de discovery

Resultado de los once puntos. Las capacidades de terceros salen de las páginas listadas en el informe, consultadas el 2026-10-07. Lo que no está en esas páginas queda como pregunta abierta.

## 1. Problema

El consultorio odontológico argentino coordina profesionales y sillones con duraciones distintas. Si dos turnos se pisan, se pierde el horario o se superpone la atención. Los sistemas relevados muestran agenda y reserva, y casi ninguno publica la regla de solapamiento.

## 2. Usuarios

- Profesional odontológico que atiende en uno o más sillones.
- Recepción, que asigna y mueve turnos.
- Paciente, que reserva por un enlace. En esta entrega el paciente no tiene cuenta ni datos reales.

## 3. Casos de uso

- Crear un turno si el profesional y el sillón están libres durante toda la duración.
- Rechazar un turno que pisa a otro del mismo profesional o del mismo sillón.
- Aceptar un turno que empieza en el minuto en que otro termina.
- Cancelar y reprogramar quedan descriptos en el MVP y fuera de este primer change.

## 4. Competidores

Quince sistemas con página oficial abierta. Prioridad argentina: OCLÜ, ClinIA, Bilog, Dentatools, Dentario, Booksolut, AgendaPro y Doctoralia PRO. Referencia internacional: Dentalink, XDentalCloud, Clinic Cloud, Open Dental, Curve Dental, CareStack y Dentrix Ascend.

## 5. Funcionalidades necesarias

Agenda por profesional y por sillón, duración variable, prohibición de solapamientos, reserva por enlace, confirmación, cancelación, reprogramación y ficha mínima del paciente.

## 6. Funcionalidades opcionales

Seña, lista de espera, recordatorio. El canal de recordatorio no se fija: WhatsApp es frecuente en las páginas argentinas y a la vez es add-on o No evidenciado según el producto.

## 7. Reglas de negocio

- Un turno ocupa un profesional, un sillón y un intervalo semiabierto [inicio, fin).
- Dos turnos del mismo profesional no pueden compartir un instante de ese intervalo.
- Dos turnos del mismo sillón no pueden compartir un instante.
- El fin de uno y el inicio del siguiente no se consideran solapados.
- La duración es la de la prestación y es mayor que cero.
- No se guardan datos reales de pacientes.

## 8. Integraciones

Mercado Pago, WhatsApp Business API, AFIP/ARCA, obras sociales y calendario externo quedan fuera del primer change. En el relevamiento aparecen como add-on, como afirmación o como No evidenciado.

## 9. Restricciones

- Mercado argentino.
- Sin datos reales de personas en el repositorio, en ejemplos ni en pruebas.
- Sin cuentas reales en productos de terceros.
- Stack del módulo: TypeScript y Node, tests con node:test, sin interfaz gráfica.

## 10. Riesgos

- Tratar una frase comercial como funcionalidad comprobada.
- Copiar un odontograma o una facturación fiscal antes de tener la agenda correcta.
- Suponer WhatsApp o AFIP porque varios sitios los nombran.
- El identificador ReNaPDiS 248 de ClinIA no se contrastó con el listado del Ministerio.

## 11. Preguntas abiertas

- Precio público de Bilog, ClinIA, Dentalink, Booksolut, AgendaPro, Curve Dental, CareStack y Dentrix Ascend.
- Si Bilog, Dentatools y AgendaPro impiden solapamientos por sillón.
- Exportación de datos y normativa argentina de salud en la mayoría de los sitios.
- País de constitución de OCLÜ y de Dentatools.
- Canal real del recordatorio de Dentatools: mensaje armado no equivale a API.

# Gestión de turnos odontológicos en Argentina

## Portada

Título: Investigación de mercado de sistemas de turnos y agenda para consultorios odontológicos.

Materia: Metodología I. Tecnicatura Universitaria en Programación.

Integrantes: García Juan Martín y Tiziano Valentini.

Fecha de consulta de las fuentes: 2026-10-07.

## Resumen ejecutivo

Se relevaron 15 sistemas con página oficial abierta el 2026-10-07. El orden de la tabla sigue la relevancia para un consultorio odontológico argentino, no el puntaje de la matriz.

En Argentina el estándar público ya incluye agenda, reserva online, recordatorios y una ficha clínica con odontograma en los productos especializados. La facturación AFIP/ARCA, las obras sociales y WhatsApp aparecen, pero a menudo como complemento pago o como frase comercial. Varios productos publican precio en pesos; otros solo cotizan.

El hueco útil para un producto nuevo no es repetir el odontograma. Es una agenda cuya regla de no solapamiento por profesional y por sillón pueda demostrarse, con duración variable de la prestación y con reserva online. Eso queda como funcionalidad imprescindible del MVP. El odontograma, la facturación fiscal y las obras sociales quedan para etapas posteriores.

## A. Tabla comparativa

Las celdas dicen "Comprobado" cuando la página oficial describe la capacidad, y "No evidenciado" cuando esa página no la muestra. Una afirmación del proveedor sin demostración se marca como afirmación comercial.

| Producto | País de la página y segmento | Reserva online | Recordatorios | Fuente y fecha |
| --- | --- | --- | --- | --- |
| OCLÜ | Argentina y España. Consultorio y clínica. País de la sociedad: No evidenciado. Teléfono comercial +54 9 11. | Comprobado: autoagenda, publicada como add-on. | Comprobado por mail. WhatsApp oficial, add-on. | https://www.oclucrm.com/ · 2026-10-07 |
| ClinIA, módulo OdontoClinIA | Argentina. Consultorio, clínica, hospital y cadena. | Comprobado: turnero web, app y pedido por WhatsApp. | Comprobado: WhatsApp y correo. | https://www.clinia.com.ar/odontologia · 2026-10-07 |
| Bilog | Argentina. Consultorio, clínica y obras sociales. | Comprobado: agenda online, alta y cancelación. | Comprobado: confirmaciones automáticas. Canal de cada aviso: No evidenciado en la portada. | https://bilog.com.ar/ · 2026-10-07 |
| Dentatools | Página /ar/ para consultorio con cobro particular. País de la sociedad: No evidenciado. | Comprobado: enlace de autoagendado. | Comprobado: mensaje de WhatsApp armado por el sistema; el envío "en un clic" no demuestra API. | https://dentatools.co/ar/ · 2026-10-07 |
| Dentario | Argentina. Consultorio. Teléfono +54 9 379. | Comprobado en el plan Pro: turnos. Enlace público de reserva: No evidenciado. | Comprobado en Pro: email. WhatsApp: No evidenciado. | https://www.dentario.com.ar/ · 2026-10-07 |
| Booksolut | Argentina y Latinoamérica. Consultorio independiente. También otros rubros. | Comprobado: link 24/7, WhatsApp, web e Instagram. | Comprobado: WhatsApp 24 h y 2 h antes. | https://booksolut.com/industria/odontologia · 2026-10-07 |
| AgendaPro | Página argentina. Consultorio y otros rubros de servicios. | Comprobado: link y reserva sin registro del paciente. | Comprobado en la página dental: WhatsApp, SMS o email. | https://agendapro.com/ar/dental/software-odontologico · 2026-10-07 |
| Doctoralia PRO | Precios de Argentina. Directorio y agenda. La sociedad citada al pie es Doctoralia México S.A. de C.V. | Comprobado. | Comprobado: email y push en Starter; SMS desde Plus. WhatsApp: No evidenciado. | https://pro.doctoralia.com/ar/precio · 2026-10-07 |
| Dentalink | Página España (/es/). Consultorio y clínica. Presencia en más de 20 países: afirmación comercial. | Comprobado en Esencial, Pro y Titanium. | Confirmación de citas comprobada. WhatsApp solo aparece en un testimonio, no en la tabla de planes. | https://www.softwaredentalink.com/es/planes · 2026-10-07 |
| XDentalCloud | Precios en euros para Europa y dólares para América. Cobro en USD. Massive Bionics LLC, Estados Unidos. | Comprobado: cita online 24 horas. | Comprobado: email, SMS y push. WhatsApp de soporte, no de recordatorio al paciente. | https://xdentalcloud.com/precios · 2026-10-07 |
| Clinic Cloud | España. Clínica multidisciplinaria; odontograma en el plan Max. | Comprobado: portal y reserva 24/7, asociada a Doctoralia. | Comprobado. SMS: extra a convenir. | https://clinic-cloud.com/tarifas · 2026-10-07 |
| Open Dental | Estados Unidos. Consultorio y multi-sede. Otros países: tarifa publicada. | No evidenciado en la página de tarifas. El producto es de gestión de consultorio. | eReminders figura como servicio de soporte. Detalle de canal: No evidenciado en esa página. | https://opendental.com/site/fees.html · 2026-10-07 |
| Curve Dental | Estados Unidos y Canadá. CD Newco, LLC, Alpharetta, Georgia. | Comprobado. | Comprobado, dentro de comunicación con el paciente. | https://www.curvedental.com/ · 2026-10-07 |
| CareStack | Estados Unidos. Consultorio, grupo y DSO. | Comprobado: Reserve with Google y portal. | Comprobado: llamadas, SMS y email del coordinador de confirmación. | https://carestack.com/ · 2026-10-07 |
| Dentrix Ascend | Estados Unidos. American Fork, Utah. Consultorio y DSO. | Comprobado. | Comprobado: confirmaciones, recordatorios y mensajería bidireccional. | https://www.dentrixascend.com/ · 2026-10-07 |

### Relevamiento por sistema

**OCLÜ.** Web, iOS y Android. Planes CORE, STUDIO y SIGNATURE publicados en pesos más IVA (ARS 35.000, 55.000 y 80.000), con tope de boxes y de profesionales con agenda. Clínico comprobado: historia, odontograma, periodontograma, imágenes, visor DICOM y recetas. Administración: presupuestos, caja, obras sociales y prepagas en el listado; facturación electrónica AFIP/ARCA es add-on. WhatsApp oficial es add-on y la página dice que Meta cobra los mensajes a la clínica. API pública, autoagenda y multi-sede CUSTOM son add-on. Roles por usuario y backups automáticos, comprobados. Exportación de datos: No evidenciado. Adopción: No evidenciado en número de clientes.

**ClinIA (OdontoClinIA).** Agenda por profesional, especialidad o sillón. Asistente de WhatsApp que confirma contra la agenda, cancela y reprograma. Odontograma FDI, CIE-10, plan con importe y caja en pesos, dólares o euros. Factura electrónica ARCA y verificación PUCO, descritas en la misma página. Recetario con identificador ReNaPDiS 248: afirmación del proveedor; el listado del Ministerio no se abrió en esta consulta. Precio de la suscripción: No evidenciado. La página dice que no cobra por usuario. Copias cada 10 minutos, comprobadas. Solapamiento de turnos: No evidenciado como regla.

**Bilog.** Agenda, consultorios, estados de turno, reserva, cancelación y alta por QR. Ficha, odontograma, obras sociales, liquidaciones y app. Precio: No evidenciado. "+1.500 clínicas" y "+150.000 turnos por mes" son afirmación comercial del sitio. Prevención de solapamientos: No evidenciado.

**Dentatools.** Nube. ARS 30.000 por mes hasta 3 odontólogos y ARS 8.000 por odontólogo adicional. Prueba sin tarjeta. Historia, anamnesis, odontograma, presupuestos y cobros particulares. No gestiona obras sociales ni emite factura AFIP de la suscripción: lo dice el propio FAQ. Exportación antes de cerrar la cuenta, comprobada. Solapamiento: el turno reservado "se bloquea", sin regla por sillón.

**Dentario.** Prueba Pro 30 días sin tarjeta. Basic ARS 30.000 y Pro ARS 50.000 por mes, pago con Mercado Pago. Ese Mercado Pago es el cobro de la suscripción, no una seña del paciente. Pro incluye turnos, recordatorios por email, presupuestos y caja. Odontograma en todos los planes. Tomografía en Pro: ARS 1.500 adicionales. WhatsApp, reserva pública y obras sociales: No evidenciado.

**Booksolut.** Duración configurable por servicio, varios odontólogos, bot de WhatsApp, seña Mercado Pago y recordatorios. Odontograma y ficha. La página de módulo clínico dice que no factura ante AFIP ni liquida obras sociales, y que la firma en canvas no es firma digital certificada. Precio numérico: No evidenciado en las dos páginas abiertas. Prueba de 7 días sin tarjeta, comprobada. Roles y auditoría, comprobados, con la salvedad del proveedor de que no garantizan cumplimiento legal automático.

**AgendaPro.** Agenda por tipo de práctica y por profesional, link, señas, historia clínica e imágenes. Recordatorios por WhatsApp, SMS o email en la página dental. "Más de 135.000 profesionales" mezcla rubros de la misma página (estética, barbería): afirmación comercial, no adopción odontológica. Precio: No evidenciado en la página abierta. Odontograma y sillón como recurso con tope de solapamiento: la página dice "uno o varios sillones", sin regla. AFIP: No evidenciado.

**Doctoralia PRO.** Starter ARS 25.000, Plus ARS 35.000 y VIP ARS 55.000 por mes, facturados anualmente. Reserva online. Historia clínica electrónica desde Plus; Starter no la incluye. Lista de espera en VIP. No hay odontograma en la tabla. Es directorio y agenda, no gestión clínica dental completa. WhatsApp, Mercado Pago del paciente y AFIP: No evidenciado.

**Dentalink.** Planes Esencial, Pro y Titanium. Precio: No evidenciado; la página pide cotización y dice que el pago es recurrente. Agenda, reserva online, odontograma y periodontograma en todos los planes. Caja y pagos online, comprobados. Convenios desde Pro. AWS y descarga de información, comprobados. "+15.000 clientes" es afirmación comercial. Integraciones argentinas: No evidenciado en esta página.

**XDentalCloud.** ESENCIAL 42 €, SOLO 92 €, CLÍNICA 129 € y CENTRO MÉDICO 249 € por mes, impuestos incluidos en la suscripción anual. Odontograma, periodontograma, agenda, facturación y firma en todos los planes. Mercado Pago, PayPal y Stripe, comprobados. Recordatorios por email, SMS y push. RGPD, LOPD e HIPAA declarados por el proveedor. WhatsApp al paciente y normativa argentina: No evidenciado.

**Clinic Cloud.** Mini 29 €, Pro 49 € y Max 79 € por mes, más IVA. Odontograma y periodontograma solo en Max. Reserva 24/7 y portal. Facturación electrónica española (TicketBai, Verifactu). Firma certificada en Max. Más de 3.000 consultas en España: afirmación comercial. WhatsApp y AFIP: No evidenciado.

**Open Dental.** Licencia y soporte: USD 199 por mes y por sede en Estados Unidos el primer año; USD 89 por mes en otros países, hasta 3 profesionales. Tooth chart en la portada. Cloud solo descrito para clientes de Estados Unidos en la página de enterprise, no reabierta en esta consulta más allá de la referencia de la página de tarifas. WhatsApp y normativa argentina: No evidenciado.

**Curve Dental.** Nube, agenda, recordatorios, reserva, charting, perio, imágenes y cobros. Precio: No evidenciado, se pide cotización. HIPAA declarado. "100.000+ usuarios" y "6.000+ ubicaciones" son afirmación comercial. Algunas funciones, solo Estados Unidos, según la misma página. Integraciones argentinas: No evidenciado.

**CareStack.** Nube para consultorio y DSO. Confirmación por llamada, SMS y email. Reserva desde Google. HIPAA, SOC 2 Type 2 e ISO 27001:2022 declarados. "Más de 3000 prácticas" es afirmación comercial. Precio, odontograma y WhatsApp: No evidenciado en la portada.

**Dentrix Ascend.** Nube. Agenda, recordatorios, mensajería, charting, imágenes, cobros y seguros de Estados Unidos. SOC 2, backups cifrados, roles y HIPAA declarados. Precio: No evidenciado. "80k+ clínicos" es afirmación comercial. Integraciones argentinas: No evidenciado.

## B. Matriz de puntuación

Cada nota mide solo lo que la página oficial demuestra.

- 5: la capacidad está descrita de forma específica.
- 3: está descrita en parte, o solo en un plan superior, o como add-on.
- 1: hay una mención genérica o una afirmación comercial sin mecanismo.
- 0: No evidenciado. No suma. No se interpreta como ausencia del producto, sino como ausencia de prueba pública.

Pesos: turnos y automatización 25 %; clínica odontológica 20 %; integraciones locales y WhatsApp 15 %; administración, cobros y facturación 15 %; experiencia del paciente 10 %; seguridad, exportación y trazabilidad 10 %; precio y facilidad de adopción 5 %.

| Sistema | Turnos 25 % | Clínica 20 % | Integraciones 15 % | Administración 15 % | Paciente 10 % | Seguridad 10 % | Precio 5 % | Total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| OCLÜ | 5 | 5 | 4 | 4 | 4 | 3 | 5 | 4,40 |
| ClinIA | 5 | 5 | 4 | 4 | 4 | 3 | 1 | 4,20 |
| XDentalCloud | 4 | 5 | 3 | 4 | 4 | 4 | 4 | 4,05 |
| Booksolut | 5 | 3 | 4 | 2 | 4 | 3 | 2 | 3,55 |
| Dentalink | 4 | 5 | 2 | 4 | 3 | 3 | 1 | 3,55 |
| Dentrix Ascend | 4 | 4 | 1 | 4 | 4 | 4 | 1 | 3,40 |
| Clinic Cloud | 4 | 3 | 2 | 4 | 4 | 3 | 4 | 3,40 |
| Bilog | 4 | 4 | 2 | 4 | 4 | 2 | 1 | 3,35 |
| Dentatools | 4 | 4 | 2 | 3 | 3 | 2 | 5 | 3,30 |
| Curve Dental | 4 | 4 | 1 | 4 | 4 | 3 | 1 | 3,30 |
| AgendaPro | 4 | 3 | 3 | 3 | 4 | 1 | 2 | 3,10 |
| Open Dental | 3 | 4 | 1 | 4 | 2 | 3 | 4 | 3,00 |
| Dentario | 3 | 4 | 1 | 4 | 2 | 2 | 5 | 2,95 |
| CareStack | 4 | 2 | 1 | 3 | 3 | 4 | 1 | 2,75 |
| Doctoralia PRO | 4 | 2 | 1 | 1 | 5 | 2 | 5 | 2,65 |

Ejemplo de cálculo, OCLÜ: 5×0,25 + 5×0,20 + 4×0,15 + 4×0,15 + 4×0,10 + 3×0,10 + 5×0,05 = 4,40.

El total no ordena la tabla A. Un producto de Estados Unidos puede puntuar alto en clínica y seguridad y seguir siendo poco relevante para cobrar en pesos o integrar ARCA.

## C. Análisis competitivo

### Estándar de mercado

En los productos odontológicos con página específica, la agenda y la ficha con odontograma ya no son diferenciales: están en OCLÜ, ClinIA, Bilog, Dentatools, Dentario, Dentalink y XDentalCloud. La reserva online y algún recordatorio también son habituales. El presupuesto ligado al tratamiento aparece en varios de esos sitios.

### Diferenciadores con respaldo

- Tope explícito de boxes y de profesionales con agenda, con precio publicado en pesos: OCLÜ.
- Agenda nombrada por sillón y asistente de WhatsApp que confirma contra la agenda: ClinIA.
- Obras sociales y liquidaciones en la portada: Bilog. ClinIA describe PUCO y ARCA.
- Duración distinta por prestación y seña Mercado Pago dentro del turno: Booksolut.
- Directorio donde el paciente encuentra al profesional y reserva: Doctoralia PRO.
- Precio de entrada publicado y acotado: Dentatools, Dentario, Doctoralia PRO, Clinic Cloud y XDentalCloud.

### Vacíos del mercado argentino

- La prevención de solapamientos por profesional y por sillón casi no se especifica. Hay "bloqueo" del turno o "varios sillones", sin escenario de dos turnos que se tocan.
- WhatsApp se anuncia, pero OCLÜ lo deja como add-on y Dentatools no muestra una API. No es un estándar técnico único.
- AFIP/ARCA falta en Dentatools, Booksolut y en la página de Dentario. En OCLÜ es add-on.
- Obras sociales: Dentatools y Booksolut dicen que no las liquidan. Otros no las mencionan.
- El precio de Bilog, ClinIA, Dentalink, Booksolut, AgendaPro, Curve, CareStack y Dentrix Ascend no quedó publicado en la página abierta.
- La exportación y la normativa argentina de datos de salud quedan, en la mayoría, como No evidenciado o como declaración del proveedor.

### Oportunidades

Un sistema nuevo puede ser competitivo si hace verificable la agenda antes de intentar el expediente clínico completo. La oportunidad está en la regla de turnos, el sillón como recurso y la reserva online, con datos ficticios y sin prometer facturación fiscal en la primera entrega.

## D. Recomendación

### Cinco competidores para una demo

1. OCLÜ, por boxes, precio en pesos y add-ons locales.
2. ClinIA, por agenda por sillón y WhatsApp contra la agenda real.
3. Bilog, por obras sociales y trayectoria declarada en Argentina.
4. Dentatools, por precio único y límite explícito a cobros particulares.
5. Booksolut, por duración de la prestación, seña y lo que el propio sitio dice que no hace.

### Tres referencias de experiencia de uso

1. Doctoralia PRO: el paciente reserva sin aprender un sistema clínico.
2. Curve Dental: el día del consultorio se cuenta como un solo registro, de la reserva al cobro.
3. Clinic Cloud: los planes dicen en qué escalón aparece el odontograma.

### MVP

Imprescindible:

- Agenda por profesional y por sillón o box.
- Duración variable de la prestación.
- Impedir solapamientos, incluido el turno que empieza cuando otro termina.
- Reserva por enlace.
- Confirmación, cancelación y reprogramación.
- Ficha mínima del paciente asociada al turno, con datos ficticios.

Diferenciador:

- La regla de solapamiento queda especificada y probada, no solo anunciada.
- Seña. Mercado Pago no entra en esta primera funcionalidad.
- Lista de espera al liberar un horario.

Etapas posteriores:

- Odontograma, periodontograma e imágenes.
- Facturación AFIP/ARCA.
- Obras sociales y prepagas.
- WhatsApp Business API.
- Firma digital certificada.
- Multi-sede.

La funcionalidad que se especifica a continuación del roadmap es crear un turno sin solapamientos por profesional y por sillón. Está dentro de lo imprescindible.

## Verificación de fuentes

Cinco páginas abiertas el 2026-10-07. Tipo, afirmación y hallazgo.

1. Sitio oficial. https://www.oclucrm.com/. El informe dice que el plan CORE cuesta ARS 35.000 más IVA y que WhatsApp y la facturación AFIP/ARCA son add-on. La página lo dice. Sin corrección.
2. Página de precios. https://opendental.com/site/fees.html. El informe dice que otros países pagan USD 89 por mes y por sede, hasta 3 profesionales. La tabla lo dice. Sin corrección.
3. Preguntas del propio producto, en lugar de un centro de ayuda separado. https://dentatools.co/ar/. El informe dice que Dentatools no liquida obras sociales ni emite factura AFIP de la suscripción. El FAQ lo dice. Sin corrección.
4. Página de producto. https://www.clinia.com.ar/odontologia. El informe iba a tratar el identificador ReNaPDiS 248 como registro comprobado. La página pide verificar el listado del Ministerio y esa lista no se abrió. Corrección: queda como afirmación del proveedor, no como registro verificado.
5. Página de tarifas. https://clinic-cloud.com/tarifas. El informe dice que el odontograma entra en el plan Max, a 79 € más IVA, y no en Mini. La página lo ubica en Max. Sin corrección.

## Referencias

Todas consultadas el 2026-10-07.

- OCLÜ. https://www.oclucrm.com/
- ClinIA. https://www.clinia.com.ar/odontologia
- Bilog. https://bilog.com.ar/
- Dentatools. https://dentatools.co/ar/
- Dentario. https://www.dentario.com.ar/
- Booksolut, odontología. https://booksolut.com/industria/odontologia
- Booksolut, módulo clínico. https://booksolut.com/modulo-clinico
- AgendaPro. https://agendapro.com/ar/dental/software-odontologico
- Doctoralia PRO. https://pro.doctoralia.com/ar/precio
- Dentalink. https://www.softwaredentalink.com/es/planes
- XDentalCloud. https://xdentalcloud.com/precios
- Clinic Cloud. https://clinic-cloud.com/tarifas
- Open Dental, tarifas. https://opendental.com/site/fees.html
- Open Dental, portada. https://www.opendental.com/
- Curve Dental. https://www.curvedental.com/
- CareStack. https://carestack.com/
- Dentrix Ascend. https://www.dentrixascend.com/

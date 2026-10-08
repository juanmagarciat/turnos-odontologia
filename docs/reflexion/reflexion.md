# Reflexión del trabajo integrador

## Portada

Título: Reflexión sobre el Discovery y el primer change.

Materia: Metodología I. Tecnicatura Universitaria en Programación.

Integrantes: García Juan Martín y Tiziano Valentini.

Fecha: 2026-10-07.

## Desarrollo

En el Discovery, casi todos los precios y funciones que incluimos en el informe salían de la página del propio proveedor. El único dato que no pudimos dar por confirmado fue el de ClinIA. Su página de odontología indica que el recetario está inscripto en el ReNaPDiS con el número 248, pero al mismo tiempo pide comprobar ese número en el listado del Ministerio. Nosotros revisamos la página del producto y no llegamos a abrir ese listado. Si lo hubiéramos tomado como registro verificado, el informe habría sostenido algo que no vimos con nuestros propios ojos, así que lo dejamos asentado como una afirmación de ClinIA. En cambio, las otras cuatro fuentes sí se confirmaron: el plan CORE de OCLÜ, la tarifa de Open Dental para otros países, el FAQ de Dentatools sobre obras sociales y AFIP, y el odontograma de Clinic Cloud en el plan Max.

En la especificación del turno hicimos un ajuste. La primera versión consideraba el horario como un intervalo cerrado, es decir, la hora de fin seguía contando como ocupada. Bajo esa regla se rechazaba un turno que arrancaba a las 09:40 cuando otro terminaba justo a las 09:40, y ese era precisamente el caso que queríamos permitir. Modificamos la spec para que el fin quede fuera del intervalo y solo después escribimos el código. De no haberlo corregido, el test de turnos contiguos habría fallado, o el programa habría hecho lo contrario de lo que pedía el MVP.

Ahí estuvo la diferencia con un prompt suelto. Gracias a la spec, el programa se limita a crear un turno, rechazarlo si se superpone el profesional o el sillón, y aceptarlo si empieza cuando el otro termina. No tiene pantalla ni base de datos porque la spec no las contempla. Con un pedido como "hacé la agenda del consultorio", el resultado podría haber incluido reserva online, fichas o recordatorios, cosas que el informe había dejado para más adelante.

De la fundación, lo que más nos ordenó el change fue la knowledge-base: ahí quedó escrita la regla del solapamiento y también lo que queda fuera de esta entrega. El roadmap nos ayudó a no implementar la ficha, la reserva ni la lista de espera en un mismo paso. Las skills de terceros aportaron menos, porque el change no las necesitaba y no instalamos ninguna.

García Juan Martín estuvo a cargo del Discovery, la revisión de las fuentes y la knowledge-base. Tiziano Valentini llevó adelante el roadmap, las reglas del agente y el ciclo del change, desde la spec hasta los tests y el archivado. Usamos un agente para investigar, redactar borradores y escribir el módulo. Antes de dar el trabajo por cerrado, leímos el informe y la spec, y corregimos todo lo que no tenía respaldo.

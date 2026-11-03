# Descripción general

Módulo de dominio en TypeScript, ejecutado con Node.js 24. Los tests usan `node:test`. No hay servidor, base de datos ni interfaz.

La agenda es una lista en memoria. Un turno tiene profesional, sillón, ficha, inicio y fin, en minutos desde la medianoche. La ficha es un identificador opaco.

Las integraciones externas no forman parte del módulo. En el mercado relevado, Mercado Pago, WhatsApp y AFIP/ARCA aparecen como add-on, como canal no precisado o como No evidenciado, según el producto.

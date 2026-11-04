import { crearTurno, TurnoRechazado, type Turno } from "./turno.ts";

function mismoTurno(actual: Turno, pedido: Turno): boolean {
  return (
    actual.profesionalId === pedido.profesionalId &&
    actual.sillonId === pedido.sillonId &&
    actual.fichaId === pedido.fichaId &&
    actual.inicio === pedido.inicio &&
    actual.fin === pedido.fin
  );
}

function indiceTurno(agenda: readonly Turno[], pedido: Turno): number {
  return agenda.findIndex((actual) => mismoTurno(actual, pedido));
}

export function confirmarTurno(agenda: readonly Turno[], pedido: Turno): Turno[] {
  const indice = indiceTurno(agenda, pedido);
  if (indice < 0) {
    throw new TurnoRechazado("ausente");
  }

  return agenda.map((actual, posicion) =>
    posicion === indice ? { ...actual, estado: "confirmado" } : actual,
  );
}

export function cancelarTurno(agenda: readonly Turno[], pedido: Turno): Turno[] {
  const indice = indiceTurno(agenda, pedido);
  if (indice < 0) {
    throw new TurnoRechazado("ausente");
  }

  return agenda.filter((_, posicion) => posicion !== indice);
}

export function reprogramarTurno(
  agenda: readonly Turno[],
  pedido: Turno,
  destino: Pick<Turno, "profesionalId" | "sillonId" | "inicio" | "fin">,
): Turno[] {
  const indice = indiceTurno(agenda, pedido);
  if (indice < 0) {
    throw new TurnoRechazado("ausente");
  }

  const origen = agenda[indice];
  const resto = agenda.filter((_, posicion) => posicion !== indice);
  return crearTurno(resto, {
    profesionalId: destino.profesionalId,
    sillonId: destino.sillonId,
    fichaId: origen.fichaId,
    inicio: destino.inicio,
    fin: destino.fin,
    estado: origen.estado,
  });
}

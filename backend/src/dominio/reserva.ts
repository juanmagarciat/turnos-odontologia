import { crearTurno, TurnoRechazado, type Turno } from "./turno.ts";

export type Enlace = {
  enlaceId: string;
  profesionalId: string;
  sillonId: string;
  inicio: number;
  fin: number;
};

export type Reserva = {
  turnos: readonly Turno[];
  enlaces: readonly Enlace[];
  usados: readonly string[];
};

export function reservarPorEnlace(estado: Reserva, enlaceId: string, fichaId: string): Reserva {
  if (estado.usados.includes(enlaceId)) {
    throw new TurnoRechazado("usado");
  }

  const enlace = estado.enlaces.find((item) => item.enlaceId === enlaceId);
  if (!enlace || enlaceId.trim() === "") {
    throw new TurnoRechazado("enlace");
  }

  const turnos = crearTurno(estado.turnos, {
    profesionalId: enlace.profesionalId,
    sillonId: enlace.sillonId,
    fichaId,
    inicio: enlace.inicio,
    fin: enlace.fin,
    estado: "reservado",
  });

  return {
    turnos,
    enlaces: estado.enlaces,
    usados: [...estado.usados, enlaceId],
  };
}

export type Minuto = number;

export type Turno = {
  profesionalId: string;
  sillonId: string;
  fichaId: string;
  inicio: Minuto;
  fin: Minuto;
};

export type MotivoRechazo = "profesional" | "sillon" | "duracion" | "ficha" | "enlace" | "usado";

export type Enlace = {
  enlaceId: string;
  profesionalId: string;
  sillonId: string;
  inicio: Minuto;
  fin: Minuto;
};

export type Reserva = {
  turnos: readonly Turno[];
  enlaces: readonly Enlace[];
  usados: readonly string[];
};

export class TurnoRechazado extends Error {
  readonly motivo: MotivoRechazo;

  constructor(motivo: MotivoRechazo) {
    super(motivo);
    this.name = "TurnoRechazado";
    this.motivo = motivo;
  }
}

export function seSolapan(a: Turno, b: Turno): boolean {
  return a.inicio < b.fin && b.inicio < a.fin;
}

export function crearTurno(agenda: readonly Turno[], pedido: Turno): Turno[] {
  if (pedido.fin <= pedido.inicio) {
    throw new TurnoRechazado("duracion");
  }

  if (pedido.fichaId.trim() === "") {
    throw new TurnoRechazado("ficha");
  }

  const chocaProfesional = agenda.some(
    (existente) =>
      existente.profesionalId === pedido.profesionalId && seSolapan(existente, pedido),
  );
  if (chocaProfesional) {
    throw new TurnoRechazado("profesional");
  }

  const chocaSillon = agenda.some(
    (existente) => existente.sillonId === pedido.sillonId && seSolapan(existente, pedido),
  );
  if (chocaSillon) {
    throw new TurnoRechazado("sillon");
  }

  return [...agenda, pedido];
}

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
  });

  return {
    turnos,
    enlaces: estado.enlaces,
    usados: [...estado.usados, enlaceId],
  };
}

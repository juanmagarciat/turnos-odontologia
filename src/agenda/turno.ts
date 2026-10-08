export type Minuto = number;

export type Turno = {
  profesionalId: string;
  sillonId: string;
  inicio: Minuto;
  fin: Minuto;
};

export type MotivoRechazo = "profesional" | "sillon" | "duracion";

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

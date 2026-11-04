export type Minuto = number;

export type EstadoTurno = "reservado" | "confirmado";

export type Turno = {
  profesionalId: string;
  sillonId: string;
  fichaId: string;
  inicio: Minuto;
  fin: Minuto;
  estado: EstadoTurno;
};

export type MotivoRechazo =
  | "profesional"
  | "sillon"
  | "duracion"
  | "ficha"
  | "enlace"
  | "usado"
  | "ausente"
  | "espera";

export type Espera = {
  esperaId: string;
  fichaId: string;
  profesionalId: string;
  sillonId: string;
  inicio: Minuto;
  fin: Minuto;
};

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
    estado: "reservado",
  });

  return {
    turnos,
    enlaces: estado.enlaces,
    usados: [...estado.usados, enlaceId],
  };
}

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

export function anotarEspera(esperas: readonly Espera[], espera: Espera): Espera[] {
  if (espera.esperaId.trim() === "") {
    throw new TurnoRechazado("espera");
  }
  if (espera.fichaId.trim() === "") {
    throw new TurnoRechazado("ficha");
  }
  return [...esperas, espera];
}

export function asignarDesdeEspera(
  turnos: readonly Turno[],
  esperas: readonly Espera[],
): { turnos: Turno[]; esperas: Espera[] } {
  for (let indice = 0; indice < esperas.length; indice += 1) {
    const espera = esperas[indice];
    try {
      const siguientes = crearTurno(turnos, {
        profesionalId: espera.profesionalId,
        sillonId: espera.sillonId,
        fichaId: espera.fichaId,
        inicio: espera.inicio,
        fin: espera.fin,
        estado: "reservado",
      });
      return {
        turnos: siguientes,
        esperas: esperas.filter((_, posicion) => posicion !== indice),
      };
    } catch (error) {
      if (!(error instanceof TurnoRechazado)) {
        throw error;
      }
    }
  }

  return { turnos: [...turnos], esperas: [...esperas] };
}

import { crearTurno, TurnoRechazado, type Turno } from "./turno.ts";

export type Espera = {
  esperaId: string;
  fichaId: string;
  profesionalId: string;
  sillonId: string;
  inicio: number;
  fin: number;
};

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

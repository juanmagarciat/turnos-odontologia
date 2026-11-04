import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  anotarEspera,
  asignarDesdeEspera,
  type Espera,
  type Turno,
} from "../src/agenda/turno.ts";

const de = (hora: number, minuto: number) => hora * 60 + minuto;

const turno = (
  profesionalId: string,
  sillonId: string,
  inicio: number,
  fin: number,
  fichaId: string,
): Turno => ({
  profesionalId,
  sillonId,
  fichaId,
  inicio,
  fin,
  estado: "reservado",
});

const espera = (
  esperaId: string,
  fichaId: string,
  profesionalId = "P1",
  sillonId = "S1",
  inicio = de(9, 0),
  fin = de(9, 40),
): Espera => ({ esperaId, fichaId, profesionalId, sillonId, inicio, fin });

describe("lista-de-espera", () => {
  it("anotar no crea un turno", () => {
    const ocupado = turno("P1", "S1", de(9, 0), de(9, 40), "F1");
    const anotada = anotarEspera([], espera("W1", "F2"));
    assert.deepEqual(anotada, [espera("W1", "F2")]);
    assert.deepEqual([ocupado], [ocupado]);
  });

  it("asigna la espera cuando el horario está libre", () => {
    const anotada = [espera("W1", "F2")];
    const resultado = asignarDesdeEspera([], anotada);
    assert.deepEqual(resultado.turnos, [turno("P1", "S1", de(9, 0), de(9, 40), "F2")]);
    assert.deepEqual(resultado.esperas, []);
  });

  it("no asigna la espera si el horario sigue ocupado", () => {
    const ocupado = turno("P1", "S1", de(9, 0), de(9, 40), "F1");
    const anotada = [espera("W1", "F2")];
    const resultado = asignarDesdeEspera([ocupado], anotada);
    assert.deepEqual(resultado.turnos, [ocupado]);
    assert.deepEqual(resultado.esperas, anotada);
  });

  it("de dos esperas del mismo hueco entra solo la primera", () => {
    const anotadas = [espera("W1", "F2"), espera("W2", "F3")];
    const resultado = asignarDesdeEspera([], anotadas);
    assert.deepEqual(resultado.turnos, [turno("P1", "S1", de(9, 0), de(9, 40), "F2")]);
    assert.deepEqual(resultado.esperas, [espera("W2", "F3")]);
  });
});

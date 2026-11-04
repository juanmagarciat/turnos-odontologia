import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  reservarPorEnlace,
  TurnoRechazado,
  type Enlace,
  type Reserva,
  type Turno,
} from "../src/agenda/turno.ts";

const de = (hora: number, minuto: number) => hora * 60 + minuto;

const turno = (
  profesionalId: string,
  sillonId: string,
  inicio: number,
  fin: number,
  fichaId = "F1",
): Turno => ({ profesionalId, sillonId, fichaId, inicio, fin, estado: "reservado" });

const enlace = (
  enlaceId: string,
  profesionalId: string,
  sillonId: string,
  inicio: number,
  fin: number,
): Enlace => ({ enlaceId, profesionalId, sillonId, inicio, fin });

const reserva = (
  turnos: Turno[] = [],
  enlaces: Enlace[] = [],
  usados: string[] = [],
): Reserva => ({ turnos, enlaces, usados });

describe("reserva-por-enlace", () => {
  it("registra el turno del enlace libre y marca el enlace usado", () => {
    const estado = reserva([], [enlace("E1", "P1", "S1", de(9, 0), de(9, 40))]);
    const resultado = reservarPorEnlace(estado, "E1", "F1");
    assert.deepEqual(resultado.turnos, [turno("P1", "S1", de(9, 0), de(9, 40), "F1")]);
    assert.deepEqual(resultado.usados, ["E1"]);
    assert.deepEqual(estado.usados, []);
    assert.deepEqual(estado.turnos, []);
  });

  it("acepta el enlace que empieza cuando el turno anterior termina", () => {
    const existente = turno("P1", "S1", de(9, 0), de(9, 40));
    const estado = reserva(
      [existente],
      [enlace("E1", "P1", "S2", de(9, 40), de(10, 20))],
    );
    const resultado = reservarPorEnlace(estado, "E1", "F1");
    assert.equal(resultado.turnos.length, 2);
    assert.deepEqual(resultado.turnos[1], turno("P1", "S2", de(9, 40), de(10, 20), "F1"));
    assert.deepEqual(resultado.usados, ["E1"]);
  });

  it("no consume el enlace si el profesional está ocupado", () => {
    const existente = turno("P1", "S1", de(9, 0), de(9, 40));
    const estado = reserva(
      [existente],
      [enlace("E1", "P1", "S2", de(9, 20), de(10, 0))],
    );
    assert.throws(() => reservarPorEnlace(estado, "E1", "F2"), (error: unknown) => {
      assert.ok(error instanceof TurnoRechazado);
      assert.equal(error.motivo, "profesional");
      return true;
    });
    assert.deepEqual(estado.turnos, [existente]);
    assert.deepEqual(estado.usados, []);
  });

  it("no consume el enlace si la ficha está vacía", () => {
    const estado = reserva([], [enlace("E1", "P1", "S1", de(9, 0), de(9, 40))]);
    assert.throws(() => reservarPorEnlace(estado, "E1", ""), (error: unknown) => {
      assert.ok(error instanceof TurnoRechazado);
      assert.equal(error.motivo, "ficha");
      return true;
    });
    assert.deepEqual(estado.turnos, []);
    assert.deepEqual(estado.usados, []);
  });

  it("rechaza un segundo uso del mismo enlace", () => {
    const existente = turno("P1", "S1", de(9, 0), de(9, 40));
    const estado = reserva(
      [existente],
      [enlace("E1", "P1", "S1", de(9, 0), de(9, 40))],
      ["E1"],
    );
    assert.throws(() => reservarPorEnlace(estado, "E1", "F2"), (error: unknown) => {
      assert.ok(error instanceof TurnoRechazado);
      assert.equal(error.motivo, "usado");
      return true;
    });
    assert.deepEqual(estado.turnos, [existente]);
  });

  it("rechaza un enlace que no existe", () => {
    const estado = reserva();
    assert.throws(() => reservarPorEnlace(estado, "E9", "F1"), (error: unknown) => {
      assert.ok(error instanceof TurnoRechazado);
      assert.equal(error.motivo, "enlace");
      return true;
    });
    assert.deepEqual(estado.turnos, []);
  });
});

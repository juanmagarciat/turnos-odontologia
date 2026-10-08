import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { crearTurno, TurnoRechazado, type Turno } from "../src/agenda/turno.ts";

const de = (hora: number, minuto: number) => hora * 60 + minuto;

const turno = (
  profesionalId: string,
  sillonId: string,
  inicio: number,
  fin: number,
): Turno => ({ profesionalId, sillonId, inicio, fin });

describe("agenda-turnos", () => {
  it("registra un turno cuando la agenda está vacía", () => {
    const pedido = turno("P1", "S1", de(9, 0), de(9, 40));
    const agenda = crearTurno([], pedido);
    assert.deepEqual(agenda, [pedido]);
  });

  it("rechaza otro turno del mismo profesional si los horarios se superponen", () => {
    const existente = turno("P1", "S1", de(9, 0), de(9, 40));
    const pedido = turno("P1", "S2", de(9, 20), de(10, 0));
    assert.throws(() => crearTurno([existente], pedido), (error: unknown) => {
      assert.ok(error instanceof TurnoRechazado);
      assert.equal(error.motivo, "profesional");
      return true;
    });
  });

  it("rechaza otro profesional si el sillón ya está ocupado", () => {
    const existente = turno("P1", "S1", de(9, 0), de(9, 40));
    const pedido = turno("P2", "S1", de(9, 10), de(9, 30));
    assert.throws(() => crearTurno([existente], pedido), (error: unknown) => {
      assert.ok(error instanceof TurnoRechazado);
      assert.equal(error.motivo, "sillon");
      return true;
    });
  });

  it("acepta un turno que empieza cuando el anterior termina", () => {
    const existente = turno("P1", "S1", de(9, 0), de(9, 40));
    const pedido = turno("P1", "S2", de(9, 40), de(10, 20));
    const agenda = crearTurno([existente], pedido);
    assert.equal(agenda.length, 2);
    assert.deepEqual(agenda[1], pedido);
  });
});

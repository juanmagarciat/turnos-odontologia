import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  cancelarTurno,
  confirmarTurno,
  crearTurno,
  reprogramarTurno,
  TurnoRechazado,
  type Turno,
} from "../src/agenda/turno.ts";

const de = (hora: number, minuto: number) => hora * 60 + minuto;

const turno = (
  profesionalId: string,
  sillonId: string,
  inicio: number,
  fin: number,
  fichaId = "F1",
  estado: Turno["estado"] = "reservado",
): Turno => ({ profesionalId, sillonId, fichaId, inicio, fin, estado });

describe("confirmar-cancelar-reprogramar", () => {
  it("confirma el turno y el horario sigue ocupado", () => {
    const reservado = turno("P1", "S1", de(9, 0), de(9, 40));
    const confirmado = confirmarTurno([reservado], reservado);
    assert.equal(confirmado[0].estado, "confirmado");
    const pedido = turno("P1", "S2", de(9, 20), de(10, 0), "F2");
    assert.throws(() => crearTurno(confirmado, pedido), (error: unknown) => {
      assert.ok(error instanceof TurnoRechazado);
      assert.equal(error.motivo, "profesional");
      return true;
    });
    assert.deepEqual(confirmado, [{ ...reservado, estado: "confirmado" }]);
  });

  it("al cancelar libera el horario", () => {
    const existente = turno("P1", "S1", de(9, 0), de(9, 40));
    const libre = cancelarTurno([existente], existente);
    assert.deepEqual(libre, []);
    const pedido = turno("P2", "S1", de(9, 0), de(9, 40), "F2");
    assert.deepEqual(crearTurno(libre, pedido), [pedido]);
  });

  it("rechaza cancelar un turno que no está", () => {
    const pedido = turno("P1", "S1", de(9, 0), de(9, 40));
    const agenda: Turno[] = [];
    assert.throws(() => cancelarTurno(agenda, pedido), (error: unknown) => {
      assert.ok(error instanceof TurnoRechazado);
      assert.equal(error.motivo, "ausente");
      return true;
    });
    assert.deepEqual(agenda, []);
  });

  it("no mueve el turno si el destino pisa a otro profesional", () => {
    const origen = turno("P1", "S1", de(9, 0), de(9, 40));
    const otro = turno("P2", "S2", de(10, 0), de(10, 40), "F2");
    const agenda = [origen, otro];
    assert.throws(
      () =>
        reprogramarTurno(agenda, origen, {
          profesionalId: "P2",
          sillonId: "S1",
          inicio: de(10, 20),
          fin: de(11, 0),
        }),
      (error: unknown) => {
        assert.ok(error instanceof TurnoRechazado);
        assert.equal(error.motivo, "profesional");
        return true;
      },
    );
    assert.deepEqual(agenda, [origen, otro]);
  });

  it("reprograma al minuto en que termina el turno anterior", () => {
    const primero = turno("P1", "S1", de(9, 0), de(9, 40));
    const segundo = turno("P1", "S2", de(10, 0), de(10, 40));
    const agenda = reprogramarTurno([primero, segundo], segundo, {
      profesionalId: "P1",
      sillonId: "S2",
      inicio: de(9, 40),
      fin: de(10, 20),
    });
    assert.deepEqual(agenda[0], primero);
    assert.deepEqual(agenda[1], turno("P1", "S2", de(9, 40), de(10, 20)));
  });
});

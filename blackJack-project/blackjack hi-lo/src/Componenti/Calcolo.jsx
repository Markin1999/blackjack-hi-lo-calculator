import { useState } from "react";
import DataCards from "./dataCards";

export default function Calcolo({
  valore,
  cards,
  value1,
  setValue1,
  value2,
  setValue2,
}) {
  const mazzi = cards.length / 52;
  const trueCount = valore / mazzi;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p>trueCount: {trueCount.toFixed(2)}</p>

      <p>Conteggio Hi-Lo: {valore}</p>

      <div>
        {trueCount > 5 ? (
          <p>
            Il mazzo è pieno di carte alte! È il momento perfetto per rischiare
            e puntare grosso.
          </p>
        ) : trueCount > 3 ? (
          <p>
            La prossima carta sarà probabilmente alta. Aumenta leggermente la
            puntata.
          </p>
        ) : trueCount > 2 ? (
          <p>
            Buone probabilità per carte alte. Mantieni un gioco aggressivo ma
            strategico.
          </p>
        ) : trueCount > 1 ? (
          <p>
            Il mazzo è leggermente favorevole. Gioca con intelligenza e valuta
            ogni mossa.
          </p>
        ) : trueCount === 0 ? (
          <p>No previsioni al momento. Il mazzo è neutrale.</p>
        ) : trueCount < -5 ? (
          <p>
            Il mazzo è sfavorevole, pieno di carte basse. Lascia il tavolo se
            possibile.
          </p>
        ) : trueCount < -3 ? (
          <p>Le probabilità sono contro di te. Riduci al minimo le puntate.</p>
        ) : trueCount < -2 ? (
          <p>
            La prossima carta sarà probabilmente bassa. Procedi con molta
            cautela.
          </p>
        ) : trueCount < -1 ? (
          <p>
            Il mazzo non è favorevole. Considera di ridurre le puntate o giocare
            più conservativo.
          </p>
        ) : (
          <p>No previsioni specifiche, resta attento al gioco.</p>
        )}
      </div>
      <DataCards
        value1={value1}
        setValue1={setValue1}
        cards={cards}
        value2={value2}
        setValue2={setValue2}
      />
    </div>
  );
}

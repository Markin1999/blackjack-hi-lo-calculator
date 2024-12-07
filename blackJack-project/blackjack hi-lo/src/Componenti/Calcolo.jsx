import { useState } from "react";

export default function Calcolo({ valore, cards }) {
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
      {trueCount > +2 ? (
        <p>prossima sarà una carta alta</p>
      ) : trueCount < -2 ? (
        <p>prossima carta sarà bassa.</p>
      ) : (
        <p>No previsioni</p>
      )}
    </div>
  );
}

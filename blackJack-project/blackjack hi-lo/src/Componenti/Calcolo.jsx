import { useState } from "react";

export default function Calcolo({ valore, cards }) {
  const mazzi = cards.length / 52;
  const trueCount = valore / mazzi;
  return (
    <div>
      <p>{trueCount.toFixed(2)}</p>
      <p>Conteggio: {valore}</p>
      {trueCount > +2 ? (
        <p>La prossima sarà una carta alta</p>
      ) : trueCount < -2 ? (
        <p>Probabile che la prossima carta sarà bassa.</p>
      ) : (
        <p>No previsioni</p>
      )}
    </div>
  );
}

import { useState } from "react";
import DataCards from "./dataCards";

export default function Calcolo({
  valore,
  cards,
  value1,
  setValue1,
  value2,
  setValue2,
  setDynamicTC,
}) {
  const mazzi = cards.length / 52;
  const trueCount = valore / mazzi;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p>trueCount: {trueCount.toFixed(2)}</p>

      <p>Conteggio Wolg-halves: {valore}</p>

      <DataCards
        value1={value1}
        setValue1={setValue1}
        cards={cards}
        value2={value2}
        setValue2={setValue2}
        valore={valore}
        setDynamicTC={setDynamicTC}
      />
    </div>
  );
}

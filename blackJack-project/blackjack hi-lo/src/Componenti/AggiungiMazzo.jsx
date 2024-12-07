import { useEffect, useState } from "react";

export default function AggiungiMazzo({ fetchCards, cards, setCards }) {
  const [clickBottone, setClickBottone] = useState(1);

  function click() {
    fetchCards();
  }

  useEffect(() => {
    const mazzi = cards.length / 52;
    setClickBottone(mazzi % 1 > 0.5 ? Math.ceil(mazzi) : Math.floor(mazzi));
  }, [cards]);

  function clickRemove() {
    setClickBottone(0);
    setCards([]);
  }

  return (
    <div style={{ display: "flex", gap: "10px", backgroundColor: "white" }}>
      <button
        style={{
          backgroundColor: "green",
          color: "white",
          border: "1px solid white",
        }}
        onClick={click}
      >
        Aggiungi Mazzo
      </button>
      <p style={{ backgroundColor: "white" }}>
        Carte nell array Cards: <strong>{cards.length}</strong> Quanti mazzi
        sono presenti:<strong>{clickBottone}</strong>
      </p>
      <button
        style={{
          backgroundColor: "red",
          color: "white",
          border: "1px solid white",
        }}
        onClick={clickRemove}
      >
        Rimuovi mazzo
      </button>
    </div>
  );
}

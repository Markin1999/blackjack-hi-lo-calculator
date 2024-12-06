import { useState } from "react";

export default function AggiungiMazzo({ fetchCards, cards, setCards }) {
  const [clickBottone, setClickBottone] = useState(1);

  function click() {
    setClickBottone(() => clickBottone + 1);
    fetchCards();
  }

  function clickRemove() {
    setClickBottone(0);
    setCards([]);
  }

  return (
    <div>
      <button onClick={click}>Aggiungi Mazzo</button>
      <p>
        Carte nell array Cards: <strong>{cards.length}</strong> Quanti mazzi
        sono presenti:<strong>{clickBottone}</strong>
      </p>
      <button onClick={clickRemove}>Rimuovi mazzo</button>
    </div>
  );
}

import React, { useState } from "react";

function Deck() {
  const [cards, setCards] = useState([]); // Stato per conservare tutte le carte
  const [error, setError] = useState(null);
  const [renderCount, setRenderCount] = useState(0);

  const fetchCards = async () => {
    const apiUrl = "https://deckofcardsapi.com/api/deck/new/draw/?count=52";

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`Errore: ${response.status}`);
      }

      const data = await response.json();
      setCards((prevCards) => [...prevCards, ...data.cards]);
      setRenderCount((prevCount) => prevCount + 1);
    } catch (error) {
      setError(error.message);
    }
  };

  if (error) {
    return <div>Errore: {error}</div>;
  }

  return (
    <div>
      <button onClick={fetchCards}>Aggiungi Mazzo</button>
      <h2>I mazzi sono stati aggiunti {renderCount} volte</h2>
      <div>
        {cards.map((card, index) => (
          <img
            style={{ width: "80px", height: "120px", padding: "10px" }}
            key={`${card.code}-${index}`} // Usa un indice aggiuntivo per garantire una chiave unica
            src={card.image}
            alt={`${card.value} of ${card.suit}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Deck;

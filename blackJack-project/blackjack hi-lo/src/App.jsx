import { useState, useEffect } from "react";
import "./App.css";
import { Bottone } from "./Componenti/Bottone";
import Main from "./Componenti/Main";
import AggiungiMazzo from "./Componenti/AggiungiMazzo";
import Calcolo from "./Componenti/Calcolo";

function App() {
  const [cards, setCards] = useState([]);
  const [error, setError] = useState(null);
  const [valore, setValore] = useState(0);

  const fetchCards = async () => {
    const apiUrl = "https://deckofcardsapi.com/api/deck/new/draw/?count=52";
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`Errore: ${response.status}`);
      }
      const data = await response.json();
      setCards((prevCards) => [
        ...prevCards,
        ...data.cards.map((card) => ({
          ...card,
          value:
            card.value === "QUEEN" ||
            card.value === "KING" ||
            card.value === "JACK"
              ? "10"
              : card.value === "ACE"
              ? "a"
              : card.value,
        })),
      ]);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchCards();
  }, []);

  if (error) {
    return <div>Errore: {error}</div>;
  }

  useEffect(() => {
    console.log(cards);
  }, [cards]);

  return (
    <>
      <div style={{ display: "none" }}>
        <Main />
      </div>
      <div>
        <AggiungiMazzo
          fetchCards={fetchCards}
          cards={cards}
          setCards={setCards}
        />
      </div>
      <Calcolo valore={valore} />
      <div>
        <Bottone data={cards} setCards={setCards} setValore={setValore} />
        <Bottone data={cards} setCards={setCards} setValore={setValore} />
        <Bottone data={cards} setCards={setCards} setValore={setValore} />
        <Bottone data={cards} setCards={setCards} setValore={setValore} />
        <Bottone data={cards} setCards={setCards} setValore={setValore} />
        <Bottone data={cards} setCards={setCards} setValore={setValore} />
        <Bottone data={cards} setCards={setCards} setValore={setValore} />
        <Bottone data={cards} setCards={setCards} setValore={setValore} />
        <Bottone data={cards} setCards={setCards} setValore={setValore} />
      </div>
    </>
  );
}

export default App;

//Fare in modo che posso reindirizzare quanti mazzi voglio e con lo spread operator, vado ad eliminare l'elemento selezionato dall'input

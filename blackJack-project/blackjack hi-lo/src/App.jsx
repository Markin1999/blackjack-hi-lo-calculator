import { useState, useEffect } from "react";
import "./App.css";
import { Bottone } from "./Componenti/Bottone";
import Main from "./Componenti/Main";
import AggiungiMazzo from "./Componenti/AggiungiMazzo";
import Calcolo from "./Componenti/Calcolo";
import RemoveCard from "./Componenti/removeCardd";
import Apc from "./Componenti/apc";

function App() {
  const [cards, setCards] = useState([]);
  const [error, setError] = useState(null);
  const [valore, setValore] = useState(0);
  const [cards2, setCards2] = useState([]);
  const [value1, setValue1] = useState([]);
  const [value2, setValue2] = useState([]);

  const fetchCards = async () => {
    const apiUrl = "https://deckofcardsapi.com/api/deck/new/draw/?count=52";
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`Errore: ${response.status}`);
      }
      const data = await response.json();

      setCards2((prevCards) => [
        ...prevCards,
        ...data.cards.map((card) => ({
          ...card,
          value:
            card.value === "QUEEN" ||
            card.value === "KING" ||
            card.value === "JACK" ||
            card.value === "10"
              ? "0"
              : card.value === "ACE"
              ? "1"
              : card.value,
        })),
      ]);

      setCards((prevCards) => [
        ...prevCards,
        ...data.cards.map((card) => ({
          ...card,
          value:
            card.value === "QUEEN" ||
            card.value === "KING" ||
            card.value === "JACK"
              ? "0"
              : card.value === "ACE"
              ? "1"
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
      <div className="container">
        <div>
          <Main />
        </div>
        <div style={{ display: "none" }}>
          <div className="btn btn-1">
            <Bottone data={cards} setCards={setCards} setValore={setValore} />
          </div>
          <div className="btn btn-2">
            <Bottone data={cards} setCards={setCards} setValore={setValore} />
          </div>
          <div className="btn btn-3">
            <Bottone data={cards} setCards={setCards} setValore={setValore} />
          </div>
          <div className="btn btn-4">
            <Bottone data={cards} setCards={setCards} setValore={setValore} />
          </div>
          <div className="btn btn-5">
            <Bottone data={cards} setCards={setCards} setValore={setValore} />
          </div>
          <div className="btn btn-6">
            <Bottone data={cards} setCards={setCards} setValore={setValore} />
          </div>
          <div className="btn btn-7">
            <Bottone data={cards} setCards={setCards} setValore={setValore} />
          </div>
          <div className="btn btn-8">
            <Bottone data={cards} setCards={setCards} setValore={setValore} />
          </div>
          <div className="btn btn-9">
            <Bottone data={cards} setCards={setCards} setValore={setValore} />
          </div>
        </div>
      </div>
      <div className="container-main">
        <AggiungiMazzo
          fetchCards={fetchCards}
          cards={cards}
          setCards={setCards}
        />
      </div>
      <div className="calcolo">
        <Calcolo
          valore={valore}
          cards={cards}
          value1={value1}
          setValue1={setValue1}
          value2={value2}
          setValue2={setValue2}
        />
      </div>

      <Apc
        cards={cards}
        setCards={setCards}
        cards2={cards2}
        setValore={setValore}
      />
    </>
  );
}

export default App;

//Fare in modo che posso reindirizzare quanti mazzi voglio e con lo spread operator, vado ad eliminare l'elemento selezionato dall'input

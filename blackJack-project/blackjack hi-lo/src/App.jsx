import { useState, useEffect } from "react";
import "./App.css";
import { Bottone } from "./Componenti/Bottone";
import Main from "./Componenti/Main";

function App() {
  const [cards, setCards] = useState([]);
  const [error, setError] = useState(null);

  const fetchCards = async () => {
    const apiUrl = "https://deckofcardsapi.com/api/deck/new/draw/?count=52";
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`Errore: ${response.status}`);
      }
      const data = await response.json();
      setCards((prevCards) => [...prevCards, ...data.cards]);
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

  return (
    <>
      <div>
        <Main />
      </div>

      <div>
        <Bottone data={cards} />
      </div>
    </>
  );
}

export default App;

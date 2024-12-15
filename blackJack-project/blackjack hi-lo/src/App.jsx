import { useState, useEffect } from "react";
import "./App.css";
import { Bottone } from "./Componenti/Bottone";
import Main from "./Componenti/Main";
import AggiungiMazzo from "./Componenti/AggiungiMazzo";
import Calcolo from "./Componenti/Calcolo";
import Apc from "./Componenti/apc";
import Aside from "./Componenti/aside";

function App() {
  const [cards, setCards] = useState([]);
  const [error, setError] = useState(null);
  const [valore, setValore] = useState(0);
  const [cards2, setCards2] = useState([]);
  const [value1, setValue1] = useState([]);
  const [value2, setValue2] = useState([]);
  const [valueA, setValueA] = useState([]);
  const [valueSecond, setValueSecond] = useState([]);
  const [value3, setValue3] = useState([]);
  const [value4, setValue4] = useState([]);
  const [value5, setValue5] = useState([]);
  const [value6, setValue6] = useState([]);
  const [value7, setValue7] = useState([]);
  const [value8, setValue8] = useState([]);
  const [value9, setValue9] = useState([]);
  const [value10, setValue10] = useState([]);

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
            card.value === "JACK" ||
            card.value === "10"
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

      <Aside
        valueA={valueA}
        setValueA={setValueA}
        valueSecond={valueSecond}
        setValueSecond={setValueSecond}
        value3={value3}
        setValue3={setValue3}
        value4={value4}
        setValue4={setValue4}
        value5={value5}
        setValue5={setValue5}
        value6={value6}
        setValue6={setValue6}
        value7={value7}
        setValue7={setValue7}
        value8={value8}
        setValue8={setValue8}
        value9={value9}
        setValue9={setValue9}
        value10={value10}
        setValue10={setValue10}
        cards={cards}
      />
    </>
  );
}

export default App;

//Devo aggiungere il calcolo a un unita. la puntata mina e 5 euro, quindi un unita equivale a 5 euro.
//Poi, se: TC +2: Punta 40€ (4 unità).
//TC +3: Punta 60€ (6 unità).
//TC +4: Punta 100€ (10 unità).

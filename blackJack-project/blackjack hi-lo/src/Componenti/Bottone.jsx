import { useState, useEffect } from "react";

export function Bottone({ data, setCards, setValore }) {
  const [attivo, setAttivo] = useState(false);
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  const [filteredCards, setFilteredCards] = useState([]);

  function onChange(event) {
    const newValue = event.target.value;
    setValue(newValue);
    findCards(newValue, value2);

    setCards((prevCards) => {
      const index = prevCards.findIndex((card) => card.value === newValue);
      if (index !== -1) {
        const updatedCards = [...prevCards];
        updatedCards.splice(index, 1);
        return updatedCards;
      }
      return prevCards;
    });

    setValore((prevValore) => {
      if (newValue === "a" || newValue === "0") {
        return prevValore - 1;
      } else if (newValue === "7" || newValue === "8" || newValue === "9") {
        return prevValore - 0;
      } else if (
        newValue === "2" ||
        newValue === "3" ||
        newValue === "4" ||
        newValue === "5" ||
        newValue === "6"
      ) {
        return prevValore + 1;
      }
    });
  }

  function onChangeSecond(event) {
    const newValue2 = event.target.value;
    setValue2(newValue2);
    findCards(value, newValue2);

    setCards((prevCards) => {
      const indexToRemove = prevCards.findIndex(
        (card) => card.value === newValue2
      );
      if (indexToRemove !== -1) {
        const updatedCards = [...prevCards];
        updatedCards.splice(indexToRemove, 1);
        return updatedCards;
      }
      return prevCards;
    });
    setValore((prevValore) => {
      if (newValue2 === "a" || newValue2 === "0") {
        return prevValore - 1;
      } else if (newValue2 === "7" || newValue2 === "8" || newValue2 === "9") {
        return prevValore - 0;
      } else if (
        newValue2 === "2" ||
        newValue2 === "3" ||
        newValue2 === "4" ||
        newValue2 === "5" ||
        newValue2 === "6"
      ) {
        return prevValore + 1;
      } else {
        prevValore;
      }
    });
  }

  function findCards(input1, input2) {
    const firstMatchInput1 = data.find((card) => card.value === input1);
    const firstMatchInput2 = data.find((card) => card.value === input2);

    const results = [];
    if (firstMatchInput1) results.push(firstMatchInput1);
    if (firstMatchInput2) results.push(firstMatchInput2);

    setFilteredCards(results);
  }

  function click() {
    setAttivo(true);
  }

  function disattiva() {
    setAttivo(false);
  }

  function pulisciInput() {
    setValue("");
    setValue2("");
  }

  return (
    <>
      {!attivo ? (
        <button className={"border-black"} onClick={click}>
          Attiva
        </button>
      ) : (
        <div>
          <button className={"border-black"} onClick={disattiva}>
            Disattiva
          </button>
          <button className={"border-black"} onClick={pulisciInput}>
            Pulisci
          </button>
          <input
            className={"border-black"}
            type="text"
            onChange={onChange}
            value={value}
            placeholder="Inserisci un valore carta"
          />
          <input
            className={"border-black"}
            type="text"
            onChange={onChangeSecond}
            value={value2}
            placeholder="Inserisci un altro valore carta"
          />
          <div>
            {filteredCards.length > 0 ? (
              filteredCards.map((card, index) => (
                <img
                  key={`${card.code}-${index}`}
                  src={card.image}
                  alt={`${card.value} of ${card.suit}`}
                  style={{ width: "58px", height: "58px", padding: "10px" }}
                />
              ))
            ) : (
              <p>Nessuna carta trovata</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}

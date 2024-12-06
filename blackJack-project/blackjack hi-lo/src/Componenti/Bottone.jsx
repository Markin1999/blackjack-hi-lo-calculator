import { useState, useEffect } from "react";

export function Bottone({ data, addToArray }) {
  const [attivo, setAttivo] = useState(false);
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  const [filteredCards, setFilteredCards] = useState([]);

  function onChange(event) {
    const newValue = event.target.value;
    setValue(newValue);
    findCards(newValue, value2);
  }

  function onChangeSecond(event) {
    const newValue2 = event.target.value;
    setValue2(newValue2);
    findCards(value, newValue2);
  }

  function click() {
    setAttivo(true);
  }

  function disattiva() {
    setAttivo(false);
  }

  function findCards(input1, input2) {
    const firstMatchInput1 = data.find((card) => card.value === input1);
    const firstMatchInput2 = data.find((card) => card.value === input2);

    const results = [];
    if (firstMatchInput1) results.push(firstMatchInput1);
    if (firstMatchInput2) results.push(firstMatchInput2);

    addToArray((prev) => [
      ...prev,
      ...results.filter((res) => !prev.includes(res)),
    ]);

    setFilteredCards(results);
  }

  return (
    <>
      {!attivo ? (
        <button onClick={click}>Attiva</button>
      ) : (
        <div>
          <button onClick={disattiva}>Disattiva</button>
          <input
            type="text"
            onChange={onChange}
            value={value}
            placeholder="Inserisci un valore carta"
          />
          <input
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

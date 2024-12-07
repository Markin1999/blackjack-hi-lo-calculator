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
      if (newValue2 === "1" || newValue2 === "0") {
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
    <div>
      {!attivo ? (
        <button
          style={{
            backgroundColor: "green",
            color: "white",
            border: "1px solid white",
          }}
          onClick={click}
        >
          +
        </button>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column-reverse",
          }}
        >
          <div style={{ display: "flex", gap: "2px", margin: "10px" }}>
            <div>
              <button
                style={{
                  backgroundColor: "red",
                  color: "white",
                  border: "1px solid white",
                }}
                onClick={disattiva}
              >
                -
              </button>
            </div>
            <div>
              <button onClick={pulisciInput}>Clear</button>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column-reverse",
              gap: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "5px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <input
                className="no-arrows border border-gray-300 rounded-md p-2"
                style={{
                  width: "50px",
                  height: "40px",
                  border: "1px solid black",
                  fontSize: "40px",
                  textAlign: "center",
                  verticalAlign: "middle",
                  lineHeight: "70px",
                }}
                type="number"
                onChange={onChange}
                value={value}
                min={0}
                max={9}
              />
              <input
                style={{
                  width: "50px",
                  height: "40px",
                  border: "1px solid black",
                  fontSize: "40px",
                  textAlign: "center",
                  verticalAlign: "middle",
                  lineHeight: "70px",
                }}
                type="number"
                onChange={onChangeSecond}
                value={value2}
                min={0}
                max={9}
              />
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
              {filteredCards.length > 0 ? (
                filteredCards.map((card, index) => (
                  <img
                    key={`${card.code}-${index}`}
                    src={card.image}
                    alt={`${card.value} of ${card.suit}`}
                    style={{ width: "70px", height: "70px", padding: "10px" }}
                  />
                ))
              ) : (
                <p>Nessuna carta trovata</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

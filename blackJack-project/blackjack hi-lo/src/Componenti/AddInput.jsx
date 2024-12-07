import { useState } from "react";

function AddInput({ setCards }) {
  const [attivo, setAttivo] = useState(0);
  const [value, setValue] = useState("");

  function onClick() {
    setAttivo((prevcount) => prevcount + 1);
  }

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

  function findCards(input1, input2) {
    const firstMatchInput1 = data.find((card) => card.value === input1);
    const firstMatchInput2 = data.find((card) => card.value === input2);

    const results = [];

    if (firstMatchInput1) results.push(firstMatchInput1);
    if (firstMatchInput2) results.push(firstMatchInput2);

    setFilteredCards(results);
  }

  return (
    <>
      <button onClick={onClick}> + </button>
      {(attivo === 1 ||
        attivo === 2 ||
        attivo === 3 ||
        attivo === 4 ||
        attivo === 5) && <input type="text" />}
    </>
  );
}

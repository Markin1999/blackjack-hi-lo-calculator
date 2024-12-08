import { useEffect } from "react";

export default function DataCards({
  value1,
  cards,
  setValue1,
  value2,
  setValue2,
}) {
  const mazzi = cards.length / 52;

  const highCardsTc = (value1.length / cards.length) * 100;

  const lowCardsTc = (value2.length / cards.length) * 100;

  const highLessLow = highCardsTc - lowCardsTc;

  const finalCount = highLessLow / mazzi;

  useEffect(() => {
    const filteredCards = cards.filter(
      (card) =>
        parseInt(card.value) === 1 ||
        parseInt(card.value) === 0 ||
        parseInt(card.value) === 10
    );
    setValue1(filteredCards);

    const filteredCards2 = cards.filter(
      (card) =>
        parseInt(card.value) === 2 ||
        parseInt(card.value) === 3 ||
        parseInt(card.value) === 4 ||
        parseInt(card.value) === 5 ||
        parseInt(card.value) === 6
    );
    setValue2(filteredCards2);
  }, [cards, setValue1, setValue2]);

  return (
    <>
      <p>Carte dal valore alto (10, e A): {value1.length}</p>
      <p>Probabilita carta alta: {highCardsTc.toFixed(2)} %</p>

      <p>Carte dal valore basso (dal 2 al 6): {value2.length}</p>
      <p>Probabilitaa carta bassa: {lowCardsTc.toFixed(2)} %</p>
      <p>{finalCount.toFixed(2)}</p>
    </>
  );
}

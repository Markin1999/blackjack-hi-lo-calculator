import { useEffect } from "react";

export default function DataCards({
  value1,
  cards,
  setValue1,
  value2,
  setValue2,
  valore,
}) {
  const mazzi = cards.length / 52;

  const highCardsTc = (value1.length / cards.length) * 100;

  const lowCardsTc = (value2.length / cards.length) * 100;

  const dynamicTC = valore / mazzi;

  const dynamicTC2 = value1.length / value2.length;

  const dynamicTC3 = dynamicTC / dynamicTC2;

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

      <p>Dynamic TC: {dynamicTC3.toFixed(2)}</p>

      <div>
        {dynamicTC3 > 4 ? (
          <p>Il mazzo è pieno di carte alte! (+10 unità)</p>
        ) : dynamicTC3 > 3 ? (
          <p>La prossima carta sarà probabilmente alta. (+6 unita)</p>
        ) : dynamicTC3 > 2 ? (
          <p>Buone probabilità per carte alte. (+4 unita)</p>
        ) : dynamicTC3 > 1 ? (
          <p>
            Il mazzo è leggermente favorevole. Gioca con intelligenza e valuta
            ogni mossa. (+ 1 unita)
          </p>
        ) : dynamicTC3 === 0 ? (
          <p>No previsioni al momento. Il mazzo è neutrale. (1 unita)</p>
        ) : dynamicTC3 < -5 ? (
          <p>
            Il mazzo è sfavorevole, pieno di carte basse. Lascia il tavolo se
            possibile. (1 unita)
          </p>
        ) : dynamicTC3 < -3 ? (
          <p>
            Le probabilità sono contro di te. Riduci al minimo le puntate. (1
            unita)
          </p>
        ) : dynamicTC3 < -2 ? (
          <p>
            La prossima carta sarà probabilmente bassa. Procedi con molta
            cautela. (1 unita)
          </p>
        ) : dynamicTC3 < -1 ? (
          <p>
            Il mazzo non è favorevole. Considera di ridurre le puntate o giocare
            più conservativo. (1 unita)
          </p>
        ) : (
          <p>No previsioni specifiche, resta attento al gioco. (1 unita)</p>
        )}
      </div>
    </>
  );
}

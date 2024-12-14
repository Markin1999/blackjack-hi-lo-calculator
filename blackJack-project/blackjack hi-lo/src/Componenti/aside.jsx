import { useEffect, useState } from "react";

export default function Aside({
  cards,
  valueA,
  setValueA,
  valueSecond,
  setValueSecond,
  value3,
  setValue3,
  value4,
  setValue4,
  value5,
  setValue5,
  value6,
  setValue6,
  value7,
  setValue7,
  value8,
  setValue8,
  value9,
  setValue9,
  value10,
  setValue10,
}) {
  const [arrayCard, setArrayCard] = useState(null);
  const [arrayCard2, setArrayCard2] = useState(null);
  const [arrayCard3, setArrayCard3] = useState(null);

  const high1 = (valueA.length / cards.length) * 100;
  const high2 = (valueSecond.length / cards.length) * 100;
  const high3 = (value3.length / cards.length) * 100;
  const high4 = (value4.length / cards.length) * 100;
  const high5 = (value5.length / cards.length) * 100;
  const high6 = (value6.length / cards.length) * 100;
  const high7 = (value7.length / cards.length) * 100;
  const high8 = (value8.length / cards.length) * 100;
  const high9 = (value9.length / cards.length) * 100;
  const high10 = (value10.length / cards.length) * 100;

  useEffect(() => {
    const filteredCards = cards.filter((card) => parseInt(card.value) === 1);
    setValueA(filteredCards);

    const filteredCards2 = cards.filter((card) => parseInt(card.value) === 2);
    setValueSecond(filteredCards2);

    const filteredCards3 = cards.filter((card) => parseInt(card.value) === 3);
    setValue3(filteredCards3);

    const filteredCards4 = cards.filter((card) => parseInt(card.value) === 4);
    setValue4(filteredCards4);

    const filteredCards5 = cards.filter((card) => parseInt(card.value) === 5);
    setValue5(filteredCards5);

    const filteredCards6 = cards.filter((card) => parseInt(card.value) === 6);
    setValue6(filteredCards6);

    const filteredCards7 = cards.filter((card) => parseInt(card.value) === 7);
    setValue7(filteredCards7);

    const filteredCards8 = cards.filter((card) => parseInt(card.value) === 8);
    setValue8(filteredCards8);

    const filteredCards9 = cards.filter((card) => parseInt(card.value) === 9);
    setValue9(filteredCards9);

    const filteredCards10 = cards.filter((card) => parseInt(card.value) === 0);
    setValue10(filteredCards10);

    const allFiltered = [
      { value: 1, cards: filteredCards },
      { value: 2, cards: filteredCards2 },
      { value: 3, cards: filteredCards3 },
      { value: 4, cards: filteredCards4 },
      { value: 5, cards: filteredCards5 },
      { value: 6, cards: filteredCards6 },
      { value: 7, cards: filteredCards7 },
      { value: 8, cards: filteredCards8 },
      { value: 9, cards: filteredCards9 },
      { value: 0, cards: filteredCards10 },
    ];

    const Top = allFiltered.sort((a, b) => b.cards.length - a.cards.length);

    setArrayCard(Top[0].cards); // Primo array più lungo
    setArrayCard2(Top[1].cards); // Secondo array più lungo
    setArrayCard3(Top[2].cards); // Terzo array più lungo

    console.log(arrayCard);
  }, [cards]);

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "10%",
          backgroundColor: "black",
          width: "100px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p style={{ color: "white", fontWeight: "1000" }}>CARTE</p>
        <p style={{ color: "white", fontWeight: "1000" }}>A: {valueA.length}</p>

        <p style={{ color: "white", fontWeight: "1000" }}>
          2: {valueSecond.length}
        </p>
        <p style={{ color: "white", fontWeight: "1000" }}>3: {value3.length}</p>
        <p style={{ color: "white", fontWeight: "1000" }}>4: {value4.length}</p>
        <p style={{ color: "white", fontWeight: "1000" }}>5: {value5.length}</p>
        <p style={{ color: "white", fontWeight: "1000" }}>6: {value6.length}</p>
        <p style={{ color: "white", fontWeight: "1000" }}>7: {value7.length}</p>
        <p style={{ color: "white", fontWeight: "1000" }}>8: {value8.length}</p>
        <p style={{ color: "white", fontWeight: "1000" }}>9: {value9.length}</p>
        <p style={{ color: "white", fontWeight: "1000" }}>
          10: {value10.length}
        </p>
      </div>

      <div
        style={{
          position: "absolute",
          color: "white",
          top: "50%",
          left: "10%",
        }}
      ></div>

      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "20%",
          display: "flex",
        }}
      >
        <div>
          {arrayCard && arrayCard.length > 0 && (
            <img
              key={`${arrayCard[0].code}`}
              src={arrayCard[0].image}
              alt={`${arrayCard[0].value} of ${arrayCard[0].suit}`} // Descrizione dinamica
              style={{ width: "100px", height: "90px", padding: "10px" }} // Stile
            />
          )}
        </div>
        <div>
          {arrayCard2 && arrayCard2.length > 0 && (
            <img
              key={`${arrayCard2[0].code}`}
              src={arrayCard2[0].image}
              alt={`${arrayCard2[0].value} of ${arrayCard2[0].suit}`}
              style={{ width: "100px", height: "90px", padding: "10px" }}
            />
          )}
        </div>

        <div>
          {arrayCard3 && arrayCard3.length > 0 && (
            <img
              key={`${arrayCard3[0].code}`}
              src={arrayCard3[0].image}
              alt={`${arrayCard3[0].value} of ${arrayCard3[0].suit}`}
              style={{ width: "100px", height: "90px", padding: "10px" }}
            />
          )}
        </div>
      </div>
    </>
  );
}

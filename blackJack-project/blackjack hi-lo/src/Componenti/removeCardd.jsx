import { useEffect, useState } from "react";

export default function RemoveCard({ cards, setCards, cards2, setValore }) {
  const [ultima, setUltima] = useState({});

  function onClick(valueToRemove) {
    setCards((prevFilteredCards) => {
      const firstMatch = prevFilteredCards.findIndex(
        (card) => parseInt(card.value) === valueToRemove
      );

      if (firstMatch !== -1) {
        const updatedCards = [...prevFilteredCards];
        updatedCards.splice(firstMatch, 1);
        return updatedCards;
      }
      return prevFilteredCards;
    });

    setUltima((prevUltima) => {
      const matchingCard = cards.find(
        (card) => parseInt(card.value) === valueToRemove
      );
      return matchingCard || prevUltima;
    });

    setValore((prevValore) => {
      const newValue = cards.find(
        (card) => parseInt(card.value) === valueToRemove
      );

      if (newValue) {
        const cardValue = newValue.value;
        if (cardValue === "1" || cardValue === "0") {
          return prevValore - 1;
        } else if (
          cardValue === "7" ||
          cardValue === "8" ||
          cardValue === "9"
        ) {
          return prevValore;
        } else if (["2", "3", "4", "5", "6"].includes(cardValue)) {
          return prevValore + 1;
        }
      }
      return prevValore;
    });
  }

  return (
    <>
      <div style={{ position: "absolute", top: "25%", left: "50%" }}>
        <img
          key={`${ultima.code}`}
          src={ultima.image}
          alt={`${ultima.value} of ${ultima.suit}`}
          style={{
            width: "120px",
            height: "140px",
            padding: "10px",
          }}
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          position: "absolute",
          top: "50%",
          left: "15%",
        }}
      >
        {cards2.length > 0 ? (
          <>
            {(() => {
              const card1 = cards2.find((card) => parseInt(card.value) === 1);
              return card1 ? (
                <img
                  onClick={() => onClick(parseInt(card1.value))}
                  key={`${card1.code}`}
                  src={card1.image}
                  alt={`${card1.value} of ${card1.suit}`}
                  style={{ width: "120px", height: "140px", padding: "10px" }}
                />
              ) : null;
            })()}
            {(() => {
              const card2 = cards2.find((card) => parseInt(card.value) === 2);
              return card2 ? (
                <img
                  onClick={() => onClick(parseInt(card2.value))}
                  key={`${card2.code}`}
                  src={card2.image}
                  alt={`${card2.value} of ${card2.suit}`}
                  style={{ width: "120px", height: "140px", padding: "10px" }}
                />
              ) : null;
            })()}
            {(() => {
              const card3 = cards2.find((card) => parseInt(card.value) === 3);
              return card3 ? (
                <img
                  onClick={() => onClick(parseInt(card3.value))}
                  key={`${card3.code}`}
                  src={card3.image}
                  alt={`${card3.value} of ${card3.suit}`}
                  style={{ width: "120px", height: "140px", padding: "10px" }}
                />
              ) : null;
            })()}
            {(() => {
              const card4 = cards2.find((card) => parseInt(card.value) === 4);
              return card4 ? (
                <img
                  onClick={() => onClick(parseInt(card4.value))}
                  key={`${card4.code}`}
                  src={card4.image}
                  alt={`${card4.value} of ${card4.suit}`}
                  style={{ width: "120px", height: "140px", padding: "10px" }}
                />
              ) : null;
            })()}
            {(() => {
              const card5 = cards2.find((card) => parseInt(card.value) === 5);
              return card5 ? (
                <img
                  onClick={() => onClick(parseInt(card5.value))}
                  key={`${card5.code}`}
                  src={card5.image}
                  alt={`${card5.value} of ${card5.suit}`}
                  style={{ width: "120px", height: "140px", padding: "10px" }}
                />
              ) : null;
            })()}
            {(() => {
              const card6 = cards2.find((card) => parseInt(card.value) === 6);
              return card6 ? (
                <img
                  onClick={() => onClick(parseInt(card6.value))}
                  key={`${card6.code}`}
                  src={card6.image}
                  alt={`${card6.value} of ${card6.suit}`}
                  style={{ width: "120px", height: "140px", padding: "10px" }}
                />
              ) : null;
            })()}
            {(() => {
              const card7 = cards2.find((card) => parseInt(card.value) === 7);
              return card7 ? (
                <img
                  onClick={() => onClick(parseInt(card7.value))}
                  key={`${card7.code}`}
                  src={card7.image}
                  alt={`${card7.value} of ${card7.suit}`}
                  style={{ width: "120px", height: "140px", padding: "10px" }}
                />
              ) : null;
            })()}
            {(() => {
              const card8 = cards2.find((card) => parseInt(card.value) === 8);
              return card8 ? (
                <img
                  onClick={() => onClick(parseInt(card8.value))}
                  key={`${card8.code}`}
                  src={card8.image}
                  alt={`${card8.value} of ${card8.suit}`}
                  style={{ width: "120px", height: "140px", padding: "10px" }}
                />
              ) : null;
            })()}
            {(() => {
              const card9 = cards2.find((card) => parseInt(card.value) === 9);
              return card9 ? (
                <img
                  onClick={() => onClick(parseInt(card9.value))}
                  key={`${card9.code}`}
                  src={card9.image}
                  alt={`${card9.value} of ${card9.suit}`}
                  style={{ width: "120px", height: "140px", padding: "10px" }}
                />
              ) : null;
            })()}
            {(() => {
              const card10 = cards2.find((card) => parseInt(card.value) === 0);
              return card10 ? (
                <img
                  onClick={() => onClick(parseInt(card10.value))}
                  key={`${card10.code}`}
                  src={card10.image}
                  alt={`${card10.value} of ${card10.suit}`}
                  style={{ width: "120px", height: "140px", padding: "10px" }}
                />
              ) : null;
            })()}
          </>
        ) : (
          <p>Nessuna carta trovata</p>
        )}
      </div>
    </>
  );
}

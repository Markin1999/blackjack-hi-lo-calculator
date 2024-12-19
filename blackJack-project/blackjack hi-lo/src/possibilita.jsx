import { useEffect, useRef, useState } from "react";

export default function Possibilita({ dynamicTC }) {
  const [messaggio, setMessaggio] = useState("");
  const [input1o, setInput1o] = useState("");
  const [inputMo, setInputMo] = useState("");
  const tc = dynamicTC;
  useEffect(() => {
    if (
      input1o &&
      Number(input1o) <= 21 &&
      inputMo &&
      Number(inputMo) <= 21 &&
      tc
    ) {
      if (Number(tc) <= -6) {
        if (Number(input1o) <= 10) {
          setMessaggio("No split, no raddoppi. Chiama carta");
        } else if (
          Number(input1o) === 11 &&
          Number(inputMo) >= 2 &&
          Number(inputMo) <= 6
        ) {
          setMessaggio("Raddoppia");
        } else if (
          Number(input1o) === 11 &&
          Number(inputMo) >= 7 &&
          Number(inputMo) <= 11
        ) {
          setMessaggio("Chiama carta");
        } else if (
          Number(input1o) === 12 &&
          Number(inputMo) >= 4 &&
          Number(inputMo) <= 6
        ) {
          setMessaggio("Resta");
        } else if (
          Number(input1o) === 12 &&
          ((Number(inputMo) >= 7 && Number(inputMo) <= 10) ||
            Number(inputMo) === 3 ||
            Number(inputMo) === 2)
        ) {
          setMessaggio("Chiedi carta");
        } else if (
          Number(input1o) === 13 &&
          Number(inputMo) >= 2 &&
          Number(inputMo) <= 6
        ) {
          setMessaggio("Resta");
        } else if (
          Number(input1o) === 13 &&
          Number(inputMo) >= 7 &&
          Number(inputMo) <= 11
        ) {
          setMessaggio("Chiedi carta");
        } else if (
          Number(input1o) === 14 &&
          Number(inputMo) >= 2 &&
          Number(inputMo) <= 6
        ) {
          setMessaggio("Resta");
        } else if (
          Number(input1o) === 14 &&
          Number(inputMo) >= 7 &&
          Number(inputMo) <= 11
        ) {
          setMessaggio("Chiedi carta");
        } else if (
          (Number(input1o) === 15 || Number(input1o) === 16) &&
          Number(inputMo) >= 2 &&
          Number(inputMo) <= 6
        ) {
          setMessaggio("Resta");
        } else if (
          (Number(input1o) === 15 || Number(input1o) === 16) &&
          Number(inputMo) >= 7 &&
          Number(inputMo) <= 11
        ) {
          setMessaggio("Se puoi arrenditi, altrimenti chiedi carta");
        } else if (
          Number(input1o) === 17 &&
          Number(inputMo) >= 2 &&
          Number(inputMo) <= 11
        ) {
          setMessaggio(
            "Resta di base. Se hai un Asso in mano, raddoppia se il mazziere ha una carta tra 2 e 6; in caso contrario, chiedi un'altra carta."
          );
        } else if (
          Number(input1o) === 18 &&
          Number(inputMo) >= 2 &&
          Number(inputMo) <= 11
        ) {
          setMessaggio(
            "Resta di base. Se hai un Asso in mano, raddoppia se il mazziere ha una carta tra 2 e 6; in caso contrario, resta."
          );
        } else if (
          (Number(input1o) === 19 || Number(input1o) === 20) &&
          Number(inputMo) >= 2 &&
          Number(inputMo) <= 11
        ) {
          setMessaggio("Resta");
        }
      } else if (Number(tc) <= -4) {
        if (Number(input1o) <= 9) {
          setMessaggio("No split, no raddoppi. Chiama carta");
        } else if (
          Number(input1o) === 10 &&
          Number(inputMo) >= 2 &&
          Number(inputMo) <= 9
        ) {
          setMessaggio("Raddoppia");
        } else if (
          Number(input1o) === 10 &&
          Number(inputMo) >= 10 &&
          Number(inputMo) <= 11
        ) {
          setMessaggio("Chiedi carta");
        } else if (Number(input1o) === 11) {
          setMessaggio("Raddoppia, o chiedi carta");
        } else if (
          Number(input1o) === 12 &&
          Number(inputMo) >= 4 &&
          Number(inputMo) <= 6
        ) {
          setMessaggio("Resta");
        } else if (
          Number(input1o) === 12 &&
          Number(inputMo) >= 2 &&
          Number(inputMo) <= 3
        ) {
          setMessaggio("Chiedi carta");
        } else if (
          Number(input1o) === 12 &&
          Number(inputMo) >= 7 &&
          Number(inputMo) <= 11
        ) {
          setMessaggio("Chiedi carta");
        } else if (
          Number(input1o) === 13 &&
          Number(inputMo) >= 2 &&
          Number(inputMo) <= 6
        ) {
          setMessaggio("Resta");
        } else if (
          Number(input1o) === 13 &&
          Number(inputMo) >= 7 &&
          Number(inputMo) <= 11
        ) {
          setMessaggio("Chiedi carta");
        } else if (
          Number(input1o) === 14 &&
          Number(inputMo) >= 2 &&
          Number(inputMo) <= 6
        ) {
          setMessaggio("Resta");
        } else if (
          Number(input1o) === 14 &&
          Number(inputMo) >= 7 &&
          Number(inputMo) <= 11
        ) {
          setMessaggio("Chiedi carta");
        } else if (
          Number(input1o) === 15 &&
          Number(inputMo) >= 2 &&
          Number(inputMo) <= 6
        ) {
          setMessaggio("Resta");
        } else if (
          Number(input1o) === 15 &&
          Number(inputMo) >= 7 &&
          Number(inputMo) <= 11
        ) {
          setMessaggio("Se puoi arrenditi, altrimenti chiedi carta");
        } else if (
          Number(input1o) === 16 &&
          Number(inputMo) >= 2 &&
          Number(inputMo) <= 6
        ) {
          setMessaggio("Resta");
        } else if (
          Number(input1o) === 16 &&
          Number(inputMo) >= 7 &&
          Number(inputMo) <= 11
        ) {
          setMessaggio("Se puoi arrenditi, altrimenti chiedi carta");
        } else if (
          Number(input1o) === 17 &&
          Number(inputMo) >= 7 &&
          Number(inputMo) <= 11
        ) {
          setMessaggio("Se hai un A chiedi carta, altrimenti resta.");
        } else if (
          Number(input1o) === 17 &&
          Number(inputMo) >= 2 &&
          Number(inputMo) <= 6
        ) {
          setMessaggio("Resta");
        } else if (
          (Number(input1o) === 18 ||
            Number(input1o) === 19 ||
            Number(input1o) === 20) &&
          Number(inputMo) >= 2 &&
          Number(inputMo) <= 11
        ) {
          setMessaggio("Resta");
        }
      } else if (Number(tc) <= -2) {
        if (Number(input1o) <= 9) {
          setMessaggio("No split, no raddoppi. Chiama carta");
        } else if (
          Number(input1o) === 10 &&
          Number(inputMo) >= 2 &&
          Number(inputMo) <= 6
        ) {
          setMessaggio("Raddoppia");
        } else if (
          Number(input1o) === 10 &&
          Number(inputMo) >= 7 &&
          Number(inputMo) <= 11
        ) {
          setMessaggio("Chiama carta");
        } else if (
          Number(input1o) === 11 &&
          Number(inputMo) >= 2 &&
          Number(inputMo) <= 6
        ) {
          setMessaggio("Raddoppia");
        } else if (
          Number(input1o) === 11 &&
          Number(inputMo) >= 7 &&
          Number(inputMo) <= 11
        ) {
          setMessaggio("Chiedi carta");
        } else if (
          Number(input1o) === 12 &&
          Number(inputMo) >= 4 &&
          Number(inputMo) <= 6
        ) {
          setMessaggio("Resta");
        } else if (
          Number(input1o) === 12 &&
          ((Number(inputMo) >= 2 && Number(inputMo) <= 3) ||
            (Number(inputMo) >= 7 && Number(inputMo) <= 11))
        ) {
          setMessaggio("Chiedi carta");
        } else if (
          Number(input1o) === 13 &&
          Number(inputMo) >= 2 &&
          Number(inputMo) <= 6
        ) {
          setMessaggio("Resta");
        } else if (
          Number(input1o) === 13 &&
          Number(inputMo) >= 7 &&
          Number(inputMo) <= 11
        ) {
          setMessaggio("Chiedi carta");
        } else if (
          Number(input1o) === 14 &&
          Number(inputMo) >= 2 &&
          Number(inputMo) <= 6
        ) {
          setMessaggio("Resta");
        } else if (
          Number(input1o) === 14 &&
          Number(inputMo) >= 7 &&
          Number(inputMo) <= 11
        ) {
          setMessaggio("Chiedi carta");
        } else if (
          (Number(input1o) === 15 || Number(input1o) === 16) &&
          Number(inputMo) >= 7 &&
          Number(inputMo) <= 11
        ) {
          setMessaggio("Se puoi dividi o arrenditi, altrimenti chiedi carta");
        } else if (
          (Number(input1o) === 15 || Number(input1o) === 16) &&
          Number(inputMo) >= 2 &&
          Number(inputMo) <= 6
        ) {
          setMessaggio("Se puoi dividi, altrimenti resta");
        } else if (
          Number(input1o) === 17 &&
          Number(inputMo) >= 3 &&
          Number(inputMo) <= 6
        ) {
          setMessaggio("Resta di base. Se hai un Asso in mano, raddoppia.");
        } else if (
          Number(input1o) === 17 &&
          (Number(inputMo) === 2 ||
            (Number(inputMo) >= 7 && Number(inputMo) <= 11))
        ) {
          setMessaggio("Resta di base. Se hai un Asso in mano, chiedi carta.");
        } else if (
          Number(input1o) === 18 &&
          Number(inputMo) >= 3 &&
          Number(inputMo) <= 6
        ) {
          setMessaggio("Resta di base. Se hai un Asso in mano, raddoppia.");
        } else if (
          Number(input1o) === 18 &&
          (Number(inputMo) === 2 ||
            (Number(inputMo) >= 7 && Number(inputMo) <= 11))
        ) {
          setMessaggio("Resta.");
        } else if (
          (Number(input1o) === 19 || Number(input1o) === 20) &&
          Number(inputMo) >= 2 &&
          Number(inputMo) <= 11
        ) {
          setMessaggio("Resta");
        }
      }
      /*else if ("Qui modifichi il dtc a 0") {
      }*/
    } else {
      setMessaggio("ATTESA CARTE");
    }

    console.log(messaggio);
  }, [input1o, inputMo, tc]);

  return (
    <div
      style={{
        position: "absolute",
        top: "20%",
        backgroundColor: "white",
        left: "80%",
        padding: "5px",
      }}
    >
      <div>
        <h6>INSERISCI LA TUA SOMMA</h6>

        <input
          type="text"
          value={input1o}
          onChange={(e) => setInput1o(e.target.value)}
          style={{
            width: "80px",
            border: "1px solid #ccc",
            padding: "4px",
            borderRadius: "4px",
          }}
        />
      </div>
      <p>{messaggio}</p>
      <div>
        <h6>MAZZIERE</h6>
        <input
          type="text"
          value={inputMo}
          onChange={(e) => setInputMo(e.target.value)}
          style={{
            width: "80px",
            border: "1px solid #ccc",
            padding: "4px",
            borderRadius: "4px",
          }}
        />
      </div>
    </div>
  );
}

import { useEffect, useRef, useState } from "react";

export default function Possibilita({ dynamicTC }) {
  const [messaggio, setMessaggio] = useState("");
  const [input1o, setInput1o] = useState("");
  const [input2o, setInput2o] = useState("");
  const [inputMo, setInputMo] = useState("");

  useEffect(() => {
    const input1 = Number(input1o);
    const input2 = Number(input2o);
    const inputM = Number(inputMo);
    const tc = dynamicTC;

    if (input1 && input2 && inputM && tc) {
      let decisione = "";

      // Controlla se input1 è un Asso (1) e quindi mano soft
      if (input1 === 1 || input2 === 1) {
        const softTotal2 =
          input1 === 1 ? input1 + 10 + input2 : input1 + input2 + 10;
        const softTotal = input1 + input2;

        // Logica per il Dynamic True Count (DTC)
        switch (softTotal2) {
          case 13: // A,2
            if (tc >= 6 && inputM <= 4) decisione = "Raddoppia";
            else if (tc >= 2 && inputM === 4) decisione = "Raddoppia";
            else if (inputM >= 5 && inputM <= 6) decisione = "Raddoppia";
            else decisione = "Chiedi";
            break;

          case 14: // A,3
            if (tc >= 6 && inputM <= 4) decisione = "Raddoppia";
            else if (tc >= 2 && inputM === 4) decisione = "Raddoppia";
            else if (inputM >= 5 && inputM <= 6) decisione = "Raddoppia";
            else decisione = "Chiedi";
            break;

          case 15: // A,4
            if (tc >= 6 && inputM <= 4) decisione = "Raddoppia";
            else if (tc >= 2 && inputM === 3) decisione = "Raddoppia";
            else if (inputM >= 4 && inputM <= 6) decisione = "Raddoppia";
            else decisione = "Chiedi";
            break;

          case 16: // A,5
            if (tc >= 6 && inputM <= 4) decisione = "Raddoppia";
            else if (tc >= 2 && inputM === 3) decisione = "Raddoppia";
            else if (inputM >= 4 && inputM <= 6) decisione = "Raddoppia";
            else decisione = "Chiedi";
            break;

          case 17: // A,6
            if (inputM >= 2 && inputM <= 6) decisione = "Raddoppia";
            else if (tc >= 4 && inputM <= 3) decisione = "Raddoppia";
            else decisione = "Chiedi";
            break;

          case 18: // A,7
            if (inputM >= 2 && inputM <= 6) decisione = "Raddoppia";
            else if (inputM === 7) decisione = "Stai";
            else if (tc >= 4 && inputM === 2) decisione = "Raddoppia";
            else decisione = "Chiedi";
            break;

          case 19: // A,8
            if (tc >= 6 && (inputM === 5 || inputM === 6))
              decisione = "Raddoppia";
            else decisione = "Stai";
            break;

          case 20: // A,9
            decisione = "Stai";
            break;

          default:
            decisione = "Chiedi";
            break;
        }
      } else {
        decisione = "Non è una mano soft (A + seconda carta)";
      }

      setMessaggio(decisione);
    } else {
      setMessaggio("Inserisci tutte le carte");
    }
  }, [input1o, input2o, inputMo, dynamicTC]);

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
        <h6>INSERISCI LE TUE CARTE</h6>

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
        <input
          type="text"
          value={input2o}
          onChange={(e) => setInput2o(e.target.value)}
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

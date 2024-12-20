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
      } else if (Number(tc) <= -4 && Number(tc) >= -6) {
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
      }

      // INIZIO -2 TC
      else if (Number(tc) <= -2 && Number(tc) >= -4) {
        if (Number(input1o) <= 7) {
          setMessaggio("Chiama carta");
        }

        // 8
        else if (
          Number(input1o) === 8 &&
          Number(inputMo) >= 5 &&
          Number(inputMo) <= 6
        ) {
          setMessaggio("Se 4-4, split altrimenti chiedi carta");
        } else if (
          Number(input1o) === 8 &&
          ((Number(inputMo) >= 2 && Number(inputMo) <= 4) ||
            (Number(inputMo) >= 7 && Number(inputMo) <= 11))
        ) {
          setMessaggio("Chiedi carta");
        }

        //9
        else if (
          Number(input1o) === 9 &&
          Number(inputMo) >= 3 &&
          Number(inputMo) <= 6
        ) {
          setMessaggio("Raddoppia");
        } else if (
          Number(input1o) === 8 &&
          (Number(inputMo) === 2 ||
            (Number(inputMo) >= 7 && Number(inputMo) <= 11))
        ) {
          setMessaggio("Chiedi carta");
        }

        //
        else if (
          (Number(input1o) === 10 || Number(input1o) === 11) &&
          Number(inputMo) >= 2 &&
          Number(inputMo) <= 8
        ) {
          setMessaggio("Raddoppia");
        } else if (
          (Number(input1o) === 10 || Number(input1o) === 11) &&
          Number(inputMo) >= 9 &&
          Number(inputMo) <= 11
        ) {
          setMessaggio("Chiama carta");
        }

        //
        else if (
          Number(input1o) === 12 &&
          Number(inputMo) >= 4 &&
          Number(inputMo) <= 6
        ) {
          setMessaggio("Se 6-6 dividi, altrimenti resta.");
        } else if (
          Number(input1o) === 12 &&
          ((Number(inputMo) >= 2 && Number(inputMo) <= 3) ||
            (Number(inputMo) >= 7 && Number(inputMo) <= 11))
        ) {
          setMessaggio("Chiedi carta");
        }

        //
        else if (
          Number(input1o) === 13 &&
          Number(inputMo) >= 2 &&
          Number(inputMo) <= 5
        ) {
          setMessaggio("Se A-2 chiedi carta, altrimenti resta");
        } else if (Number(input1o) === 13 && Number(inputMo) === 6) {
          setMessaggio("Se A-2 raddoppia. Altrimenti resta");
        } else if (
          Number(input1o) === 13 &&
          Number(inputMo) >= 7 &&
          Number(inputMo) <= 11
        ) {
          setMessaggio("Chiedi carta");
        }

        //
        else if (
          Number(input1o) === 14 &&
          Number(inputMo) >= 2 &&
          Number(inputMo) <= 5
        ) {
          setMessaggio("Se A-3, chiedi carta, se 7-7 split, altrimenti resta");
        } else if (
          Number(input1o) === 14 &&
          Number(inputMo) >= 7 &&
          Number(inputMo) <= 11
        ) {
          setMessaggio("Chiedi carta");
        } else if (Number(input1o) === 14 && Number(inputMo) === 6) {
          setMessaggio("Se A-3 raddoppia, se 7-7 split, altrimenti resta");
        }

        //
        //
        else if (
          (Number(input1o) === 15 || Number(input1o) === 16) &&
          Number(inputMo) >= 2 &&
          Number(inputMo) <= 3
        ) {
          setMessaggio("Se A-4 chiedi carta, altrimenti resta");
        } else if (
          (Number(input1o) === 15 || Number(input1o) === 16) &&
          Number(inputMo) === 4
        ) {
          setMessaggio("Se A-4 chiedi carta, altrimenti resta.");
        } else if (
          (Number(input1o) === 15 || Number(input1o) === 16) &&
          Number(inputMo) >= 5 &&
          Number(inputMo) <= 6
        ) {
          setMessaggio("Se A-4 raddoppia, altrimenti resta");
        } else if (
          (Number(input1o) === 15 || Number(input1o) === 16) &&
          Number(inputMo) >= 7 &&
          Number(inputMo) <= 11
        ) {
          setMessaggio("Se puoi arrenditi, altrimenti chiedi carta");
        }

        //
        //
        else if (
          (Number(input1o) === 17 &&
            Number(inputMo) >= 2 &&
            Number(inputMo) <= 3) ||
          (Number(inputMo) >= 7 && Number(inputMo) <= 11)
        ) {
          setMessaggio("Se A-6 chiedi carta, altrimenti resta");
        } else if (
          Number(input1o) === 17 &&
          Number(inputMo) >= 4 &&
          Number(inputMo) <= 6
        ) {
          setMessaggio("Se A-6 raddoppia, altrimenti resta");
        }

        //
        else if (
          Number(input1o) === 18 &&
          (Number(inputMo) === 2 ||
            (Number(inputMo) >= 7 && Number(inputMo) <= 8))
        ) {
          setMessaggio("Con A-7 resta, con 9-9 dividi, altrimenti resta");
        } else if (Number(input1o) === 18 && Number(inputMo) === 3) {
          setMessaggio("Se A-7, chiedi carta, se 9-9 split, altrimenti resta.");
        } else if (
          Number(input1o) === 18 &&
          Number(inputMo) >= 4 &&
          Number(inputMo) <= 6
        ) {
          setMessaggio("Se A-7, raddoppia, se 9-9 split, altrimenti resta.");
        } else if (
          Number(input1o) === 18 &&
          Number(inputMo) >= 10 &&
          Number(inputMo) <= 11
        ) {
          setMessaggio(
            "Se A-7, chiedi carta, se 9-9 chiedi carta, altrimenti resta."
          );
        } else if (Number(input1o) === 18 && Number(inputMo) === 9) {
          setMessaggio("Se A-7, chiedi carta, se 9-9 split, altrimenti resta.");
        }

        //
        else if (
          (Number(input1o) === 19 || Number(input1o) === 20) &&
          Number(inputMo) >= 2 &&
          Number(inputMo) <= 11
        ) {
          setMessaggio("Resta");
        }
      } // FINE -2 TC
      else if (
        (Number(tc) >= 0 && Number(tc) <= 2) ||
        (Number(tc) <= 0 && Number(tc) >= -2)
      ) {
        if (Number(input1o) <= 8) {
          setMessaggio(
            "Splitta con coppia di A.Con coppia 2 o 3 splitta (Maz: 3 a 6) Altrimenti carta"
          );
        } else if (
          Number(input1o) === 9 &&
          (Number(inputMo) === 2 ||
            (Number(inputMo) >= 7 && Number(inputMo) <= 11))
        ) {
          setMessaggio("Chiedi carta.");
        } else if (
          Number(input1o) === 9 &&
          Number(inputMo) >= 3 &&
          Number(inputMo) <= 6
        ) {
          setMessaggio("Raddoppia");
        } else if (
          Number(input1o) === 10 &&
          Number(inputMo) >= 2 &&
          Number(inputMo) <= 9
        ) {
          setMessaggio("Raddoppia.");
        } else if (
          Number(input1o) === 10 &&
          Number(inputMo) >= 10 &&
          Number(inputMo) <= 11
        ) {
          setMessaggio("Chiedi carta.");
        } else if (
          Number(input1o) === 11 &&
          Number(inputMo) >= 2 &&
          Number(inputMo) <= 9
        ) {
          setMessaggio("Raddoppia");
        } else if (
          Number(input1o) === 11 &&
          Number(inputMo) >= 10 &&
          Number(inputMo) <= 11
        ) {
          setMessaggio("Chiedi carta.");
        } else if (
          Number(input1o) === 12 &&
          (Number(inputMo) === 2 ||
            (Number(inputMo) >= 7 && Number(inputMo) <= 11))
        ) {
          setMessaggio("Chiedi carta.");
        } else if (Number(input1o) === 12 && Number(inputMo) === 3) {
          setMessaggio("Splitta con 6 e 6. Altrimenti chiedi carta");
        } else if (
          Number(input1o) === 12 &&
          Number(inputMo) >= 4 &&
          Number(inputMo) <= 6
        ) {
          setMessaggio("Splitta con 6 e 6. Altrimenti resta.");
        } else if (
          Number(input1o) === 13 &&
          Number(inputMo) >= 5 &&
          Number(inputMo) <= 6
        ) {
          setMessaggio("Raddoppia con A e 2. Altrimenti resta.");
        } else if (
          Number(input1o) === 13 &&
          Number(inputMo) >= 2 &&
          Number(inputMo) <= 4
        ) {
          setMessaggio("Resta.");
        } else if (
          Number(input1o) === 13 &&
          Number(inputMo) >= 7 &&
          Number(inputMo) <= 11
        ) {
          setMessaggio("Chiedi carta.");
        } else if (
          Number(input1o) === 14 &&
          Number(inputMo) >= 5 &&
          Number(inputMo) <= 6
        ) {
          setMessaggio(
            "Raddoppia con A e 3. Splitta con 7 e 7. Altrimenti resta."
          );
        } else if (
          Number(input1o) === 14 &&
          Number(inputMo) >= 2 &&
          Number(inputMo) <= 4
        ) {
          setMessaggio("Se 7 e 7 splitta. Altrimenti resta.");
        } else if (
          Number(input1o) === 14 &&
          Number(inputMo) >= 8 &&
          Number(inputMo) <= 11
        ) {
          setMessaggio("Chiedi carta.");
        } else if (Number(input1o) === 14 && Number(inputMo) === 7) {
          setMessaggio("Se 7 e 7 splitta. Altrimenti chiedi carta.");
        } else if (
          Number(input1o) === 15 &&
          Number(inputMo) >= 4 &&
          Number(inputMo) <= 6
        ) {
          setMessaggio("Se A-4, raddoppia, altrimenti resta. ");
        } else if (
          Number(input1o) === 15 &&
          Number(inputMo) >= 2 &&
          Number(inputMo) <= 3
        ) {
          setMessaggio("Resta ");
        } else if (
          Number(input1o) === 15 &&
          Number(inputMo) >= 7 &&
          Number(inputMo) <= 11
        ) {
          setMessaggio("Chiedi carta ");
        } else if (
          Number(input1o) === 16 &&
          Number(inputMo) >= 4 &&
          Number(inputMo) <= 6
        ) {
          setMessaggio("Se A-5, raddoppia. Se 8-8 splitta, altrimenti resta. ");
        } else if (
          Number(input1o) === 16 &&
          Number(inputMo) >= 2 &&
          Number(inputMo) <= 3
        ) {
          setMessaggio(
            "Se A-5, chiedi carta. Se 8-8 splitta, altrimenti resta. "
          );
        } else if (
          Number(input1o) === 16 &&
          ((Number(inputMo) >= 7 && Number(inputMo) <= 9) ||
            Number(input1o) === 11)
        ) {
          setMessaggio("Se 8-8 splitta, altrimenti chiedi carta. ");
        } else if (Number(input1o) === 16 && Number(inputMo) === 10) {
          setMessaggio("Chiedi carta. ");
        } else if (
          Number(input1o) === 17 &&
          Number(inputMo) >= 3 &&
          Number(inputMo) <= 6
        ) {
          setMessaggio("Se A-6 raddoppia, altrimenti resta");
        } else if (
          Number(input1o) === 17 &&
          (Number(inputMo) === 2 ||
            (Number(inputMo) <= 7 && Number(inputMo) <= 11))
        ) {
          setMessaggio("Se A-6 chiedi carta, altrimenti resta");
        }

        //18
        else if (
          Number(input1o) === 18 &&
          Number(inputMo) >= 3 &&
          Number(inputMo) <= 6
        ) {
          setMessaggio("Se A-7 raddoppia. Se 9-9 splitta, altrimenti resta");
        } else if (
          Number(input1o) === 18 &&
          (Number(inputMo) === 7 ||
            (Number(inputMo) >= 10 && Number(inputMo) <= 11))
        ) {
          setMessaggio("Se A-7 chiedi carta, altrimenti resta");
        } else if (
          Number(input1o) === 18 &&
          (Number(inputMo) === 2 ||
            (Number(inputMo) >= 8 && Number(inputMo) <= 9))
        ) {
          setMessaggio("Se A-7 raddoppia, se 9-9, dividi, altrimenti resta");
        } else if (
          (Number(input1o) === 19 || Number(input1o) === 20) &&
          Number(inputMo) >= 2 &&
          Number(inputMo) <= 11
        ) {
          setMessaggio("Resta");
        }
      } else if (Number(tc) >= 2 && Number(tc) <= 4) {
        if (Number(input1o) <= 7) {
          setMessaggio(
            "Splitta con coppia di A.Con coppia 2 o 3 splitta (Maz: 3 a 6) Altrimenti carta"
          );
        } else if (
          Number(input1o) === 8 &&
          ((Number(inputMo) >= 2 && Number(inputMo) <= 4) ||
            (Number(inputMo) >= 7 && Number(inputMo) <= 11))
        ) {
          setMessaggio("Chiedi carta.");
        } else if (
          Number(input1o) === 8 &&
          Number(inputMo) >= 5 &&
          Number(inputMo) <= 6
        ) {
          setMessaggio("Raddoppia.");
        } else if (
          Number(input1o) === 9 &&
          Number(inputMo) >= 2 &&
          Number(inputMo) <= 6
        ) {
          setMessaggio("Raddoppia.");
        } else if (
          Number(input1o) === 9 &&
          Number(inputMo) >= 7 &&
          Number(inputMo) <= 11
        ) {
          setMessaggio("Chiedi carta.");
        } else if (
          (Number(input1o) === 10 || Number(input1o) === 11) &&
          Number(inputMo) >= 2 &&
          Number(inputMo) <= 11
        ) {
          setMessaggio("Raddoppia");
        } else if (
          Number(input1o) === 12 &&
          Number(inputMo) >= 2 &&
          Number(inputMo) <= 6
        ) {
          setMessaggio("Dividi con 6 e 6. Altrimenti resta");
        } else if (
          Number(input1o) === 12 &&
          Number(inputMo) >= 7 &&
          Number(inputMo) <= 11
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
          Number(inputMo) <= 3
        ) {
          setMessaggio("Se A-2 chiedi carta, altrimenti resta.");
        } else if (
          Number(input1o) === 13 &&
          Number(inputMo) >= 4 &&
          Number(inputMo) <= 6
        ) {
          setMessaggio("Raddoppia con A-2, altrimenti resta.");
        } else if (
          Number(input1o) === 13 &&
          Number(inputMo) >= 7 &&
          Number(inputMo) <= 11
        ) {
          setMessaggio("Chiedi carta.");
        } else if (
          Number(input1o) === 14 &&
          Number(inputMo) >= 2 &&
          Number(inputMo) <= 3
        ) {
          setMessaggio("Se 7-7 dividi, altrimenti chiedi carta.");
        } else if (
          Number(input1o) === 14 &&
          Number(inputMo) >= 4 &&
          Number(inputMo) <= 6
        ) {
          setMessaggio("Raddoppia con A-3. Con 7-7 dividi, altrimenti resta.");
        } else if (
          Number(input1o) === 14 &&
          Number(inputMo) >= 7 &&
          Number(inputMo) <= 11
        ) {
          setMessaggio("Chiedi carta.");
        } else if (
          Number(input1o) === 15 &&
          Number(inputMo) >= 2 &&
          Number(inputMo) <= 3
        ) {
          setMessaggio("Se A-4 chiedo carta, altrimenti resta");
        } else if (
          Number(input1o) === 15 &&
          Number(inputMo) >= 4 &&
          Number(inputMo) <= 6
        ) {
          setMessaggio("Raddoppia con A-4, altrimenti resta.");
        } else if (
          Number(input1o) === 15 &&
          Number(inputMo) >= 7 &&
          Number(inputMo) <= 11
        ) {
          setMessaggio("Chiedi carta.");
        } else if (
          Number(input1o) === 16 &&
          Number(inputMo) >= 2 &&
          Number(inputMo) <= 3
        ) {
          setMessaggio("Se A-5 chiedi carta. Se 8-8 dividi, altrimenti resta");
        } else if (
          Number(input1o) === 16 &&
          Number(inputMo) >= 4 &&
          Number(inputMo) <= 6
        ) {
          setMessaggio("Raddoppia con A-5, se 8-8 dividi, altrimenti resta.");
        } else if (
          Number(input1o) === 16 &&
          Number(inputMo) >= 7 &&
          Number(inputMo) <= 11
        ) {
          setMessaggio(
            "Se puoi arrenditi, se 8-8 dividi, altrimenti chiedi carta."
          );
        } else if (
          Number(input1o) === 17 &&
          Number(inputMo) >= 2 &&
          Number(inputMo) <= 3
        ) {
          setMessaggio("Resta");
        } else if (
          Number(input1o) === 17 &&
          Number(inputMo) >= 4 &&
          Number(inputMo) <= 6
        ) {
          setMessaggio("Raddoppia con A-6, altrimenti resta.");
        } else if (
          Number(input1o) === 17 &&
          Number(inputMo) >= 7 &&
          Number(inputMo) <= 11
        ) {
          setMessaggio("Resta.");
        } else if (
          Number(input1o) === 18 &&
          Number(inputMo) >= 3 &&
          Number(inputMo) <= 6
        ) {
          setMessaggio("Raddoppia con A-7, altrimenti resta");
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
      } else if (Number(tc) >= 4) {
        if (Number(input1o) <= 7) {
          setMessaggio(
            "Splitta con coppia di A.Con coppia 2 o 3 splitta (Maz: 2 a 6) Altrimenti carta"
          );
        } else if (
          Number(input1o) === 8 &&
          Number(inputMo) >= 4 &&
          Number(inputMo) <= 6
        ) {
          setMessaggio("Raddoppia.");
        } else if (
          Number(input1o) === 8 &&
          ((Number(inputMo) >= 2 && Number(inputMo) <= 3) ||
            (Number(inputMo) >= 7 && Number(inputMo) <= 11))
        ) {
          setMessaggio("Chiedi carta.");
        } else if (
          Number(input1o) === 9 &&
          Number(inputMo) >= 2 &&
          Number(inputMo) <= 6
        ) {
          setMessaggio("Raddoppia.");
        } else if (
          Number(input1o) === 9 &&
          Number(inputMo) >= 7 &&
          Number(inputMo) <= 11
        ) {
          setMessaggio("Chiedi carta.");
        } else if (
          (Number(input1o) === 10 || Number(input1o) === 11) &&
          Number(inputMo) >= 2 &&
          Number(inputMo) <= 8
        ) {
          setMessaggio("Raddoppia.");
        } else if (
          (Number(input1o) === 10 || Number(input1o) === 11) &&
          Number(inputMo) >= 9 &&
          Number(inputMo) <= 11
        ) {
          setMessaggio("Chiedi carta.");
        } else if (
          Number(input1o) === 12 &&
          Number(inputMo) >= 2 &&
          Number(inputMo) <= 6
        ) {
          setMessaggio("Split con 6 e 6, altrimenti resta.");
        } else if (
          Number(input1o) === 12 &&
          Number(inputMo) >= 7 &&
          Number(inputMo) <= 11
        ) {
          setMessaggio("Chiedi carta");
        } else if (
          Number(input1o) === 13 &&
          Number(inputMo) >= 5 &&
          Number(inputMo) <= 6
        ) {
          setMessaggio("Raddoppia con A-2, altrimenti resta.");
        } else if (
          Number(input1o) === 13 &&
          ((Number(inputMo) >= 2 && Number(inputMo) <= 4) ||
            (Number(inputMo) >= 7 && Number(inputMo) <= 11))
        ) {
          setMessaggio("Chiedi carta con A-2, altrimenti resta.");
        } else if (
          Number(input1o) === 14 &&
          Number(inputMo) >= 2 &&
          Number(inputMo) <= 6
        ) {
          setMessaggio("Se 7-7 split, se A-3 raddoppia, altrimenti resta");
        } else if (Number(input1o) === 14 && Number(inputMo) === 7) {
          setMessaggio("Se 7-7 split, altrimenti chiedi carta");
        } else if (
          Number(input1o) === 14 &&
          Number(inputMo) >= 8 &&
          Number(inputMo) <= 11
        ) {
          setMessaggio("Chiedi carta");
        } else if (
          Number(input1o) === 15 &&
          Number(inputMo) >= 2 &&
          Number(inputMo) <= 3
        ) {
          setMessaggio("Chiedi carta");
        } else if (
          Number(input1o) === 15 &&
          Number(inputMo) >= 4 &&
          Number(inputMo) <= 6
        ) {
          setMessaggio("Se A-4 raddoppia, altrimenti stai");
        } else if (
          Number(input1o) === 15 &&
          Number(inputMo) >= 7 &&
          Number(inputMo) <= 11
        ) {
          setMessaggio("Chiedi carta");
        } else if (
          Number(input1o) === 16 &&
          Number(inputMo) >= 2 &&
          Number(inputMo) <= 3
        ) {
          setMessaggio("Se 8-8 split, se A-5 chiedi carta, altrimenti resta");
        } else if (
          Number(input1o) === 16 &&
          Number(inputMo) >= 4 &&
          Number(inputMo) <= 6
        ) {
          setMessaggio("Se 8-8 split, se A-5 raddoppia, altrimenti resta");
        } else if (
          Number(input1o) === 16 &&
          Number(inputMo) >= 7 &&
          Number(inputMo) <= 11
        ) {
          setMessaggio("Se 8-8 split, altrimenti arrenditi o chiedi carta");
        } else if (
          Number(input1o) === 17 &&
          Number(inputMo) >= 3 &&
          Number(inputMo) <= 6
        ) {
          setMessaggio("Se A-6 raddoppia, altrimenti resta");
        } else if (
          Number(input1o) === 17 &&
          (Number(inputMo) === 2 ||
            (Number(inputMo) >= 7 && Number(inputMo) <= 11))
        ) {
          setMessaggio("Se A-6 chiedi carta, altrimenti resta");
        } else if (
          Number(input1o) === 18 &&
          Number(inputMo) >= 3 &&
          Number(inputMo) <= 6
        ) {
          setMessaggio("Se A-7 raddoppia, se 9-9 split, altrimenti resta");
        } else if (
          Number(input1o) === 18 &&
          (Number(inputMo) === 2 ||
            (Number(inputMo) >= 7 && Number(inputMo) <= 9))
        ) {
          setMessaggio("se 9-9 split, altrimenti resta");
        } else if (
          Number(input1o) === 18 &&
          Number(inputMo) >= 10 &&
          Number(inputMo) <= 11
        ) {
          setMessaggio("Se A-7 chiedi carta, altrimenti resta");
        } else if (
          (Number(input1o) === 19 || Number(input1o) === 20) &&
          Number(inputMo) >= 2 &&
          Number(inputMo) <= 11
        ) {
          setMessaggio("Resta");
        }
      } /*else if ("Qui modifichi il dtc a +6") {
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

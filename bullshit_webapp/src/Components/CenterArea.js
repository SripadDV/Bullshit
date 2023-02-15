import "./CenterArea.css";
import Guess from "./Guess";
import Message from "./Message";
import { useState } from "react";

const CenterArea = (props) => {
  // const [guess, setGuess] = useState({ otp: "" });
  // const [msg, setMsg] = useState("Guess the number");
  const guess = props.guess;
  const setGuess = props.setGuess;
  const msg = props.msg;
  const setMsg = props.setMsg;
  const tries = props.tries;
  const setTries = props.setTries;
  const logs = props.logs;
  const setLogs = props.setLogs;
  const newGame = props.newGame;
  const handleChange = (otp) => {
    if (/^[0-9]*$/.test(otp)) {
      if (tries > 0) {
        setGuess({ otp });
      }
    }
    //setGuess({ otp });
    console.log(otp);
    console.log(guess.otp);
  };
  return (
    <div className="centerarea">
      <Message message={msg} />
      <Guess
        handleChange={handleChange}
        guess={guess}
        tries={tries}
        setTries={setTries}
        setMsg={setMsg}
        setGuess={setGuess}
        logs={logs}
        setLogs={setLogs}
        newGame={newGame}
      />
    </div>
  );
};

export default CenterArea;

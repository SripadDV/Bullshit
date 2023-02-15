import "./Container.css";
import LeftBar from "./LeftBar";
import CenterArea from "./CenterArea";
import { useState } from "react";
import RightBar from "./RightBar";

const Container = () => {
  const [tries, setTries] = useState(10);
  const [logs, setLogs] = useState([]);
  const [guess, setGuess] = useState({ otp: "" });
  const [msg, setMsg] = useState("Guess the number");
  const [newGame, setNewGame] = useState(false);
  return (
    <div className="container">
      <LeftBar
        tries={tries}
        setGuess={setGuess}
        setMsg={setMsg}
        setLogs={setLogs}
        setTries={setTries}
        setNewGame={setNewGame}
      />
      <CenterArea
        guess={guess}
        setGuess={setGuess}
        msg={msg}
        setMsg={setMsg}
        tries={tries}
        setTries={setTries}
        logs={logs}
        setLogs={setLogs}
        newGame={newGame}
      />
      <RightBar logs={logs} setLogs={setLogs} />
    </div>
  );
};

export default Container;

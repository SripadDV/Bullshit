import "./LeftBar.css";
import NewGame from "./NewGame";
import TriesRemaining from "./TriesRemaining";

const LeftBar = (props) => {
  const tries = props.tries;
  const setGuess = props.setGuess;
  const setMsg = props.setMsg;
  const setLogs = props.setLogs;
  const setTries = props.setTries;
  const setNewGame = props.setNewGame;
  return (
    <div className="leftbar">
      <TriesRemaining tries={tries} />
      <NewGame
        tries={tries}
        setGuess={setGuess}
        setMsg={setMsg}
        setLogs={setLogs}
        setTries={setTries}
        setNewGame={setNewGame}
      />
    </div>
  );
};
export default LeftBar;

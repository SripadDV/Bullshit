import React from "react";
import "./NewGame.css";

function NewGame(props) {
  const setGuess = props.setGuess;
  const setMsg = props.setMsg;
  const setLogs = props.setLogs;
  const setTries = props.setTries;
  const setNewGame = props.setNewGame;

  const newGame = (e) => {
    e.preventDefault();
    console.log("new game");
    setGuess({ opt: "" });
    setMsg("Guess the number");
    setLogs([]);
    setTries(10);
    setNewGame((newGame) => !newGame);
  };

  return (
    <div className="NewGame">
      <form>
        <button type="submit" onClick={newGame} className="button">
          {" "}
          New Game{" "}
        </button>
      </form>
    </div>
  );
}

export default NewGame;

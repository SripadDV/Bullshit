import React from "react";
import "./RightBar.css";

function RightBar(props) {
  const logs = props.logs;
  const setLogs = props.setLogs;
  return (
    <div className="RightBar">
      <div className="GuessHeader">Guesses</div>
      {logs.map((log) => {
        return (
          <div className="Logs">
            <span>{log}</span>
          </div>
        );
      })}
    </div>
  );
}

export default RightBar;

import React, { useEffect } from "react";
import OtpInput from "react-otp-input";
import { useState } from "react";
import "./Guess.css";

function Guess(props) {
  let [targetNum, setTargetNum] = useState(0);
  let newGame = props.newGame;
  useEffect(() => {
    let temp = generateNum(
      Array.from({ length: 9 }, (_, i) => i + 1),
      0,
      0
    );
    setTargetNum(temp);

    console.log("targetNum");
    console.log(temp);
  }, [newGame]);

  const handleChange = props.handleChange;
  const guess = props.guess;
  const tries = props.tries;
  const setTries = props.setTries;
  const setMsg = props.setMsg;
  const setGuess = props.setGuess;
  const logs = props.logs;
  const setLogs = props.setLogs;

  const checkGuess = (e) => {
    e.preventDefault();
    if (tries > 0) {
      if (guess.otp.length === 4) {
        const set = new Set(String(guess.otp).split(""));
        console.log(set);
        console.log(set.size);
        if (set.size == 4) {
          // Your code to check the guess goes here
          console.log("Guess is ");
          console.log(guess);

          console.log(tries);

          const resp = processGuess(guess, targetNum);
          if (resp.result) {
            setMsg("Correct Number");
          } else {
            postLog(resp, logs, setLogs);
            if (tries > 1) {
              setMsg("Try again");
              setTimeout(() => setMsg("Guess the number"), 1000);
              setGuess({ otp: "" });
              setTries(tries - 1);
            } else {
              setMsg("Game Over");
              setGuess({ otp: targetNum });
              setTries(0);
            }
          }
        } else {
          setGuess({ otp: "" });
          setMsg("Repeted digits not allowed");
          setTimeout(() => setMsg("Guess the number"), 1000);
        }
      } else {
        //alert("Please enter a value in all fields");
        setMsg("Plese input all 4 digits");
      }
    }
  };

  return (
    <div>
      <form className="form">
        <OtpInput
          value={guess.otp}
          onChange={handleChange}
          numInputs={4}
          separator={<span> - </span>}
          containerStyle="guess"
          className="OTP"
          inputStyle="OTP_Style"
        />
        <button type="submit" onClick={checkGuess} className="guessButton">
          {" "}
          Guess{" "}
        </button>
      </form>
    </div>
  );
}

export default Guess;

const processGuess = (guess, targetNum, log, setLogs) => {
  console.log("process guess");
  console.log(guess.otp);
  console.log(targetNum);
  if (guess.otp == targetNum) {
    return { result: true };
  } else {
    const guessDigits = String(guess.otp)
      .split("")
      .map((num) => {
        return Number(num);
      });

    const targetDigits = String(targetNum)
      .split("")
      .map((num) => {
        return Number(num);
      });

    const cows = guessDigits.filter((val, idx) => {
      return targetDigits[idx] === val;
    });
    const bulls = guessDigits.filter((val) => {
      return targetDigits.includes(val);
    });
    console.log("target ", targetDigits, "guess ", guessDigits);
    console.log("Cows ", cows, " bulls ", bulls);
    return {
      result: false,
      guessNum: guess.otp,
      cows: cows.length,
      bulls: bulls.length - cows.length,
    };
  }
};

const postLog = (resp, logs, setLogs) => {
  let log = "Guess: " + String(resp.guessNum);
  if (resp.cows || resp.bulls) {
    log += " Cows: " + String(resp.cows) + " Bulls: " + String(resp.bulls);
  } else {
    log += "  Bullshit";
  }

  setLogs([log, ...logs]);
};

const generateNum = (range, n, num) => {
  if (n == 4) {
    return num;
  }
  const i = Math.floor(Math.random() * range.length);
  const m = range[i];
  range.splice(i, 1);
  if (n == 0) {
    range = [0, ...range];
  }
  num += m * Math.pow(10, 3 - n);
  //console.log("generate num ", m, n);
  return generateNum(range, n + 1, num);
};

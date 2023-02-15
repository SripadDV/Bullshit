import "./TriesRemaining.css";

const TriesRemaining = (props) => {
  const tries = props.tries;
  return (
    <div className="TriesRemaining">
      <div>Guesses remaining</div>
      <div> {tries} </div>
    </div>
  );
};

export default TriesRemaining;

import React from "react";

function GuessForm({ enabledInput, submitGuess }) {
  const [guess, setGuess] = React.useState("");
  return (
    <>
      <form
        className="guess-input-wrapper"
        onSubmit={(event) => {
          event.preventDefault();
          submitGuess(guess);
          setGuess("");
        }}
      >
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          value={guess}
          pattern="[a-zA-Z]{5}"
          maxLength={5}
          minLength={5}
          disabled={!enabledInput}
          onChange={(event) => {
            setGuess(event.target.value.toUpperCase());
          }}
        />
      </form>
    </>
  );
}

export default GuessForm;

import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "../Guess/Guess";

function GuessList({ guesses }) {
  return (
    <>
      <div className="guess-results">
        {range(0, NUM_OF_GUESSES_ALLOWED, 1).map((x, index) => (
          <Guess key={Math.random()} Guess={guesses[index]}></Guess>
        ))}
      </div>
    </>
  );
}

export default GuessList;

import React from "react";
import { range } from "../../utils";

function Guess({ Guess }) {
  return (
    <>
      <p className="guess">
        {range(0, 5, 1).map((x, index) => (
          <span
            key={Math.random()}
            className={`${Guess && Guess.status[index].status} cell`}
          >
            {Guess && Guess.status[index].letter}
          </span>
        ))}
      </p>
    </>
  );
}

export default Guess;

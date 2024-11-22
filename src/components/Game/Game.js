import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import GuessForm from "../GuessForm/GuessForm";
import GuessList from "../GuessList/GuessList";
import Banner from "../Banner/Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [endOfGame, setEndOfGame] = React.useState(false);
  const [victory, setVictory] = React.useState(false);

  function submitGuess(guess) {
    const statusGuess = checkGuess(guess, answer);
    const newGuesses = [...guesses, { guess, status: statusGuess }];
    setGuesses(newGuesses);
    if (newGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setEndOfGame(true);
      setVictory(false);
    }
    if (statusGuess.every((x) => x.status === "correct")) {
      setEndOfGame(true);
      setVictory(true);
    }
  }
  return (
    <>
      <GuessList guesses={guesses}></GuessList>
      <GuessForm
        enabledInput={!endOfGame}
        submitGuess={submitGuess}
      ></GuessForm>
      {endOfGame && (
        <Banner
          Answer={answer}
          GuessCount={guesses.length}
          Success={victory}
        ></Banner>
      )}
    </>
  );
}

export default Game;

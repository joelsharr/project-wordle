import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import GameBanner from '../GameBanner';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  const updateGuesses = (newGuess) => {
    const updatedGuesses = [...guesses, newGuess];
    setGuesses(updatedGuesses);
    if (newGuess === answer || updatedGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setGameOver(true);
    }
  }

  return (
    <>
      <GuessResults
        guesses={guesses}
        correctWord={answer}
      />
      <GuessInput
        updateGuesses={updateGuesses}
        disabled={gameOver}
      />
      {gameOver && 
        <GameBanner
          didWin={guesses.at(-1) === answer}
          correctAnswer={answer}
          numGuesses={guesses.length}
        />
      }
    </>
  );
}

export default Game;

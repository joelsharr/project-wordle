import React from 'react';
import Guess from '../Guess/Guess';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';

function GuessResults({
  guesses,
  correctWord,
}) {
  return (
    <div className='guess-results'>
      {range(0, NUM_OF_GUESSES_ALLOWED, 1).map((ind) => (
        <Guess guess={ind < guesses.length ? checkGuess(guesses[ind], correctWord) : []} key={ind} />
      ))}
    </div>
  );
}

export default GuessResults;

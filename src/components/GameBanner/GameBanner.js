import React from 'react';

function GameBanner({
  didWin,
  correctAnswer,
  numGuesses,
}) {
  return <div className={`${didWin ? 'happy' : 'sad'} banner`}>
    {didWin ? <p>
      <strong>Congratulations!</strong> Got it in{' '}
      <strong>{numGuesses} {guesses}</strong>
    </p> : <p>
      Sorry, the correct answer is <strong>{correctAnswer}</strong>.
    </p>
    }
  </div>
}

export default GameBanner;

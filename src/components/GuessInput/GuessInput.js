import React, { useState } from 'react';

function GuessInput({ updateGuesses, disabled }) {
  const [guess, setGuess] = useState('');
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        console.log({ guess });
        updateGuesses(guess);
        setGuess('');
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        minLength={5}
        maxLength={5}
        id="guess-input"
        type="text"
        value={guess}
        pattern="[a-zA-Z]{5}"
        title='Enter five characters.'
        onChange={(e) => {
          setGuess(e.target.value.toUpperCase());
        }}
        disabled={disabled}
      />
    </form>
  );
}

export default GuessInput;

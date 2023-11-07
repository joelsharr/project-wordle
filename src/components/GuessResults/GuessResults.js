import React from 'react';

function GuessResults({guesses}) {
  return (
    <div className='guess-results'>
      {guesses.map((g, index) => <p className='guess' key={index}>{g}</p>)}
    </div>
  );
}

export default GuessResults;

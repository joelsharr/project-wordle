import React from 'react';
import { range } from '../../utils';

function Guess({
  guess
}) {
  return <p className='guess'>
    {range(0, 5, 1).map((ind) => (
      <span className={`cell ${guess.length ? guess[ind]['status'] : ''}`} key={ind}>{guess.length ? guess[ind]['letter'] : undefined}</span>
    ))}
  </p>;
}

export default Guess;

import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
  {directors.map((d, idx) => <div key={idx}>{d.name} <ul>{d.movies.map((m, idx) => <li key={idx}>{m}</li>)}</ul></div>)}
    </div>
  );
}

export default Directors

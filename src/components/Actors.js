import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
  {actors.map((actor, idx) => <div key={idx}>{actor.name} <ul>{actor.movies.map((m, idx) => <li key={idx}>{m}</li>)}</ul></div>)}
    </div>
  );
};

export default Actors;

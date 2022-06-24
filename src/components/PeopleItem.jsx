import React from 'react';
import '../styles/App.css';

function PeopleItem({ person }) {
  return (
    <div id={person.name} className='individual-person'>
      <h2 className='person-name'>{person.name}</h2>
      <div className='person-details'>
        <p>Birth Year: {person.birth_year}</p>
        <p>Height: {person.height} cm</p>
        <p>Mass: {person.mass} kg</p>
      </div>
    </div>
  );
}

export default PeopleItem;

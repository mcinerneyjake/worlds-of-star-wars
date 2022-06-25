import React from 'react';
import '../styles/App.css';

function PeopleItem(planet) {
  if (planet.planet.url === planet.person.homeworld) {
    return (
      <div className='people-container'>
        <div id={planet.person.name} className='individual-person'>
          <h3>{planet.person.name}</h3>
          <div className='person-details'>
            <p>Birth Year: {planet.person.birth_year}</p>
            <p>Height: {planet.person.height} cm</p>
            <p>Mass: {planet.person.mass} kg</p>
          </div>
        </div>
      </div>
    );
  }
}

export default PeopleItem;

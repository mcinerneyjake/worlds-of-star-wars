import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/App.css';

function PeopleItem() {
  const residents = useSelector((store) => store.residentsOfOnePlanetReducer);

  return (
    <div className='people-container'>
      {residents &&
        residents.map((person) => {
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
        })}
    </div>
  );
}

export default PeopleItem;

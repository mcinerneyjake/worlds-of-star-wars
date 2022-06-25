import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PeopleItem from './PeopleItem';
import '../styles/App.css';

function PlanetItem({ planet }) {
  const navigate = useNavigate();
  const people = useSelector((store) => store.peopleReducer);

  const navToResidents = () => {
    console.log('clicked');
    navigate('/residents');
  };

  return (
    <div id={planet.name} className='individual-planet' onClick={navToResidents}>
      <h2 className='planet-name'>{planet.name}</h2>
      <div className='planet-details'>
        <p>Population: {planet.population}</p>
        <p>Climate: {planet.climate.charAt(0).toUpperCase() + planet.climate.slice(1)}</p>
        <p>Terrain: {planet.terrain.charAt(0).toUpperCase() + planet.terrain.slice(1)}</p>
        <p>Residents:</p>
        {people &&
          // eslint-disable-next-line array-callback-return
          people.map((person) => {
            return <PeopleItem planet={planet} person={person} />;
          })}
      </div>
    </div>
  );
}

export default PlanetItem;

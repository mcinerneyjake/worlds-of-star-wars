import React from 'react';
import '../styles/App.css';

function PlanetItem({ planet }) {



  return (
    <div id={planet.name} className='individual-planet'>
      <h2 className='planet-name'>{planet.name}</h2>
      <p>Population: {planet.population}</p>
      <p>Climate: {planet.climate.charAt(0).toUpperCase() + planet.climate.slice(1)}</p>
      <p>Terrain: {planet.terrain.charAt(0).toUpperCase() + planet.terrain.slice(1)}</p>
    </div>
  );
}

export default PlanetItem;

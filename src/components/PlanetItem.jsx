import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../styles/App.css';

function PlanetItem({ planet }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getResidents = () => {
    for (let resident of planet.residents) {
      console.log('resident.slice(29)**************************', resident.slice(29));
      dispatch(
        {
          type: 'FETCH_RESIDENTS_OF_ONE_PLANET',
          payload: [resident.slice(29)],
        },
        [dispatch]
      );
    }
    navigate('/residents');
  };

  return (
    <div id={planet.name} className='individual-planet' onClick={getResidents}>
      <h2 className='planet-name'>{planet.name}</h2>
      <div className='planet-details'>
        <p>Population: {planet.population}</p>
        <p>Climate: {planet.climate.charAt(0).toUpperCase() + planet.climate.slice(1)}</p>
        <p>Terrain: {planet.terrain.charAt(0).toUpperCase() + planet.terrain.slice(1)}</p>
      </div>
    </div>
  );
}

export default PlanetItem;

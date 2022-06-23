import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PlanetItem from './PlanetItem';
import '../styles/App.css';

function PlanetList() {
  const dispatch = useDispatch();
  const planets = useSelector((store) => store.planetReducer);

  useEffect(() => {
    dispatch({
      type: 'FETCH_PLANETS',
    });
    dispatch({
      type: 'FETCH_PEOPLE',
    });
  }, [dispatch]);

  return (
    <div className='planets-container'>
      <ul>
        {planets &&
          planets.map((planet) => {
            return <PlanetItem id={planet.name} planet={planet} />;
          })}
      </ul>
    </div>
  );
}

export default PlanetList;

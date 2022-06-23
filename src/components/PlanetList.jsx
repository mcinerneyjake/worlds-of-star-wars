import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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

  console.log('planets****************************', planets);

  return (
    <div className='planets-container'>
      <ul>
        {planets &&
          planets.map((planet) => {
            console.log('planet', planet);
            return (
              <li id={planet.name} className='individual-planet'>
                {planet.name}
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default PlanetList;

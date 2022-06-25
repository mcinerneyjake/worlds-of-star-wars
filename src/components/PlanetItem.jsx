import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../styles/App.css';

function PlanetItem({ planet }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const people = useSelector((store) => store.peopleReducer);

  const navToResidents = () => {
    let residentArray = [];
    people &&
      // eslint-disable-next-line array-callback-return
      people.filter((person) => {
        if (planet.url === person.homeworld) {
          residentArray.push(person.url.slice(29));
          // console.log(residentArray);

          dispatch({
            type: 'FETCH_RESIDENTS_OF_ONE_PLANET',
            payload: residentArray,
          });
        }
        return residentArray;
      });

    // console.log('resident.slice(29)**************************', resident.slice(29));

    navigate('/residents');
  };

  return (
    <div id={planet.name} className='individual-planet'>
      <h2 className='planet-name'>{planet.name}</h2>
      <div className='planet-details'>
        <p>Population: {planet.population}</p>
        <p>Climate: {planet.climate.charAt(0).toUpperCase() + planet.climate.slice(1)}</p>
        <p>Terrain: {planet.terrain.charAt(0).toUpperCase() + planet.terrain.slice(1)}</p>
        <button className='resident-button' onClick={navToResidents}>
          See Residents
        </button>
      </div>
    </div>
  );
}

export default PlanetItem;

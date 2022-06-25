import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PlanetItem from './PlanetItem';
import '../styles/App.css';

function PlanetList() {
  const dispatch = useDispatch();
  const planets = useSelector((store) => store.planetReducer);

  const [searchWord, setSearchWord] = useState('');

  useEffect(() => {
    dispatch({
      type: 'FETCH_PLANETS',
    });
    dispatch({
      type: 'FETCH_PEOPLE',
    });
  }, [dispatch]);

  console.log(searchWord);

  return (
    <>
      <div className='search-input-container'>
        <input
          type='text'
          placeholder='Search for a planet...'
          className='search-input'
          onChange={(e) => {
            setSearchWord(e.target.value);
          }}
        />
      </div>
      <div className='planets-container'>
        <ul>
          {planets &&
            planets
              // eslint-disable-next-line array-callback-return
              .filter((planet) => {
                if (searchWord === '') {
                  return planet;
                } else if (planet.name.toLowerCase().includes(searchWord.toLowerCase())) {
                  return planet;
                }
              })
              .map((planet) => {
                return (
                  <div>
                    <PlanetItem id={planet.name} planet={planet} />
                  </div>
                );
              })}
        </ul>
      </div>
    </>
  );
}

export default PlanetList;

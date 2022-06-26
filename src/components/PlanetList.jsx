import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PlanetItem from './PlanetItem';
import LoadingSpinner from './LoadingSpinner';
import '../styles/App.css';

function PlanetList() {
  const dispatch = useDispatch();
  const planets = useSelector((store) => store.planetReducer);

  const [searchWord, setSearchWord] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch({
      type: 'FETCH_PLANETS',
    });
    dispatch({
      type: 'FETCH_PEOPLE',
    });
    setTimeout(() => {
      setIsLoaded(true);
    }, 3000);
  }, [dispatch]);

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

      {isLoaded ? (
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
                  return <PlanetItem id={planet.name} planet={planet} />;
                })}
          </ul>
        </div>
      ) : (
        <>
          <div className='planets-container'>
            <LoadingSpinner />
          </div>
        </>
      )}
    </>
  );
}

export default PlanetList;

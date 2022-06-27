import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PlanetItem from './PlanetItem';
import LoadingSpinner from './LoadingSpinner';
import '../styles/App.css';

function PlanetList() {
  // use Methods
  const dispatch = useDispatch();

  // Redux Reducer
  const planets = useSelector((store) => store.planetReducer);

  // useState Functions
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
        {/* Search function for planets. */}
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
            {/* Spinner for API request down-time. */}
            <LoadingSpinner />
          </div>
        </>
      )}
    </>
  );
}

export default PlanetList;

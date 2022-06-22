import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function PlanetList() {
  const dispatch = useDispatch();
  const planets = useSelector((store) => store.planetReducer);

  useEffect(() => {
    dispatch({
      type: 'FETCH_PLANETS',
    });
  }, [dispatch]);

  return (
    <div>
      {planets.name}
      {/* {planets &&
        planets.map((planet) => {
          return <div>{planet}</div>;
        })} */}
    </div>
  );
}

export default PlanetList;

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../styles/App.css';

function PeopleList() {
  const dispatch = useDispatch();
  const people = useSelector((store) => store.peopleReducer);

  useEffect(() => {
    dispatch({
      type: 'FETCH_PEOPLE',
    });
  }, [dispatch]);

  return (
    <div className='planets-container'>
      <ul>
        {people &&
          people.map((person) => {
            return (
              <li id={person.name} className='individual-planet'>
                {person.name}
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default PeopleList;

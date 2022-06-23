import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/App.css';

function PeopleList() {
  const people = useSelector((store) => store.peopleReducer);

  return (
    <div className='people-container'>
      <ul>
        {people &&
          people.map((person) => {
            return (
              <li id={person.name} className='individual-person'>
                {person.name}
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default PeopleList;

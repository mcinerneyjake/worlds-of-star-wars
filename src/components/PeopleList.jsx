import React from 'react';
import { useSelector } from 'react-redux';
import PeopleItem from './PeopleItem';
import '../styles/App.css';

function PeopleList() {
  const people = useSelector((store) => store.peopleReducer);

  return (
    <div className='people-container'>
      <ul>
        {people &&
          people.map((person) => {
            return <PeopleItem id={person.name} person={person} />;
          })}
      </ul>
    </div>
  );
}

export default PeopleList;

// import React from 'react';
// import { useSelector } from 'react-redux';
// import '../styles/App.css';

// function PeopleList() {
//   const people = useSelector((store) => store.peopleReducer);

//   return (
//     <div className='people-container'>
//       <ul>
//         {people &&
//           people.map((person) => {
//             return (
//               <>
//                 <div id={person.name} className='individual-person'>
//                   <h2 className='person-name'>{person.name}</h2>
//                   <div className='person-details'>
//                     <p>Birth Year: {person.birth_year}</p>
//                     <p>Height: {person.height} cm</p>
//                     <p>Mass: {person.mass} kg</p>
//                   </div>
//                 </div>
//               </>
//             );
//           })}
//       </ul>
//     </div>
//   );
// }

// export default PeopleList;

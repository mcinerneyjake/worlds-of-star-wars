import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './Nav';
import PlanetList from './PlanetList';
import PeopleItem from './PeopleItem';
import '../styles/App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Nav />

        <Routes>
          <Route path='/home' element={<PlanetList />} />
          <Route path='/residents' element={<PeopleItem />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './Nav';
import PlanetList from './PlanetList';
import PeopleList from './PeopleList';
import '../styles/App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Nav />

        <Routes>
          <Route path='/home' element={<PlanetList />} />
          <Route path='/resident-name' element={<PeopleList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

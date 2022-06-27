import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from '@redux-saga/core';
import { takeEvery, put } from '@redux-saga/core/effects';
import axios from 'axios';

// Saga Functions

// fetch all planets
function* fetchPlanets() {
  try {
    const planets = yield axios.get('/planets');
    yield put({
      type: 'SET_PLANETS',
      payload: planets.data,
    });
  } catch (error) {
    console.log('GET planets error:', error);
  }
}

// fetch all people
function* fetchPeople() {
  try {
    const people = yield axios.get('/people');
    yield put({
      type: 'SET_PEOPLE',
      payload: people.data,
    });
  } catch (error) {
    console.log('GET people error:', error);
  }
}

// fetch residents of a specific planet
function* fetchResidentsOfOnePlanet(action) {
  console.log(action.payload);
  try {
    const person = yield axios.get(`/people/${action.payload}`);
    console.log('GET one person:', person.data);
    yield put({
      type: 'SET_RESIDENT',
      payload: person.data,
    });
  } catch (error) {
    console.log('GET one person error:', error);
  }
}

// Root Saga
function* rootSaga() {
  yield takeEvery('FETCH_PLANETS', fetchPlanets);
  yield takeEvery('FETCH_PEOPLE', fetchPeople);
  yield takeEvery('FETCH_RESIDENTS_OF_ONE_PLANET', fetchResidentsOfOnePlanet);
}

// Redux Reducers
const planetReducer = (state = [], action) => {
  if (action.type === 'SET_PLANETS') {
    return action.payload;
  }
  return state;
};

const peopleReducer = (state = [], action) => {
  if (action.type === 'SET_PEOPLE') {
    return action.payload;
  }
  return state;
};

const residentsOfOnePlanetReducer = (state = [], action) => {
  if (action.type === 'SET_RESIDENT') {
    return action.payload;
  }
  return state;
};

// Middleware
const sagaMiddleware = createSagaMiddleware();

// Store
const storeInstance = createStore(
  combineReducers({
    planetReducer,
    peopleReducer,
    residentsOfOnePlanetReducer,
  }),
  applyMiddleware(sagaMiddleware, logger)
);

// rootSage Middleware
sagaMiddleware.run(rootSaga);

// Root
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={storeInstance}>
      <App />
    </Provider>
  </React.StrictMode>
);

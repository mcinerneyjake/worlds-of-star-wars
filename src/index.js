import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from '@redux-saga/core';
import { takeEvery, put } from '@redux-saga/core/effects';
import axios from 'axios';

function* fetchPlanets() {
  try {
    const planets = yield axios.get('/planets');
    console.log('These are the planets in the fetchPlanets saga function:', planets.data);
    yield put({
      type: 'SET_PLANETS',
      payload: planets.data,
    });
  } catch (error) {
    console.log('GET planets error:', error);
  }
}

function* fetchPeople() {
  try {
    const people = yield axios.get('/people');
    console.log('These are the people in the fetchPeople saga function:', people.data);
    yield put({
      type: 'SET_PEOPLE',
      payload: people.data,
    });
  } catch (error) {
    console.log('GET people error:', error);
  }
}

function* rootSaga() {
  yield takeEvery('FETCH_PLANETS', fetchPlanets);
  yield takeEvery('FETCH_PEOPLE', fetchPeople);
}

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

const sagaMiddleware = createSagaMiddleware();

const storeInstance = createStore(
  combineReducers({
    planetReducer,
    peopleReducer,
  }),
  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={storeInstance}>
      <App />
    </Provider>
  </React.StrictMode>
);

// 'http://localhost:5000/planets'

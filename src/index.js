import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from '@redux-saga/core';
import { takeEvery, put } from '@redux-saga/core/effects';
import axios from 'axios';

function* fetchPlanets() {
  try {
    const planets = yield axios.get('http://localhost:5000/planets');
    console.log('These are the planets in the fetchPlanets saga function:', planets.data);
    yield put({
      type: 'SET_PLANETS',
      payload: planets.data.results,
    });
  } catch (error) {
    console.log('GET planets error:', error);
  }
}

function* rootSaga() {
  yield takeEvery('FETCH_PLANETS', fetchPlanets);
}

const planetReducer = (state = [], action) => {
  if (action.type === 'SET_PLANETS') {
    return action.payload;
  }
  return state;
};

const sagaMiddleware = createSagaMiddleware();

const storeInstance = createStore(
  combineReducers({
    planetReducer,
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
const express = require('express');
// const pool = require('../modules/pool');
const axios = require('axios');
const router = express.Router();

// GET all planets from swapi.dev Star Wars API

router.get('/', async (req, res) => {
  const allThePlanets = [];

  let url = 'https://swapi.dev/api/planets';
  try {
    while (url) {
      const response = await axios.get(url);
      // if (!response.ok) {
      //   throw new Error('HTTP error', response.status);
      // }
      // const { results, next } = response.data;
      const results = response.data.results;
      const next = response.data.next;

      allThePlanets.push(...results);
      url = next;
    }
    res.send(allThePlanets);
  } catch (error) {
    console.log('Error in GET all planets:', error);
  }
});

// // THIS WORKS FOR ONE PAGE GET REQUEST
// router.get('/', async (req, res) => {
//   try {
//     await axios.get('https://swapi.dev/api/planets').then((response) => {
//       console.log(response.data.next);
//       res.send(response.data);
//     });
//   } catch (error) {
//     console.log('Error in GET all planets:', error);
//   }
// });

module.exports = router;

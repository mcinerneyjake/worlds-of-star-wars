const express = require('express');
// const pool = require('../modules/pool');
const axios = require('axios');
const router = express.Router();

// GET all people from swapi.dev Star Wars API

router.get('/', async (req, res) => {
  const allThePeople = [];

  let url = 'https://swapi.dev/api/people';
  try {
    while (url) {
      const response = await axios.get(url);
      // if (!response.ok) {
      //   throw new Error('HTTP error', response.status);
      // }
      // const { results, next } = response.data;
      const results = response.data.results;
      const next = response.data.next;

      allThePeople.push(...results);
      console.log('next*******************', next);
      url = next;
    }
    console.log(allThePeople);
    res.send(allThePeople);
  } catch (error) {
    console.log('Error in GET all people:', error);
  }
});

module.exports = router;

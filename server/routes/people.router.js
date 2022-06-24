const express = require('express');
// const pool = require('../modules/pool');
const axios = require('axios');
const router = express.Router();

// GET all people from swapi.dev Star Wars API

router.get('/', async (req, res) => {
  const allThePeople = [];
  console.log('req.query', req.query)

  let url = 'https://swapi.dev/api/people';
  try {
    while (url) {
      const response = await axios.get(url);
      const results = response.data.results;
      const next = response.data.next;

      allThePeople.push(...results);
      url = next;
    }

    res.send(allThePeople);
  } catch (error) {
    console.log('Error in GET all people:', error);
  }
});

router.get('/:url', async (req, res) => {
  const getOnePerson = [];

  console.log(req.params.url);

  let url = `https://swapi.dev/api/people/${req.params.url}`;
  try {
    const response = await axios.get(url);
    console.log('GET one person response:', response);
    const results = response.data;
    console.log('results:', results);

    getOnePerson.push(results);
    
    res.send(getOnePerson);
  } catch (error) {
    console.log('Error in GET one person:', error);
  }
});

module.exports = router;

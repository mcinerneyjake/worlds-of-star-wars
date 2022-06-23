const express = require('express');
// const pool = require('../modules/pool');
const axios = require('axios');
const router = express.Router();

// GET all people from swapi.dev Star Wars API

router.get('/', async (req, res) => {
  try {
    await axios.get('https://swapi.dev/api/people').then((response) => {
      console.log(response.data);
      res.send(response.data);
    });
  } catch (error) {
    console.log('Error in GET all people:', error);
  }
});

module.exports = router;
const express = require('express');
// const pool = require('../modules/pool');
const axios = require('axios');
const router = express.Router();

// GET all planets from swapi.dev Star Wars API
router.get('/', (req, res) => {
  axios({
    method: 'GET',
    url: 'https://swapi.dev/api/planets',
  })
    .then((response) => {
      console.log(response);
      res.send(response.data);
    })
    .catch((error) => {
      console.log('Error in GET all planets:', error);
    });
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;

const express = require('express');
// const pool = require('../modules/pool');
const axios = require('axios');
const router = express.Router();

// GET all planets from swapi.dev Star Wars API

// router.get('/', async (url) => {
//   const result = [];
//   console.log(url);
//   try {
//     while (url) {
//       const response = await axios.get(url);
//       if (!response.ok) {
//         throw new Error('HTTP error', response.status);
//       }
//       const { data, next } = await response.json();
//       result.push(...data);
//       url = next;
//     }
//     return result;
//   } catch (error) {
//     console.log('Error in GET all planets:', error);
//   }
// });

// THIS WORKS FOR ONE PAGE GET REQUEST
router.get('/', async (req, res) => {
  try {
    await axios.get('https://swapi.dev/api/planets').then((response) => {
      console.log(response.data.next);
      res.send(response.data);
    });
  } catch (error) {
    console.log('Error in GET all planets:', error);
  }
});

module.exports = router;

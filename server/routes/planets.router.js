const express = require('express');
// const pool = require('../modules/pool');
const axios = require('axios');
const router = express.Router();

// GET all planets from swapi.dev Star Wars API

// let allPagesReceived = false;

router.get('/', async (req, res) => {
  try {
    axios({
      method: 'GET',
      url: 'https://swapi.dev/api/planets',
    }).then((response) => {
      console.log(response);
      res.send(response.data);
    });
  } catch (error) {
    console.log('Error in GET all planets:', error);
  }
});

// async function getMultiplePages(swapi) {
//   let allData = [];

//   let pagesFinished = false;
//   let nextUrl;

//   while (pagesFinished === false) {
//     if (nextUrl) {
//       const res = await axios.get(``);
//     } else {
//       const res = await axios.get(swapi);
//     }

//     allData.push(res.data);
//   }
//   return allData;
// }

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;

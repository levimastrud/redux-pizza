const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/menu', (req, res) => {
    console.log('GET /api/pizza');
    pool.query('SELECT * from "pizza";').then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET /api/pizza', error)
        res.sendStatus(500);
    });
})

// router.post('/cart', (req, res) => {
//     console.log('in cart');
//     let queryText = 'INSERT INTO "line_item" ("pizza_id", "quantity") VALUES ($1, $2)';
//     pool.query(queryText, [])
// })

module.exports = router;
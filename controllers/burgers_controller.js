const express = require('express');
const router = express.Router();

const burger = require('../models/burger.js');

// gets all burgers
router.get('/', (req, res) => {
    burger.all((data) => {
        res.render('index', { burgers: data });
    });
});

// post to add a new burger to the list
router.post('/api/burgers', (req, res) => {
    burger.insertOne(
        ['burger_name'],
        [req.body.burger_name],
        (data) => {
            res.json({ id: data.insertId });
        });
});

// put to update the devoured status of the burger
router.put('/api/burgers/:id', (req, res) => {
    let status = 'id = ' + req.params.id;
    burger.updateOne({
        devoured: true
    },
        status, (result) => {
            if (result.changedRows == 0) {
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        });
});

module.exports = router;
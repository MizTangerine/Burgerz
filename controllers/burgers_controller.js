const express = require('express');
const router = express.Router();

const connection = require('../models/burger.js');

// gets all burgers
router.get("/", (req, res) => {
    burger.all((data) => {
        const hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});

module.exports = router;
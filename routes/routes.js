const express = require('express');
const router = express.Router();


let today = require('../positive/affirmation.js');

router.get('/', (req, res) => {
    res.json({sendingLove: today()});
});


module.exports = router;
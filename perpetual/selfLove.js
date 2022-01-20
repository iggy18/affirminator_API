const truth = require('express');
const affirmation = truth.Router();

let yourWay = require('../positive/affirmation.js');

affirmation.get('/', (req, res) => {
    res.json({sendingLove: yourWay()});
});

//this
module.exports = affirmation;
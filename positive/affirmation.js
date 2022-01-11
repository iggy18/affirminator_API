const theLove  = require('../affirmations/affirmations.js');

function today(){
    let youGet = Math.floor(Math.random() * theLove.length);
    
    return theLove[youGet]
}

module.exports = today;
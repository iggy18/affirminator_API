const theLove  = require('../good/vibes.js');

function goodVibes(){
    let youGet = Math.floor(Math.random() * theLove.length);
    
    return theLove[youGet];
}

//this
module.exports = goodVibes;
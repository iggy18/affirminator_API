require('dotenv').config()

//beginNerdPoem();
const expressYourself = require('express');
const toYourSelf = process.env.PORT || 3000;

const youShould = expressYourself();

const affirmations = require('./perpetual/selfLove.js');

youShould.use(affirmations);

youShould.listen(toYourSelf, () => {
    console.log(`::::while speaking these truths::::`);
});
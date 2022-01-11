require('dotenv').config()
const affirm = require('./routes/routes.js');

const express = require('express');

const app = express();

app.use(express.json());
app.use(affirm);

port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`::::Server is running on port ${port}::::`);
});
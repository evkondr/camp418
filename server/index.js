/* eslint-disable indent */
const express = require('express');

const app = express();
const routes = require('./src/routes');

app.use(routes);

const port = 3000;
app.use(express.json());


app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

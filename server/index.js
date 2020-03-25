/* eslint-disable indent */
const express = require('express');

const app = express();
const port = 3000;
app.use(express.json());
app.get('/', (req, res) => res.send('Hello World!'));

app.get('/getfield', (req, res) => {
    res.send('ok');
});
app.post('/move', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

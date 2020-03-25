const router = require('express').Router();

router.get('/getfield', (req, res) => {
    res.send('ok');
});
router.post('/move', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

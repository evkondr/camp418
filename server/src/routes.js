const router = require('express').Router();
const logger = require('./lib/logger');

let arr = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
router.get('/getfield', (req, res) => {
    res.send('ok');
});
router.post('/move', (req, res) => {
    logger.log(req.body);
    res.send(req.body);
});
module.exports = router;

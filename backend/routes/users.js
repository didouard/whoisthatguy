var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send({ users: [
        {id: 1, name: 'Edouard'},
        {id: 2, name: 'Alessandra'},
        {id: 3, name: 'Charles'},
        {id: 4, name: 'Herbie'}
    ]});
});

module.exports = router;

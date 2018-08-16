var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send({ users: [
        {id: 1, firstname: 'Edouard', lastname: 'Ferrari'},
        {id: 2, firstname: 'Alessandra', lastname: 'Ferrari'},
        {id: 3, firstname: 'Charles', lastname: 'Ferrari'},
        {id: 4, firstname: 'Herbie', lastname: 'Fidgi'}
    ]});
});

router.post('/', function (req, res, next) {
    console.log("Receive: ", req.body);
});

module.exports = router;

var express = require('express');
var router = express.Router();

var db = require('../queries');


router.get('/api/Users', db.getAllUsers);
router.get('/api/Users/:id', db.getSingleUser);
router.post('/api/Users', db.createUser);
router.put('/api/Users/:id', db.updateUser);
router.delete('/api/Users/:id', db.removeUser);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

var express = require('express');
var controller = require('../controllers/user.controller');

var router = express.Router();

// https://expressjs.com/en/starter/basic-routing.html
router.get("/", controller.get);

router.get('/search', controller.search);

router.get('/create', controller.create);

router.post('/create', controller.postCreate);

router.get("/:userId/delete", controller.delete);

router.get('/:userId/update', controller.update);

router.post('/:userId/update', controller.postUpdate);


module.exports = router;

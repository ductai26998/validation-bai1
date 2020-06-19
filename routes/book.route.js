var express = require('express');
var controller = require('../controllers/book.controller');

var router = express.Router();


// https://expressjs.com/en/starter/basic-routing.html
router.get("/", controller.get);

router.get('/search', controller.search);

router.get('/create', controller.create);

router.post('/create', controller.postCreate);

router.get("/:bookId/delete", controller.delete);

router.get('/:bookId/update', controller.update);

router.post('/:bookId/update', controller.postUpdate);


module.exports = router;

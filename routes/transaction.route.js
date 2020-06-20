var express = require('express');
var controller = require('../controllers/transaction.controller');

var router = express.Router();

router.get("/", controller.get);

router.get("/create", controller.create);

router.post("/create", controller.postCreate);

router.get("/:id/complete", controller.complete);

router.post("/:id/complete", controller.postComplete);

module.exports = router;
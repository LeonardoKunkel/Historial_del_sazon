const router = require('express').Router()

const indexCtrl = require('./../controllers/index.controller');

router.get('/', indexCtrl.getHome);

module.exports = router;


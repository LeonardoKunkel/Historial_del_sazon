const router = require('express').Router()

const indexCtrl = require('./../controllers/index.controller');

const routeGuard = require('../middlewares/guard');

router.get('/', indexCtrl.getHome);

router.get('/profile', routeGuard.privateAreas, indexCtrl.getProfile);

module.exports = router;


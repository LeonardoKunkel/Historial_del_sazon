const router = require('express').Router();

const dishCtrl = require('../controllers/dish.controller')

router.get('/', dishCtrl.getDishes);

module.exports = router;

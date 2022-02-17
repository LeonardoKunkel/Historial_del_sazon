const router = require('express').Router();

const dishCtrl = require('../controllers/dish.controller')

router.get('/create', dishCtrl.getDish);

router.post('/create', dishCtrl.createDishForm);

router.get('/edit/:id', dishCtrl.editDish);

module.exports = router;

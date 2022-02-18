const router = require('express').Router();

const dishCtrl = require('../controllers/dish.controller')

router.get('/create', dishCtrl.getDish);

router.post('/create', dishCtrl.createDishForm);

router.get('/edit/:id', dishCtrl.editDish);

router.post('/edit/:id', dishCtrl.editDishForm);

router.post('/:id/delete', dishCtrl.deleteDish);

module.exports = router;

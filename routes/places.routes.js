const router = require('express').Router();

const placeCtrl = require('../controllers/place.controller');
const dishCtrl = require('../controllers/dish.controller');

router.get('/', placeCtrl.getPlaces);

router.get('/create', placeCtrl.createPlace);

router.post('/create', placeCtrl.createPlaceForm);

router.get('/:id', placeCtrl.getPlace);

router.get('/edit/:id', placeCtrl.editPlace);

router.post('/edit/:id', placeCtrl.editPlaceForm);

router.post('/:id/delete', placeCtrl.deletePlace);




router.get('/dishes/:id', dishCtrl.getDish);

router.post('/dishes/:id', dishCtrl.createDishForm);

module.exports = router;

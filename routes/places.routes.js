const router = require('express').Router();

const placeCtrl = require('../controllers/place.controller');
const dishCtrl = require('../controllers/dish.controller');
const routeGuard = require('../middlewares/guard');

router.get('/', routeGuard.privateAreas, placeCtrl.getPlaces);

router.get('/create', routeGuard.privateAreas, placeCtrl.createPlace);

router.post('/create', routeGuard.privateAreas, placeCtrl.createPlaceForm);

router.get('/:id', routeGuard.privateAreas, placeCtrl.getPlace);

router.get('/edit/:id', routeGuard.privateAreas, placeCtrl.editPlace);

router.post('/edit/:id', routeGuard.privateAreas, placeCtrl.editPlaceForm);

router.post('/:id/delete', routeGuard.privateAreas, placeCtrl.deletePlace);




router.get('/dishes/:id', dishCtrl.getDish);

router.post('/dishes/:id', dishCtrl.createDishForm);

module.exports = router;

const router = require('express').Router();

const placeCtrl = require('../controllers/place.controller');

router.get('/', placeCtrl.getPlaces);

module.exports = router;

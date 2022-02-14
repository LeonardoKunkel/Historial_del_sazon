const Place = require('../models/Place');

exports.getPlaces = (req, res) => {
    res.render('places/list-places');
}
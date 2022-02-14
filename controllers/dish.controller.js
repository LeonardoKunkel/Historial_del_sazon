const Dish = require('../models/Dish');

exports.getDishes = (req, res) => {
    res.render('dishes/list-dishes')
}
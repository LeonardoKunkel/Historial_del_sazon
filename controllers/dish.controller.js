const Dish = require('../models/Dish');

const Place = require('../models/Place');

exports.getDish = (req, res) => {
    const { id } = req.params;
    // console.log(id);
    return res.render(`dishes/new-dish`, { id });
}

exports.createDishForm = async (req, res) => {

    const { name, description, price, img } = req.body;
    // console.log(req.body);
    const { id } = req.params;

    try {
        const newDish = await Dish.create({
            name,
            description,
            price,
            img
        })

        await Place.findByIdAndUpdate(id, {
            $push: { dish: newDish }
        });

        return res.redirect(`/places`)

    } catch (error) {
        console.log(error);
    }
}

exports.editDish = async (req, res) => {

    const { id } = req.params;

    const foundDish = await Dish.findById(id);

    return res.render('dishes/edit-dish', { dish: foundDish });
}

exports.editDishForm = async (req, res) => {

    const { id } = req.params;
    const { name, description, price, img } = req.body;

    await Dish.findByIdAndUpdate(id, {
        name,
        description,
        price,
        img
    });

    return res.redirect(`/places`);

}

exports.deleteDish = async (req, res) => {

    const { id } = req.params;

    await Dish.findByIdAndDelete(id)

    return res.redirect(`/places`);
}

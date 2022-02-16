const Dish = require('../models/Dish');

const Place = require('../models/Place');

exports.getDish = (req, res) => {
    const { id } = req.params;
    console.log(id);
    return res.render(`dishes/new-dish`, { id });
}

exports.createDishForm = async (req, res) => {

    const { name, description, img } = req.body;
    console.log(req.body);
    const { id } = req.params;

    try {
        const newDish = await Dish.create({
            name,
            description,
            img
        })

        await Place.findByIdAndUpdate(id, {
            $push: { dish: newDish }
        });

        return res.redirect(`places/${id}`);

    } catch (error) {
        console.log(error);
    }
}

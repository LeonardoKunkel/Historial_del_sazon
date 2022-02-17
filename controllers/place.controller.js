const Place = require('../models/Place');
const Dish = require('../models/Dish');

const fileUploader = require('../config/cloudinary');

exports.getPlaces = async (req, res) => {

    const allPlaces = await Place.find({})
    console.log(allPlaces);
    return res.render('places/list-places', { places: allPlaces });
}

exports.createPlace = (req, res) => {
    res.render('places/new-place');
}

exports.createPlaceForm = async (req, res) => {

    const { name, location, state, description, image } = req.body;
    console.log(req.body);

    try {
        const newPlace = await Place.create({
            name,
            location,
            state,
            description,
            image
        });
        console.log(newPlace);

        res.redirect('/places');

    } catch (error) {
        console.log(error);
    }
}

exports.getPlace = async (req, res) => {

    const { id } = req.params;

    const currentPlace = await Place.findById(id)
        .populate('dish')
        .populate({
            path: 'dish',
            populate: {
                path: 'user',
                model: 'User'
            }
        });
    console.log(currentPlace);

    res.render('places/place-detail', { place: currentPlace })
}

exports.editPlace = async (req, res) => {

    const { id } = req.params;

    const placeFound = await Place.findById(id);

    res.render('places/edit-place', { placeFound })
};

exports.editPlaceForm = async (req, res) => {

    const { id } = req.params;
    const { name, location, state, description, image } = req.body;

    await Place.findByIdAndUpdate(
        id,
        {
            name,
            location,
            state,
            description,
            image
        }
    )

    return res.redirect(`/places/${id}`);
}

exports.deletePlace = async (req, res) => {

    const { id } = req.params;

    await Place.findByIdAndDelete(id);
    return res.redirect('/places')
}

const { model, Schema } = require('mongoose');

const placeSchema = Schema({
    name: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        type: String
    },
    dish: [
        {
            type: Schema.Types.ObjectID,
            ref: 'Dish'
        }
    ]
}, {
    timestamps: true
})

module.exports = model('Place', placeSchema)

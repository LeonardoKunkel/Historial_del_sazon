const { model, Schema } = require('mongoose');

const dishSchema = Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    img: {
        type: String
    },
    // user: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'User'
    // }
}, {
    timestamps: true
});

module.exports = model('Dish', dishSchema);

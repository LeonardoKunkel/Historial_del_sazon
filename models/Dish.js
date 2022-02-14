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
    created: {}
}, {
    timestamps: true
});

module.exports = model('Dish', dishSchema);

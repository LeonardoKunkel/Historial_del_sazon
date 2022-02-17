const { model, Schema } = require('mongoose');

const userSchema = Schema({
    username: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        match: [/^\S+@\S+\.\S+$/, "Por favor utiliza un email válido."]
    },
    password: {
        type: String,
        required: true,
    },
    places: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Place'
        }
    ]
}, {
    timestamps: true
});

module.exports = model('User', userSchema);

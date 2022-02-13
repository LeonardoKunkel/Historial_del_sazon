const User = require('../models/User');
const mongoose = require('mongoose');

exports.register = (req, res) => {
    res.render('auth/register');
}

exports.postForm = async (req, res) => {

    const { email, username, password } = req.body;

    if( !email || !username || !password ) {
        return res.render('auth/register', {
            errorMessage: 'Todos los campos deben llenarse.'
        });
    }

    // Guardar en Base de Datos
    try {
        const newUser = await User.create({
            email,
            username,
            password
        });
        console.log(newUser);
        res.redirect('/index')
    } catch (error) {
        console.log(error);
        if (error instanceof mongoose.Error.ValidationError) {
            res.render('auth/register', {
                errorMessage: 'Por favor utiliza un correo electrónico real.'
            });
        }

        return
    }
}

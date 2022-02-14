const User = require('../models/User');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

exports.register = (req, res) => {
    res.render('auth/register');
}

exports.postRegister = async (req, res) => {

    const { email, username, password } = req.body;

    if( !email || !username || !password ) {
        return res.render('auth/register', {
            errorMessage: 'Todos los campos deben llenarse.'
        });
    }

    // Validar campos del formulario
    const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/

	if(!regex.test(password)){

		return res.render("auth/register", {
			errorMessage: "Tu contraseña debe incluir 6 caracteres, al menos un número, una minúscula y una mayúscula."
		})

	}

    // Encriptar contraseña
    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);

    // Guardar en Base de Datos
    try {

        const newUser = await User.create({
            email,
            username,
            password: hashedPassword
        });
        console.log(newUser);
        res.redirect('/');

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

exports.login = (req, res) => {
    res.render('auth/login');
}

exports.postLogin = async (req, res) => {

    const { email, password } = req.body;

    const foundUser = await User.findOne({ email });
    if(!foundUser) {
        res.render('auth/login', {
            errorMessage: 'Email o contraseña sin coincidencia'
        });
    }

    const verifiedPass = await bcrypt.compareSync(password, foundUser.password);
    if(!verifiedPass) {
        res.render('auth/login', {
            errorMessage: 'Email o contraseña incorrecta'
        })
        return
    }

    //Gestión de session

    return res.redirect('/');
}

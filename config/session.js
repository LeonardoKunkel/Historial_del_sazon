const session = require('express-session');
const MongoStore = require('connect-mongo');

const sessionManager = (app) => {

    app.set('trust proxy', 1);

    app.use(session({
        secret: process.env.SECRET,
        resave: true,
        cookie: {
            maxAge: 864000,
            httpOnly: true
        },
        saveUninitialized: false,
        store: MongoStore.create({
            mongoUrl: process.env.MONGODB_URI
        })
    }))
}

module.exports = sessionManager;

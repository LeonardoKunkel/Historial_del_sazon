const router = require('express').Router();

const authCtrl = require('../controllers/auth.controller');

router.get('/register', authCtrl.register);

router.post('/register', authCtrl.postRegister);

router.get('/login', authCtrl.login);

router.post('/login', authCtrl.postLogin);

module.exports = router;

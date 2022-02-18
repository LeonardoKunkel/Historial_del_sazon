const router = require('express').Router();

const authCtrl = require('../controllers/auth.controller');
const routeGuard = require('../middlewares/guard');

router.get('/register', routeGuard.authAreas, authCtrl.register);

router.post('/register', routeGuard.authAreas, authCtrl.postRegister);

router.get('/login', routeGuard.authAreas, authCtrl.login);

router.post('/login', routeGuard.authAreas, authCtrl.postLogin);

router.get('/logout', authCtrl.logout);

module.exports = router;

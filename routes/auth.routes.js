const router = require('express').Router();

const authCtrl = require('../controllers/auth.controller');

router.get('/register', authCtrl.register);

router.post('/register', authCtrl.postForm);

module.exports = router;

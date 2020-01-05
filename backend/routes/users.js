const { Router } = require('express');
const cookieParser = require('cookie-parser');

const { users } = require('../controllers');
const { check, schemas } = require('../middlewares/validation');

const router = Router();

router.post('/register', check(schemas.register, 'body'), users.register);
router.post('/login', check(schemas.login, 'body'), users.login);
router.get('/logout', users.logout);
router.post('/refresh_token', cookieParser(), users.refreshToken);

module.exports = router;

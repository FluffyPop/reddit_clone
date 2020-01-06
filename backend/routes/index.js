const { Router } = require('express');

const users = require('./users');
const subreddits = require('./subreddits');

const router = Router();

router.use('/users', users);
router.use('/subreddits', subreddits);

module.exports = router;

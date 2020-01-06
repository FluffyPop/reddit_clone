const { Router } = require('express');

const { subreddits } = require('../controllers');

const router = Router();

router.get('/', subreddits.getAll);

module.exports = router;

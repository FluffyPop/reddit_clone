const { Router } = require('express');

const { posts } = require('../controllers');

const router = Router();

router
  .route('/')
  .get(posts.getAll)
  .post(posts.create);

module.exports = router;

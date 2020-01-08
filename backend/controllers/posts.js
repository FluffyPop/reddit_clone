const database = require('../database');

const getAll = async (req, res, next) => {
  try {
    const postList = await database('posts').select();
    res.json({
      status: 'success',
      data: {
        posts: postList
      }
    });
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  const { subreddit_id, title, text } = req.body;
  try {
    const newPost = await database('posts').insert(
      { subreddit_id, title, text },
      '*'
    );
    res.status(201).json({
      status: 'success',
      data: {
        post: newPost
      }
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
  create
};

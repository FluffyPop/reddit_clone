const database = require('../database');

const getAll = async (req, res, next) => {
  try {
    const subredditList = await database('subreddits').select();
    res.status(200).json({
      status: 'success',
      data: {
        subreddits: subredditList
      }
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll
};

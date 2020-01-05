const jwt = require('jsonwebtoken');

const AppError = require('../utilities/appError');
const database = require('../database');

const protect = async (req, res, next) => {
  // Extract 'authorization' header from request
  const { authorization } = req.headers;
  // No 'authorization' header found
  if (!authorization) {
    // Send error message
    return next(new AppError('Token required', 401));
  }
  // Extract token from 'authorization' header
  const token = authorization.split(' ')[1];
  try {
    // Verify token with secret
    const decoded = await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    // Verification failed
    if (!decoded) {
      // Send error message
      return next(new AppError('Invalid token', 401));
    }
    // Find user with id
    const userList = await database('users')
      .select()
      .where({ id: decoded.id });
    // User with id not found
    if (userList.length === 0) {
      // Send error
      return next(new AppError('Invalid token', 401));
    }
    // Assign user as property
    req.user = userList[0];
    next();
  } catch (e) {
    next(e);
  }
};

module.exports = {
  protect
};

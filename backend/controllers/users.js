const bcrypt = require('bcrypt');

const database = require('../database');
const AppError = require('../utilities/appError');
const createToken = require('../utilities/createToken');

const register = async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    // Check if user exists
    const errors = {};
    // Find user with name
    const userNameList = await database('users')
      .select()
      .where({ name });
    // Find user with email
    const userEmailList = await database('users')
      .select()
      .where({ email });
    // Found user with name
    if (userNameList.length > 0) {
      errors.name = 'Name is already taken';
    }
    // Found user with email
    if (userEmailList.length > 0) {
      errors.email = 'E-mail address is already registered';
    }
    // Found user/s with name or/and email
    if (Object.keys(errors).length > 0) {
      // Send error messages
      return res.status(409).json({
        status: 'error',
        messages: errors
      });
    }
    // Encrypt password
    const hashedPassword = await bcrypt.hash(password, 12);
    // Create new user
    const newUser = await database('users').insert(
      {
        name,
        email,
        password: hashedPassword
      },
      '*'
    );
    // Create access token
    const accessToken = await createToken(
      { id: newUser.id },
      process.env.ACCESS_TOKEN_SECRET,
      process.env.ACCESS_TOKEN_DURATION
    );
    // Create refresh token
    const refreshToken = await createToken(
      { id: newUser.id },
      process.env.REFRESH_TOKEN_SECRET,
      process.env.REFRESH_TOKEN_DURATION
    );
    // Put refresh token in cookie
    res.cookie('rft', refreshToken, {
      httpOnly: true,
      path: '/refresh_token',
      expires: new Date(
        Date.now() + parseInt(process.env.REFRESH_TOKEN_DURATION)
      )
    });
    // Remove password from user
    const { password: omit, ...rest } = newUser;
    // Send tokens and user
    res.status(201).json({
      status: 'success',
      token: accessToken,
      data: {
        user: rest
      }
    });
  } catch (e) {
    next(e);
  }
};

const login = async (req, res, next) => {
  const { name, password } = req.body;
  try {
    // Find user in database
    const userList = await database('users')
      .select()
      .where({ name });
    // No user was found
    if (userList.length === 0) {
      // Send error message
      return next(new AppError('Invalid credentials', 401));
    }
    const user = userList[0];
    // Compare passwords
    const match = await bcrypt.compare(password, user.password);
    // No match
    if (!match) {
      return next(new AppError('Invalid credentials', 401));
    }
    // Create access token
    const accessToken = await createToken(
      { id: user.id },
      process.env.ACCESS_TOKEN_SECRET,
      process.env.ACCESS_TOKEN_DURATION
    );
    // Create refresh token
    const refreshToken = await createToken(
      { id: user.id },
      process.env.REFRESH_TOKEN_SECRET,
      process.env.REFRESH_TOKEN_DURATION
    );
    // Put refresh token in cookie
    res.cookie('rft', refreshToken, {
      httpOnly: true,
      path: '/refresh_token',
      expires: new Date(
        Date.now() + parseInt(process.env.REFRESH_TOKEN_DURATION)
      )
    });
    // Remove password from user
    const { password: omit, ...rest } = user;
    res.status(200).json({
      status: 'success',
      token: accessToken,
      data: {
        user: rest
      }
    });
  } catch (e) {
    next(e);
  }
};

const logout = async (req, res) => {
  res.clearCookie('rft');
  res.json({
    status: 'success'
  });
};

const refreshToken = async (req, res, next) => {
  const token = req.cookies.rft;
  // Token not found
  if (!token) {
    return next(new AppError('Refresh token required', 401));
  }
  try {
    const payload = await jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);
    // Find user with id
    const userList = await database('users')
      .select()
      .where({ id: payload.id });
    if (userList.length === 0) {
      return next(new AppError('Invalid refresh token', 401));
    }
    // Create access token
    const accessToken = await createToken(
      payload,
      process.env.ACCESS_TOKEN_SECRET,
      process.env.ACCESS_TOKEN_DURATION
    );
    // Send access token
    res.status(200).json({
      status: 'success',
      token: accessToken
    });
  } catch (e) {
    next(e);
  }
};

module.exports = {
  register,
  login,
  logout,
  refreshToken
};

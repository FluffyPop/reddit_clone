const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const compression = require('compression');
const rateLimit = require('express-rate-limit');

const AppError = require('./utilities/appError');
const errorMiddleware = require('./middlewares/error');

const routes = require('./routes');

const app = express();

// Middlewares
// Set security HTTP headers
app.use(helmet());
// Implement CORS
app.use(cors());
// Parse data from body into req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Compress response bodies
app.use(compression());
// Limit each IP to 100 requests per windowMs
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100
});
//  apply to all requests
app.use(limiter);
// Development logging HTTP request
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.options('*', cors());

// REST API
app.use('/api', routes);
// Catch all not defined routes
app.use('*', (req, res, next) => {
  next(new AppError(`Can't find '${req.originalUrl}' on this server`, 404));
});
// Error middleware
app.use(errorMiddleware);

module.exports = app;

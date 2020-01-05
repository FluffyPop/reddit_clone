class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${this.statusCode}`.startsWith(4) ? 'fail' : 'error';
    this.isOperational = true;
    // Keep the original stack trace of the line of code, the error happened on
    Error.captureStackTrace(this, this.construcctor);
  }
}

module.exports = AppError;

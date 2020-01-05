const dotenv = require('dotenv');

const app = require('./app');

process.on('uncaughtException', err => {
  console.log('UNCAUGHT EXCEPTION. SHUTTING DOWN.');
  console.log(err.name, err.message);
  process.exit(1);
});

dotenv.config();

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server listening on port ${port}.`));

process.on('unhandledRejection', err => {
  console.log('UNHANDLED REJECTION. SHUTTING DOWN.');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
